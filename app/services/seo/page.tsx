import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

const faqs = [
  {
    q: "How long does SEO take to show results in Malaysia?",
    a: "Most clients see initial movement in rankings and impressions within 60-90 days, with first-page rankings for priority keywords within 90-120 days. We track this directly through Google Search Console data, not vanity metrics, so you see the real trend as it happens.",
  },
  {
    q: "Do you guarantee page 1 rankings?",
    a: "No — and any agency that promises a specific ranking position is making a claim they don't control. Google's algorithm decides where a page lands, not any agency. What we commit to is a documented process (technical fixes, keyword research, content, on-page work) and transparent monthly reporting so you can see exactly what's being done and what's moving.",
  },
  {
    q: "What's actually included in Millecube's SEO service?",
    a: "A technical SEO audit, keyword research and mapping, on-page optimisation across your priority pages, SEO content production, Google Search Console management, and a monthly rank-tracking report. See the full list below.",
  },
  {
    q: "How much does SEO cost in Malaysia?",
    a: "It depends on your site's current state, your competition, and your goals — a site with major technical issues needs different work than one that's already indexed well. We run an initial audit first, then quote based on what your specific site actually needs. WhatsApp us for a custom quote.",
  },
  {
    q: "Should I do SEO or Meta Ads first?",
    a: "They solve different problems and work best together, not as a choice. Meta Ads gets you leads immediately while SEO is compounding in the background; SEO becomes your lowest cost-per-lead channel once it matures, typically 3-6 months in. Most of our clients run both, with SEO gradually reducing reliance on paid spend over time.",
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
  title: "SEO Agency Malaysia & Penang",
  description:
    "SEO agency for businesses across Malaysia, including Penang, Kedah, and Kuching. Keyword strategy, technical SEO, and organic traffic that compounds — first-page rankings within 90-120 days, tracked via Google Search Console.",
  keywords: [
    "SEO agency Malaysia",
    "SEO agency Penang",
    "Penang SEO agency",
    "SEO services Penang",
    "SEO company Penang",
    "SEO agency Kedah",
    "SEO Kuching",
    "search engine optimization Malaysia",
    "technical SEO Malaysia",
    "Google ranking Malaysia",
    "organic traffic Malaysia",
    "local SEO Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/seo" },
  openGraph: {
    title: "SEO Agency Malaysia & Penang — Millecube",
    description: "Technical SEO for businesses in Penang and across Malaysia. First-page rankings tracked monthly in plain language.",
    url: "https://millecube.com/services/seo",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function SeoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InnerHero
        bgImage="/hero-bg.webp"
        label="SEO AGENCY MALAYSIA"
        title="Traffic that pays you back."
        subtitle="An SEO agency for businesses across Malaysia, including Penang, Kedah, and Kuching — we grow your Google rankings for keywords your customers actually search, no black-hat tactics, no lock-in, and no promises we can't keep."
      />
      <ServiceContent
        slug="seo"
        stats={[
          { value: "3–6", label: "Month payback period" },
          { value: "0", label: "Black-hat tactics, ever" },
          { value: "∞", label: "Compounding value after you stop paying" },
        ]}
        featuresLabel="WHAT WE DO"
        featuresHeadline="Technical SEO and content that builds lasting visibility."
        featuresBody="As an SEO agency serving businesses across Malaysia, including Penang, Kedah, and Kuching, we fix what's broken under the hood, research the keywords your buyers use, and build the content that earns your way to page 1 — and keeps you there. SEO done right is the lowest cost-per-lead channel you'll ever have."
        features={[
          {
            name: "Technical SEO",
            desc: "Full site crawl, Core Web Vitals (LCP, INP, CLS), page speed, crawlability and indexability checks, structured data (Organization, LocalBusiness, FAQPage schema), and mobile usability — the foundations before any content work.",
          },
          {
            name: "Keyword strategy",
            desc: "Research-backed keyword mapping for Penang and Malaysia-wide search visibility, aligned to your services, products, and buyer intent — from awareness-stage queries to conversion-ready searches, cross-checked against what's already ranking in Google Search Console.",
          },
          {
            name: "On-page optimisation",
            desc: "Title tags, meta descriptions, H-tag structure, internal linking, and schema markup across your priority pages — rewritten to match the exact language your customers search, not just brand copy.",
          },
          {
            name: "Content production",
            desc: "SEO blog posts, service page copy, and FAQ content targeting long-tail queries your competitors haven't claimed yet.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Technical audit",
            body: "We crawl your site, identify indexability issues, Core Web Vitals failures, and structural problems blocking your rankings.",
          },
          {
            num: "02",
            title: "Keyword & competitor research",
            body: "We map keyword opportunities by search volume, intent, and your realistic ability to rank — no moonshot promises.",
          },
          {
            num: "03",
            title: "On-page fixes",
            body: "Priority pages get title tags, meta descriptions, H-tags, and internal links optimised before new content is built.",
          },
          {
            num: "04",
            title: "Content production",
            body: "SEO content written to target specific queries — every piece maps to a keyword cluster, not just a page count.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="A full SEO retainer, tracked monthly."
        deliverablesBody="Transparent reporting with rank tracking, traffic data, and clear next priorities every month. You always know where things stand."
        deliverables={[
          "Technical SEO audit",
          "Keyword research & mapping",
          "On-page optimisation (10 pages/mo)",
          "Content brief production",
          "SEO copywriting",
          "Google Search Console management",
          "Monthly rank tracking report",
        ]}
        ctaText="Grow my search traffic"
        faqs={faqs}
      />
      <CtaStrip />
    </main>
  );
}
