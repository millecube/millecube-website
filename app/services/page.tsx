import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServicesGrid from "@/components/ServicesGrid";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Services — Millecube Digital",
  description:
    "Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop management, SEO, websites, content, and branding — every channel your revenue depends on.",
};

export default function ServicesPage() {
  return (
    <main>
      <InnerHero
        label="WHAT WE DO"
        title="Every channel your revenue depends on."
        subtitle="We manage paid media, marketplace stores, SEO, websites, and creative — each tracked back to business outcomes."
        bgImage="/service-bg1.png"
      />
      <ServicesGrid />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
