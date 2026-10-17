import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import NumberStats from "@/components/NumberStats";
import WhoWeAre from "@/components/WhoWeAre";
import TrustCarousel from "@/components/TrustCarousel";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: { absolute: "Meta Ads & Social Media Agency Malaysia — Millecube" },
  description:
    "Millecube is a technical-first Meta Ads and social media agency in Penang, Malaysia. We manage Facebook & Instagram Ads, social media, Google Ads, Shopee, Lazada, and TikTok Shop — tracked to every ringgit, no contract.",
  keywords: [
    "Meta Ads agency Malaysia",
    "Facebook ads agency Malaysia",
    "social media agency Malaysia",
    "social media management Malaysia",
    "digital marketing agency Malaysia",
    "digital marketing Malaysia",
    "top digital marketing agency in Malaysia",
    "SEO agency Malaysia",
    "marketplace management Malaysia",
    "performance marketing agency Penang",
    "digital marketing Penang",
    "e-commerce marketing Malaysia",
  ],
  alternates: { canonical: "https://millecube.com" },
  openGraph: {
    title: "Meta Ads & Social Media Agency Malaysia — Millecube",
    description:
      "Technical-first Meta Ads and social media agency from Penang. Facebook & Instagram Ads, social media, Google Ads, Shopee, Lazada, TikTok Shop — tracked to every ringgit, no contract.",
    url: "https://millecube.com",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid media management at Millecube starts from RM 2,000 per month per channel. Ad spend is separate and budgeted based on your goals and platform minimums. Marketplace management (Shopee, Lazada, TikTok Shop) also starts from RM 2,000 per month per platform.",
      },
    },
    {
      "@type": "Question",
      name: "Does Millecube require a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Millecube operates on month-to-month agreements with no lock-in period. Clients stay because results show up — not because of a contract. You can stop at any time with 30 days notice.",
      },
    },
    {
      "@type": "Question",
      name: "What results can I expect from Meta Ads in Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Millecube delivers an average 3.8x ROAS and 62% reduction in cost-per-sale across 35+ Malaysian SME clients. Most campaigns reach peak performance within 90 days after an initial learning phase of 2-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage both Shopee and Lazada together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Millecube manages Shopee, Lazada, and TikTok Shop as a single retainer — one team handling listings, in-platform ads, chat response, and monthly reporting across all three platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Millecube different from other digital marketing agencies in Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Millecube tracks every conversion to a specific action — lead, sale, or WhatsApp click — not impressions or reach. We use server-side tracking (Meta CAPI) for accurate attribution, operate on month-to-month contracts, and report in plain language every month.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the best digital marketing agency in Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for three things: whether they track conversions to an actual lead or sale (not just impressions), whether they lock you into a long contract, and whether they report in plain language you can act on. Millecube uses server-side tracking, runs month-to-month with no lock-in, and reports monthly in plain language — the same standard we'd want from any agency we hired.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Stats />
      <Services />
      <WhoWeAre />
      <TrustCarousel />
      <NumberStats />
      <Portfolio />
      <CtaStrip />
    </main>
  );
}
