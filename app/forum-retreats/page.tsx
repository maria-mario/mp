import { getPageBySlug } from '@/lib/pages';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import ForumRetreatsContent from './ForumRetreatsContent';

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
