import type { PageBlock } from '@/lib/pages';
import BlockHero      from './BlockHero';
import BlockRichtext  from './BlockRichtext';
import BlockCta       from './BlockCta';
import BlockCards     from './BlockCards';
import BlockPricing   from './BlockPricing';
import BlockSteps     from './BlockSteps';
import BlockChecklist from './BlockChecklist';

export default function BlockRenderer({ blocks }: { blocks: PageBlock[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.collection) {
          case 'blocks_hero':      return <BlockHero      key={block.id} block={block.item} />;
          case 'blocks_richtext':  return <BlockRichtext  key={block.id} block={block.item} />;
          case 'blocks_cta':       return <BlockCta       key={block.id} block={block.item} />;
          case 'blocks_cards':     return <BlockCards     key={block.id} block={block.item} />;
          case 'blocks_pricing':   return <BlockPricing   key={block.id} block={block.item} />;
          case 'blocks_steps':     return <BlockSteps     key={block.id} block={block.item} />;
          case 'blocks_checklist': return <BlockChecklist key={block.id} block={block.item} />;
          default:                 return null;
        }
      })}
    </>
  );
}
