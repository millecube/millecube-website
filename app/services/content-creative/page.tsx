import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Content & Creative — Millecube Digital",
  description:
    "Ad creative, copywriting, and video assets for Malaysian businesses. Built to stop the scroll and drive action across Meta, TikTok, and Google.",
};

const deliverables = [
  "Ad creative (static and motion)",
  "Copywriting (ad copy, landing pages, emails)",
  "Video scripts and storyboards",
  "Graphic design assets",
  "Brand content guidelines",
  "A/B creative testing framework",
];

export default function ContentCreativePage() {
  return (
    <main>
      <InnerHero
        label="CONTENT & CREATIVE"
        title="Creative that earns attention. Copy that earns clicks."
        subtitle="Ad creative, copywriting, and video assets — designed around your offer, your audience, and the platform you're running on."
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
                WHAT WE PRODUCE
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Good creative is not about looking nice. It&apos;s about making people stop.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                We produce creative with one goal: performance. Every asset we produce is designed to stop the scroll, communicate the offer clearly, and push the audience toward the next step. Aesthetic is in service of outcome.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { label: "Ad Creative", desc: "Static images, carousel ads, and motion graphics for Meta, Google Display, and TikTok — built to the spec of each platform." },
                { label: "Ad Copywriting", desc: "Headlines, body copy, and CTAs written to match your audience's language and your offer's strongest angle." },
                { label: "Video Production", desc: "Scripts, storyboards, and editing for short-form video ads. We can work with raw footage or UGC-style content." },
                { label: "Landing Page Copy", desc: "Conversion-focused copy for your paid traffic destinations — structured to guide the visitor to one clear action." },
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
                Creative for the platform. Built for results.
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
