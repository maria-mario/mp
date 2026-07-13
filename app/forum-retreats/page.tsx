import type { Metadata } from 'next';
import { getPageBySlug, buildMetadata } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import ForumRetreatsContent from './ForumRetreatsContent';

const DEFAULT_META = {
  title: 'Forum Retreats & SAAQ Immersions | Dr. Mark Pirtle | SkillfullyAware®',
  description: 'Private SkillfullyAware® retreats for EO/YPO forums, founders, and leadership groups. Custom developmental experiences at Tubac Ranch or your chosen private location.',
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('/forum-retreats');
  return buildMetadata(page?.seo, DEFAULT_META);
}

export default async function ForumRetreatsPage() {
  const cmsPage = await getPageBySlug('/forum-retreats');
  if (cmsPage && cmsPage.blocks.length > 0) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <BlockRenderer blocks={cmsPage.blocks} />
      </main>
    );
  }

  return <ForumRetreatsContent />;
}
