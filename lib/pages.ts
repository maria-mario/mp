// Types and fetch for the CMS page + block system

export type BlockBackground = 'navy' | 'cream' | 'white' | 'sienna';

export type BlockHeroData = {
  id: number;
  eyebrow?: string;
  heading: string;
  body?: string;
  cta_primary_label?: string;
  cta_primary_url?: string;
  cta_secondary_label?: string;
  cta_secondary_url?: string;
  background?: 'navy' | 'cream' | 'white';
};

export type BlockRichtextData = {
  id: number;
  eyebrow?: string;
  heading?: string;
  body: string;
  narrow?: boolean;
  align?: 'left' | 'center';
  background?: 'cream' | 'white' | 'navy';
};

export type BlockCtaData = {
  id: number;
  heading: string;
  body?: string;
  cta_primary_label?: string;
  cta_primary_url?: string;
  cta_secondary_label?: string;
  cta_secondary_url?: string;
  background?: 'sienna' | 'navy' | 'cream';
};

export type CardItem = {
  heading?: string;
  subheading?: string;
  body?: string;
  cta_label?: string;
  cta_url?: string;
};

export type BlockCardsData = {
  id: number;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  columns?: 2 | 3;
  cards?: CardItem[];
};

export type PricingOption = {
  heading?: string;
  price?: string;
  body?: string;
  note?: string;
  cta_label?: string;
  cta_url?: string;
};

export type BlockPricingData = {
  id: number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  options?: PricingOption[];
};

export type StepItem = { title?: string; body?: string };

export type BlockStepsData = {
  id: number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps?: StepItem[];
};

export type ChecklistItem = { title?: string; body?: string };

export type BlockChecklistData = {
  id: number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  items?: ChecklistItem[];
};

export type BlockCollectionName =
  | 'blocks_hero'
  | 'blocks_richtext'
  | 'blocks_cta'
  | 'blocks_cards'
  | 'blocks_pricing'
  | 'blocks_steps'
  | 'blocks_checklist';

export type PageBlock =
  | { id: number; sort: number; collection: 'blocks_hero';      item: BlockHeroData }
  | { id: number; sort: number; collection: 'blocks_richtext';  item: BlockRichtextData }
  | { id: number; sort: number; collection: 'blocks_cta';       item: BlockCtaData }
  | { id: number; sort: number; collection: 'blocks_cards';     item: BlockCardsData }
  | { id: number; sort: number; collection: 'blocks_pricing';   item: BlockPricingData }
  | { id: number; sort: number; collection: 'blocks_steps';     item: BlockStepsData }
  | { id: number; sort: number; collection: 'blocks_checklist'; item: BlockChecklistData };

export type PageData = {
  id: number;
  slug: string;
  title: string;
  status: 'published' | 'draft';
  seo?: { page_title?: string; meta_description?: string };
  blocks: PageBlock[];
};

// All M2A block types resolved in one query
const BLOCK_FIELDS = [
  'blocks.sort',
  'blocks.collection',
  'blocks.item:blocks_hero.*',
  'blocks.item:blocks_richtext.*',
  'blocks.item:blocks_cta.*',
  'blocks.item:blocks_cards.*',
  'blocks.item:blocks_pricing.*',
  'blocks.item:blocks_steps.*',
  'blocks.item:blocks_checklist.*',
].join(',');

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  const base = process.env.NEXT_PUBLIC_DIRECTUS_URL;
  const token = process.env.DIRECTUS_STATIC_TOKEN;

  const url =
    `${base}/items/pages` +
    `?filter[slug][_eq]=${encodeURIComponent(slug)}` +
    `&filter[status][_eq]=published` +
    `&fields=id,slug,title,status,seo,${BLOCK_FIELDS}` +
    `&sort[]=blocks.sort` +
    `&limit=1`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const page = json?.data?.[0];
    if (!page) return null;
    return page as PageData;
  } catch {
    return null;
  }
}
