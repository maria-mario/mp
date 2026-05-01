'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTABanner() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-brand-sienna)' }}
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 10% 80%, rgba(0,0,0,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 text-center">

        <h2
          className="mb-6"
          style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Your Time is{' '}
          <em style={{ fontStyle: 'italic' }}>Now</em>
        </h2>

        <p
          className="mx-auto mb-12"
          style={{
            fontSize: 'var(--text-lead)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '52ch',
            lineHeight: 1.75,
          }}
        >
          Whether you're ready to transform your forum, elevate your leadership,
          or explore what's possible—the journey begins with a conversation.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2"
            style={{
              backgroundColor: '#ffffff',
              color: 'var(--color-brand-sienna)',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-cream)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
          >
            <Calendar className="w-4 h-4" />
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/forum-retreats"
            style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            Plan Your Retreat
          </Link>
        </div>

        {/* Trust line */}
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-xs)', letterSpacing: '0.04em' }}>
          Trusted by EO and YPO forums worldwide&nbsp;&nbsp;•&nbsp;&nbsp;
          20+ years of transformation&nbsp;&nbsp;•&nbsp;&nbsp;
          500+ leaders empowered
        </p>

      </div>
    </section>
  );
}