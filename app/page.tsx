// app/page.tsx
import { Hero }                  from '@/components/sections/Hero';
import { StatsAchievements }     from '@/components/sections/StatsAchievements';
import { AboutMark }             from '@/components/sections/AboutMark';
import { SkillfullyAwareMethod } from '@/components/sections/SkillfullyAwareMethod';
import { ForumRetreatsShowcase } from '@/components/sections/ForumRetreatsShowcase';
import { ExperiencesPreviews }   from '@/components/sections/ExperiencesPreviews';
import { ConsultationOffer }     from '@/components/sections/ConsultationOffer';
import { Testimonials }          from '@/components/sections/Testimonials';
import { PowerToolsPreview }     from '@/components/sections/PowerToolsPreview';
import { LatestBlogPosts }       from '@/components/sections/LatestBlogPosts';
import { CTABanner }             from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────
           Full-screen intro. CTA → Forum Retreats + Coaching            */}
      <Hero />

      {/* ── 2. SOCIAL PROOF BAR ─────────────────────────────────────────
           Quick trust signals after hero                                 */}
      <StatsAchievements />

      {/* ── 3. ABOUT — matches "About" nav ─────────────────────────────
           The Story + The System (SkillfullyAware® method) + The Science */}
      <AboutMark />
      <SkillfullyAwareMethod />

      {/* ── 4. FORUM RETREATS — matches "Forum Retreats" nav ───────────
           Main revenue driver showcase + experiences preview             */}
      <ForumRetreatsShowcase />
      <ExperiencesPreviews />

      {/* ── 5. SAAQ COACHING — matches "SAAQ Coaching" nav ─────────────
           1-to-1 coaching offer: Mind Your Business + Unfinished Business */}
      <ConsultationOffer />

      {/* ── 6. SOCIAL PROOF ─────────────────────────────────────────────
           Testimonials after the two main offers                         */}
      <Testimonials />

      {/* ── 7. POWER TOOLS — matches "Power Tools" nav ─────────────────
           Preview of workbooks, classes, meditation programs             */}
      <PowerToolsPreview />

      {/* ── 8. BLOG — matches "Blog" nav ────────────────────────────────
           Latest articles + categories                                   */}
      <LatestBlogPosts />

      {/* ── 9. CTA BANNER ───────────────────────────────────────────────
           Final conversion: "Start Here" onboarding                     */}
      <CTABanner />

    </div>
  );
}