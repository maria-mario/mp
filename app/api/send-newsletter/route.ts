import { NextRequest, NextResponse } from 'next/server';
import { renderNewsletterById } from '@/lib/newsletter-render';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;
const DIRECTUS_FLOW = 'e5ebd553-2c83-4681-b11f-2deebf4d9c61';
const API_SECRET = process.env.NEWSLETTER_API_SECRET;

export async function POST(request: NextRequest) {
  // Simple secret check so random requests can't trigger sends
  const auth = request.headers.get('x-api-secret');
  if (API_SECRET && auth !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let newsletterId: number;
  try {
    const body = await request.json();
    newsletterId = Number(body.newsletter_id);
    if (!newsletterId || isNaN(newsletterId)) throw new Error('invalid id');
  } catch {
    return NextResponse.json({ error: 'newsletter_id required' }, { status: 400 });
  }

  // Compose the final send-ready HTML from the structured template fields
  // (intro/main image/body/promo banner/latest posts/final banner/contact banner)
  // and the 2 latest published blog posts, then stash it on `content` — the field
  // the Mailgun send Flow reads as the literal email body.
  let html: string;
  try {
    html = await renderNewsletterById(newsletterId);
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to render newsletter template: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    );
  }

  const patchRes = await fetch(`${DIRECTUS_URL}/items/newsletters/${newsletterId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}),
    },
    body: JSON.stringify({ content: html }),
  });
  if (!patchRes.ok) {
    return NextResponse.json({ error: `Failed to save rendered newsletter content: ${await patchRes.text()}` }, { status: 500 });
  }

  const flowRes = await fetch(`${DIRECTUS_URL}/flows/trigger/${DIRECTUS_FLOW}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsletter_id: newsletterId }),
  });

  const result = await flowRes.text();
  return NextResponse.json({ ok: flowRes.ok, result });
}
