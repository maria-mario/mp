import { CheckCircle } from 'lucide-react';
import type { BlockChecklistData } from '@/lib/pages';

export default function BlockChecklist({ block }: { block: BlockChecklistData }) {
  return (
    <section id={block.anchor_id || undefined} className="section">
      <div className="container max-w-3xl">
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        <h2 className="mt-4 mb-4">{block.heading}</h2>
        {block.intro && (
          <p className="mb-12" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lead)', lineHeight: 1.75 }}>
            {block.intro}
          </p>
        )}
        {block.items && block.items.length > 0 && (
          <div className="flex flex-col gap-6">
            {block.items.map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <CheckCircle size={20} style={{ color: 'var(--color-brand-sienna)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  {item.title && (
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</p>
                  )}
                  {item.body && (
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{item.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
