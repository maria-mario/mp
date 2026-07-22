import type { Metadata } from 'next';
import { getPageBySlug, buildMetadata } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import ContactForm from '@/components/contact/ContactForm';

const DEFAULT_META = {
  title: 'Contact Dr. Mark Pirtle | SkillfullyAware®',
  description:
    'Get in touch with Dr. Mark Pirtle about the book, the SAAQ, Forum Retreats, speaking, or anything else.',
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('/contact');
  return buildMetadata(page?.seo, DEFAULT_META);
}

// Next 16: searchParams is a Promise
type Props = { searchParams: Promise<{ type?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const cmsPage = await getPageBySlug('/contact');
  const hasBlocks = !!cmsPage && cmsPage.blocks.length > 0;

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-brand-cream)' }}>
      {hasBlocks ? (
        <BlockRenderer blocks={cmsPage!.blocks} />
      ) : (
        /* Fallback intro — used until the /contact page is populated in Directus */
        <section style={{ backgroundColor: '#ffffff', paddingTop: '8rem', paddingBottom: '3rem' }}>
          <div className="container" style={{ maxWidth: '48rem' }}>
            <div className="section-divider mb-4" />
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-4 mb-6">Contact Mark</h1>
            <p style={{
              fontSize: 'var(--text-lead)',
              color: 'var(--color-brand-text-muted)',
              lineHeight: 1.75,
              maxWidth: '52ch',
            }}>
              Whether you&apos;re here about the book, the SAAQ, a Forum Retreat, or something
              else entirely — send a note and Mark will get back to you personally.
            </p>
          </div>
        </section>
      )}

      <section style={{ paddingTop: hasBlocks ? '3rem' : '1rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '40rem' }}>
          <ContactForm defaultType={type} />
        </div>
      </section>
    </main>
  );
}
