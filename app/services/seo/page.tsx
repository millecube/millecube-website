import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "SEO Agency Malaysia",
  description:
    "SEO services for Malaysian businesses. Keyword strategy, technical SEO, and organic traffic that compounds — first-page rankings within 90-120 days, tracked via Google Search Console.",
  keywords: [
    "SEO agency Malaysia",
    "SEO services Penang",
    "search engine optimization Malaysia",
    "Google ranking Malaysia",
    "organic traffic Malaysia",
    "local SEO Malaysia",
  ],
  alternates: { canonical: "https://millecube.com/services/seo" },
  openGraph: {
    title: "SEO Agency Malaysia — Millecube",
    description: "Technical SEO for Malaysian businesses. First-page rankings tracked monthly in plain language.",
    url: "https://millecube.com/services/seo",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

export default function SeoPage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg.png"
        label="SEO & SEARCH"
        title="Traffic that pays you back."
        subtitle="We grow your Google rankings for keywords your customers actually search — no black-hat tactics, no lock-in, and no promises we can't keep."
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
        featuresBody="We fix what's broken under the hood, research the keywords your buyers use, and build the content that earns your way to page 1 — and keeps you there. SEO done right is the lowest cost-per-lead channel you'll ever have."
        features={[
          {
            name: "Technical SEO",
            desc: "Site crawl, Core Web Vitals, page speed, indexability, structured data, and mobile usability — the foundations before any content work.",
          },
          {
            name: "Keyword strategy",
            desc: "Research-backed keyword mapping aligned to your services, products, and buyer intent — from awareness-stage queries to conversion-ready searches.",
          },
          {
            name: "On-page optimisation",
            desc: "Title tags, meta descriptions, H-tag structure, internal linking, and schema markup across your priority pages.",
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
      />
      <CtaStrip />
    </main>
  );
}
