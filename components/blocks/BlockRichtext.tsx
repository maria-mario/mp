import type { BlockRichtextData } from '@/lib/pages';

const bgMap: Record<string, string> = {
  cream: 'var(--color-brand-cream)',
  white: '#ffffff',
  navy:  'var(--color-brand-navy)',
};

export default function BlockRichtext({ block }: { block: BlockRichtextData }) {
  const bg = bgMap[block.background ?? 'cream'] ?? bgMap.cream;
  const onDark = block.background === 'navy';
  const centered = block.align === 'center';

  return (
    <section className="section" style={{ backgroundColor: bg }}>
      <div className="container">
        <div style={{
          maxWidth: block.narrow ? '52ch' : undefined,
          margin: centered ? '0 auto' : undefined,
          textAlign: centered ? 'center' : undefined,
        }}>
          {block.eyebrow && (
            <>
              <div className="section-divider mb-4" style={{ margin: centered ? '0 auto 1rem' : undefined }} />
              <span className="eyebrow">{block.eyebrow}</span>
            </>
          )}
          {block.heading && (
            <h2
              className="mt-4 mb-6"
              style={{ color: onDark ? '#ffffff' : 'var(--color-brand-text)' }}
            >
              {block.heading}
            </h2>
          )}
          <div
            className="prose"
            style={{ color: onDark ? 'rgba(255,255,255,0.8)' : 'var(--color-brand-text-muted)', lineHeight: 1.75 }}
            dangerouslySetInnerHTML={{ __html: block.body }}
          />
        </div>
      </div>
    </section>
  );
}
