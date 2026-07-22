// app/blog/[slug]/page.tsx
// Pure Server Component — no client event handlers
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { getSiteMedia } from '@/lib/site-settings';
import BlogCard from '@/components/blog/BlogCard';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dr Mark Pirtle`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.featured_image }],
      type: 'article',
      publishedTime: post.published_date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [allPosts, media] = await Promise.all([getAllPosts(), getSiteMedia()]);
  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  // Related: same category, exclude current, max 3
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '4.5rem' }}>

      {/* Hero */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '21/7', backgroundColor: '#f0ede8', maxHeight: '36rem', overflow: 'hidden' }}>
        <Image src={post.featured_image} alt={post.title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }} />
      </div>

      {/* Two-column layout */}
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 2rem 5rem',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gap: '3rem',
      }}>
        {/*
          We can't use Tailwind className for responsive grid in pure inline styles.
          Use a <style> tag for the responsive breakpoint.
        */}
        <style>{`
          @media (min-width: 1024px) {
            .blog-post-grid { grid-template-columns: minmax(0,1fr) 22rem !important; }
          }
          .blog-content p { margin-bottom: 1.25rem; }
          .blog-content h2 { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-brand-text); }
          .blog-content h3 { font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.75rem; color: var(--color-brand-text); }
          .blog-content h4 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--color-brand-text); }
          .blog-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
          .blog-content ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
          .blog-content li { margin-bottom: 0.375rem; }
          .blog-content strong { font-weight: 700; }
          .blog-content em { font-style: italic; }
          .blog-content a { color: var(--color-brand-sienna); text-decoration: underline; }
          .blog-content blockquote { border-left: 3px solid var(--color-brand-sienna); padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: var(--color-brand-text-light); }
          .blog-content hr { border: none; border-top: 1px solid rgba(0,0,0,0.1); margin: 2rem 0; }
        `}</style>

        <div className="blog-post-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3rem',
        }}>

          {/* ── LEFT: Article ── */}
          <article style={{ minWidth: 0 }}>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', fontSize: '0.75rem', color: 'var(--color-brand-text-muted)', padding: '1.5rem 0 0', flexWrap: 'wrap' }}
            >
              <Link href="/blog" style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }}>Blog</Link>
              <span aria-hidden>/</span>
              {post.categories[0] && (
                <>
                  <Link href={`/blog?category=${encodeURIComponent(post.categories[0])}`} style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }}>
                    {post.categories[0]}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
              <span style={{ color: 'var(--color-brand-text)', fontWeight: 500 }}>{post.title}</span>
            </nav>

            {/* Category pills */}
            {post.categories.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                {post.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    aria-label={`Filter posts by ${cat}`}
                    style={{
                      fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--color-brand-sienna)',
                      textDecoration: 'none', padding: '0.25rem 0.75rem',
                      border: '1.5px solid var(--color-brand-sienna)', borderRadius: '9999px',
                    }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--color-brand-text)',
              lineHeight: 1.2,
              marginTop: '1rem',
              marginBottom: '1rem',
            }}>
              {post.title}
            </h1>

            {/* Author / date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '9999px', backgroundColor: '#e8e4de', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                <Image src={media.logoMark} alt="Mark Pirtle" fill sizes="2.25rem" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand-text)' }}>{post.author}</div>
                <time dateTime={post.published_date} style={{ fontSize: '0.75rem', color: 'var(--color-brand-text-muted)' }}>
                  {new Date(post.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
            </div>

            {/* Body */}
            <div
              className="blog-content"
              style={{ fontSize: 'var(--text-body)', color: 'var(--color-brand-text)', lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Prev / Next */}
            <nav
              aria-label="Post navigation"
              style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}
            >
              {prev ? (
                <Link href={`/blog/${prev.slug}`} aria-label={`Previous post: ${prev.title}`} style={{ flex: 1, minWidth: '12rem', textDecoration: 'none' }}>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-brand-text-muted)', marginBottom: '0.25rem' }}>← Previous</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand-text)' }}>{prev.title}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} aria-label={`Next post: ${next.title}`} style={{ flex: 1, minWidth: '12rem', textAlign: 'right', textDecoration: 'none' }}>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-brand-text-muted)', marginBottom: '0.25rem' }}>Next →</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand-text)' }}>{next.title}</span>
                </Link>
              ) : <div />}
            </nav>
          </article>

          {/* ── RIGHT: Sidebar ── */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '3.5rem' }}>

            {/* Newsletter */}
            <div style={{ backgroundColor: '#fafaf9', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}>✉️</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.5rem' }}>
                Stay SkillfullyAware®
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Get the latest insights, practices, and transformative wisdom delivered straight to your inbox.
              </p>
              <form action="/api/newsletter" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <input
                  type="email" name="email" required placeholder="your@email.com"
                  style={{ padding: '0.6rem 0.875rem', borderRadius: '0.5rem', border: '1.5px solid rgba(0,0,0,0.15)', fontSize: '0.875rem', outline: 'none', width: '100%' }}
                />
                <button type="submit" style={{
                  backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff', fontWeight: 700,
                  fontSize: '0.875rem', border: 'none', borderRadius: '0.5rem',
                  padding: '0.65rem 1rem', cursor: 'pointer',
                }}>
                  Subscribe →
                </button>
              </form>
              <p style={{ fontSize: '0.65rem', color: 'var(--color-brand-text-muted)', marginTop: '0.625rem' }}>No spam. Unsubscribe anytime.</p>
            </div>

            {/* Book CTA */}
            <div style={{ backgroundColor: 'var(--color-brand-text)', borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}>📖</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.375rem' }}>
                The Healing Mindset
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Mastering the Art of Skillful Awareness — Mark&apos;s upcoming book. Join the launch team for early access and a signed copy.
              </p>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center',
                backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                borderRadius: '0.5rem', padding: '0.65rem 1rem',
              }}>
                Join the Book Launch Team →
              </Link>
            </div>

            {/* Membership CTA — removed in Phase 1: /members route does not exist
                and memberships are dormant. Restore when the member area ships. */}

            {/* Retreats CTA */}
            <div style={{ border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem' }}>🌿</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.375rem' }}>
                Work With Mark
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Forum retreats, SAAQ coaching, and plant medicine experiences at Tubac Ranch, Arizona.
              </p>
              <Link href="/forum-retreats" style={{
                display: 'block', textAlign: 'center',
                border: '1.5px solid var(--color-brand-text)', color: 'var(--color-brand-text)',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                borderRadius: '0.5rem', padding: '0.625rem 1rem',
              }}>
                Explore Retreats →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ── You May Also Like ── */}
      {related.length > 0 && (
        <section
          aria-label="Related articles"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#fafaf9', padding: '4rem 2rem' }}
        >
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '2rem' }}>
              You May Also Like
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
              {related.map((rel) => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}