'use client';

import Link from 'next/link';
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'SA360 Framework',
    description: 'Comprehensive assessment of your leadership power centers and aptitudes.',
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
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
    >
      {/* Subtle orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(192,82,42,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="section-divider mb-4" />
            <span className="eyebrow">SAAQ Coaching</span>

            <h2 className="mt-4 mb-6" style={{ color: '#ffffff' }}>
              With the Right Guidance,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-sienna-light)' }}>
                Anything is Possible
              </em>
            </h2>

            <p
              className="mb-5"
              style={{
                fontSize: 'var(--text-lead)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.75,
                maxWidth: '48ch',
              }}
            >
              If you're ready to map your inner operating system and upgrade the habits that run it,
              SkillfullyAware-Awareness Quotient (SA360) coaching is the next step.
            </p>

            <p
              className="mb-10"
              style={{
                fontSize: 'var(--text-body)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                maxWidth: '48ch',
              }}
            >
              Through the SA360 framework we'll assess your seven Power Centers and six Leadership
              Aptitudes, pinpoint where your energy leaks, and build a tailored practice plan to plug
              them. Leaders who commit to this process gain systemic vision, steadier emotions, and
              greater influence.
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
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,82,42,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(192,82,42,0.15)',
                    border: '1px solid rgba(192,82,42,0.25)',
                  }}
                >
                  <f.icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna-light)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 'none' }}>
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