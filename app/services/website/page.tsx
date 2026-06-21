import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ServiceContent from "@/components/ServiceContent";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Website & Landing Pages — Millecube Digital",
  description:
    "Business websites, landing pages, and e-commerce stores built to convert. WordPress, Next.js, and Webflow — designed for the traffic you're paying to send.",
};

export default function WebsitePage() {
  return (
    <main>
      <InnerHero
        bgImage="/hero-bg2.png"
        label="WEBSITE & LANDING PAGES"
        title="Pages that convert the traffic you're paying for."
        subtitle="We design and build business websites, landing pages, and e-commerce stores on WordPress, Next.js, and Webflow — fast, mobile-first, and built to rank."
      />
      <ServiceContent
        slug="website"
        stats={[
          { value: "8", label: "Deliverables per project" },
          { value: "30", label: "Day post-launch support" },
          { value: "3", label: "Platforms we build on" },
        ]}
        featuresLabel="WHAT WE BUILD"
        featuresHeadline="Fast, conversion-focused websites — not just pretty ones."
        featuresBody="We build business websites and landing pages designed to convert — not just to look good. Mobile-first, performance-optimised, and connected to your existing marketing stack from day one."
        features={[
          {
            name: "Business websites",
            desc: "Multi-page company sites with service pages, about, contact, and blog — built to rank on Google and convert first-time visitors.",
          },
          {
            name: "Landing pages",
            desc: "Single-purpose pages designed for paid traffic conversion — A/B testable, fast-loading, and integrated with your ad pixels.",
          },
          {
            name: "E-commerce stores",
            desc: "WooCommerce and Shopify stores with product pages, cart, checkout, and payment gateway integration.",
          },
          {
            name: "UI/UX design",
            desc: "Figma wireframes and full design mockups before development begins — you see exactly what you're getting before a line of code is written.",
          },
          {
            name: "SEO foundation",
            desc: "Technical SEO baked in at build time — schema markup, sitemap, robots.txt, and Core Web Vitals from day one.",
          },
          {
            name: "Hosting & maintenance",
            desc: "Optional ongoing hosting, SSL, and plugin or security maintenance so your site stays live, fast, and updated.",
          },
        ]}
        process={[
          {
            num: "01",
            title: "Discovery & brief",
            body: "We define your goals, audience, sitemap, and feature requirements before a single pixel is designed.",
          },
          {
            num: "02",
            title: "Design mockup",
            body: "Full Figma design for desktop and mobile — reviewed and approved by you before development starts.",
          },
          {
            num: "03",
            title: "Development",
            body: "Built on your chosen platform (WordPress, Next.js, or Webflow) with performance and mobile-first as non-negotiable defaults.",
          },
          {
            num: "04",
            title: "QA & launch",
            body: "Cross-browser testing, page speed audit, and pixel verification before go-live. No shortcuts at the finish line.",
          },
        ]}
        deliverablesLabel="WHAT'S INCLUDED"
        deliverablesHeadline="A complete website delivery — design to launch."
        deliverablesBody="Fixed-scope, fixed-price. No surprise add-ons after the brief is signed. What you see in the proposal is what gets built."
        deliverables={[
          "Figma wireframe & design",
          "Responsive development (mobile + desktop)",
          "CMS setup & content migration",
          "Pixel & tracking integration",
          "Speed optimisation",
          "SEO foundation setup",
          "30-day post-launch support",
          "Training documentation",
        ]}
        ctaText="Build my website"
      />
      <CtaStrip />
    </main>
  );
}
