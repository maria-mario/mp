'use client';

import Link from 'next/link';
import { Leaf, PawPrint, Brain, Sunrise, ChefHat, Mountain, ArrowRight } from 'lucide-react';

const experiences = [
  {
    icon: Leaf,
    title: 'Plant Medicine Journeys',
    description: 'Sacred plant medicine ceremonies for deep healing and leadership transformation.',
    slug: 'plant-medicine-journeys',
    accent: 'rgba(34,197,94,0.12)',
    accentBorder: 'rgba(34,197,94,0.25)',
    iconColor: '#16a34a',
  },
  {
    icon: PawPrint,
    title: 'Equine-Assisted Leadership',
    description: 'Work with horses to develop presence, emotional intelligence, and authentic leadership.',
    slug: 'equine-assisted-leadership',
    accent: 'rgba(245,158,11,0.12)',
    accentBorder: 'rgba(245,158,11,0.25)',
    iconColor: '#d97706',
  },
  {
    icon: Brain,
    title: 'Shadow Work Deep Dive',
    description: 'Explore unconscious patterns and blind spots that limit your effectiveness.',
    slug: 'shadow-work',
    accent: 'rgba(192,82,42,0.12)',
    accentBorder: 'rgba(192,82,42,0.25)',
    iconColor: 'var(--color-brand-sienna)',
  },
  {
    icon: Sunrise,
    title: 'Praying Shadow Practice',
    description: 'Ancient contemplative practices combined with modern shadow work.',
    slug: 'praying-shadow',
    accent: 'rgba(244,63,94,0.1)',
    accentBorder: 'rgba(244,63,94,0.2)',
    iconColor: '#e11d48',
  },
  {
    icon: ChefHat,
    title: 'Baking & Creative Expression',
    description: 'Use culinary arts as a metaphor for leadership and transformation.',
    slug: 'baking-retreats',
    accent: 'rgba(234,179,8,0.1)',
    accentBorder: 'rgba(234,179,8,0.22)',
    iconColor: '#ca8a04',
  },
  {
    icon: Mountain,
    title: 'Outdoor Leadership Excursions',
    description: 'Nature-based experiences that challenge and develop leadership presence.',
    slug: 'outdoor-leadership',
    accent: 'rgba(14,165,233,0.1)',
    accentBorder: 'rgba(14,165,233,0.2)',
    iconColor: '#0284c7',
  },
];

export function ExperiencesPreviews() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-4" />
          <span className="eyebrow">Transformational Experiences</span>
          <h2 className="mt-4 mb-4">Curated Retreat Experiences</h2>
          <p className="mx-auto" style={{ maxWidth: '54ch', color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-lead)' }}>
            Each experience is carefully designed to create breakthrough moments for leaders.
            Include any combination in your custom forum retreat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map(exp => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              style={{
                display: 'block',
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                border: '1px solid var(--color-brand-warm-gray)',
                padding: '2rem',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
                e.currentTarget.style.borderColor = exp.accentBorder;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--color-brand-warm-gray)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '3.25rem', height: '3.25rem',
                  borderRadius: '0.875rem',
                  backgroundColor: exp.accent,
                  border: `1px solid ${exp.accentBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <exp.icon className="w-6 h-6" style={{ color: exp.iconColor }} />
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.5rem' }}>
                {exp.title}
              </h3>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 'none' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--color-brand-sienna)' }}>
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note + CTA */}
        <div className="text-center">
          <p style={{ color: 'var(--color-brand-text-muted)', fontSize: 'var(--text-small)', marginBottom: '1.25rem', textAlign: 'center' }}>
            All experiences are available exclusively as part of custom forum retreats
          </p>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2"
            style={{
              backgroundColor: 'var(--color-brand-navy)',
              color: '#ffffff',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-navy-light)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-navy)')}
          >
            View All Experiences <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}