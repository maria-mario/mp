import Link from 'next/link';
import type { BlockHeroData } from '@/lib/pages';

const bgMap: Record<string, string> = {
  navy:  'var(--color-brand-navy)',
  cream: 'var(--color-brand-cream)',
  white: '#ffffff',
};

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function CTA({ label, url, primary }: { label: string; url: string; primary: boolean }) {
  const cls = primary ? 'btn btn-primary' : 'btn btn-outline';
  const outlineStyle = primary ? {} : { color: '#fff', borderColor: 'rgba(255,255,255,0.3)' };
  if (isExternal(url)) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className={cls} style={outlineStyle}>{label}</a>;
  }
  return <Link href={url} className={cls} style={outlineStyle}>{label}</Link>;
}

export default function BlockHero({ block }: { block: BlockHeroData }) {
  const bg = bgMap[block.background ?? 'navy'] ?? bgMap.navy;
  const onDark = (block.background ?? 'navy') === 'navy';

  return (
    <section
      className="section relative overflow-hidden"
      style={{ backgroundColor: bg, paddingTop: '8rem', paddingBottom: '6rem' }}
    >
      {onDark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 70% at 75% 50%, rgba(192,82,42,0.12) 0%, transparent 70%)' }}
        />
      )}
      <div className="container relative z-10 max-w-3xl">
        {block.eyebrow && (
          <>
            <div className="section-divider mb-4" />
            <span className="eyebrow">{block.eyebrow}</span>
          </>
        )}
        <h1
          className="mt-4 mb-6"
          style={{ color: onDark ? '#ffffff' : 'var(--color-brand-text)' }}
        >
          {block.heading}
        </h1>
        {block.body && block.body.split('\n\n').map((para, i) => (
          <p key={i} style={{
            fontSize: 'var(--text-lead)',
            color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--color-brand-text-muted)',
            lineHeight: 1.75,
            maxWidth: '52ch',
            marginBottom: '1rem',
          }}>
            {para}
          </p>
        ))}
        {(block.cta_primary_label && block.cta_primary_url) || (block.cta_secondary_label && block.cta_secondary_url) ? (
          <div className="mt-10 flex flex-wrap gap-4">
            {block.cta_primary_label && block.cta_primary_url && (
              <CTA label={block.cta_primary_label} url={block.cta_primary_url} primary={true} />
            )}
            {block.cta_secondary_label && block.cta_secondary_url && (
              <CTA label={block.cta_secondary_label} url={block.cta_secondary_url} primary={false} />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
