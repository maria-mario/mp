// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

// Next 15+ — params is now a Promise
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

  const allPosts = await getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/blog" className="hover:text-black">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Categories */}
      {post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className="text-xs uppercase tracking-widest text-gray-500 hover:text-black"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      <h1 className="text-4xl font-bold leading-tight mb-4">{post.title}</h1>

      <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
        <span>{post.author}</span>
        <span>·</span>
        <time dateTime={post.published_date}>
          {new Date(post.published_date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </div>

      <div className="relative aspect-[16/8] w-full rounded-lg overflow-hidden mb-10 bg-gray-100">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Post body */}
      <div
        className="
          text-gray-800 leading-relaxed text-base
          [&_p]:mb-5
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
          [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul>li]:mb-1.5
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol>li]:mb-1.5
          [&_strong]:font-semibold
          [&_em]:italic
          [&_a]:underline [&_a]:text-black [&_a]:hover:opacity-70
          [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-5
          [&_hr]:my-8 [&_hr]:border-gray-200
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Prev / Next */}
      <nav className="mt-16 pt-8 border-t border-gray-200 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="flex-1 group">
            <span className="block text-gray-400 mb-1">← Previous</span>
            <span className="font-medium group-hover:underline">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="flex-1 text-right group">
            <span className="block text-gray-400 mb-1">Next →</span>
            <span className="font-medium group-hover:underline">{next.title}</span>
          </Link>
        ) : <div />}
      </nav>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}