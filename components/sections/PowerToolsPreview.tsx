'use client';

import type { ElementType } from 'react';
import Link from 'next/link';
import { BookOpen, Video, Headphones, Film } from 'lucide-react';

type ToolItem = { name: string; href: string; tag: string; external?: boolean };

const categories: {
  icon: ElementType;
  label: string;
  color: string;
  borderColor: string;
  iconColor: string;
  items: ToolItem[];
}[] = [
  {
    icon: Video,
    label: 'Online Classes',
    color: 'rgba(192,82,42,0.12)',
    borderColor: 'rgba(192,82,42,0.25)',
    iconColor: 'var(--color-brand-sienna)',
    items: [
      { name: 'Project SkillfullyAware',        href: '/power-tools/project-sa',  tag: 'Class' },
      { name: 'Overcoming Addictive Behaviors',  href: '/power-tools/addictive',   tag: 'Class' },
    ],
  },
  {
    icon: BookOpen,
    label: 'Workbooks',
    color: 'rgba(26,26,26,0.04)',
    borderColor: 'rgba(26,26,26,0.1)',
    iconColor: 'var(--color-brand-text)',
    items: [
      { name: 'Becoming SkillfullyAware',  href: '/power-tools/workbook-sa',  tag: 'PDF' },
      { name: 'Raising Awareness',          href: '/power-tools/workbook-ra',  tag: 'PDF' },
      { name: 'Chasing Shadow Work',        href: '/power-tools/workbook-csw', tag: 'PDF' },
    ],
  },
  {
    icon: Headphones,
    label: 'Meditation Programs',
    color: 'rgba(192,82,42,0.08)',
    borderColor: 'rgba(192,82,42,0.2)',
    iconColor: 'var(--color-brand-sienna)',
    items: [
      { name: 'Feel Better Series',     href: '/power-tools/feel-better',   tag: 'Audio + PDF' },
      { name: 'Learn To Meditate',      href: '/power-tools/meditate',      tag: 'Audio' },
      { name: 'Comprehensive Program',  href: '/power-tools/comprehensive', tag: 'Bundle' },
    ],
  },
  {
    icon: Film,
    label: 'Media',
    color: 'rgba(26,26,26,0.04)',
    borderColor: 'rgba(26,26,26,0.1)',
    iconColor: 'var(--color-brand-text)',
    items: [
      { name: 'The Book',  href: 'https://www.wholehearted.org/', tag: 'Book',      external: true },
      { name: 'Doc Film',  href: 'https://www.wholehearted.org/', tag: 'Film',      external: true },
    ],
  },
];

export function PowerToolsPreview() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-brand-off-white)' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider mx-auto mb-4" />
          <span className="eyebrow">Power Tools</span>
          <h2 className="mt-4 mb-4">
            Practice the Change
          </h2>
          <p className="mx-auto" style={{ maxWidth: '52ch', color: 'var(--color-brand-text-muted)' }}>
            Insight matters, but insight alone rarely changes a pattern.
          </p>
          <p className="mx-auto mt-3" style={{ maxWidth: '52ch', color: 'var(--color-brand-text-muted)' }}>
            Power Tools are online classes, workbooks, guided meditations, and practical exercises
            that help you work with attention, emotion, habits, reactions, and relationships in daily life.
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

      </div>
    </section>
  );
}