'use client';
import Link from 'next/link';

export function Hero() {
  return (
    <section style={{
      backgroundColor: 'var(--color-brand-black)',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        <h1 style={{
          fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          maxWidth: '22ch',
          marginBottom: '1.75rem',
        }}>
          Why do painful patterns keep repeating — in life, relationships, and leadership?
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.75,
          maxWidth: '52ch',
          marginBottom: '0.75rem',
        }}>
          You may understand the issue and still struggle to change it.
        </p>

        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.75,
          maxWidth: '52ch',
          marginBottom: '2.5rem',
        }}>
          SkillfullyAware® helps people understand their patterns, work with themselves more skillfully, and grow into wiser, healthier, more effective human beings.
        </p>

        {/* Two audience CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>

          <Link href="/built-this-way" style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'var(--color-brand-rust)',
            color: '#ffffff',
            padding: '1rem 2.25rem',
            borderRadius: '9999px',
            textDecoration: 'none',
          }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.01em' }}>
              I'm a Reader
            </span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 500, marginTop: '0.15rem' }}>
              Start with Built This Way
            </span>
          </Link>

          <Link href="#leader-path" style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'var(--color-brand-teal)',
            color: '#ffffff',
            padding: '1rem 2.25rem',
            borderRadius: '9999px',
            textDecoration: 'none',
          }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.01em' }}>
              I'm a Leader
            </span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 500, marginTop: '0.15rem' }}>
              Explore SAAQ & Forum Retreats
            </span>
          </Link>

        </div>

        <Link href="#start" style={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.45)',
          textDecoration: 'none',
          fontWeight: 500,
        }}>
          Not sure where to begin? Start here →
        </Link>

      </div>
    </section>
  );
}