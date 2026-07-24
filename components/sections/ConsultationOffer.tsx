'use client';

import Link from 'next/link';
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'SAAQ Assessment',
    description: 'A private developmental reflection on how you lead, relate, decide, protect, and grow under pressure.',
  },
  {
    icon: Users,
    title: 'One-on-One Coaching',
    description: 'Personalized sessions tailored to your unique challenges and goals.',
  },
  {
    icon: TrendingUp,
    title: 'Systemic Approach',
    description: 'Address root causes, not just symptoms, for lasting transformation.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Leaders gain steadier emotions, clearer vision, and greater influence.',
  },
];

export function ConsultationOffer() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="section-divider mb-4" />
            <span className="eyebrow">SAAQ Coaching</span>

            <h2 className="mt-4 mb-6" style={{ color: 'var(--color-brand-text)' }}>
              With the Right Guidance,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-sienna)' }}>
                Anything is Possible
              </em>
            </h2>

            <p
              className="mb-5"
              style={{
                fontSize: 'var(--text-lead)',
                color: 'var(--color-brand-text-muted)',
                lineHeight: 1.75,
                maxWidth: '48ch',
              }}
            >
              If you're ready to map your inner operating system and upgrade the habits that run it,
              SkillfullyAware-Awareness Quotient (SAAQ) coaching is the next step.
            </p>

            <p
              className="mb-10"
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-brand-text-muted)',
                lineHeight: 1.8,
                maxWidth: '48ch',
              }}
            >
              Through the SAAQ framework we'll assess your leadership patterns, pinpoint where your
              energy leaks, and build a tailored practice plan. Leaders who commit to this process gain
              systemic vision, steadier emotions, and greater influence.
            </p>

            <Link
              href="/consultation"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: 'var(--color-brand-sienna)',
                color: '#ffffff',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: 'var(--text-small)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(192,82,42,0.35)',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna)')}
            >
              <Calendar className="w-4 h-4" />
              Book a Free Discovery Call
            </Link>
          </div>

          {/* Right — feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map(f => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl transition-all duration-200"
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-brand-border)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,82,42,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-brand-border)')}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(192,82,42,0.08)',
                    border: '1px solid rgba(192,82,42,0.18)',
                  }}
                >
                  <f.icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.25rem' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text-muted)', lineHeight: 1.6, maxWidth: 'none' }}>
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}