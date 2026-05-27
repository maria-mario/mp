// app/blog/page.tsx
// Pure Server Component — no client event handlers here
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog — Dr Mark Pirtle',
  description: 'Explore insights on habits, healing, and self-improvement with Dr. Mark Pirtle.',
};

// Next 16: searchParams is a Promise
type Props = { searchParams: Promise<{ category?: string }> };

export default async function BlogPage({ searchParams }: Props) {
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
          <p style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.75rem',
          }}>
            Thought Leadership
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-brand-text)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}>
            Breaking Bad <em style={{ fontStyle: 'italic', fontWeight: 400 }}>(habits)</em>
          </h1>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-brand-text-light)', maxWidth: '42rem', lineHeight: 1.7 }}>
            We all have patterns we don&apos;t see—habits operating in the shadows, shaping how we live. This blog is about bringing them into the light.
          </p>
        </div>
      </section>

      {/* Category filter bar — sticky */}
      <section style={{
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        backgroundColor: '#ffffff',
        position: 'sticky',
        top: '4.5rem',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.375rem', padding: '0.75rem 0', whiteSpace: 'nowrap' as const }}>

            <Link
              href="/blog"
              aria-label="Show all blog articles"
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '0.375rem 1rem',
                borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600,
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
                  display: 'inline-flex', alignItems: 'center', padding: '0.375rem 1rem',
                  borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600,
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
            alignItems: 'stretch',
          }}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}