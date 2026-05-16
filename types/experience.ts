
export type ExperienceType = 'core' | 'premium' | 'premium-request';

export interface Experience {
  id: string;
  status: 'draft' | 'published';
  title: string;
  slug: string;
  type: ExperienceType;
  hero_headline: string;
  hero_subheadline: string;
  hero_image: string;
  label_text: string;
  hook_text: string;                // 3-4 sentence hook block
  what_is_it: string;              // Rich text / markdown, 3 paragraphs
  inclusion_heading: string;
  inclusion_body: string;
  why_it_works_intro: string;
  benefits: Benefit[];
  forum_block_body: string;
  testimonial_quote?: string;
  testimonial_name?: string;
  testimonial_company?: string;
  photo_gallery: string[];
  primary_cta_heading: string;
  primary_cta_body: string;
  secondary_cta_heading: string;
  secondary_cta_body: string;
  footer_experience_links: string[]; // slugs of related experiences
  seo_title: string;
  seo_description: string;
  primary_keyword: string;
}

export interface Benefit {
  label: string;
  description: string;
}