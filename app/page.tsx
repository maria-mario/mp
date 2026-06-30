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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />           {/* Two CTAs: I'm a Reader / I'm a Leader */}
      <ChooseYourPath /> {/* Two cards: Reader path / Leader path */}
      <ReaderPathway />  {/* Book → Reader Tool → Power Tools */}
      <LeaderPathway />  {/* SAAQ → Forum Retreats → Coaching */}
      <BuiltThisWay />
      <SAAQSection />
      <PowerToolsPreview />
      <NewsletterSignup />
      <AboutMark />
      <Testimonials />
      <LatestBlogPosts />
      <FinalCTA />
    </div>
  );
}