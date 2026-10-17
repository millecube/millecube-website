import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

const faqs = [
  {
    q: "How much do Facebook and Meta Ads cost in Malaysia?",
    a: "Ad spend and management fees are separate. Management starts from RM 2,000 per month per channel; ad spend is budgeted based on your goals and the platform's minimum daily budgets. WhatsApp us for a quote based on your target cost-per-lead or ROAS.",
  },
  {
    q: "Do you manage Instagram ads as well as Facebook ads?",
    a: "Yes — Meta Ads covers both Facebook and Instagram under one campaign structure, with cold prospecting, retargeting, and lookalike audiences built across both placements.",
  },
  {
    q: "Should I run Meta Ads, Google Ads, or both?",
    a: "They catch different buyers. Google Ads reaches people already searching for what you sell; Meta Ads reaches people who aren't searching yet but match your best customer profile. Most of our clients run both once budget allows, because they fill different parts of the funnel.",
  },
  {
    q: "How is Millecube different from other Facebook/Meta Ads agencies in Malaysia?",
    a: "We track every conversion to a specific lead or sale using server-side tracking (Meta CAPI), not just impressions or reach, and we operate month-to-month with no lock-in contract. You see the same numbers we see.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const metadata: Metadata = {
  title: "Meta Ads & Facebook Ads Agency Malaysia",
  description:
    "Meta Ads (Facebook & Instagram), Google Ads, and TikTok Ads for Malaysian SMEs — tracked to every ringgit. Average 3.8x ROAS, 62% cost-per-sale reduction, month-to-month. Serving businesses across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru.",
  keywords: [
    "Meta Ads agency Malaysia",
    "Facebook ads agency Malaysia",
    "Facebook ads agency Penang",
    "Facebook ads agency PJ",
    "Instagram ads Malaysia",
    "Instagram advertising Malaysia",
    "Google Ads management Malaysia",
    "Google Ads agency Penang",
    "Google Ads agency JB",
    "performance ads agency Malaysia",
    "performance marketing Malaysia",
    "TikTok Ads Malaysia",
    "paid media agency Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/media-advertisement" },
  openGraph: {
    title: "Meta Ads & Facebook Ads Agency Malaysia — Millecube",
    description:
      "Average 3.8x ROAS across 35+ Malaysian clients. Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads — tracked to every ringgit, no contract.",
    url: "https://millecube.com/services/media-advertisement",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function MediaAdvertisementPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InnerHero
        bgImage="/hero-bg2.webp"
        label="META ADS · FACEBOOK ADS · GOOGLE ADS"
        title="Ad spend you can trace to a sale."
        subtitle="A Meta Ads and Facebook Ads agency for Malaysian SMEs — Meta Ads (Facebook & Instagram), Google Ads, and TikTok Ads managed for businesses across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru, who need every ringgit to count, measured in leads, sales, and ROAS, not impressions."
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
        featuresBody="As a Meta Ads and Google Ads agency for Malaysian SMEs, we build and manage paid advertising campaigns on Facebook, Instagram, Google, and TikTok — targeting the right audience, with creative that converts, tracked to every ringgit. No set-and-forget. We're in the account daily, for clients across Malaysia, including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru."
        features={[
          {
            name: "Meta Ads (Facebook & Instagram)",
            desc: "Facebook Ads and Instagram Ads — cold audience prospecting, retargeting sequences, and lookalike scaling. Every ad set built around your cost-per-lead or ROAS target.",
          },
          {
            name: "Google Ads",
            desc: "Search, Shopping, and Display campaigns for buyers who are already looking, across Malaysia including Penang, Petaling Jaya, Kuala Lumpur, and Johor Bahru. Full keyword architecture and negative list management.",
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
        faqs={faqs}
      />
      <CtaStrip />
    </main>
  );
}
