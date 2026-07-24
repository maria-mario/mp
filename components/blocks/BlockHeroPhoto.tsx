import { Hero } from '@/components/sections/Hero';
import { getHomepageCopy } from '@/lib/homepage';
import { getSiteMedia } from '@/lib/site-settings';

export default async function BlockHeroPhoto() {
  const [copy, media] = await Promise.all([getHomepageCopy(), getSiteMedia()]);
  return <Hero image={media.heroImage} copy={copy} />;
}
