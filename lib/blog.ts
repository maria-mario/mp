// lib/blog.ts
// Data access layer for blog posts — reads from Directus `blog_posts`.
//
// `blog-data.ts` is retained as an offline fallback: if Directus is unreachable
// the blog still renders from the last known-good copy instead of erroring.
// Directus is the source of truth — edit posts there, not in blog-data.ts.

import { blogPosts, type BlogPost } from './blog-data';

export type { BlogPost };

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

/** Directus row shape — see `GET /fields/blog_posts`. */
type DirectusPost = {
  id: number;
  status: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  featured_image: string | null;
  author_name: string | null;
  categories: string[] | null;
  published_date: string | null;
};

const FIELDS = [
  'id', 'status', 'title', 'slug', 'excerpt', 'content',
  'featured_image', 'author_name', 'categories', 'published_date',
].join(',');

function assetUrl(fileId: string | null): string {
  return fileId ? `${DIRECTUS_URL}/assets/${fileId}` : '';
}

function toBlogPost(row: DirectusPost): BlogPost {
  return {
    id: String(row.id),
    slug: row.slug ?? '',
    title: row.title ?? '',
    excerpt: row.excerpt ?? '',
    content: row.content ?? '',
    featured_image: assetUrl(row.featured_image),
    categories: Array.isArray(row.categories) ? row.categories : [],
    author: row.author_name ?? 'Mark Pirtle',
    published_date: row.published_date ?? '',
    status: row.status === 'published' ? 'published' : 'draft',
  };
}

function fallbackPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => p.status === 'published')
    .sort((a, b) => b.published_date.localeCompare(a.published_date));
}

/** Published posts, newest first. Falls back to the bundled copy on failure. */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!DIRECTUS_URL) return fallbackPosts();

  try {
    const url =
      `${DIRECTUS_URL}/items/blog_posts` +
      `?filter[status][_eq]=published` +
      `&fields=${FIELDS}` +
      `&sort[]=-published_date` +
      `&limit=-1`;

    const res = await fetch(url, {
      headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {},
      next: { tags: ['blog-posts'] },
    });
    if (!res.ok) throw new Error(`Directus responded ${res.status}`);

    const json = await res.json();
    const rows: DirectusPost[] = json?.data ?? [];
    if (!rows.length) throw new Error('no published posts returned');

    return rows
      .map(toBlogPost)
      .filter((p) => p.slug)
      .sort((a, b) => b.published_date.localeCompare(a.published_date));
  } catch (err) {
    console.error('[blog] Directus fetch failed, using bundled fallback:', err);
    return fallbackPosts();
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.categories.includes(category));
}

/** Distinct categories across published posts, alphabetical. */
export async function getAllCategories(): Promise<string[]> {
  const all = await getAllPosts();
  const cats = new Set<string>();
  all.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return Array.from(cats).sort();
}

/**
 * The curated SkillfullyAware® taxonomy from the `blog_categories` collection —
 * the nav, filter bar and Browse by Topic all read this, so Mark controls the
 * category structure from Directus rather than from whatever tags posts carry.
 * Categories with no published posts are dropped so nothing links to an empty page.
 */
export type BlogCategory = { name: string; slug: string; description: string };

const TAXONOMY_FALLBACK: BlogCategory[] = [
  { name: 'Painful Patterns',       slug: 'painful-patterns',       description: 'Why patterns repeat' },
  { name: 'Habit Change',           slug: 'habit-change',           description: 'Practice changing what repeats' },
  { name: 'Leadership & Forums',    slug: 'leadership-forums',      description: 'For founders, forums, and teams' },
  { name: 'Mindfulness & Awareness', slug: 'mindfulness-awareness', description: 'Attention, practice, and SkillfullyAware®' },
  { name: 'SAAQ & Development',     slug: 'saaq-development',       description: 'Growth, blind spots, and next steps' },
];

export async function getCuratedCategories(): Promise<BlogCategory[]> {
  let curated = TAXONOMY_FALLBACK;

  if (DIRECTUS_URL) {
    try {
      const res = await fetch(
        `${DIRECTUS_URL}/items/blog_categories` +
          `?filter[visible][_eq]=true&fields=name,slug,nav_description&sort[]=sort&limit=-1`,
        {
          headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {},
          next: { tags: ['blog-categories'] },
        }
      );
      if (!res.ok) throw new Error(`Directus responded ${res.status}`);
      const rows: { name: string; slug: string; nav_description: string | null }[] =
        (await res.json())?.data ?? [];
      if (rows.length > 0) {
        curated = rows.map((r) => ({
          name: r.name,
          slug: r.slug,
          description: r.nav_description ?? '',
        }));
      }
    } catch (err) {
      console.error('[blog] category fetch failed, using bundled taxonomy:', err);
    }
  }

  // Hide categories with no published posts so nothing links to an empty page.
  // If the intersection comes back empty the post fetch fell back to the bundled
  // copy, which still carries the pre-V2 tags — show the full taxonomy rather
  // than an empty nav.
  const live = new Set(await getAllCategories());
  const withPosts = curated.filter((c) => live.has(c.name));
  return withPosts.length > 0 ? withPosts : curated;
}
