import Link from 'next/link';
import type { HomepageCopy } from '@/lib/homepage';

export function FinalCTA({ copy }: { copy: HomepageCopy }) {
  return (
    <section style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '6rem 0',
      textAlign: 'center',
    }}>
      <div className="container">
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: 'var(--color-brand-text)',
          marginBottom: '1.25rem',
          lineHeight: 1.2,
        }}>
          {copy.final_heading}
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-brand-text-muted)',
          lineHeight: 1.75,
          marginBottom: '2.5rem',
          maxWidth: '44ch',
          margin: '0 auto 2.5rem',
        }}>
          {copy.final_body}
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Link href={copy.final_cta_primary_url} style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            color: '#c34d27',
            border: '2px solid #c34d27',
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: 'var(--text-small)',
            textDecoration: 'none',
          }}>
            {copy.final_cta_primary_label}
          </Link>

          <Link href={copy.final_cta_secondary_url} style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: 'var(--color-brand-text)',
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: 'var(--text-small)',
            textDecoration: 'none',
            border: '1px solid var(--color-brand-border)',
          }}>
            {copy.final_cta_secondary_label}
          </Link>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link href={copy.final_link_url} style={{
            fontSize: 'var(--text-small)',
            fontWeight: 600,
            color: 'var(--color-brand-sienna)',
            textDecoration: 'none',
          }}>
            {copy.final_link_label}
          </Link>
        </div>

      </div>
      </div>
    </section>
  );
}