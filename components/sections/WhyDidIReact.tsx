import Link from 'next/link';

export function WhyDidIReact() {
  return (
    <section style={{
      backgroundColor: 'var(--color-brand-off-white)',
      padding: '5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto', textAlign: 'center' }}>

        <p style={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--color-brand-sienna)',
          marginBottom: '1rem',
        }}>
          Reader Tool
        </p>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--color-brand-text)',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
        }}>
          Make the work personal.
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-brand-text-muted)',
          lineHeight: 1.75,
          maxWidth: '52ch',
          margin: '0 auto 1.25rem',
        }}>
          Reading the book helps you understand why painful patterns repeat. The next step is seeing how the pattern shows up in your own life.
        </p>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-brand-text-muted)',
          lineHeight: 1.75,
          maxWidth: '52ch',
          margin: '0 auto 2.5rem',
        }}>
          <strong style={{ color: 'var(--color-brand-text)' }}>Why Did I React That Way?</strong> helps you examine one real reaction — a moment when you got triggered, shut down, overreacted, or acted against your better judgment — and begin seeing the deeper pattern underneath.
        </p>

        <Link href="/reader-tool" style={{
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
          Try Why Did I React That Way? →
        </Link>

      </div>
    </section>
  );
}