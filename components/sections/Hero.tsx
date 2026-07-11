'use client';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section style={{ backgroundColor: '#000000', paddingTop: '6.25rem' }}>
      <div style={{
        maxWidth: '76.5rem', // 1224px
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        {/* Hero image card */}
        <div style={{
          position: 'relative',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          minHeight: '52rem', // 832px (752 content + 80 spacer)
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* Background photo */}
          <Image
            src="/images/mark-hero-v3.webp"
            alt="Dr. Mark Pirtle"
            fill
            className="object-cover"
            style={{ objectPosition: 'right center' }}
            priority
          />

          {/* Left-to-right gradient overlay */}
          <div style={{
            position: 'absolute',
            top: 0, right: '26.5rem', bottom: 0, left: 0, // covers ~66% from left
            background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.90) 55%, rgba(0,0,0,0.38) 70%, rgba(0,0,0,0.05) 82%, rgba(0,0,0,0) 90%)',
          }} />

          {/* Content */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.2rem',
            padding: 'clamp(1.5rem, 3vw, 1.875rem) clamp(2rem, 10vw, 7.875rem) clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3.75rem)',
            flex: 1,
            minHeight: '47rem',
          }}>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
              fontWeight: 600,
              lineHeight: 1.0625,
              color: '#ffffff',
              maxWidth: '14ch',
              margin: 0,
            }}>
              Why do painful patterns repeat in life and at work?
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '35rem' }}>
              <p style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
                margin: 0,
              }}>
                You can understand the issue and still struggle to change it.
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                color: '#ffffff',
                lineHeight: 1.5,
                margin: 0,
              }}>
                SkillfullyAware® helps you understand your patterns, work through them, and grow into a wiser, healthier, more effective human being.
              </p>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              Choose the path that fits why you&apos;re here today.
            </p>

            {/* Two audience CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>

              <Link href="/power-tools/book" style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#c34d27',
                color: '#ffffff',
                padding: '0.875rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                minWidth: '17.5rem',
                height: '4.6875rem',
                gap: '0.2rem',
              }}>
                <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.03em' }}>
                  Understand My Patterns
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>
                  Start with the Book
                </span>
              </Link>

              <Link href="/forum-retreats" style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3d8cad',
                color: '#ffffff',
                padding: '0.875rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                minWidth: '19.375rem',
                height: '4.6875rem',
                gap: '0.2rem',
              }}>
                <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.03em' }}>
                  Leadership, Forums &amp; Retreats
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>
                  Explore Leadership Work
                </span>
              </Link>

            </div>

            <Link href="/start" style={{
              fontSize: '1rem',
              color: '#3d8cad',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.03em',
            }}>
              Not sure where to begin? Start here →
            </Link>

          </div>

          {/* Bottom spacer (matches Figma spacer h-80px) */}
          <div style={{ position: 'relative', height: '5rem', flexShrink: 0 }} />

        </div>
      </div>
    </section>
  );
}
