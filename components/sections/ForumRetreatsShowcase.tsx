'use client';

import Link from 'next/link';
import { Users, Calendar, Sparkles, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Fully Customized',
    description: "Tailored experiences designed specifically for your forum's goals and dynamics.",
  },
  {
    icon: Calendar,
    title: 'Turnkey Planning',
    description: 'From logistics to content, we handle everything so you can focus on transformation.',
  },
  {
    icon: Sparkles,
    title: 'Proven Framework',
    description: 'The SkillfullyAware® methodology delivers lasting results backed by neuroscience.',
  },
];

export function ForumRetreatsShowcase() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <span className="eyebrow">Retreats & Experiences</span>
          <h2 className="mt-4 mb-6">
            Turnkey{' '}
            <em style={{ color: 'var(--color-brand-sienna)', fontStyle: 'normal' }}>
              EO/YPO
            </em>{' '}
            Forum Retreats
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: 'var(--text-lead)',
              color: 'var(--color-brand-text-muted)',
              maxWidth: '58ch',
            }}
          >
            From impactful workshops to full-service planning, my team and I make it easy
            for your forum to unplug, connect, and go deep. Let's plan something unforgettable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card p-8">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: 'var(--color-brand-off-white)',
                  border: '1px solid var(--color-brand-warm-gray)',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-brand-sienna)';
                  (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--color-brand-off-white)';
                  (e.currentTarget.querySelector('svg') as SVGElement).style.color = 'var(--color-brand-sienna)';
                }}
              >
                <benefit.icon
                  className="w-7 h-7"
                  style={{ color: 'var(--color-brand-sienna)', transition: 'color 0.2s' }}
                />
              </div>

              {/* Text */}
              <h3 className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-brand-text)' }}>
                {benefit.title}
              </h3>
              <p style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-body)', lineHeight: 1.75, maxWidth: 'none' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/forum-retreats"
            className="btn-primary inline-flex items-center gap-2"
            style={{ gap: '0.5rem' }}
          >
            Plan Your Forum Retreat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}