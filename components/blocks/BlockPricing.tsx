import Link from 'next/link';
import type { BlockPricingData } from '@/lib/pages';

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export default function BlockPricing({ block }: { block: BlockPricingData }) {
  return (
    <section className="section">
      <div className="container">
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        <h2 className="mt-4 mb-4">{block.heading}</h2>
        {block.intro && (
          <p className="mb-14" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', maxWidth: '54ch', lineHeight: 1.75 }}>
            {block.intro}
          </p>
        )}
        {block.options && block.options.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {block.options.map((opt, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div>
                  {opt.heading && (
                    <h3 className="mb-1" style={{ fontSize: 'var(--text-h4, 1.25rem)', fontWeight: 700 }}>{opt.heading}</h3>
                  )}
                  {opt.price && (
                    <p style={{ fontWeight: 700, color: 'var(--color-brand-sienna)', fontSize: 'var(--text-small)', marginBottom: '0.875rem' }}>
                      {opt.price}
                    </p>
                  )}
                  {opt.body && (
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: opt.note ? '0.875rem' : 0 }}>
                      {opt.body}
                    </p>
                  )}
                  {opt.note && (
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-small)', fontStyle: 'italic' }}>
                      {opt.note}
                    </p>
                  )}
                </div>
                {opt.cta_label && opt.cta_url && (
                  isExternal(opt.cta_url) ? (
                    <a href={opt.cta_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto" style={{ alignSelf: 'flex-start' }}>
                      {opt.cta_label}
                    </a>
                  ) : (
                    <Link href={opt.cta_url} className="btn btn-primary mt-auto" style={{ alignSelf: 'flex-start' }}>
                      {opt.cta_label}
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
