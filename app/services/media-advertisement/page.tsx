import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Media Advertisement — Millecube Digital",
  description:
    "Meta Ads, Google Ads, and TikTok Ads managed by Millecube Digital. Every ringgit tracked back to a lead or a sale. No guesswork.",
};

const platforms = [
  { name: "Meta Ads", desc: "Facebook & Instagram campaigns — prospecting, retargeting, and conversion campaigns built around your business funnel." },
  { name: "Google Ads", desc: "Search and Performance Max campaigns that capture high-intent buyers at the exact moment they're looking for what you sell." },
  { name: "TikTok Ads", desc: "Short-form video ad campaigns built for reach, brand awareness, and lower-funnel conversions." },
];

const process = [
  { num: "01", title: "Full account audit", body: "We review your existing campaigns, ad spend history, and pixel setup. If you've run ads before, we find out what went wrong." },
  { num: "02", title: "Audience & funnel mapping", body: "We define your cold audiences, retargeting pools, and lookalikes — then map them to the right creative and offer at each stage." },
  { num: "03", title: "Creative strategy", body: "We specify the ad formats, messaging angles, and visual direction. Ad creative is either produced by us or briefed to your team." },
  { num: "04", title: "Campaign launch & optimisation", body: "Campaigns go live and we actively manage bids, budgets, and audience splits. We test systematically, not randomly." },
  { num: "05", title: "Monthly reporting", body: "You receive a clear report showing cost per lead or sale, ROAS, and what changed this month versus last. No jargon." },
];

const deliverables = [
  "Full pixel and conversion tracking setup",
  "Ad account structure and campaign architecture",
  "Audience strategy (cold, warm, retargeting)",
  "Creative briefs and ad copy",
  "A/B testing framework",
  "Monthly performance report",
  "Direct access to your account manager",
];

export default function MediaAdvertisementPage() {
  return (
    <main>
      <InnerHero
        label="MEDIA ADVERTISEMENT"
        title="Ad spend that you can trace to a sale."
        subtitle="Meta Ads, Google Ads, TikTok Ads — managed, optimised, and reported in plain ringgit. If it can't be traced back to a lead or a sale, we fix it."
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
                Most businesses run ads. Few businesses run them well.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                The problem isn't the platform. It's not knowing which campaigns are working, which audiences are converting, and what to do with that information. We fix the tracking, fix the structure, and fix the reporting — so you always know where your money is going.
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
            {process.map((step, i) => (
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
                Everything included. Nothing hidden.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Month-to-month retainer. No lock-in. We earn your business every month through the results we deliver.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center px-7 py-3.5 text-sm font-bold rounded"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Get a free audit →
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
