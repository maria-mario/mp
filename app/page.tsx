import type { Metadata } from 'next';
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
import { getHomepageCopy }   from '@/lib/homepage';
import { getSiteMedia, getSiteCopy } from '@/lib/site-settings';
import { getTestimonials }   from '@/lib/testimonials';
import { getAllPosts }       from '@/lib/blog';
import BlockRenderer         from '@/components/blocks/BlockRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const copy = await getHomepageCopy();
  return {
    title: copy.seo_title,
    description: copy.seo_description,
    openGraph: { title: copy.seo_title, description: copy.seo_description },
  };
}

export default async function HomePage() {
  const [cmsPage, copy, media, siteCopy, testimonials, posts] = await Promise.all([
    getPageBySlug('/'),
    getHomepageCopy(),
    getSiteMedia(),
    getSiteCopy(),
    getTestimonials(),
    getAllPosts(),
  ]);

  // If the homepage is ever rebuilt with the page builder, those blocks win.
  if (cmsPage && cmsPage.blocks.length > 0) {
    return (
      <div className="min-h-screen">
        <BlockRenderer blocks={cmsPage.blocks} />
      </div>
    );
  }

  // Otherwise the bespoke sections render, every string coming from Directus.
  return (
    <div className="min-h-screen">
      <Hero image={media.heroImage} copy={copy} />  {/* Understand My Patterns / Leadership */}
      <ChooseYourPath copy={copy} />                 {/* Two entry-point cards */}
      <ReaderPathway copy={copy} />                  {/* Explore the Ecosystem */}
      <LeaderPathway copy={copy} />                  {/* SAAQ → Forum Retreats → Coaching */}
      <BuiltThisWay copy={copy} />
      <SAAQSection copy={copy} />
      <PowerToolsPreview copy={copy} />
      <NewsletterSignup
        heading={siteCopy.newsletterHeading}
        body={siteCopy.newsletterBody}
        buttonLabel={siteCopy.newsletterButtonLabel}
        privacyLine={siteCopy.newsletterPrivacyLine}
      />
      <AboutMark portrait={media.aboutPortrait} copy={copy} />
      <Testimonials
        items={testimonials}
        eyebrow={copy.testimonials_eyebrow}
        heading={copy.testimonials_heading}
        intro={copy.testimonials_intro}
      />
      <LatestBlogPosts copy={copy} posts={posts.slice(0, 3)} />
      <FinalCTA copy={copy} />
    </div>
  );
}
