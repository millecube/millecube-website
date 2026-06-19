import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Website & Landing Pages — Millecube Digital",
  description:
    "Websites and landing pages built to convert. WordPress, Next.js, and Webflow — designed for the traffic you're paying to send.",
};

const deliverables = [
  "Discovery and wireframing session",
  "Design and development",
  "Mobile-first responsive build",
  "Conversion tracking and pixel setup",
  "Basic SEO on-page setup",
  "Speed and performance optimisation",
  "CMS training and handover",
  "30-day post-launch support",
];

export default function WebsitePage() {
  return (
    <main>
      <InnerHero
        label="WEBSITE & LANDING PAGES"
        title="Pages that convert the traffic you're paying for."
        subtitle="A website that doesn't convert is just an expensive brochure. We build pages that work — fast, clear, and built to turn visitors into leads."
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
                WHAT WE BUILD
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Built for performance. Not just aesthetics.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                A beautiful site that loads slowly, or buries your call-to-action, is a problem. We design and build with conversion in mind first — every element on the page has a job to do.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { label: "Business Websites", desc: "Company profiles, service pages, and multi-page sites built to rank on Google and convert first-time visitors." },
                { label: "Landing Pages", desc: "Single-purpose pages for your ad campaigns — no navigation distractions, one clear action." },
                { label: "E-commerce Sites", desc: "Product stores with payment integration, inventory management, and conversion-optimised checkout." },
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
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: "rgba(50,205,50,0.08)", border: "1px solid rgba(50,205,50,0.2)" }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                >
                  Platforms: WordPress · Next.js · Webflow
                </p>
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
                Fixed scope. Fixed price. No surprises.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Website projects are scoped and priced upfront. You know what you're getting before we start.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center px-7 py-3.5 text-sm font-bold rounded"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Get a quote →
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
