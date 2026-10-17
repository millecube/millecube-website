import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

const faqs = [
  {
    q: "How much does Shopee, Lazada, or TikTok Shop management cost in Malaysia?",
    a: "From RM 2,000 per month per platform. That covers listing optimisation, in-platform ads management, and chat support — WhatsApp us for a quote based on how many platforms and SKUs you need managed.",
  },
  {
    q: "Can you help me become a TikTok Shop seller or set up TikTok Shop affiliate?",
    a: "Yes — store setup, listing optimisation, and affiliate outreach coordination are part of our TikTok Shop management service, alongside shoppable video and campaign management.",
  },
  {
    q: "Do you manage Shopee Ads and LazAds, or just the listings?",
    a: "Both. Listing optimisation on its own doesn't move GMV without in-platform ads behind it, so campaign setup and daily budget management for Shopee Ads and LazAds are included, not an add-on.",
  },
  {
    q: "Do I need to be selling on all three platforms — Shopee, Lazada, and TikTok Shop?",
    a: "No. Most clients start on one or two platforms and we expand once that's performing. We'll tell you honestly if a platform isn't worth your budget yet rather than pushing all three from day one.",
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
  title: "Shopee Lazada TikTok Shop Management Malaysia",
  description:
    "Shopee, Lazada, and TikTok Shop managed end-to-end for Malaysian sellers. Store setup, listing optimisation, in-platform ads, TikTok Shop affiliate coordination, and monthly reporting — one team, from RM 2,000/month per platform.",
  keywords: [
    "Shopee management Malaysia",
    "Lazada seller management Malaysia",
    "TikTok Shop management Malaysia",
    "marketplace management Malaysia",
    "marketplace management Penang",
    "e-commerce marketplace agency Malaysia",
    "ecommerce enabler Malaysia",
    "TikTok marketing agency Malaysia",
    "TikTok Shop seller Malaysia",
    "Shopee Ads management Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/marketplace-management" },
  openGraph: {
    title: "Shopee, Lazada & TikTok Shop Management Malaysia — Millecube",
    description: "One team managing Shopee, Lazada, and TikTok Shop: listings, ads, chat, reporting. From RM 2,000/month.",
    url: "https://millecube.com/services/marketplace-management",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function MarketplaceManagementPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InnerHero
        bgImage="/hero-bg2.webp"
        label="MARKETPLACE MANAGEMENT"
        title="More sales on Shopee, Lazada, and TikTok Shop."
        subtitle="We manage your entire marketplace presence — listings, campaigns, chat, and fulfilment coordination — so you can focus on your product."
      />
      <ServiceContent
        slug="marketplace-management"
        stats={[
          { value: "3", label: "Platforms managed" },
          { value: "12.12", label: "Campaign expertise" },
          { value: "↑", label: "Search rank improvement" },
        ]}
        featuresLabel="WHAT WE DO"
        featuresHeadline="End-to-end marketplace operations, not just listing uploads."
        featuresBody="We handle the full day-to-day of your Shopee, Lazada, and TikTok Shop stores — from listing SEO to flash deals to chat support. Your store converts while you run the business."
        features={[
          {
            name: "Shopee management",
            desc: "Listing optimisation, Shopee Ads, campaign setup (11.11, 12.12, Flash Sales), and shop decoration to improve click-through rate.",
          },
          {
            name: "Lazada management",
            desc: "LazAds, listing best practices aligned to Lazada University guidelines, sponsored solutions, and LazMall compliance if applicable.",
          },
          {
            name: "TikTok Shop management",
            desc: "Product listing, affiliate outreach, shoppable video coordination, and TikTok Shop campaign management.",
          },
          {
            name: "Listing SEO",
            desc: "Keyword-optimised titles, descriptions, and attribute completion to improve search ranking within each platform's algorithm.",
          },
          {
            name: "Chat & customer service",
            desc: "Buyer chat handled during business hours with SLA targets for response time and resolution rate.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Store audit",
            body: "We audit your existing listings, ad accounts, and performance data across all platforms you currently sell on.",
          },
          {
            num: "02",
            title: "Listing optimisation",
            body: "We rewrite titles, main images, descriptions, and attributes using marketplace-specific keyword research.",
          },
          {
            num: "03",
            title: "Ads & campaign setup",
            body: "Shopee Ads, LazAds, and TikTok Shop campaign structures built and launched with daily budget management.",
          },
          {
            num: "04",
            title: "Campaign management",
            body: "Day-to-day campaign pacing, bid adjustments, and flash deal scheduling based on live performance data.",
          },
          {
            num: "05",
            title: "Monthly report & review",
            body: "Monthly performance review with GMV breakdown, ad spend efficiency, and next-period recommendations.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="Everything your marketplace store needs to perform."
        deliverablesBody="One team managing all three platforms so nothing falls through the cracks — and every ringgit of ad spend is accounted for."
        deliverables={[
          "Shopee store management",
          "Lazada store management",
          "TikTok Shop management",
          "Listing SEO & copywriting",
          "Shopee Ads / LazAds management",
          "Chat support (business hours)",
          "Campaign setup (11.11, 12.12)",
          "Monthly GMV & ads report",
        ]}
        ctaText="Manage my marketplace"
        faqs={faqs}
      />
      <CtaStrip />
    </main>
  );
}
