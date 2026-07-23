import { NextRequest, NextResponse } from 'next/server';
import { sendConfirmationEmail } from '@/lib/mailgun-send';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const authHeaders = {
  'Content-Type': 'application/json',
  ...(DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}),
};

interface ExistingSubscriber {
  id: number;
  status: 'Subscribed' | 'Unsubscribed';
}

/** Creates or re-activates a subscriber. Returns false if they were already Subscribed. */
async function upsertSubscriber(email: string, name: string | null, source: string): Promise<boolean> {
  const findRes = await fetch(
    `${DIRECTUS_URL}/items/newsletter_subscribers?filter[email][_eq]=${encodeURIComponent(email)}&limit=1&fields=id,status`,
    { headers: authHeaders, cache: 'no-store' }
  );
  if (!findRes.ok) throw new Error(`Directus lookup failed (${findRes.status}): ${await findRes.text()}`);
  const { data } = (await findRes.json()) as { data: ExistingSubscriber[] };
  const existing = data[0];

  if (existing) {
    if (existing.status === 'Subscribed') return false;
    const patchRes = await fetch(`${DIRECTUS_URL}/items/newsletter_subscribers/${existing.id}`, {
      method: 'PATCH',
      headers: authHeaders,
      body: JSON.stringify({ status: 'Subscribed', subscribed_at: new Date().toISOString(), unsubscribed_at: null }),
    });
    if (!patchRes.ok) throw new Error(`Directus re-subscribe failed (${patchRes.status}): ${await patchRes.text()}`);
    return true;
  }

  const createRes = await fetch(`${DIRECTUS_URL}/items/newsletter_subscribers`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ email, name, status: 'Subscribed', subscribed_at: new Date().toISOString(), source }),
  });
  if (!createRes.ok) throw new Error(`Directus create failed (${createRes.status}): ${await createRes.text()}`);
  return true;
}

/** Only relative, same-site paths are allowed — never redirect off-site. */
function safeRedirectPath(path: string | null): string | null {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return null;
  return path;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  let email = '';
  let name: string | null = null;
  let redirectTo: string | null = null;

  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));
    email = String(body.email || '').trim();
    name = body.name ? String(body.name).trim() : null;
  } else {
    const form = await request.formData();
    email = String(form.get('email') || '').trim();
    name = form.get('name') ? String(form.get('name')).trim() : null;
    redirectTo = safeRedirectPath(form.get('redirect_to') ? String(form.get('redirect_to')) : null);
  }

  if (!EMAIL_RE.test(email)) {
    if (redirectTo) return NextResponse.redirect(new URL(`${redirectTo}?subscribed=error`, request.url));
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  try {
    const isNewlySubscribed = await upsertSubscriber(email, name, 'Website form');
    if (isNewlySubscribed) {
      await sendConfirmationEmail(email, name);
    }
  } catch (err) {
    if (redirectTo) return NextResponse.redirect(new URL(`${redirectTo}?subscribed=error`, request.url));
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }

  if (redirectTo) return NextResponse.redirect(new URL(`${redirectTo}?subscribed=success`, request.url));
  return NextResponse.json({ ok: true });
}
