// app/blog/page.tsx
// Pure Server Component — no client event handlers here.
// Hero copy, SEO and the Browse by Topic block all come from the `/blog` page
// row in Directus; the article grid comes from `blog_posts`.
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCuratedCategories } from '@/lib/blog';
import { getPageBySlug, buildMetadata, type PageBlock, type BlockHeroData } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import BlogCard from '@/components/blog/BlogCard';

const DEFAULT_META = {
  title: 'Blog | Essays on Patterns, Leadership & Growth | Dr. Mark Pirtle',
  description:
    'Essays from Dr. Mark Pirtle on painful patterns, habit change, mindfulness, leadership, the SAAQ, and becoming more SkillfullyAware in life, relationships, and work.',
};

const DEFAULT_HERO = {
  eyebrow: 'The Blog',
  heading: 'Essays on Patterns, Leadership & Growth',
  body:
    'Short, practical reflections on why painful patterns repeat, why change is hard, and how people can become more SkillfullyAware in life, relationships, and leadership.',
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('/blog');
  return buildMetadata(page?.seo, DEFAULT_META);
}

// Next 16: searchParams is a Promise
type Props = { searchParams: Promise<{ category?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const [{ category: activeCategory }, allPosts, categories, page] = await Promise.all([
    searchParams,
    getAllPosts(),
    getCuratedCategories(),
    getPageBySlug('/blog'),
  ]);

  const posts = activeCategory
    ? allPosts.filter((p) => p.categories.includes(activeCategory))
    : allPosts;

  // The hero block drives the page header; everything after it renders below
  // the article grid, so Mark can add topic cards, CTAs or a newsletter band.
  const blocks: PageBlock[] = page?.blocks ?? [];
  const heroBlock = blocks.find((b) => b.collection === 'blocks_hero');
  const hero = (heroBlock?.item as BlockHeroData | undefined) ?? DEFAULT_HERO;
  const trailingBlocks = blocks.filter((b) => b !== heroBlock);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '4.5rem' }}>

      {/* Page header */}
      <section style={{
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '3rem 0 2.5rem',
        backgroundColor: '#fafaf9',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.75rem',
          }}>
            {hero.eyebrow}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-brand-text)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}>
            {hero.heading}
          </h1>
          {hero.body?.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontSize: 'var(--text-body)',
              color: 'var(--color-brand-text-light)',
              maxWidth: '42rem',
              lineHeight: 1.7,
              marginBottom: '0.75rem',
            }}>
              {para}
            </p>
          ))}
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
        <div className="container" style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.375rem', padding: '0.75rem 0', whiteSpace: 'nowrap' as const }}>

            <Link
              href="/blog"
              aria-label="Show all essays"
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '0.375rem 1rem',
                borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600,
                textDecoration: 'none', transition: 'all 0.15s',
                backgroundColor: !activeCategory ? 'var(--color-brand-text)' : 'transparent',
                color: !activeCategory ? '#ffffff' : 'var(--color-brand-text-light)',
                border: `1.5px solid ${!activeCategory ? 'var(--color-brand-text)' : 'rgba(0,0,0,0.12)'}`,
              }}
            >
              All Essays
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${encodeURIComponent(cat.name)}`}
                aria-label={`Filter essays by ${cat.name}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', padding: '0.375rem 1rem',
                  borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.15s',
                  backgroundColor: activeCategory === cat.name ? 'var(--color-brand-text)' : 'transparent',
                  color: activeCategory === cat.name ? '#ffffff' : 'var(--color-brand-text-light)',
                  border: `1.5px solid ${activeCategory === cat.name ? 'var(--color-brand-text)' : 'rgba(0,0,0,0.12)'}`,
                }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section id="latest" className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-brand-text-light)', padding: '4rem 0' }}>
            No essays found in this category.
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

      {trailingBlocks.length > 0 && <BlockRenderer blocks={trailingBlocks} />}
    </main>
  );
}
