import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServicesGrid from "@/components/ServicesGrid";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Digital Marketing Services Malaysia",
  description:
    "Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop management, SEO, websites, content, and branding for Malaysian businesses — every channel your revenue depends on.",
  keywords: [
    "digital marketing services Malaysia",
    "marketing agency services Penang",
    "paid media SEO marketplace Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services" },
  openGraph: {
    title: "Digital Marketing Services Malaysia — Millecube",
    description: "Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop, SEO, websites, content, branding — full-service digital marketing from Penang.",
    url: "https://millecube.com/services",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
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
