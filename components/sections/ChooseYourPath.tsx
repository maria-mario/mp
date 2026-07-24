import Link from 'next/link';
import type { HomepageCopy } from '@/lib/homepage';

/** Card 1 is the reader (light/rust), card 2 the leader (navy/teal). */
const CARD_THEMES = [
  {
    background: '#ffffff',
    border: 'var(--color-brand-rust)',
    accent: 'var(--color-brand-rust)',
    heading: 'var(--color-brand-black)',
    body: 'var(--color-brand-text-muted)',
  },
  {
    background: 'var(--color-brand-navy)',
    border: 'var(--color-brand-teal)',
    accent: 'var(--color-brand-teal)',
    heading: '#ffffff',
    body: 'rgba(255,255,255,0.65)',
  },
];

export function ChooseYourPath({ copy }: { copy: HomepageCopy }) {
  return (
    <section id="start" style={{
      backgroundColor: 'var(--color-brand-cream)',
      padding: '5rem 0',
    }}>
      <div className="container">

        <p style={{
          fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--color-brand-rust)',
          marginBottom: '0.75rem',
        }}>
          {copy.path_eyebrow}
        </p>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
          color: 'var(--color-brand-black)',
          marginBottom: '0.75rem',
        }}>
          {copy.path_heading}
        </h2>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--color-brand-text-muted)',
          marginBottom: '3rem',
        }}>
          {copy.path_intro}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {copy.path_cards.map((card, i) => {
            const theme = CARD_THEMES[i % CARD_THEMES.length];
            return (
              <div key={card.heading} style={{
                backgroundColor: theme.background,
                border: `2px solid ${theme.border}`,
                borderRadius: '1.25rem',
                padding: '2.5rem',
              }}>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: theme.accent,
                  marginBottom: '0.75rem',
                }}>
                  {card.eyebrow}
                </p>
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 800,
                  color: theme.heading,
                  marginBottom: '0.25rem',
                }}>
                  {card.heading}
                </h3>
                <p style={{
                  fontSize: '0.85rem', fontWeight: 600,
                  color: theme.accent,
                  marginBottom: '0.75rem',
                }}>
                  {card.subheading}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: theme.body,
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}>
                  {card.body}
                </p>
                <p style={{
                  fontSize: '0.8rem', fontWeight: 700,
                  color: theme.accent,
                  marginBottom: '1.5rem',
                  letterSpacing: '0.04em',
                }}>
                  {card.path_line}
                </p>
                <Link href={card.cta_url} style={{
                  display: 'inline-flex',
                  backgroundColor: theme.accent,
                  color: '#ffffff',
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                }}>
                  {card.cta_label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
