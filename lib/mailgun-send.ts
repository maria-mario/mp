// Sends a newsletter to every `Subscribed` row in Directus's newsletter_subscribers
// via Mailgun's batch-send API (recipient-variables), rather than a Mailgun mailing
// list — mailing lists on this account are capped at a small member count.
// Mailgun's per-domain suppression (bounces, complaints, unsubscribes) still applies
// automatically to plain batch sends, so %unsubscribe_url% keeps working without Lists.

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_FROM = process.env.MAILGUN_FROM || 'Dr. Mark Pirtle <newsletter@mg.drmarkpirtle.com>';

// Mailgun's per-call recipient cap for a single batch send.
const BATCH_SIZE = 1000;

interface Subscriber {
  email: string;
  name: string | null;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function getSubscribedRecipients(): Promise<Subscriber[]> {
  const res = await fetch(
    `${DIRECTUS_URL}/items/newsletter_subscribers?filter[status][_eq]=Subscribed&fields=email,name&limit=-1`,
    { headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {}, cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch subscribers (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return json.data;
}

export interface SendResult {
  recipientCount: number;
  messageIds: string[];
}

/** Sends `html` to every subscribed recipient in Directus via Mailgun batch sending. */
export async function sendNewsletterToSubscribers(subject: string, html: string): Promise<SendResult> {
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    throw new Error('Mailgun not configured — set MAILGUN_API_KEY and MAILGUN_DOMAIN');
  }

  const recipients = await getSubscribedRecipients();
  if (recipients.length === 0) {
    return { recipientCount: 0, messageIds: [] };
  }

  const messageIds: string[] = [];

  for (const batch of chunk(recipients, BATCH_SIZE)) {
    const to = batch.map((r) => (r.name ? `${r.name} <${r.email}>` : r.email)).join(',');
    const recipientVariables: Record<string, { name: string }> = {};
    for (const r of batch) {
      recipientVariables[r.email] = { name: r.name || 'there' };
    }

    const form = new FormData();
    form.append('from', MAILGUN_FROM);
    form.append('to', to);
    form.append('subject', subject);
    form.append('html', html);
    form.append('recipient-variables', JSON.stringify(recipientVariables));

    const res = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: { Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}` },
      body: form,
    });

    if (!res.ok) {
      throw new Error(`Mailgun send failed (${res.status}): ${await res.text()}`);
    }
    const json = await res.json();
    messageIds.push(json.id);
  }

  return { recipientCount: recipients.length, messageIds };
}

/** Sends `html` to a single address only — for previewing/testing before a real send. */
export async function sendTestEmail(to: string, subject: string, html: string): Promise<{ messageId: string }> {
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    throw new Error('Mailgun not configured — set MAILGUN_API_KEY and MAILGUN_DOMAIN');
  }

  const form = new FormData();
  form.append('from', MAILGUN_FROM);
  form.append('to', to);
  form.append('subject', `[TEST] ${subject}`);
  form.append('html', html);
  form.append('recipient-variables', JSON.stringify({ [to]: { name: 'there' } }));

  const res = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: { Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}` },
    body: form,
  });

  if (!res.ok) {
    throw new Error(`Mailgun test send failed (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return { messageId: json.id };
}
