// lib/blog.ts
// Data access layer — swap these function bodies for Directus SDK calls
// when you're ready. Nothing else in the codebase needs to change.

import { blogPosts, type BlogPost } from './blog-data';

export type { BlogPost };

export async function getAllPosts(): Promise<BlogPost[]> {
  // Directus version:
  // const { data } = await directus.items('blog_posts').readByQuery({
  //   filter: { status: { _eq: 'published' } },
  //   sort: ['-published_date'],
  //   fields: ['*'],
  // });
  // return data ?? [];

  return blogPosts
    .filter((p) => p.status === 'published')
    .sort((a, b) => b.published_date.localeCompare(a.published_date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Directus version:
  // const { data } = await directus.items('blog_posts').readByQuery({
  //   filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
  //   limit: 1,
  //   fields: ['*'],
  // });
  // return data?.[0] ?? null;

  return blogPosts.find((p) => p.slug === slug && p.status === 'published') ?? null;
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.categories.includes(category));
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  blogPosts.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return Array.from(cats).sort();
}