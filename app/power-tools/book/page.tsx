import type { Metadata } from 'next';
import { getPageBySlug } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import BuiltThisWayContent from './BuiltThisWayContent';

export const metadata: Metadata = {
  title: 'Built This Way — Book | Dr. Mark Pirtle | SkillfullyAware®',
  description: 'Built This Way: Why Painful Patterns Repeat and How to Change Them. Join the launch team and help bring this work into the world.',
};

export default async function BuiltThisWayPage() {
  const cmsPage = await getPageBySlug('/power-tools/book');
  if (cmsPage && cmsPage.blocks.length > 0) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <BlockRenderer blocks={cmsPage.blocks} />
      </main>
    );
  }

  return <BuiltThisWayContent />;
}
