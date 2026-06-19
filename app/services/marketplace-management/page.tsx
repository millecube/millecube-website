import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Marketplace Management — Millecube Digital",
  description:
    "Shopee, Lazada, and TikTok Shop managed end-to-end by Millecube Digital. Store setup, listing optimisation, ads, and monthly reporting.",
};

const platforms = [
  { name: "Shopee", desc: "Full store management — listing creation and SEO, Shopee Ads (Search, Discovery, Live), promotions setup, and performance review." },
  { name: "Lazada", desc: "Store optimisation, Lazada Sponsored Discovery and Search ads, Flash Sale participation, and ranking improvement." },
  { name: "TikTok Shop", desc: "Product listing, affiliate content coordination, TikTok Shop ads, and LIVE commerce setup for brands ready to sell on short-form." },
];

const process = [
  { num: "01", title: "Store audit", body: "We review your current listings, images, descriptions, and ad account — finding exactly where you're losing visibility and conversions." },
  { num: "02", title: "Listing optimisation", body: "Every product gets a rewritten title, keyword-rich description, and properly structured attributes. We follow each platform's algorithm, not guesswork." },
  { num: "03", title: "Ads setup & management", body: "We set up and manage Shopee/Lazada Ads with proper keyword targeting and bid strategy. Budget is managed to hit your target ROAS or cost-per-sale." },
  { num: "04", title: "Promotions & campaigns", body: "We plan your participation in platform campaigns (Double 11, 12.12, Flash Sales) well in advance and set up vouchers and bundles correctly." },
  { num: "05", title: "Monthly reporting", body: "You get a clean monthly report covering store revenue, ad spend, bestsellers, and what we're doing next. Numbers, not slides." },
];

const deliverables = [
  "Full store audit and action plan",
  "Product listing copy and keyword optimisation",
  "Shopee / Lazada / TikTok Shop Ads management",
  "Campaign and promotion planning",
  "Competitor and keyword monitoring",
  "Review and rating strategy",
  "Monthly revenue and performance report",
  "Direct Shopee/Lazada account manager access",
];

export default function MarketplaceManagementPage() {
  return (
    <main>
      <InnerHero
        label="MARKETPLACE MANAGEMENT"
        title="Your store is live. Now make it sell."
        subtitle="Shopee, Lazada, TikTok Shop — managed end-to-end. Listings that rank, ads that convert, and monthly numbers you can actually use."
      />

      {/* Platforms */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#EBFFF3", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold tracking-[0.28em] mb-5"
                style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
              >
                PLATFORMS WE MANAGE
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Being on Shopee is not the same as selling on Shopee.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Most sellers have a store. Very few have an optimised one. The difference is in your search ranking, your listing quality score, your ad bid strategy, and how you participate in platform promotions. We take care of all of it.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="p-7 rounded-lg"
                  style={{ backgroundColor: "#ffffff", border: "1px solid rgba(7,80,60,0.08)" }}
                >
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.8 }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.28em] mb-12"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
          >
            HOW IT WORKS
          </p>
          <div className="flex flex-col">
            {process.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8"
                style={{ borderTop: "1px solid rgba(7,80,60,0.1)" }}
              >
                <div className="lg:col-span-1">
                  <span
                    className="text-xs font-bold"
                    style={{ color: "rgba(7,80,60,0.25)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p
                    className="text-sm"
                    style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.8 }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderBottom: "1px solid rgba(7,80,60,0.1)" }} />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#EBFFF3", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold tracking-[0.28em] mb-5"
                style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
              >
                WHAT YOU GET
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Full store management. One team.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Month-to-month retainer. No long-term commitment. We grow your store month on month — or you don't pay the next one.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center px-7 py-3.5 text-sm font-bold rounded"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Get a store audit →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-4"
                    style={{ borderTop: "1px solid rgba(7,80,60,0.1)" }}
                  >
                    <span style={{ color: "#32cd32", fontSize: "16px", lineHeight: 1 }}>✓</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
                <div style={{ borderBottom: "1px solid rgba(7,80,60,0.1)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
