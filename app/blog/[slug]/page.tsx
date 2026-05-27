// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

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
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.featured_image }], type: 'article', publishedTime: post.published_date },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.featured_image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  // Related posts: same category, excluding current, max 3
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '4.5rem' }}>

      {/* Hero image — full width */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '21/7', backgroundColor: '#f0ede8', maxHeight: '36rem', overflow: 'hidden' }}>
        <Image src={post.featured_image} alt={post.title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55))' }} />
      </div>

      {/* Main layout: content + sidebar */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem 5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
        className="lg:grid-cols-[1fr_20rem]">

        {/* ── LEFT: Article ── */}
        <article style={{ minWidth: 0 }}>

          {/* Breadcrumb */}
          <nav style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)', padding: '1.5rem 0 0' }}>
            <Link href="/blog" style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            {post.categories[0] && (
              <>
                <Link href={`/blog?category=${encodeURIComponent(post.categories[0])}`} style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }}>
                  {post.categories[0]}
                </Link>
                <span>/</span>
              </>
            )}
            <span style={{ color: 'var(--color-brand-text)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '20rem' }}>
              {post.title}
            </span>
          </nav>

          {/* Category pills */}
          {post.categories.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {post.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  aria-label={`Filter by ${cat}`}
                  style={{
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-brand-sienna)', textDecoration: 'none', padding: '0.3rem 0.75rem',
                    border: '1.5px solid var(--color-brand-sienna)', borderRadius: '9999px',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--color-brand-text)', lineHeight: 1.2, marginTop: '1rem', marginBottom: '1rem' }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '9999px', backgroundColor: 'var(--color-brand-warm-gray)', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
              <Image src="/logos/logo.webp" alt="Mark Pirtle" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--color-brand-text)' }}>{post.author}</div>
              <time dateTime={post.published_date} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)' }}>
                {new Date(post.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </div>

          {/* Post body */}
          <div
            className="blog-content"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--color-brand-text)',
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Prev / Next */}
          <nav aria-label="Post navigation" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            {prev ? (
              <Link href={`/blog/${prev.slug}`} aria-label={`Previous post: ${prev.title}`} style={{ flex: 1, textDecoration: 'none' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)', marginBottom: '0.25rem' }}>← Previous</span>
                <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--color-brand-text)' }}>{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/blog/${next.slug}`} aria-label={`Next post: ${next.title}`} style={{ flex: 1, textAlign: 'right', textDecoration: 'none' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-brand-text-muted)', marginBottom: '0.25rem' }}>Next →</span>
                <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--color-brand-text)' }}>{next.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </article>

        {/* ── RIGHT: Sidebar ── */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '3.5rem' }}>

          {/* Newsletter signup */}
          <div style={{ backgroundColor: '#fafaf9', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>✉️</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.5rem' }}>
              Stay SkillfullyAware®
            </h3>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Get the latest insights, practices, and transformative wisdom delivered straight to your inbox.
            </p>
            <form action="/api/newsletter" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <input type="email" name="email" required placeholder="your@email.com" className="form-input" style={{ fontSize: 'var(--text-small)' }} />
              <button type="submit" style={{
                backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff', fontWeight: 700,
                fontSize: 'var(--text-small)', border: 'none', borderRadius: '0.5rem',
                padding: '0.65rem 1rem', cursor: 'pointer', transition: 'opacity 0.15s',
              }}>
                Subscribe →
              </button>
            </form>
            <p style={{ fontSize: '0.65rem', color: 'var(--color-brand-text-muted)', marginTop: '0.625rem' }}>No spam. Unsubscribe anytime.</p>
          </div>

          {/* Book CTA */}
          <div style={{ backgroundColor: 'var(--color-brand-text)', borderRadius: '1rem', padding: '1.5rem', color: '#ffffff' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>📖</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.375rem', color: '#ffffff' }}>
              The Healing Mindset
            </h3>
            <p style={{ fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Mastering the Art of Skillful Awareness — Mark&apos;s upcoming book. Join the launch team for early access, a signed copy, and a live class.
            </p>
            <Link href="/contact" style={{
              display: 'block', textAlign: 'center',
              backgroundColor: 'var(--color-brand-sienna)', color: '#ffffff',
              fontWeight: 700, fontSize: 'var(--text-small)', textDecoration: 'none',
              borderRadius: '0.5rem', padding: '0.65rem 1rem', transition: 'opacity 0.15s',
            }}>
              Join the Book Launch Team →
            </Link>
          </div>

          {/* Membership CTA */}
          <div style={{ backgroundColor: '#f0ede8', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>🔑</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.375rem' }}>
              Power Tools Access
            </h3>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Get unlimited access to online courses, workbooks, meditation programs, and the full SkillfullyAware® toolkit.
            </p>
            <Link href="/members" style={{
              display: 'block', textAlign: 'center',
              backgroundColor: 'var(--color-brand-text)', color: '#ffffff',
              fontWeight: 700, fontSize: 'var(--text-small)', textDecoration: 'none',
              borderRadius: '0.5rem', padding: '0.65rem 1rem', transition: 'opacity 0.15s',
            }}>
              Explore Membership →
            </Link>
          </div>

          {/* Retreats CTA */}
          <div style={{ border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '1rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>🌿</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '0.375rem' }}>
              Work With Mark
            </h3>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-brand-text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Forum retreats, SAAQ coaching, and plant medicine experiences at Tubac Ranch, Arizona.
            </p>
            <Link href="/forum-retreats" style={{
              display: 'block', textAlign: 'center',
              border: '1.5px solid var(--color-brand-text)', color: 'var(--color-brand-text)',
              fontWeight: 700, fontSize: 'var(--text-small)', textDecoration: 'none',
              borderRadius: '0.5rem', padding: '0.625rem 1rem', transition: 'background 0.15s, color 0.15s',
            }}>
              Explore Retreats →
            </Link>
          </div>
        </aside>
      </div>

      {/* ── You May Also Like ── */}
      {related.length > 0 && (
        <section style={{ borderTop: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#fafaf9', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-brand-text)', marginBottom: '2rem' }}>
              You May Also Like
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))', gap: '1.5rem' }}>
              {related.map((rel) => (
                <article key={rel.id} style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <Link href={`/blog/${rel.slug}`} aria-label={`Read: ${rel.title}`} style={{ display: 'block', flexShrink: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '16/8', backgroundColor: '#f0ede8' }}>
                      <Image src={rel.featured_image} alt={rel.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    </div>
                  </Link>
                  <div style={{ padding: '1.125rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {rel.categories[0] && (
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-brand-sienna)', marginBottom: '0.375rem' }}>
                          {rel.categories[0]}
                        </p>
                      )}
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brand-text)', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                        <Link href={`/blog/${rel.slug}`} aria-label={`Read: ${rel.title}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {rel.title}
                        </Link>
                      </h3>
                    </div>
                    <Link href={`/blog/${rel.slug}`} aria-label={`Read full article: ${rel.title}`} style={{ fontSize: 'var(--text-small)', fontWeight: 700, color: 'var(--color-brand-sienna)', textDecoration: 'none', marginTop: '0.75rem' }}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}