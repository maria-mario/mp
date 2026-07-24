// lib/homepage.ts
// Homepage copy, managed in the Directus `homepage` singleton.
//
// The layout lives in the section components; every string on the page lives
// here. Each field falls back to the copy signed off in Homepage Copy Edits V3
// so the page never renders empty if Directus is unreachable.

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

export type HeroCta = { title: string; subtitle: string; url: string };
export type PathCard = {
  eyebrow: string; heading: string; subheading: string;
  body: string; path_line: string; cta_label: string; cta_url: string;
};
export type LinkedItem = { title: string; body: string; cta_label: string; cta_url: string };
export type PowerToolItem = {
  category: string; name: string; href: string; tag: string; external?: boolean;
};

export type HomepageCopy = {
  hero_headline: string;
  hero_body_1: string;
  hero_body_2: string;
  hero_orientation_line: string;
  hero_ctas: HeroCta[];
  hero_scroll_label: string;
  hero_scroll_url: string;

  path_eyebrow: string;
  path_heading: string;
  path_intro: string;
  path_cards: PathCard[];

  ecosystem_eyebrow: string;
  ecosystem_heading: string;
  ecosystem_intro: string;
  ecosystem_items: LinkedItem[];

  leadership_eyebrow: string;
  leadership_heading: string;
  leadership_body_1: string;
  leadership_body_2: string;
  leadership_cards: LinkedItem[];

  book_eyebrow: string;
  book_heading: string;
  book_body_1: string;
  book_body_2: string;
  book_body_3: string;
  book_cta_primary_label: string;
  book_cta_primary_url: string;
  book_cta_secondary_label: string;
  book_cta_secondary_url: string;

  saaq_eyebrow: string;
  saaq_heading: string;
  saaq_body_1: string;
  saaq_body_2: string;
  saaq_body_3: string;
  saaq_cta_label: string;
  saaq_cta_url: string;
  saaq_cta_secondary_label: string;
  saaq_cta_secondary_url: string;

  powertools_eyebrow: string;
  powertools_heading: string;
  powertools_body_1: string;
  powertools_body_2: string;
  powertools_items: PowerToolItem[];
  powertools_cta_label: string;
  powertools_cta_url: string;

  about_eyebrow: string;
  about_heading: string;
  about_body_1: string;
  about_body_2: string;
  about_body_3: string;
  about_cta_primary_label: string;
  about_cta_primary_url: string;
  about_cta_secondary_label: string;
  about_cta_secondary_url: string;

  testimonials_eyebrow: string;
  testimonials_heading: string;
  testimonials_intro: string;

  blog_eyebrow: string;
  blog_heading: string;
  blog_body: string;
  blog_cta_label: string;
  blog_cta_url: string;

  final_heading: string;
  final_body: string;
  final_cta_primary_label: string;
  final_cta_primary_url: string;
  final_cta_secondary_label: string;
  final_cta_secondary_url: string;
  final_link_label: string;
  final_link_url: string;

  seo_title: string;
  seo_description: string;
};

/** Homepage Copy Edits V3 — also the fallback when Directus can't be reached. */
export const HOMEPAGE_FALLBACK: HomepageCopy = {
  hero_headline: 'Why do painful patterns repeat in life and at work?',
  hero_body_1: 'You can understand the issue and still struggle to change it.',
  hero_body_2:
    'SkillfullyAware® helps you understand your patterns, work through them, and grow into a wiser, healthier, more effective human being.',
  hero_orientation_line: 'Choose the path that fits why you’re here today.',
  hero_ctas: [
    { title: 'Understand My Patterns', subtitle: 'Start with the Book', url: '/power-tools/book' },
    { title: 'Leadership, Forums & Retreats', subtitle: 'Explore Leadership Work', url: '/forum-retreats' },
  ],
  hero_scroll_label: 'Not sure where to begin? Start here →',
  hero_scroll_url: '/#start',

  path_eyebrow: 'One Ecosystem. Two Clear Paths.',
  path_heading: 'Choose your path',
  path_intro:
    'SkillfullyAware® is one ecosystem with two common entry points. Start with the path that matches why you’re here today.',
  path_cards: [
    {
      eyebrow: 'For Readers',
      heading: 'Understand My Patterns',
      subheading: 'Start with the book.',
      body: 'If you keep repeating painful patterns, reacting before you can think, or getting in your own way despite your best intentions, begin with Built This Way.',
      path_line: 'Built This Way → Reader Tool → Power Tools',
      cta_label: 'Start with the Book',
      cta_url: '/power-tools/book',
    },
    {
      eyebrow: 'For Leaders',
      heading: 'Leadership, Forums & Retreats',
      subheading: 'Bring SkillfullyAware® into leadership, forums, and high-trust growth work.',
      body: 'For founders, executives, EO/YPO members, forums, and leadership groups seeking deeper insight, stronger trust, better conversations, and guided developmental experiences.',
      path_line: 'SAAQ → Forum Retreats → Coaching',
      cta_label: 'Explore Leadership Work',
      cta_url: '#leader-path',
    },
  ],

  ecosystem_eyebrow: 'The Ecosystem',
  ecosystem_heading: 'Explore the Ecosystem',
  ecosystem_intro: 'Once you know your starting point, these are the main ways to continue the work.',
  ecosystem_items: [
    { title: 'Built This Way', body: 'Understand why painful patterns repeat.', cta_label: 'Start with the Book', cta_url: '/power-tools/book' },
    { title: 'Why Did I React That Way?', body: 'Look at one real reaction from your own life.', cta_label: 'Try the Reader Tool', cta_url: '/power-tools/book#reader-tool' },
    { title: 'Power Tools', body: 'Practice with classes, workbooks, and guided meditations.', cta_label: 'Explore Power Tools', cta_url: '/power-tools' },
    { title: 'SkillfullyAware Awareness Quotient (SAAQ)', body: 'Get a deeper developmental reflection on how you lead, relate, decide, and react under pressure.', cta_label: 'Explore the SAAQ', cta_url: '/consultation' },
    { title: 'Retreats & Leadership', body: 'Bring SkillfullyAware® into coaching, forums, retreats, and leadership development.', cta_label: 'Explore Leadership Work', cta_url: '/forum-retreats' },
  ],

  leadership_eyebrow: 'For Leaders',
  leadership_heading: 'For leaders, founders, forums, and teams',
  leadership_body_1:
    'The same patterns that shape personal life also show up in leadership — in decision-making, conflict, trust, avoidance, over-control, burnout, and the private pressure many high-performing people carry alone.',
  leadership_body_2:
    'SkillfullyAware® experiences help leaders and groups build clearer self-awareness, stronger trust, more honest conversations, and practical growth.',
  leadership_cards: [
    { title: 'SAAQ for Leaders', body: 'A private developmental reflection on how you lead, relate, decide, protect, and grow under pressure.', cta_label: 'Explore the SAAQ', cta_url: '/consultation' },
    { title: 'Forum Retreats', body: 'Guided experiences for EO/YPO forums and leadership groups ready for honest, skillful, well-held development.', cta_label: 'Explore Forum Retreats', cta_url: '/forum-retreats' },
    { title: 'Executive Coaching', body: 'One-on-one support for leaders navigating pressure, transition, conflict, decision-making, identity, or growth.', cta_label: 'Explore Coaching', cta_url: '/consultation#book' },
  ],

  book_eyebrow: 'Start Here',
  book_heading: 'Start with the book. Understand why the pattern repeats.',
  book_body_1: 'There’s nothing wrong with you. There is a reason the pattern repeats.',
  book_body_2:
    'People do not repeat painful patterns because they lack willpower or are unwilling to change. They repeat them because old adaptations, nervous system patterns, emotional memory, and practiced responses often move faster than conscious choice.',
  book_body_3:
    '<strong>Built This Way</strong> helps you understand why you react before you can think, why insight alone is not enough, and how real change becomes possible through awareness, practice, integration, and compassion.',
  book_cta_primary_label: 'Get Book Updates & Reader Bonuses',
  book_cta_primary_url: '/power-tools/book#tiers',
  book_cta_secondary_label: 'Learn More About the Book',
  book_cta_secondary_url: '/power-tools/book',

  saaq_eyebrow: 'Go Deeper',
  saaq_heading: 'Go deeper with the SAAQ.',
  saaq_body_1:
    'Some patterns are easy to see. Others are hidden in how we lead, relate, decide, protect ourselves, handle pressure, and make meaning.',
  saaq_body_2:
    'The <strong>SkillfullyAware Awareness Quotient, or SAAQ,</strong> is a private developmental reflection that helps you see your strengths, blind spots, stress reactions, growth edges, and practical next steps.',
  saaq_body_3:
    'For leaders, the SAAQ can become a powerful starting point for coaching, forum retreats, and deeper leadership development.',
  saaq_cta_label: 'Explore the SAAQ',
  saaq_cta_url: '/consultation',
  saaq_cta_secondary_label: 'See a Sample Report',
  saaq_cta_secondary_url: 'https://saaq-pi.vercel.app/',

  powertools_eyebrow: 'Power Tools',
  powertools_heading: 'Practice the Change',
  powertools_body_1: 'Insight matters, but insight alone rarely changes a pattern.',
  powertools_body_2:
    'Power Tools are online classes, workbooks, guided meditations, and practical exercises that help you work with attention, emotion, habits, reactions, and relationships in daily life.',
  powertools_items: [
    { category: 'Online Classes', name: 'Project SkillfullyAware', href: '/power-tools#online-classes', tag: 'Class' },
    { category: 'Online Classes', name: 'Overcoming Addictive Behaviors', href: '/power-tools#online-classes', tag: 'Class' },
    { category: 'Workbooks', name: 'Becoming SkillfullyAware', href: '/power-tools#workbooks', tag: 'PDF' },
    { category: 'Workbooks', name: 'Raising Awareness', href: '/power-tools#workbooks', tag: 'PDF' },
    { category: 'Workbooks', name: 'Chasing Shadow Work', href: '/power-tools#workbooks', tag: 'PDF' },
    { category: 'Meditation Programs', name: 'Feel Better Series', href: '/power-tools#meditation-programs', tag: 'Audio + PDF' },
    { category: 'Meditation Programs', name: 'Learn To Meditate', href: '/power-tools#meditation-programs', tag: 'Audio + PDF' },
    { category: 'Meditation Programs', name: 'Comprehensive Program', href: '/power-tools#meditation-programs', tag: 'Bundle' },
    { category: 'Media', name: 'Built This Way', href: '/power-tools/book', tag: 'Book' },
    { category: 'Media', name: 'Is Your Story Making You Sick?', href: 'https://tubitv.com/movies/701292/is-your-story-making-you-sick', tag: 'Film', external: true },
    { category: 'Media', name: 'Boundarylessness of Awareness Audio', href: '/power-tools#media', tag: 'Audio' },
  ],
  powertools_cta_label: 'Explore Power Tools',
  powertools_cta_url: '/power-tools',

  about_eyebrow: 'About Dr. Mark',
  about_heading: 'Meet Dr. Mark Pirtle',
  about_body_1:
    'Dr. Mark Pirtle is the creator of SkillfullyAware®, a practical system for helping people understand their patterns, work through them, expand their perspective, and continue evolving throughout life.',
  about_body_2:
    'His work integrates mindfulness, neuroscience, developmental psychology, somatic awareness, shadow integration, habit change, and decades of experience helping people lead, relate, practice, and grow.',
  about_body_3:
    'He is the author of Built This Way: Why Painful Patterns Repeat and How to Change Them, and the creator of the SkillfullyAware Awareness Quotient, or SAAQ.',
  about_cta_primary_label: 'Read Full Story',
  about_cta_primary_url: '/about',
  about_cta_secondary_label: 'Get in Touch',
  about_cta_secondary_url: '/contact',

  testimonials_eyebrow: 'Testimonials',
  testimonials_heading: 'What People Experience in the Work',
  testimonials_intro:
    'Reflections from leaders, clients, and participants who have used SkillfullyAware® to understand patterns, deepen trust, and practice meaningful change.',

  blog_eyebrow: 'The Blog',
  blog_heading: 'Breaking Bad <em>(habits)</em>',
  blog_body:
    'Essays on why we get stuck, why change is hard, and how to practice becoming more SkillfullyAware in daily life.',
  blog_cta_label: 'Read the Latest Essays',
  blog_cta_url: '/blog',

  final_heading:
    'There’s nothing wrong with you. Patterns form for a reason, and patterns can change.',
  final_body:
    'Start with the book, explore the leadership work, try the reader tool, practice with Power Tools, or go deeper with the SAAQ. Choose the path that fits why you’re here today.',
  final_cta_primary_label: 'Start with the Book',
  final_cta_primary_url: '/power-tools/book',
  final_cta_secondary_label: 'Explore Leadership Work',
  final_cta_secondary_url: '#leader-path',
  final_link_label: 'Get the Newsletter →',
  final_link_url: '/#newsletter',

  seo_title: 'Dr. Mark Pirtle | SkillfullyAware® — Understand Why Painful Patterns Repeat',
  seo_description:
    'SkillfullyAware® helps people understand their patterns, work through them, and continue evolving in life, relationships, and leadership. Start with Built This Way, or explore the SAAQ, forum retreats, and coaching.',
};

/** Directus wins where it has a value; the V3 fallback fills every hole. */
function merge(row: Partial<HomepageCopy> | null | undefined): HomepageCopy {
  if (!row) return HOMEPAGE_FALLBACK;
  const out = { ...HOMEPAGE_FALLBACK };
  for (const key of Object.keys(HOMEPAGE_FALLBACK) as (keyof HomepageCopy)[]) {
    const value = row[key];
    if (value === null || value === undefined || value === '') continue;
    if (Array.isArray(value) && value.length === 0) continue;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (out as any)[key] = value;
  }
  return out;
}

export async function getHomepageCopy(): Promise<HomepageCopy> {
  if (!DIRECTUS_URL) return HOMEPAGE_FALLBACK;
  try {
    const res = await fetch(`${DIRECTUS_URL}/items/homepage`, {
      headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {},
      next: { tags: ['homepage'] },
    });
    if (!res.ok) throw new Error(`Directus responded ${res.status}`);
    return merge((await res.json())?.data);
  } catch (err) {
    console.error('[homepage] Directus fetch failed, using bundled V3 copy:', err);
    return HOMEPAGE_FALLBACK;
  }
}
