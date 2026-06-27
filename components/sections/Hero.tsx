'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section style={{
      backgroundColor: '#000000',
      paddingTop: '7rem',
      paddingBottom: '5rem',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Small leadership link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/retreats" style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--color-brand-sienna-light)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}>
            For EO/YPO, leaders, and forum retreats →
          </Link>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          maxWidth: '18ch',
          marginBottom: '2rem',
        }}>
          Why do I keep repeating the same painful patterns?
        </h1>

        {/* Subheadline */}
        <div style={{
          marginBottom: '2rem',
          maxWidth: '48ch',
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            You know better. You understand the issue. You may even know exactly what you "should" do.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            But under stress, the old reaction still takes over.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.75,
            fontWeight: 500,
          }}>
            <strong style={{ color: '#ffffff' }}>Built This Way</strong> helps you understand why painful patterns repeat — and how real change becomes possible.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <Link href="/built-this-way" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#ffffff',
            color: '#c34d27',
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: 'var(--text-small)',
            letterSpacing: '0.02em',
            textDecoration: 'none',
          }}>
            Join the Built This Way Launch Team
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link href="#start" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'rgba(255,255,255,0.75)',
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: 'var(--text-small)',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Find the Right Starting Point
          </Link>
        </div>

      </div>
    </section>
  );
}