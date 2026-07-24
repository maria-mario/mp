'use client';

import type { ElementType } from 'react';
import Link from 'next/link';
import { BookOpen, Video, Headphones, Film } from 'lucide-react';
import type { HomepageCopy, PowerToolItem } from '@/lib/homepage';

/** Icon + swatch per category name, matching the Directus `category` values. */
const CATEGORY_STYLE: Record<string, { icon: ElementType; iconColor: string; color: string; borderColor: string }> = {
  'Online Classes':      { icon: Video,      iconColor: 'var(--color-brand-sienna)', color: 'rgba(192,82,42,0.08)', borderColor: 'rgba(192,82,42,0.18)' },
  'Workbooks':           { icon: BookOpen,   iconColor: 'var(--color-brand-text)',   color: 'rgba(26,26,26,0.05)',  borderColor: 'rgba(26,26,26,0.12)'  },
  'Meditation Programs': { icon: Headphones, iconColor: 'var(--color-brand-sienna)', color: 'rgba(192,82,42,0.08)', borderColor: 'rgba(192,82,42,0.18)' },
  'Media':               { icon: Film,       iconColor: 'var(--color-brand-text)',   color: 'rgba(26,26,26,0.05)',  borderColor: 'rgba(26,26,26,0.12)'  },
};

const FALLBACK_STYLE = CATEGORY_STYLE['Workbooks'];

/** Preserve the order the items appear in Directus. */
function groupByCategory(items: PowerToolItem[]) {
  const order: string[] = [];
  const groups = new Map<string, PowerToolItem[]>();
  for (const item of items) {
    if (!groups.has(item.category)) { groups.set(item.category, []); order.push(item.category); }
    groups.get(item.category)!.push(item);
  }
  return order.map(label => ({ label, items: groups.get(label)!, ...(CATEGORY_STYLE[label] ?? FALLBACK_STYLE) }));
}

export function PowerToolsPreview({ copy }: { copy: HomepageCopy }) {
  const categories = groupByCategory(copy.powertools_items);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-4" />
          <span className="eyebrow">{copy.powertools_eyebrow}</span>
          <h2 className="mt-4 mb-4">
            {copy.powertools_heading}
          </h2>
          <p className="mx-auto" style={{ maxWidth: '52ch', color: 'var(--color-brand-text-muted)' }}>
            {copy.powertools_body_1}
          </p>
          <p className="mx-auto mt-3" style={{ maxWidth: '52ch', color: 'var(--color-brand-text-muted)' }}>
            {copy.powertools_body_2}
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map(cat => (
            <div
              key={cat.label}
              className="p-6 flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-brand-warm-gray)',
                boxShadow: 'var(--shadow-card)',
                borderRadius: '0.625rem',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cat.color, border: `1px solid ${cat.borderColor}` }}
                >
                  <cat.icon className="w-5 h-5" style={{ color: cat.iconColor }} />
                </div>
                <span style={{
                  fontWeight: 700,
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-brand-text)',
                  letterSpacing: '-0.01em',
                }}>
                  {cat.label}
                </span>
              </div>

              {/* Items */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {cat.items.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', padding: '0.5rem 0.625rem', borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-off-white)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <span style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text)', fontWeight: 500, lineHeight: 1.4 }}>
                        {item.name}
                      </span>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700,
                        letterSpacing: '0.06em', textTransform: 'uppercase' as const,
                        color: 'var(--color-brand-sienna)',
                        backgroundColor: 'rgba(192,82,42,0.08)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '0.25rem',
                        flexShrink: 0,
                        whiteSpace: 'nowrap' as const,
                      }}>
                        {item.tag}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={copy.powertools_cta_url} style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'var(--color-brand-sienna)',
            color: '#ffffff',
            padding: '0.875rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: 'var(--text-small)',
            textDecoration: 'none',
          }}>
            {copy.powertools_cta_label} →
          </Link>
        </div>

      </div>
    </section>
  );
}