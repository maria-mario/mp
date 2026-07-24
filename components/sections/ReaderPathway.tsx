import Link from 'next/link';
import { BookOpen, Zap, BarChart2, Users, Lightbulb } from 'lucide-react';
import type { HomepageCopy } from '@/lib/homepage';

/** Icons cycle in the order the items are listed in Directus. */
const ICONS = [BookOpen, Lightbulb, Zap, BarChart2, Users];

export function ReaderPathway({ copy }: { copy: HomepageCopy }) {
  return (
    <section id="reader-path" style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '5rem 0',
    }}>
      <div className="container">

        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-sienna)',
            marginBottom: '0.75rem',
          }}>
            {copy.ecosystem_eyebrow}
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '0.75rem',
          }}>
            {copy.ecosystem_heading}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-brand-text-muted)',
          }}>
            {copy.ecosystem_intro}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {copy.ecosystem_items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={item.title} style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-brand-border)',
                borderRadius: '0.625rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.625rem',
                  backgroundColor: 'rgba(192,82,42,0.08)',
                  border: '1px solid rgba(192,82,42,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna)' }} />
                </div>

                <p style={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--color-brand-text)',
                  lineHeight: 1.4,
                }}>
                  {item.title}
                </p>

                <p style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-brand-text-muted)',
                  lineHeight: 1.65,
                  flex: 1,
                }}>
                  {item.body}
                </p>

                <Link href={item.cta_url} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: 'var(--text-small)',
                  fontWeight: 700,
                  color: 'var(--color-brand-sienna)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}>
                  {item.cta_label} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
