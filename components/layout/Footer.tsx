'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, PlayCircle, Camera, Mail } from 'lucide-react';

const services = [
  { name: 'Forum Retreats', href: '/forum-retreats' },
  { name: 'SAAQ Coaching',  href: '/consultation' },
  { name: 'Power Tools',    href: '/members' },
  { name: 'Start Here',     href: '/start' },
];

const resources = [
  { name: 'Blog',           href: '/blog' },
  { name: 'About Mark',     href: '/about' },
  { name: 'Contact',        href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com',             icon: ExternalLink },
  { label: 'YouTube',   href: 'https://youtube.com',              icon: PlayCircle },
  { label: 'Instagram', href: 'https://instagram.com',            icon: Camera },
  { label: 'Email',     href: 'mailto:mark@drmarkpirtle.com',     icon: Mail },
];

/* ── Newsletter form isolated to avoid hydration mismatch ── */
function NewsletterForm() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => { setMounted(true); }, []);

  async function handleSignup() {
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (!mounted) {
    // Server + first paint: static placeholder, no interactive elements
    return (
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
        <div style={{
          flex: 1, minWidth: '0', height: '3.25rem',
          backgroundColor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '9999px',
        }} />
        <div style={{
          width: '8rem', height: '3.25rem',
          backgroundColor: 'var(--color-brand-sienna)',
          borderRadius: '9999px',
          opacity: 0.8,
        }} />
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div style={{
        backgroundColor: 'rgba(34,197,94,0.1)',
        border: '1px solid rgba(34,197,94,0.3)',
        color: '#4ade80', padding: '1rem 1.5rem',
        borderRadius: '0.75rem', fontSize: 'var(--text-small)',
      }}>
        ✓ Thank you! Check your email for confirmation.
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          onKeyDown={e => e.key === 'Enter' && handleSignup()}
          style={{
            flex: 1, minWidth: '0',
            padding: '0.875rem 1.25rem',
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '9999px',
            color: '#ffffff', fontSize: 'var(--text-small)',
            fontFamily: 'var(--font-sans)', outline: 'none',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(192,82,42,0.6)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
        <button
          onClick={handleSignup}
          style={{
            padding: '0.875rem 2rem',
            backgroundColor: 'var(--color-brand-sienna)',
            color: '#ffffff', border: 'none', borderRadius: '9999px',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-small)',
            fontWeight: 700, letterSpacing: '0.04em',
            textTransform: 'uppercase' as const,
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap' as const,
            opacity: status === 'loading' ? 0.7 : 1,
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna-dark)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna)')}
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#f87171', fontSize: 'var(--text-xs)', marginTop: '0.5rem' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-navy)', color: '#ffffff' }}>

      {/* Newsletter */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-title)',
              fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em',
            }}>
              Stay{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-sienna-light)' }}>
                SkillfullyAware®
              </em>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-lead)', marginBottom: '2rem', maxWidth: 'none' }}>
              Get the latest insights, practices, and transformative wisdom delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Dr. Mark Pirtle
            </div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-brand-sienna-light)', marginBottom: '1rem' }}>
              SkillfullyAware®
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'var(--text-small)', lineHeight: 1.75, maxWidth: '32ch', marginBottom: '1.5rem' }}>
              Transforming leaders through the SkillfullyAware® methodology.
              Custom retreats, executive coaching, and experiences for conscious leadership.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '9999px',
                    backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)', transition: 'background-color 0.2s, color 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-brand-sienna)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 'var(--text-small)', color: '#ffffff', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map(l => (
                <li key={l.name}>
                  <Link href={l.href}
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'var(--text-small)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 'var(--text-small)', color: '#ffffff', marginBottom: '1.25rem' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resources.map(l => (
                <li key={l.name}>
                  <Link href={l.href}
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'var(--text-small)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{
          maxWidth: '96rem', margin: '0 auto', padding: '1.5rem 2rem',
          display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-xs)' }}>
            © {new Date().getFullYear()} Dr. Mark Pirtle. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-xs)' }}>
            SkillfullyAware® is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  );
}