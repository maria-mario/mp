import Link from 'next/link';
import { BarChart2, Compass, User } from 'lucide-react';
import type { HomepageCopy } from '@/lib/homepage';

/** Icons cycle in the order the cards are listed in Directus. */
const ICONS = [BarChart2, Compass, User];

export function LeaderPathway({ copy }: { copy: HomepageCopy }) {
  return (
    <section id="leader-path" style={{
      backgroundColor: '#ffffff',
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
            marginBottom: '1rem',
          }}>
            {copy.leadership_eyebrow}
          </p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-brand-text)',
            marginBottom: '1.25rem',
            lineHeight: 1.15,
            maxWidth: '22ch',
          }}>
            {copy.leadership_heading}
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            maxWidth: '52ch',
            marginBottom: '1rem',
          }}>
            {copy.leadership_body_1}
          </p>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            maxWidth: '52ch',
          }}>
            {copy.leadership_body_2}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {copy.leadership_cards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
            <div key={card.title} style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-brand-border)',
              borderRadius: '0.625rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.625rem',
                backgroundColor: 'rgba(192,82,42,0.08)',
                border: '1px solid rgba(192,82,42,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon className="w-5 h-5" style={{ color: 'var(--color-brand-sienna)' }} />
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-brand-text)',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: 'var(--text-small)',
                color: 'var(--color-brand-text-muted)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {card.body}
              </p>
              <Link href={card.cta_url} style={{
                fontSize: 'var(--text-small)',
                fontWeight: 700,
                color: 'var(--color-brand-sienna)',
                textDecoration: 'none',
              }}>
                {card.cta_label} →
              </Link>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}