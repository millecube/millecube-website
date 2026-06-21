import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Branding Agency Malaysia",
  description:
    "Brand positioning, visual identity, and 90-day marketing strategy for Malaysian SMEs. Define what you stand for before you spend on ads — based in Penang.",
  keywords: [
    "branding agency Malaysia",
    "brand identity design Penang",
    "marketing strategy Malaysia",
    "brand positioning Malaysia",
    "brand strategy agency Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/branding-strategy" },
  openGraph: {
    title: "Branding Agency Malaysia — Millecube",
    description: "Brand positioning, visual identity, and 90-day marketing strategy for Malaysian SMEs. Based in Penang.",
    url: "https://millecube.com/services/branding-strategy",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function BrandingStrategyPage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg.png"
        label="BRANDING & STRATEGY"
        title="Know what you stand for before you spend on ads."
        subtitle="We build brand positioning, visual identity, and go-to-market strategy for Malaysian businesses ready to grow with clarity — not guesswork."
      />
      <ServiceContent
        slug="branding-strategy"
        stats={[
          { value: "7", label: "Brand deliverables" },
          { value: "90", label: "Day strategy roadmap" },
          { value: "1", label: "Clear positioning, not three options" },
        ]}
        featuresLabel="WHAT WE BUILD"
        featuresHeadline="A brand that earns trust before you say a word."
        featuresBody="Great brands don't happen by accident. We research your market, define your positioning, and design the identity that makes your business recognisable, credible, and worth paying a premium for."
        features={[
          {
            name: "Brand positioning",
            desc: "We define your target audience, competitive differentiation, and brand promise — the strategic layer everything else is built on.",
          },
          {
            name: "Brand identity design",
            desc: "Logo, colour palette, typography system, and usage guidelines — designed to work across print, digital, and packaging.",
          },
          {
            name: "Marketing strategy",
            desc: "90-day go-to-market plan covering channel mix, messaging framework, and campaign priorities aligned to your growth stage.",
          },
          {
            name: "Analytics setup",
            desc: "GA4, Meta Pixel, and GTM configured so every marketing ringgit you spend is traceable from day one.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Discovery workshop",
            body: "We run a structured session to understand your business, customers, competitors, and growth ambitions before any creative work begins.",
          },
          {
            num: "02",
            title: "Positioning development",
            body: "We define your brand's unique position in market — your audience, your difference, and your promise — in writing.",
          },
          {
            num: "03",
            title: "Identity design",
            body: "Logo, colours, typography, and brand guidelines designed and refined through structured revision rounds with clear criteria.",
          },
          {
            num: "04",
            title: "Strategy delivery",
            body: "A 90-day marketing strategy document with prioritised channel mix and campaign frameworks you can execute immediately.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="A complete brand foundation ready for growth."
        deliverablesBody="Everything you need to brief a designer, run ads, and present to investors — built to last, not to impress for a month."
        deliverables={[
          "Brand positioning document",
          "Logo design (3 variants)",
          "Colour palette & typography",
          "Brand style guide",
          "Marketing strategy (90-day)",
          "Analytics tracking setup",
          "Messaging framework",
        ]}
        ctaText="Build my brand"
      />
      <CtaStrip />
    </main>
  );
}
