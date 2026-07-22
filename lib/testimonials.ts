// lib/testimonials.ts
// Data access for the `testimonials` collection in Directus.
//
// FALLBACK_TESTIMONIALS is the bundled offline copy — if Directus is unreachable
// the section still renders the last known-good set instead of collapsing.
// Directus is the source of truth; edit testimonials there, not here.

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

export type TestimonialType = 'text' | 'video' | 'audio';

export interface Testimonial {
  id: number;
  type: TestimonialType;
  name: string;
  title: string;
  company?: string;
  location: string;
  quote: string;
  mediaUrl?: string;
  thumbnail?: string; // for video cards
}

/** Bundled fallback — also seeds Directus. Keep in sync only as a safety net. */
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    type: 'video',
    name: 'Bob Lambert',
    title: 'General Manager',
    company: 'Carte Hotel',
    location: 'San Diego, California',
    quote: "His approach to shadow work and emotional intelligence transformed our team dynamics. If your team needs alignment, bring Mark in—you won't regret it.",
    mediaUrl: 'https://vimeo.com/179221240',
  },
  {
    id: 2,
    type: 'text',
    name: 'John Lund',
    title: 'CEO & Business Strategy Coach',
    company: 'Serial Entrepreneur',
    location: 'Nebraska / Arizona',
    quote: "Dr. Pirtle's shadow work coaching has been transformative for both my personal and professional life. Through his guidance, I've developed a heightened ability to attune to myself, others, and situations. His insights are practical and profound, transferring seamlessly to any domain. I'm a better version of myself because of his coaching.",
  },
  {
    id: 3,
    type: 'video',
    name: 'Cristina Burgess',
    title: 'Founder',
    company: 'Augustina Luxury Boutique',
    location: 'Toronto, Canada',
    quote: 'Working with Dr. Pirtle has transformed my understanding of my mind, myself, and what it is to live with skillful awareness.',
    mediaUrl: 'https://vimeo.com/179221240',
  },
  {
    id: 4,
    type: 'text',
    name: 'Alex Hsu',
    title: 'Investor, Father, Seeker',
    location: 'California',
    quote: "I attended Mark Pirtle's men's retreat, and it was truly transformative. The shadow work and group sessions helped me confront parts of myself I had been avoiding for years. I left with new friendships I know will last.",
  },
  {
    id: 5,
    type: 'audio',
    name: 'Forum Leader',
    title: 'EO Chapter President',
    location: 'Texas',
    quote: 'The retreat experience exceeded every expectation. Mark has a rare gift for creating psychological safety in a group, allowing real transformation to happen.',
    mediaUrl: '/audio/testimonial-sample.mp3',
  },
];

type DirectusTestimonial = {
  id: number;
  type: string | null;
  client_name: string | null;
  client_title: string | null;
  company: string | null;
  location: string | null;
  quote: string | null;
  video_url: string | null;
  audio_url: string | null;
  photo: string | null;
  display_order: number | null;
};

const FIELDS = [
  'id', 'type', 'client_name', 'client_title', 'company', 'location',
  'quote', 'video_url', 'audio_url', 'photo', 'display_order',
].join(',');

function assetUrl(fileId: string | null): string | undefined {
  return fileId ? `${DIRECTUS_URL}/assets/${fileId}` : undefined;
}

function toTestimonial(row: DirectusTestimonial): Testimonial {
  const type: TestimonialType =
    row.type === 'video' || row.type === 'audio' ? row.type : 'text';
  const mediaUrl =
    type === 'video' ? row.video_url ?? undefined
      : type === 'audio' ? row.audio_url ?? undefined
        : undefined;
  return {
    id: row.id,
    type,
    name: row.client_name ?? '',
    title: row.client_title ?? '',
    company: row.company ?? undefined,
    location: row.location ?? '',
    quote: row.quote ?? '',
    mediaUrl,
    thumbnail: assetUrl(row.photo),
  };
}

/** Published testimonials ordered by display_order. Falls back to bundled copy. */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!DIRECTUS_URL) return FALLBACK_TESTIMONIALS;

  try {
    const url =
      `${DIRECTUS_URL}/items/testimonials` +
      `?filter[status][_eq]=published` +
      `&fields=${FIELDS}` +
      `&sort[]=display_order` +
      `&limit=-1`;

    const res = await fetch(url, {
      headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {},
      next: { tags: ['testimonials'] },
    });
    if (!res.ok) throw new Error(`Directus responded ${res.status}`);

    const rows: DirectusTestimonial[] = (await res.json())?.data ?? [];
    if (!rows.length) throw new Error('no published testimonials returned');

    return rows.map(toTestimonial).filter((t) => t.name && t.quote);
  } catch (err) {
    console.error('[testimonials] Directus fetch failed, using bundled fallback:', err);
    return FALLBACK_TESTIMONIALS;
  }
}
