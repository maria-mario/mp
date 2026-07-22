import Link from 'next/link';
import type { BlockCtaData } from '@/lib/pages';

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function CTA({ label, url, style }: { label: string; url: string; style: React.CSSProperties }) {
  if (isExternal(url)) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className="btn" style={style}>{label}</a>;
  }
  return <Link href={url} className="btn" style={style}>{label}</Link>;
}

const bgMap: Record<string, string> = {
  sienna: 'linear-gradient(135deg, var(--color-brand-sienna) 0%, var(--color-brand-sienna-dark, #8B3A1A) 100%)',
  navy:   'var(--color-brand-navy)',
  cream:  'var(--color-brand-cream)',
};

export default function BlockCta({ block }: { block: BlockCtaData }) {
  const bg = bgMap[block.background ?? 'sienna'] ?? bgMap.sienna;
  const onDark = (block.background ?? 'sienna') !== 'cream';

  const primaryStyle: React.CSSProperties = onDark
    ? { backgroundColor: '#ffffff', color: 'var(--color-brand-sienna)', fontWeight: 700 }
    : { backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff', fontWeight: 700 };

  const secondaryStyle: React.CSSProperties = onDark
    ? { backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.5)', fontWeight: 600 }
    : { backgroundColor: 'transparent', color: 'var(--color-brand-sienna)', border: '1.5px solid var(--color-brand-sienna)', fontWeight: 600 };

  return (
    <section id={block.anchor_id || undefined} className="section" style={{ background: bg, textAlign: 'center' }}>
      <div className="container max-w-2xl">
        <h2 className="mb-4" style={{ color: onDark ? '#ffffff' : 'var(--color-brand-text)' }}>
          {block.heading}
        </h2>
        {block.body && (
          <p style={{
            color: onDark ? 'rgba(255,255,255,0.88)' : 'var(--color-brand-text-muted)',
            fontSize: 'var(--text-lead)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            {block.body}
          </p>
        )}
        {(block.cta_primary_label && block.cta_primary_url) || (block.cta_secondary_label && block.cta_secondary_url) ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {block.cta_primary_label && block.cta_primary_url && (
              <CTA label={block.cta_primary_label} url={block.cta_primary_url} style={primaryStyle} />
            )}
            {block.cta_secondary_label && block.cta_secondary_url && (
              <CTA label={block.cta_secondary_label} url={block.cta_secondary_url} style={secondaryStyle} />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
