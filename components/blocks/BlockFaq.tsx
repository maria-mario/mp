'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { BlockFaqData } from '@/lib/pages';

export default function BlockFaq({ block }: { block: BlockFaqData }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        <h2 className="mt-4 mb-10">{block.heading}</h2>
        {block.items && block.items.map((item, i) => (
          <div key={i} className="accordion-item">
            <button
              className="accordion-trigger"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600 }}>
                {item.q}
              </span>
              <span className="accordion-icon">
                {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            {open === i && (
              <p style={{
                marginTop: '0.75rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                maxWidth: '72ch',
              }}>
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
