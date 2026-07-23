import { NextRequest, NextResponse } from 'next/server';
import { renderNewsletterById } from '@/lib/newsletter-render';
import { sendNewsletterToSubscribers, sendTestEmail } from '@/lib/mailgun-send';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;
const API_SECRET = process.env.NEWSLETTER_API_SECRET;

export async function POST(request: NextRequest) {
  // Simple secret check so random requests can't trigger sends
  const auth = request.headers.get('x-api-secret');
  if (API_SECRET && auth !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let newsletterId: number;
  let testEmail: string | null = null;
  try {
    const body = await request.json();
    newsletterId = Number(body.newsletter_id);
    if (!newsletterId || isNaN(newsletterId)) throw new Error('invalid id');
    if (body.test_email) testEmail = String(body.test_email);
  } catch {
    return NextResponse.json({ error: 'newsletter_id required' }, { status: 400 });
  }

  // Compose the final send-ready HTML from the structured template fields
  // (intro/main image/body/promo banner/latest posts/final banner/contact banner)
  // and the 2 latest published blog posts.
  let html: string;
  try {
    html = await renderNewsletterById(newsletterId);
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to render newsletter template: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    );
  }

  const authHeaders = {
    'Content-Type': 'application/json',
    ...(DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}),
  };

  const itemRes = await fetch(`${DIRECTUS_URL}/items/newsletters/${newsletterId}?fields=subject`, {
    headers: authHeaders,
  });
  if (!itemRes.ok) {
    return NextResponse.json({ error: `Failed to load newsletter: ${await itemRes.text()}` }, { status: 500 });
  }
  const { data: newsletterItem } = await itemRes.json();

  // Test mode: sends only to test_email, touches nothing in Directus (no content
  // save, no status/sent tracking) — safe to run against a real newsletter item
  // without affecting real subscribers or marking it as sent.
  if (testEmail) {
    try {
      const testResult = await sendTestEmail(testEmail, newsletterItem.subject, html);
      return NextResponse.json({ ok: true, test: true, sentTo: testEmail, ...testResult });
    } catch (err) {
      return NextResponse.json(
        { error: `Mailgun test send failed: ${err instanceof Error ? err.message : String(err)}` },
        { status: 500 }
      );
    }
  }

  // Real send from here on — stash the rendered HTML on `content` for a
  // permanent record of exactly what was sent.
  const patchContentRes = await fetch(`${DIRECTUS_URL}/items/newsletters/${newsletterId}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ content: html }),
  });
  if (!patchContentRes.ok) {
    return NextResponse.json({ error: `Failed to save rendered newsletter content: ${await patchContentRes.text()}` }, { status: 500 });
  }

  // Batch-sends directly to every Subscribed row in newsletter_subscribers via
  // Mailgun (no mailing list — this account's list feature caps member count).
  let sendResult;
  try {
    sendResult = await sendNewsletterToSubscribers(newsletterItem.subject, html);
  } catch (err) {
    return NextResponse.json(
      { error: `Mailgun send failed: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    );
  }

  const patchStatusRes = await fetch(`${DIRECTUS_URL}/items/newsletters/${newsletterId}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({
      status: 'sent',
      send_date: new Date().toISOString(),
      recipient_count: sendResult.recipientCount,
      mailgun_message_id: sendResult.messageIds.join(', '),
    }),
  });
  if (!patchStatusRes.ok) {
    return NextResponse.json(
      { error: `Sent successfully but failed to update newsletter status: ${await patchStatusRes.text()}`, sendResult },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, ...sendResult });
}
