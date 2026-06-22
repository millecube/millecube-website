import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import AboutContent from "@/components/AboutContent";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About Millecube Digital",
  description:
    "Millecube is a technical-first digital marketing agency from Penang, Malaysia (Cadoo Venture Sdn. Bhd.). We manage Meta Ads, Google Ads, and marketplaces for Malaysian SMEs — tracked to revenue, not vanity.",
  keywords: [
    "about Millecube Digital",
    "digital marketing agency Penang",
    "Cadoo Venture Sdn Bhd",
    "marketing agency Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/about" },
  openGraph: {
    title: "About Millecube Digital — Marketing Agency Penang",
    description: "Technical-first digital marketing agency from Penang. Every ringgit tracked. No lock-in contracts.",
    url: "https://millecube.com/about",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function AboutPage() {
  return (
    <main>
      <InnerHero
        label="ABOUT US"
        title="Built by people who've been on your side of the table."
        subtitle="We started Millecube because we got tired of agencies that couldn't explain what our money was doing."
        bgImage="/aboutus-bg1.webp"
      />
      <AboutContent />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
