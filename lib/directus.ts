import { createDirectus, rest, staticToken } from '@directus/sdk';

// Define your Directus collections schema
type DirectusSchema = {
  blog_posts: {
    id: string;
    status: 'draft' | 'published' | 'archived';
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image: string;
    published_date: string;
    seo_title?: string;
    seo_description?: string;
  }[];
  blog_categories: {
    id: string;
    name: string;
    slug: string;
    description?: string;
  }[];
  experiences: {
    id: string;
    status: 'draft' | 'published';
    title: string;
    slug: string;
    short_description: string;
    full_description: string;
    benefits?: string;
    photo_gallery: string[];
    seo_title?: string;
    seo_description?: string;
  }[];
  testimonials: {
    id: string;
    client_name: string;
    client_title?: string;
    client_location?: string;
    quote: string;
    video_url?: string;
    photo?: string;
    featured: boolean;
    display_order: number;
  }[];
  forum_retreat_inquiries: any[];
  interest_list_signups: any[];
  newsletter_subscribers: any[];
  powertools: any[];
  memberships: any[];
  pages: any[];
};

// Create Directus client
const directus = createDirectus<DirectusSchema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!
)
  .with(staticToken(process.env.DIRECTUS_STATIC_TOKEN!))
  .with(rest());

export default directus;

// Helper function to get asset URL
export function getAssetURL(fileId: string | null | undefined): string {
  if (!fileId) return '';
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileId}`;
}