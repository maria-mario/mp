'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      style={{ backgroundColor: 'var(--color-brand-navy)' }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d1a0e 100%)',
            opacity: 0.97,
          }}
        />
        {/* Subtle warm orbs matching sienna brand */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: 'rgba(192, 82, 42, 0.12)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: 'rgba(192, 82, 42, 0.07)', animationDelay: '1s' }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center text-white">

          {/* Eyebrow tag */}
          <div className="inline-block mb-8">
            <span
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                backgroundColor: 'rgba(192, 82, 42, 0.18)',
                border: '1px solid rgba(192, 82, 42, 0.4)',
                color: '#e8835a',
                backdropFilter: 'blur(8px)',
              }}
            >
              Executive Leadership Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-bold mb-8 leading-tight"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            Amplify Your Power
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--color-brand-sienna-light)',
              }}
            >
              Be SkillfullyAware®
            </em>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-12 mx-auto"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              maxWidth: '52ch',
            }}
          >
            Power begins with self-awareness. I coach leaders to see themselves clearly,
            break old patterns, build emotional agility, and lead with wisdom and kindness.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/forum-retreats" className="btn-primary group flex items-center gap-2">
              Explore Forum Retreats
              <ChevronDown
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                style={{ transform: 'rotate(-90deg)' }}
              />
            </Link>

            <Link href="/consultation" className="btn-secondary">
              Discover Coaching
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap justify-center gap-8 text-sm"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {[
              'EO/YPO Trusted Partner',
              '20+ Years Experience',
              '500+ Leaders Transformed',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-brand-sienna)' }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.4)' }} />
      </div>
    </section>
  );
}