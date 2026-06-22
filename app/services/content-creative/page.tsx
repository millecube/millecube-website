import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Ad Creative & Content Production Malaysia",
  description:
    "Ad creative, copywriting, and short-form video for Malaysian businesses — built to stop the scroll and drive action on Meta, TikTok, and Google campaigns.",
  keywords: [
    "ad creative agency Malaysia",
    "content production Malaysia",
    "copywriting Malaysia",
    "video production Penang",
    "social media content Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/content-creative" },
  openGraph: {
    title: "Ad Creative & Content Production Malaysia — Millecube",
    description: "Stop-scroll creative for Malaysian brands: static ads, video, copywriting for Meta, TikTok, and Google.",
    url: "https://millecube.com/services/content-creative",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function ContentCreativePage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg.webp"
        label="CONTENT & CREATIVE"
        title="Creative that earns attention."
        subtitle="We produce ad creative, social content, and copywriting for brands that can't afford to be forgettable — platform-native, tested, and built for performance."
      />
      <ServiceContent
        slug="content-creative"
        stats={[
          { value: "6", label: "Content output types" },
          { value: "A/B", label: "All creatives split tested" },
          { value: "100%", label: "Platform-native format" },
        ]}
        featuresLabel="WHAT WE PRODUCE"
        featuresHeadline="Content built for performance, not just aesthetics."
        featuresBody="From stop-scroll ad creative to long-form landing page copy — we produce content that fits the platform, speaks to the audience, and drives the action you're paying for. Every asset has a brief. Every brief has a goal."
        features={[
          {
            name: "Ad creative (static)",
            desc: "Performance-first static ad creative for Meta, Google Display, and marketplace banners — designed to stop the scroll and communicate the offer in under 3 seconds.",
          },
          {
            name: "Video production",
            desc: "UGC-style and branded video ads for Meta and TikTok — scripted, shot, and edited to platform spec with hooks that hold attention.",
          },
          {
            name: "Copywriting",
            desc: "Ad copy, email sequences, product descriptions, and social captions written for conversion — not just communication.",
          },
          {
            name: "Landing page copy",
            desc: "Long-form landing page copy structured around your funnel stage — from awareness-level explainers to high-intent sales pages.",
          },
          {
            name: "Campaign concept",
            desc: "Monthly content themes and campaign concepts aligned to your promotional calendar and business objectives.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Creative brief",
            body: "We build a brief from your product, audience, and campaign goals. No creative work starts without a signed-off brief.",
          },
          {
            num: "02",
            title: "Concept & moodboard",
            body: "Visual direction, messaging angle, and platform format defined before production begins — no wasted rounds.",
          },
          {
            num: "03",
            title: "Production",
            body: "Design, shoot, or write depending on the deliverable — with client review at each stage before final output.",
          },
          {
            num: "04",
            title: "Delivery & testing",
            body: "Final assets delivered in platform-ready formats with a testing plan for A/B variants where applicable.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="A full content production sprint, every month."
        deliverablesBody="Creative assets ready to publish, run as ads, or hand to your media buyer — no additional production steps needed."
        deliverables={[
          "Static ad creatives (Meta / Google)",
          "Short-form video ads (TikTok / Reels)",
          "Ad copywriting (3 variants per asset)",
          "Landing page copywriting",
          "Social media captions",
          "Email copywriting",
        ]}
        ctaText="Get creative produced"
      />
      <CtaStrip />
    </main>
  );
}
