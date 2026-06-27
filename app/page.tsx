import { Hero }             from '@/components/sections/Hero';
import { VisitorRouting }   from '@/components/sections/VisitorRouting';
import { BuiltThisWay }     from '@/components/sections/BuiltThisWay';
import { WhyDidIReact }     from '@/components/sections/WhyDidIReact';
import { PowerToolsPreview } from '@/components/sections/PowerToolsPreview';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { SAAQSection }      from '@/components/sections/SAAQSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { AboutMark }        from '@/components/sections/AboutMark';
import { Testimonials }     from '@/components/sections/Testimonials';
import { LatestBlogPosts }  from '@/components/sections/LatestBlogPosts';
import { FinalCTA }         from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VisitorRouting />
      <BuiltThisWay />
      <WhyDidIReact />
      <PowerToolsPreview />
      <NewsletterSignup />
      <SAAQSection />
      <LeadershipSection />
      <AboutMark />
      <Testimonials />
      <LatestBlogPosts />
      <FinalCTA />
    </div>
  );
}s