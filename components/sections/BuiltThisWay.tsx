import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BuiltThisWay() {
  return (
    <section style={{
      backgroundColor: '#0f0f0f',
      padding: '5rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* Book cover placeholder */}
        <div style={{
          aspectRatio: '3/4',
          backgroundColor: 'var(--color-brand-sienna)',
          borderRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '320px',
        }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '1rem',
            }}>
              Book Cover
            </p>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.3,
            }}>
              Built This Way
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna-light)',
            marginBottom: '1rem',
          }}>
            Start Here
          </p>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Start with the book. Understand why the pattern repeats.
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            People do not repeat painful patterns because they lack willpower or are unwilling to change. They repeat them because they have been conditioned by experience, protection, repetition, stress, and old adaptations.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            marginBottom: '2rem',
          }}>
            <strong style={{ color: '#ffffff' }}>Built This Way</strong> helps you understand why you react before you can think, why insight alone is not enough, and how real change becomes possible through awareness, practice, integration, and compassion.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/built-this-way" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-brand-sienna)',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              textDecoration: 'none',
            }}>
              Join the Launch Team <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/built-this-way#learn-more" style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              padding: '0.875rem 0',
            }}>
              Learn More About the Book →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}