'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, PlayCircle, Camera, Mail } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

// ── Compute all blog categories at module level (no render cost) ─────────────
function getAllBlogCategories(): string[] {
  const seen = new Set<string>();
  blogPosts.forEach((p) => p.categories.forEach((c) => seen.add(c)));
  return Array.from(seen).sort();
}
const blogCategories = getAllBlogCategories();

// ── Link data ────────────────────────────────────────────────────────────────
const columns = [
  {
    heading: 'Forum Retreats',
    links: [
      { name: 'Mind Your Business',  href: '/forum-retreats/founders'       },
      { name: 'Unfinished Business', href: '/forum-retreats/senior-leaders' },
      { name: 'All Experiences',     href: '/experiences'                   },
      { name: 'Tubac Ranch',         href: '/experiences#location'          },
    ],
  },
  {
    heading: 'SAAQ Coaching',
    links: [
      { name: 'For Founders & CEOs', href: '/consultation/founders' },
      { name: 'For Senior Leaders',  href: '/consultation/leaders'  },
      { name: 'Book a Consultation', href: '/contact'               },
      { name: 'SAAQ Assessment',      href: '/contact'               },
    ],
  },
  {
    heading: 'Power Tools',
    links: [
      { name: 'Project SkillfullyAware',        href: '/power-tools/project-sa'   },
      { name: 'Overcoming Addictive Behaviors', href: '/power-tools/addictive'    },
      { name: 'Workbooks',                      href: '/power-tools/workbook-sa'  },
      { name: 'Meditation Programs',            href: '/power-tools/feel-better'  },
      { name: 'The Book',                       href: '/power-tools/book'},
      { name: 'Documentary Film',               href: 'https://tubitv.com/movies/701292/is-your-story-making-you-sick', external: true },
    ],
  },
  {
    heading: 'About',
    links: [
      { name: "Mark's Story",    href: '/about#story'   },
      { name: 'The System',      href: '/about#system'  },
      { name: 'The Science',     href: '/about#science' },
      { name: 'Testimonials',    href: '/about#results' },
      { name: 'PBS Documentary', href: 'https://www.wholehearted.org/', external: true },
    ],
  },
  {
    heading: 'Membership',
    links: [
      { name: 'Explore Membership', href: '/members'       },
      { name: 'Member Login',       href: '/members/login' },
      { name: 'Start Here',         href: '/start'         },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Privacy Policy',   href: '/privacy'    },
      { name: 'Terms of Service', href: '/terms'      },
      { name: 'Disclaimer',       href: '/disclaimer' },
      { name: 'Contact',          href: '/contact'    },
    ],
  },
];

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com',          icon: ExternalLink },
  { label: 'YouTube',   href: 'https://youtube.com',           icon: PlayCircle   },
  { label: 'Instagram', href: 'https://instagram.com',         icon: Camera       },
  { label: 'Email',     href: 'mailto:mark@drmarkpirtle.com',  icon: Mail         },
];

// ── Newsletter form (unchanged from original) ────────────────────────────────
function NewsletterForm() {
  const [mounted, setMounted] = useState(false);
  const [email,   setEmail]   = useState('');
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
      if (res.ok) { setStatus('success'); setEmail(''); setTimeout(() => setStatus('idle'), 5000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  if (!mounted) {
    return (
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
        <div style={{ flex: 1, minWidth: 0, height: '3.25rem', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px' }} />
        <div style={{ width: '8rem', height: '3.25rem', backgroundColor: 'var(--color-brand-sienna)', borderRadius: '9999px', opacity: 0.8 }} />
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80', padding: '1rem 1.5rem', borderRadius: '0.75rem', fontSize: 'var(--text-small)' }}>
        ✓ Thank you! Check your email for confirmation.
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          onKeyDown={e => e.key === 'Enter' && handleSignup()}
          style={{ flex: 1, minWidth: 0, padding: '0.875rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px', color: '#ffffff', fontSize: 'var(--text-small)', fontFamily: 'var(--font-sans)', outline: 'none' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(192,82,42,0.6)')}
          onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
        <button
          onClick={handleSignup}
          style={{ padding: '0.875rem 2rem', backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff', border: 'none', borderRadius: '9999px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-small)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const, cursor: status === 'loading' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' as const, opacity: status === 'loading' ? 0.7 : 1, transition: 'background-color 0.2s' }}
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

// ── Shared link style helper ─────────────────────────────────────────────────
const mutedLink: React.CSSProperties = {
  color: 'rgba(255,255,255,0.45)',
  fontSize: 'var(--text-small)',
  textDecoration: 'none',
  transition: 'color 0.15s',
};

// ── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-navy)', color: '#ffffff' }}>

      {/* ── Newsletter band (unchanged) ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-title)', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Stay{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-sienna-light)' }}>SkillfullyAware®</em>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-lead)', marginBottom: '2rem' }}>
              Get the latest insights, practices, and transformative wisdom delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── Main grid — brand + 6 link columns ── */}
      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '4rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 11rem), 1fr))', gap: '2.5rem' }}>

          {/* Brand — spans 2 cols on wide screens */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.375rem' }}>
              Dr. Mark Pirtle
            </div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-sienna-light)', marginBottom: '1rem' }}>
              SkillfullyAware®
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'var(--text-small)', lineHeight: 1.75, maxWidth: '26ch', marginBottom: '1.5rem' }}>
              SkillfullyAware® helps people understand their patterns, work through them, and continue evolving in life, relationships, and leadership.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: '2.1rem', height: '2.1rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'background-color 0.2s, color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-brand-sienna)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* 6 link columns */}
          {columns.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontWeight: 700, fontSize: 'var(--text-small)', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.01em' }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.links.map(l => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      target={'external' in l && l.external ? '_blank' : undefined}
                      rel={'external' in l && l.external ? 'noopener noreferrer' : undefined}
                      style={mutedLink}
                      onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Blog categories band (CNN-style) ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '1.75rem 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.25rem 0' }}>
            {/* Section label */}
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', marginRight: '1.25rem', whiteSpace: 'nowrap' }}>
              Blog
            </span>
            {/* All Articles */}
            <Link
              href="/blog"
              style={mutedLink}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              All Articles
            </Link>
            {/* Divider + each category */}
            {blogCategories.map(cat => (
              <span key={cat} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.15)', margin: '0 0.625rem', fontSize: '0.6rem' }}>●</span>
                <Link
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  style={mutedLink}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {cat}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar (unchanged) ── */}
      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '1.5rem 2rem', display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-xs)' }}>
          © {new Date().getFullYear()} Dr. Mark Pirtle. All rights reserved.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-xs)' }}>
          SkillfullyAware® is a registered trademark.
        </p>
      </div>
    </footer>
  );
}