import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteMedia } from "@/lib/site-settings";
import { getAllPosts } from "@/lib/blog";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Mark Pirtle | Executive Leadership Coaching & Retreats",
  description:
    "Transform your leadership with the SkillfullyAware® methodology. Custom forum retreats, executive coaching, and transformational experiences for EO/YPO leaders.",
  keywords:
    "executive coaching, leadership development, EO retreats, YPO forums, shadow work, mindfulness for executives",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Nav/footer chrome is driven by Directus: logo from site_settings, blog
  // categories derived from the live posts rather than the bundled copy.
  const [media, posts] = await Promise.all([getSiteMedia(), getAllPosts()]);

  const counts: Record<string, number> = {};
  posts.forEach((p) => p.categories.forEach((c) => { counts[c] = (counts[c] ?? 0) + 1; }));

  const topCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => ({ name, count }));

  const allCategories = Object.keys(counts).sort();

  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)", backgroundColor: "var(--color-brand-cream)" }}>
        <Header logo={media.logo} categories={topCategories} />
        <main>{children}</main>
        <Footer blogCategories={allCategories} />
      </body>
    </html>
  );
}