import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "SEO & Search — Millecube Digital",
  description:
    "SEO services for Malaysian businesses. Keyword strategy, on-page SEO, content, and organic traffic that compounds over time.",
};

const deliverables = [
  "Technical SEO audit and fix plan",
  "Keyword strategy and topic mapping",
  "On-page optimisation (titles, meta, structure)",
  "Content brief and production",
  "Internal link architecture",
  "Google Search Console monitoring",
  "Monthly organic traffic and ranking report",
];

export default function SeoPage() {
  return (
    <main>
      <InnerHero
        label="SEO & SEARCH"
        title="Traffic that doesn't stop when you stop paying."
        subtitle="Organic visibility built on keyword strategy, on-page fundamentals, and content that answers what your buyers are searching for — compounding over time."
      />

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
                WHY SEO
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Paid ads stop. Organic search compounds.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                SEO is a long-term investment. It takes 3–6 months to see meaningful movement. But unlike paid ads, it doesn't stop generating traffic the moment you stop paying. Done right, it becomes one of the lowest cost-per-lead channels you have.
              </p>
              <p
                className="mt-4 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                We focus on the fundamentals: the right keywords, technically clean pages, and content that genuinely answers your buyers' questions. No black-hat tactics. No inflated rank promises.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-6">
                {[
                  { label: "Technical SEO", desc: "Site speed, crawlability, indexability, structured data, and Core Web Vitals — the foundation everything else is built on." },
                  { label: "Keyword Strategy", desc: "We research what your buyers are actually searching for, then map those terms to the right pages and content." },
                  { label: "On-Page Optimisation", desc: "Titles, meta descriptions, heading structure, and internal links — updated and optimised across all key pages." },
                  { label: "Content", desc: "Blog posts, landing pages, and FAQ content written to rank — not just to fill a content calendar." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-7 rounded-lg"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(7,80,60,0.08)" }}
                  >
                    <h3
                      className="text-sm font-bold mb-2"
                      style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.8 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
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
                Month-to-month. No lock-in.
              </h2>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center px-7 py-3.5 text-sm font-bold rounded"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Talk to us →
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
