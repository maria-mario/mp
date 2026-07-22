import { Hero }              from '@/components/sections/Hero';
import { ChooseYourPath }    from '@/components/sections/ChooseYourPath';
import { ReaderPathway }     from '@/components/sections/ReaderPathway';
import { LeaderPathway }     from '@/components/sections/LeaderPathway';
import { BuiltThisWay }      from '@/components/sections/BuiltThisWay';
import { SAAQSection }       from '@/components/sections/SAAQSection';
import { PowerToolsPreview } from '@/components/sections/PowerToolsPreview';
import { NewsletterSignup }  from '@/components/sections/NewsletterSignup';
import { AboutMark }         from '@/components/sections/AboutMark';
import { Testimonials }      from '@/components/sections/Testimonials';
import { LatestBlogPosts }   from '@/components/sections/LatestBlogPosts';
import { FinalCTA }          from '@/components/sections/FinalCTA';
import { getPageBySlug }     from '@/lib/pages';
import { getSiteMedia }      from '@/lib/site-settings';
import { getTestimonials }   from '@/lib/testimonials';
import BlockRenderer         from '@/components/blocks/BlockRenderer';

export default async function HomePage() {
  const [cmsPage, media, testimonials] = await Promise.all([
    getPageBySlug('/'),
    getSiteMedia(),
    getTestimonials(),
  ]);
  if (cmsPage && cmsPage.blocks.length > 0) {
    return (
      <div className="min-h-screen">
        <BlockRenderer blocks={cmsPage.blocks} />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Hero image={media.heroImage} />  {/* Two CTAs: I'm a Reader / I'm a Leader */}
      <ChooseYourPath /> {/* Two cards: Reader path / Leader path */}
      <ReaderPathway />  {/* Book → Reader Tool → Power Tools */}
      <LeaderPathway />  {/* SAAQ → Forum Retreats → Coaching */}
      <BuiltThisWay />
      <SAAQSection />
      <PowerToolsPreview />
      <NewsletterSignup />
      <AboutMark portrait={media.aboutPortrait} />
      <Testimonials items={testimonials} />
      <LatestBlogPosts />
      <FinalCTA />
    </div>
  );
}