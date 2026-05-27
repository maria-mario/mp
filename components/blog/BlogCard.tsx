'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { BlogPost } from '@/lib/blog-data';

export default function BlogCard({ post }: { post: BlogPost }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        height: '100%',
      }}
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read article: ${post.title}`}
        style={{ display: 'block', flexShrink: 0 }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/8', backgroundColor: '#f0ede8', overflow: 'hidden' }}>
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'transform 0.4s', transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
          />
        </div>
      </Link>

      {/* Card body — flex col, space-between so "Read More" is always at bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, padding: '1.25rem' }}>

        {/* Top: categories + title + excerpt */}
        <div>
          {post.categories.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.5rem' }}>
              {post.categories.slice(0, 2).map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  aria-label={`Filter by category: ${cat}`}
                  style={{
                    fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.09em',
                    textTransform: 'uppercase', color: 'var(--color-brand-sienna)',
                    textDecoration: 'none',
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--color-brand-text)',
            lineHeight: 1.35,
            marginBottom: '0.5rem',
          }}>
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Read: ${post.title}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {post.title}
            </Link>
          </h2>

          <p style={{
            fontSize: 'var(--text-small)',
            color: 'var(--color-brand-text-light)',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>
            {post.excerpt}
          </p>
        </div>

        {/* Bottom: date + CTA — always pinned to bottom */}
        <div style={{
          marginTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          paddingTop: '1rem',
        }}>
          <time
            dateTime={post.published_date}
            style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)' }}
          >
            {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Read full article: ${post.title}`}
            style={{
              fontSize: 'var(--text-small)', fontWeight: 700,
              color: 'var(--color-brand-sienna)', textDecoration: 'none',
            }}
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}