import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, buildMetadata } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';

const DEFAULT_META = {
  title: 'Power Tools | Classes, Workbooks & Meditations | Dr. Mark Pirtle',
  description:
    'Power Tools are online classes, workbooks, guided meditations, and practical resources that help you work with attention, emotion, habits, reactions, and relationships in daily life.',
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('/power-tools');
  return buildMetadata(page?.seo, DEFAULT_META);
}

/** Shop / resource library — built entirely from Directus blocks. */
export default async function PowerToolsPage() {
  const page = await getPageBySlug('/power-tools');
  if (!page || page.blocks.length === 0) notFound();

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <BlockRenderer blocks={page.blocks} />
    </main>
  );
}
