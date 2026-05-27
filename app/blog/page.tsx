// app/blog/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Dr Mark Pirtle',
  description: 'Explore insights on habits, healing, and self-improvement with Dr. Mark Pirtle.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: activeCategory } = await searchParams;
  const allPosts = await getAllPosts();
  const categories = getAllCategories();

  const posts = activeCategory
    ? allPosts.filter((p) => p.categories.includes(activeCategory))
    : allPosts;

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '4.5rem' }}>

      {/* Page header */}
      <section style={{
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '3rem 2rem 2.5rem',
        backgroundColor: '#fafaf9',
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.75rem' }}>
            Thought Leadership
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-brand-text)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Breaking Bad <em style={{ fontStyle: 'italic', fontWeight: 400 }}>(habits)</em>
          </h1>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-brand-text-light)', maxWidth: '42rem', lineHeight: 1.7 }}>
            We all have patterns we don&apos;t see—habits operating in the shadows, shaping how we live. This blog is about bringing them into the light.
          </p>
        </div>
      </section>

      {/* Category filter bar */}
      <section style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#ffffff', position: 'sticky', top: '4.5rem', zIndex: 10 }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.25rem', padding: '0.75rem 0', whiteSpace: 'nowrap' as const }}>
            <Link
              href="/blog"
              aria-label="Show all blog articles"
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1rem',
                borderRadius: '9999px', fontSize: 'var(--text-small)', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.15s',
                backgroundColor: !activeCategory ? 'var(--color-brand-text)' : 'transparent',
                color: !activeCategory ? '#ffffff' : 'var(--color-brand-text-light)',
                border: `1.5px solid ${!activeCategory ? 'var(--color-brand-text)' : 'rgba(0,0,0,0.12)'}`,
              }}
            >
              All Articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                aria-label={`Filter articles by ${cat}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1rem',
                  borderRadius: '9999px', fontSize: 'var(--text-small)', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.15s',
                  backgroundColor: activeCategory === cat ? 'var(--color-brand-text)' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : 'var(--color-brand-text-light)',
                  border: `1.5px solid ${activeCategory === cat ? 'var(--color-brand-text)' : 'rgba(0,0,0,0.12)'}`,
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-brand-text-light)', padding: '4rem 0' }}>
            No posts found in this category.
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap: '2rem',
          }}>
            {posts.map((post) => (
              <article
                key={post.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
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
                      style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                    />
                  </div>
                </Link>

                {/* Card body — flex col with space-between */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, padding: '1.25rem 1.25rem 1.25rem' }}>
                  {/* Top: categories + title + excerpt */}
                  <div>
                    {post.categories.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.625rem' }}>
                        {post.categories.slice(0, 2).map((cat) => (
                          <Link
                            key={cat}
                            href={`/blog?category=${encodeURIComponent(cat)}`}
                            aria-label={`Filter by category: ${cat}`}
                            style={{
                              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
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
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      fontWeight: 700,
                      color: 'var(--color-brand-text)',
                      lineHeight: 1.35,
                      marginBottom: '0.625rem',
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
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bottom: meta + CTA — always at bottom */}
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem' }}>
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
                        display: 'flex', alignItems: 'center', gap: '0.25rem',
                      }}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}