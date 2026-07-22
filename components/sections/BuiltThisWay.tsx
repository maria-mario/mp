import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BuiltThisWay() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '5rem 0',
    }}>
      <div className="container" style={{
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
              fontWeight: 600,
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
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna-light)',
            marginBottom: '1rem',
          }}>
            Start Here
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}>
            Start with the book. Understand why the pattern repeats.
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            There&apos;s nothing wrong with you. There is a reason the pattern repeats.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            People do not repeat painful patterns because they lack willpower or are unwilling to change. They repeat them because old adaptations, nervous system patterns, emotional memory, and practiced responses often move faster than conscious choice.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            marginBottom: '2rem',
          }}>
            <strong style={{ color: 'var(--color-brand-text)' }}>Built This Way</strong> helps you understand why you react before you can think, why insight alone is not enough, and how real change becomes possible through awareness, practice, integration, and compassion.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/power-tools/book#tiers" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-brand-sienna)',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: 'var(--text-small)',
              textDecoration: 'none',
            }}>
              Get Book Updates &amp; Reader Bonuses <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/power-tools/book" style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              color: 'var(--color-brand-text-muted)',
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