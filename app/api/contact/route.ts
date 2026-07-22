import { NextRequest, NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Phase 1: contact submissions are a one-off notification email to Mark.
// No Directus storage, no nurture sequence, no newsletter subscription.
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN  = process.env.MAILGUN_DOMAIN;
const NOTIFY_TO       = process.env.CONTACT_NOTIFICATION_EMAIL;

const REASON_LABELS: Record<string, string> = {
  general:  'General enquiry',
  book:     'Built This Way — book / launch team',
  saaq:     'SAAQ / consultation',
  retreat:  'Forum Retreats',
  call:     'Book a call',
  speaking: 'Speaking / media',
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name    = String(body.name    ?? '').trim();
  const email   = String(body.email   ?? '').trim();
  const message = String(body.message ?? '').trim();
  const reason  = String(body.reason  ?? 'general').trim();
  const company = String(body.company ?? '').trim(); // honeypot

  // Bot filled the hidden field — accept silently so it doesn't retry.
  if (company) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !NOTIFY_TO) {
    // Don't pretend it sent — a silently dropped enquiry is worse than an error.
    console.error(
      '[contact] Missing mail config:',
      { hasKey: !!MAILGUN_API_KEY, hasDomain: !!MAILGUN_DOMAIN, hasRecipient: !!NOTIFY_TO }
    );
    return NextResponse.json(
      { error: 'Contact form is not configured yet. Please email us directly.' },
      { status: 500 }
    );
  }

  const reasonLabel = REASON_LABELS[reason] ?? reason;

  try {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY });

    await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Website Contact Form <noreply@${MAILGUN_DOMAIN}>`,
      to: [NOTIFY_TO],
      'h:Reply-To': email,
      subject: `[${reasonLabel}] New message from ${name}`,
      text:
        `New contact form submission\n\n` +
        `Name:   ${name}\n` +
        `Email:  ${email}\n` +
        `About:  ${reasonLabel}\n\n` +
        `Message:\n${message}\n`,
      html:
        `<h2 style="font-family:Georgia,serif">New contact form submission</h2>` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}<br/>` +
        `<strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br/>` +
        `<strong>About:</strong> ${escapeHtml(reasonLabel)}</p>` +
        `<p><strong>Message:</strong></p>` +
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Mailgun send failed:', err);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again shortly.' },
      { status: 502 }
    );
  }
}
