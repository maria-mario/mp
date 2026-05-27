// app/blog/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Transform Your Mindset - Get Started Today — Dr Mark Pirtle',
  description:
    'Explore insights on habits, healing, and self-improvement with Dr. Mark Pirtle. Discover practical strategies for personal growth, resilience, and mental well-being.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allPosts = await getAllPosts();
  const categories = getAllCategories();
  const activeCategory = searchParams.category;

  const posts = activeCategory
    ? allPosts.filter((p) => p.categories.includes(activeCategory))
    : allPosts;

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Breaking Bad <span className="italic font-normal">(habits)</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We all have patterns we don&apos;t see—habits operating in the shadows, shaping how we
          live. This blog is about bringing them into the light, understanding where they come from,
          and finding real solutions that stick.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <Link
          href="/blog"
          className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
            !activeCategory
              ? 'bg-black text-white border-black'
              : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              activeCategory === cat
                ? 'bg-black text-white border-black'
                : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col group">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg mb-4">
              <div className="relative aspect-[16/8] w-full bg-gray-100">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>

            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {post.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    className="text-xs text-gray-500 uppercase tracking-wide hover:text-black"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2 group-hover:underline leading-snug">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
              <span>{post.author}</span>
              <span>
                {new Date(post.published_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 text-sm font-medium text-black hover:underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 py-16">No posts found in this category.</p>
      )}
    </main>
  );
}