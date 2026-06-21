import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import WorkCases from "@/components/WorkCases";
import TeamStrip from "@/components/TeamStrip";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Client Results & Case Studies",
  description:
    "Real results from Millecube Digital: 3.8x ROAS for e-commerce, 42% CPL reduction, Shopee and Lazada growth for Malaysian SMEs. Meta Ads, Marketplace, SEO case studies.",
  keywords: [
    "digital marketing case studies Malaysia",
    "Meta Ads results Malaysia",
    "Shopee Lazada success Malaysia",
    "marketing agency results Penang",
  ],
  alternates: { canonical: "https://millecube.com/work" },
  openGraph: {
    title: "Client Results & Case Studies — Millecube Digital",
    description: "Real results: 3.8x ROAS, 42% CPL reduction, marketplace growth for Malaysian SMEs.",
    url: "https://millecube.com/work",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function WorkPage() {
  return (
    <main>
      <InnerHero
        label="OUR WORK"
        title="Results that speak louder than decks."
        subtitle="A selection of what we've driven for our clients — measured in business outcomes, not social metrics."
        bgImage="/work-bg1.png"
      />
      <WorkCases />
      <TeamStrip />
      <CtaStrip />
    </main>
  );
}
