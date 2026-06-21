import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Meta & Google Ads Agency Malaysia",
  description:
    "Performance advertising on Meta, Google, and TikTok — tracked to every ringgit. Millecube runs paid media for Malaysian SMEs: average 3.8x ROAS, 62% cost-per-sale reduction, month-to-month.",
  keywords: [
    "Meta Ads agency Malaysia",
    "Facebook ads agency Penang",
    "Google Ads management Malaysia",
    "TikTok Ads Malaysia",
    "paid media agency Malaysia",
    "performance marketing Penang",
  ],
  alternates: { canonical: "https://millecube.com/services/media-advertisement" },
  openGraph: {
    title: "Meta & Google Ads Agency Malaysia — Millecube",
    description:
      "Average 3.8x ROAS across 35+ Malaysian clients. Meta Ads, Google Ads, TikTok Ads — tracked to every ringgit, no contract.",
    url: "https://millecube.com/services/media-advertisement",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function MediaAdvertisementPage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg2.png"
        label="PERFORMANCE MARKETING"
        title="Ad spend you can trace to a sale."
        subtitle="We run Meta Ads, Google Ads, and TikTok Ads for Malaysian SMEs who need every ringgit to count — measured in leads, sales, and ROAS, not impressions."
      />
      <ServiceContent
        slug="media-advertisement"
        stats={[
          { value: "3.8×", label: "Average client ROAS" },
          { value: "62%", label: "Avg cost-per-sale reduction" },
          { value: "90", label: "Days to peak performance" },
        ]}
        featuresLabel="WHAT WE DO"
        featuresHeadline="Full-funnel paid advertising, not just campaign setup."
        featuresBody="We build and manage paid advertising campaigns across Meta, Google, and TikTok — targeting the right audience, with creative that converts, tracked to every ringgit. No set-and-forget. We're in the account daily."
        features={[
          {
            name: "Meta Ads (Facebook & Instagram)",
            desc: "Cold audience prospecting, retargeting sequences, and lookalike scaling. Every ad set built around your cost-per-lead or ROAS target.",
          },
          {
            name: "Google Ads",
            desc: "Search, Shopping, and Display campaigns for buyers who are already looking. Full keyword architecture and negative list management.",
          },
          {
            name: "TikTok Ads",
            desc: "Spark Ads, In-Feed video, and TopView placements for brands with stop-scroll creative who want to reach a younger, high-intent segment.",
          },
          {
            name: "Pixel & Tracking Setup",
            desc: "Server-side events, Conversions API, and GA4 integration — so your data is reliable even with iOS 14+ restrictions and ad blockers.",
          },
          {
            name: "A/B Creative Testing",
            desc: "Systematic creative rotations, ad copy variants, and landing page splits to keep performance climbing month over month.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Full account audit",
            body: "We review your existing campaigns, ad spend history, pixel setup, and creative library before touching anything.",
          },
          {
            num: "02",
            title: "Audience & funnel mapping",
            body: "We define cold audiences, retargeting pools, and lookalike segments based on your best existing customers.",
          },
          {
            num: "03",
            title: "Creative & campaign build",
            body: "Campaign structure, ad creative, and copy built from scratch — or remixed from your existing assets with a performance lens.",
          },
          {
            num: "04",
            title: "Launch & learning phase",
            body: "The first 2–4 weeks are a controlled learning phase. We read signals and adjust bid strategy before scaling spend.",
          },
          {
            num: "05",
            title: "Scale & optimise",
            body: "Once unit economics are proven, we scale budget, broaden audiences, and refresh creative on a quarterly rotation.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="Everything to launch and sustain a high-performing paid ads account."
        deliverablesBody="No black box. We show you exactly what we built, what we're testing, and what the numbers mean — every month, in plain language."
        deliverables={[
          "Meta Business Suite setup",
          "Google Ads account structure",
          "Pixel & Conversions API installation",
          "Custom audiences & lookalikes",
          "Ad creative (static + video)",
          "Monthly performance report",
          "Weekly budget pacing review",
        ]}
        ctaText="Start your ads"
      />
      <CtaStrip />
    </main>
  );
}
