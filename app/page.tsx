// app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { ForumRetreatsShowcase } from '@/components/sections/ForumRetreatsShowcase';
import { SkillfullyAwareMethod } from '@/components/sections/SkillfullyAwareMethod';
import { Testimonials } from '@/components/sections/Testimonials';
import { ExperiencesPreviews } from '@/components/sections/ExperiencesPreviews';
import { ConsultationOffer } from '@/components/sections/ConsultationOffer';
import { LatestBlogPosts } from '@/components/sections/LatestBlogPosts';
import { AboutMark } from '@/components/sections/AboutMark';
import { StatsAchievements } from '@/components/sections/StatsAchievements';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ForumRetreatsShowcase />
      <SkillfullyAwareMethod />
      <Testimonials />
      <ExperiencesPreviews />
      <ConsultationOffer />
      <StatsAchievements />
      <AboutMark />
      <LatestBlogPosts />
      <CTABanner />
    </div>
  );
}