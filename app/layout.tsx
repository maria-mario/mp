import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)", backgroundColor: "#000000" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}