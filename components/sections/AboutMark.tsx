'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function AboutMark() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-brand-cream)' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                aspectRatio: '4/5',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-premium)',
              }}
            >
              <Image
                src="/images/mark-about.jpg"
                alt="Dr. Mark Pirtle"
                fill
                className="object-cover"
                style={{ objectPosition: 'center top' }}
              />
              {/* Fallback if no image */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'var(--color-brand-warm-gray)',
                }}
              >
                <span style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-brand-text-light)' }}>MP</span>
              </div>
            </div>

            {/* Floating credential badge */}
            <div
              style={{
                position: 'absolute', bottom: '2rem', right: '-1.5rem',
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                padding: '1rem 1.25rem',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid var(--color-brand-warm-gray)',
              }}
              className="hidden lg:block"
            >
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-light)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Experience
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-brand-text)', lineHeight: 1 }}>
                20+
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)', marginTop: '0.2rem' }}>
                Years Coaching
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="section-divider mb-4" />
            <span className="eyebrow">About Dr. Mark</span>

            <h2 className="mt-4 mb-6">
              Meet Dr. Mark Pirtle
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                'Dr. Mark Pirtle is the creator of SkillfullyAware®, a practical system for helping people understand their patterns, work through them, expand their perspective, and continue evolving throughout life.',
                'His work integrates mindfulness, neuroscience, developmental psychology, somatic awareness, shadow integration, habit change, and decades of experience helping people lead, relate, practice, and grow.',
                'He is the author of Built This Way: Why Painful Patterns Repeat and How to Change Them, and the creator of the SkillfullyAware Awareness Quotient, or SAAQ.',
              ].map((text, i) => (
                <p key={i} style={{ fontSize: 'var(--text-lead)', color: 'var(--color-brand-text-muted)', lineHeight: 1.75, maxWidth: '52ch' }}>
                  {text}
                </p>
              ))}
            </div>

            {/* The Story / The System / The Science pills */}
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['The Story', 'The System', 'The Science'].map(label => (
                <Link
                  key={label}
                  href={`/about#${label.toLowerCase().replace(' ', '-')}`}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    backgroundColor: 'var(--color-brand-off-white)',
                    border: '1px solid var(--color-brand-border)',
                    color: 'var(--color-brand-text)',
                    transition: 'background-color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'var(--color-brand-blue)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'var(--color-brand-blue)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'var(--color-brand-off-white)';
                    e.currentTarget.style.color = 'var(--color-brand-text)';
                    e.currentTarget.style.borderColor = 'var(--color-brand-border)';
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#c34d27',
                  border: '2px solid #c34d27',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: 'var(--text-small)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase' as const,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c34d27'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#c34d27'; }}
              >
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-brand-text)',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: 'var(--text-small)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase' as const,
                  textDecoration: 'none',
                  border: '2px solid var(--color-brand-text)',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-brand-text)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-brand-text)';
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}