import Link from 'next/link';
import type { BlockCardsData } from '@/lib/pages';

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export default function BlockCards({ block }: { block: BlockCardsData }) {
  const cols = block.columns ?? 3;
  const gridCols = cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <section id={block.anchor_id || undefined} className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        {block.heading && (
          <h2 className="mt-4 mb-4" style={{ maxWidth: '32ch' }}>{block.heading}</h2>
        )}
        {block.intro && (
          <p className="mb-12" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', maxWidth: '54ch', lineHeight: 1.75 }}>
            {block.intro}
          </p>
        )}
        {block.cards && block.cards.length > 0 && (
          <div className={`grid ${gridCols} gap-8`}>
            {block.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div>
                  {card.heading && (
                    <h3 className="mb-1" style={{ fontSize: 'var(--text-h3)' }}>{card.heading}</h3>
                  )}
                  {card.subheading && (
                    <p style={{ fontWeight: 600, color: 'var(--color-brand-sienna)', marginBottom: '0.75rem', fontSize: 'var(--text-small)' }}>
                      {card.subheading}
                    </p>
                  )}
                  {card.body && (
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{card.body}</p>
                  )}
                </div>
                {card.cta_label && card.cta_url && (
                  isExternal(card.cta_url) ? (
                    <a href={card.cta_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-auto" style={{ alignSelf: 'flex-start' }}>
                      {card.cta_label}
                    </a>
                  ) : (
                    <Link href={card.cta_url} className="btn btn-outline mt-auto" style={{ alignSelf: 'flex-start' }}>
                      {card.cta_label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
