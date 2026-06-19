import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Services — Millecube Digital",
  description:
    "Meta Ads, Google Ads, Shopee, Lazada, TikTok Shop management, SEO, websites, content, and branding — every channel your revenue depends on.",
};

const services = [
  {
    num: "01",
    name: "Social Media Marketing",
    slug: "social-media",
    description: "Build your brand presence, keep your channels active, and grow your audience — without you having to manage it daily.",
    platforms: "Meta · TikTok · LinkedIn · Xiaohongshu",
  },
  {
    num: "02",
    name: "Media Advertisement",
    slug: "media-advertisement",
    description: "Meta Ads, Google Ads, and TikTok Ads — every ringgit tracked back to a lead or a sale. No guesswork.",
    platforms: "Facebook · Instagram · Google · TikTok",
  },
  {
    num: "03",
    name: "Marketplace Management",
    slug: "marketplace-management",
    description: "Shopee, Lazada, and TikTok Shop managed end-to-end — listings, ads, promotions, and monthly performance reporting.",
    platforms: "Shopee · Lazada · TikTok Shop",
  },
  {
    num: "04",
    name: "SEO & Search",
    slug: "seo",
    description: "Organic visibility that builds over time. Keyword strategy, on-page SEO, and content that compounds.",
    platforms: "Google · Bing · AI Search",
  },
  {
    num: "05",
    name: "Website & Landing Pages",
    slug: "website",
    description: "Pages built to convert the traffic you're paying for — not just to look good.",
    platforms: "WordPress · Next.js · Webflow",
  },
  {
    num: "06",
    name: "Content & Creative",
    slug: "content-creative",
    description: "Copy, graphics, and video assets designed for performance. Built to stop the scroll and drive action.",
    platforms: "Ad Creative · Copywriting · Video",
  },
  {
    num: "07",
    name: "Branding & Strategy",
    slug: "branding-strategy",
    description: "Define your positioning and messaging before you spend on channels. The thinking behind everything.",
    platforms: "Brand Identity · Strategy · Analytics",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <InnerHero
        label="WHAT WE DO"
        title="Every channel your revenue depends on."
        subtitle="We manage paid media, marketplace stores, SEO, websites, and creative — each tracked back to business outcomes."
      />

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-row group grid grid-cols-1 lg:grid-cols-12 gap-4 py-8"
                style={{
                  borderTop: "1px solid rgba(7,80,60,0.1)",
                  textDecoration: "none",
                }}
              >
                {/* Number + Name */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span
                    className="text-xs font-bold mt-0.5 shrink-0 transition-colors duration-200"
                    style={{
                      color: "rgba(7,80,60,0.25)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {service.num}
                  </span>
                  <h2
                    className="text-sm font-bold transition-colors duration-200"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {service.name}
                  </h2>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p
                    className="text-sm"
                    style={{
                      color: "rgba(7,80,60,0.55)",
                      fontFamily: "var(--font-montserrat)",
                      lineHeight: 1.75,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Platforms + Arrow */}
                <div className="lg:col-span-3 flex items-start justify-between lg:justify-end gap-4">
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "rgba(7,80,60,0.3)",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {service.platforms}
                  </span>
                  <span
                    className="text-xs font-bold shrink-0 transition-colors duration-200"
                    style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
            <div style={{ borderBottom: "1px solid rgba(7,80,60,0.1)" }} />
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
