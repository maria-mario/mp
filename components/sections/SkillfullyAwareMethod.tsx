'use client';

import Link from 'next/link';
import { Eye, Lightbulb, Shield, TrendingUp, Target } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    title: 'Presence',
    description: 'Waking up to the moment. The foundation of awareness, enabling you to fully engage with your life, relationships, and decisions.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity',
    description: 'Seeing through the noise. Cut through mental clutter and limiting beliefs to gain insight into yourself, others, and your world.',
  },
  {
    icon: Shield,
    title: 'Resilience',
    description: "Building emotional strength. Navigate life's challenges with balance and equanimity, facing discomfort with grace.",
  },
  {
    icon: TrendingUp,
    title: 'Development',
    description: 'Evolving consciously. Continuously acquire healthier perspectives and integrate awareness into all areas of your life.',
  },
  {
    icon: Target,
    title: 'Alignment',
    description: 'Bringing it all together. Where inner work creates a life lived in harmony with your purpose, values, and intentions.',
  },
];

export function SkillfullyAwareMethod() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-brand-blue)' }}
    >
      {/* Subtle light top-right */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 60% at 90% 10%, rgba(255,255,255,0.1) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 50% at 10% 90%, rgba(0,0,0,0.15) 0%, transparent 70%)',
      }} />

      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase" style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
            }}>
              The System
            </span>
          </div>
          <h2 className="mb-5" style={{ color: '#ffffff' }}>
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>SkillfullyAware®</em>
            <br />
            A Practical System for Meaningful Change
          </h2>
          <p className="mx-auto" style={{
            fontSize: 'var(--text-lead)', color: 'rgba(255,255,255,0.75)',
            maxWidth: '58ch', lineHeight: 1.8,
          }}>
            Grounded in neuroscience, the SkillfullyAware® methodology maps how your World, Body,
            and Mind shape one another—and trains three core capacities to change the system,
            not just the surface signals.
          </p>
        </div>

        {/* 3-col card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(pillar => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.14)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>
                <pillar.icon className="w-7 h-7" style={{ color: '#ffffff' }} />
              </div>
              <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-body)', lineHeight: 1.75, maxWidth: 'none' }}>
                {pillar.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="p-8 rounded-2xl flex flex-col justify-center items-center text-center"
            style={{ backgroundColor: 'var(--color-brand-sienna)' }}
          >
            <h3 className="mb-4" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
              Ready to Begin?
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-body)', lineHeight: 1.7, maxWidth: 'none' }}>
              Discover how the SkillfullyAware® framework can transform your leadership.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold"
              style={{
                backgroundColor: '#ffffff', color: 'var(--color-brand-sienna)',
                fontSize: 'var(--text-small)', letterSpacing: '0.06em',
                textTransform: 'uppercase' as const, textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-cream)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}