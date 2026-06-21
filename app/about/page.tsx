import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import AboutContent from "@/components/AboutContent";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About — Millecube Digital",
  description:
    "Millecube is a technical-first digital marketing agency from Penang, Malaysia. Built by people who understand what's at stake.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerHero
        label="ABOUT US"
        title="Built by people who've been on your side of the table."
        subtitle="We started Millecube because we got tired of agencies that couldn't explain what our money was doing."
        bgImage="/aboutus-bg1.png"
      />
      <AboutContent />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
