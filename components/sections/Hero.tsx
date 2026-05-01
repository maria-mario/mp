'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const logos = [
  { name: 'PBS',          src: '/logos/pbs.svg' },
  { name: 'Tubi TV',      src: '/logos/tubitv.svg' },
  { name: 'Kripalu',      src: '/logos/kripalu.svg' },
  { name: 'Wholehearted', src: '/logos/wholehearted.svg' },
];

export function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    /* Outer wrapper — pure black, full width */
    <div style={{ backgroundColor: '#000000', paddingTop: '3.5rem' }}>

      {/* ── HERO IMAGE CONTAINER — rounded, mx-auto, like Tony Robbins ── */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: '1.25rem',
          margin: '1rem auto 0',
          maxWidth: '96rem',
          height: 'calc(100svh - 3.5rem - 1rem - 3.5rem)',
        }}
      >
        {/* Background photo — full bleed inside rounded box */}
        <Image
          src="/images/mark-hero-v3.webp"
          alt="Dr. Mark Pirtle"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center top' }}
        />

        {/* Left-only gradient — fades to transparent at 50% horizontally */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.0) 55%)',
          }}
        />

        {/* Warm spotlight on figure */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 70% at 72% 45%, rgba(255,210,155,0.15) 0%, transparent 70%)',
          }}
        />

        {/* ── TEXT — vertically centered left, Tony Robbins style ── */}
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ padding: '0 2.5rem' }}
        >
          {/* Eyebrow */}
          <p
            className="mb-4"
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-sienna-light)',
            }}
          >
            Executive Leadership Transformation
          </p>

          {/* Main headline — huge, bold, sans, white */}
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              maxWidth: '14ch',
            }}
          >
            Amplify Your Power.{' '}
            <span style={{ color: 'var(--color-brand-sienna-light)' }}>
              Be SkillfullyAware®
            </span>
          </h1>

          {/* Sub */}
          <p
            className="mb-8"
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              maxWidth: '44ch',
              fontWeight: 400,
            }}
          >
            Power begins with self-awareness. I coach leaders to see themselves clearly,
            break old patterns, and lead with wisdom and kindness.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/forum-retreats"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-brand-sienna)',
                color: '#ffffff',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontSize: 'var(--text-small)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(192,82,42,0.4)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-sienna)')}
            >
              Explore Forum Retreats
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              href="/consultation"
              className="inline-flex items-center font-semibold transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontSize: 'var(--text-small)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
            >
              Discover Coaching
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-4">
            {['EO/YPO Trusted Partner', '20+ Years Experience', '500+ Leaders Transformed'].map(item => (
              <div
                key={item}
                className="flex items-center gap-2"
                style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-brand-sienna)' }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AS SEEN IN STRIP — outside the image, on pure black ── */}
      <div
        style={{
          maxWidth: '96rem',
          margin: '0 auto',
          padding: '1.25rem 2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              flexShrink: 0,
            }}
          >
            As Seen In
          </span>
          <div
            style={{
              width: '1px',
              height: '1.25rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}
            className="hidden sm:block"
          />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12">
            {logos.map(logo => (
              <div key={logo.name} className="relative" style={{ height: '1.5rem', width: '7rem' }}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain object-left transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.35 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sentinel — Header watches this to know when hero is scrolled past */}
      <div id="hero-sentinel" style={{ position: 'absolute', bottom: 0, height: '1px', width: '100%', pointerEvents: 'none' }} />
    </div>
  );
}