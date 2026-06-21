import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import WorkCases from "@/components/WorkCases";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Our Work — Millecube Digital",
  description:
    "Case studies and results from Millecube Digital. Meta Ads, Marketplace Management, SEO, and more — for Malaysian SMEs.",
};

export default function WorkPage() {
  return (
    <main>
      <InnerHero
        label="OUR WORK"
        title="Results that speak louder than decks."
        subtitle="A selection of what we've driven for our clients — measured in business outcomes, not social metrics."
      />
      <WorkCases />
      <CtaStrip />
    </main>
  );
}
