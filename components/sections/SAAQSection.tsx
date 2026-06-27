import Link from 'next/link';

export function SAAQSection() {
  return (
    <section style={{
      backgroundColor: 'var(--color-brand-cream)',
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

        <div>
          <p style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna)',
            marginBottom: '1rem',
          }}>
            Go Deeper
          </p>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Go deeper with the SAAQ.
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            marginBottom: '1.25rem',
          }}>
            Some patterns are easy to see. Others are hidden in how we lead, relate, decide, protect ourselves, handle pressure, and make meaning.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            marginBottom: '2rem',
          }}>
            The <strong style={{ color: 'var(--color-brand-text)' }}>SkillfullyAware Awareness Quotient (SAAQ)</strong> gives you a deeper developmental reflection on how you operate under stress and how to reach the next level of your growth.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/saaq" style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: 'var(--text-small)',
              textDecoration: 'none',
            }}>
              Explore the SAAQ →
            </Link>
            <Link href="/saaq#sample" style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              color: 'var(--color-brand-text-muted)',
              textDecoration: 'none',
              padding: '0.875rem 0',
            }}>
              See a Sample Report →
            </Link>
          </div>
        </div>

        {/* Visual block */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-brand-border)',
          borderRadius: '0.625rem',
          padding: '2.5rem',
        }}>
          {[
            { label: 'How I lead under pressure', value: 85 },
            { label: 'How I relate to others', value: 72 },
            { label: 'How I make decisions', value: 90 },
            { label: 'How I handle stress', value: 61 },
            { label: 'How I protect myself', value: 78 },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.4rem',
              }}>
                <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--color-brand-text)' }}>
                  {item.label}
                </span>
              </div>
              <div style={{
                height: '6px',
                backgroundColor: 'var(--color-brand-warm-gray)',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${item.value}%`,
                  backgroundColor: 'var(--color-brand-sienna)',
                  borderRadius: '9999px',
                }} />
              </div>
            </div>
          ))}
          <p style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--color-brand-text-light)',
            marginTop: '1.5rem',
            fontStyle: 'italic',
          }}>
            Sample SAAQ developmental reflection
          </p>
        </div>

      </div>
    </section>
  );
}