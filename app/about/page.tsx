import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About — Millecube Digital",
  description:
    "Millecube is a technical-first digital marketing agency from Penang, Malaysia. Built by people who understand what's at stake.",
};

const values = [
  {
    num: "01",
    title: "Track everything.",
    body: "We don't report reach or impressions. We track cost per lead, cost per sale, and revenue generated — and we report that. If it can't be tied back to a business number, it doesn't count.",
  },
  {
    num: "02",
    title: "Be direct.",
    body: "If something isn't working, we say it. If we're not the right fit for your business, we'll tell you before you sign anything. No hard sells, no locked-in contracts.",
  },
  {
    num: "03",
    title: "Stay hands-on.",
    body: "The people you meet are the people who work on your account. We don't hand you to a junior after the pitch. You get direct access to the team making your strategy.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <InnerHero
        label="ABOUT US"
        title="Built by people who've been on your side of the table."
        subtitle="We started Millecube because we got tired of agencies that couldn't explain what our money was doing."
      />

      {/* Story */}
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
                OUR STORY
              </p>
              <h2
                className="font-display"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Most agency reports look good. Most businesses can&apos;t trace them to a single sale.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Millecube was founded in 2024 by a team of people who had run their own businesses and been on the wrong end of agency relationships — paying monthly retainers, getting monthly reports full of reach and impressions, and never really knowing whether the marketing was working.
              </p>
              <p
                className="text-sm leading-relaxed font-medium"
                style={{ color: "#07503c", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                We built Millecube around one principle: every ringgit you spend on marketing should be traceable to a business outcome. Not a social metric. A business outcome.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                We work with Malaysian SMEs — owner-operated businesses typically doing RM1 million to RM10 million in revenue, with no internal marketing team. Businesses where the owner is the marketing department, and where the stakes are real.
              </p>
              <div
                className="mt-4 pt-6 flex flex-wrap gap-8"
                style={{ borderTop: "1px solid rgba(7,80,60,0.1)" }}
              >
                {["35+ Brands managed", "RM2M+ Ad spend managed", "Since 2024"].map((stat) => (
                  <div key={stat} className="flex flex-col gap-0.5">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                    >
                      {stat.split(" ")[0]}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(7,80,60,0.45)", fontFamily: "var(--font-montserrat)" }}
                    >
                      {stat.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs font-bold tracking-[0.28em] mb-12"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
          >
            HOW WE WORK
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="flex flex-col gap-4 p-8 lg:p-10"
                style={{
                  borderTop: "1px solid rgba(7,80,60,0.1)",
                  borderLeft: i > 0 ? "1px solid rgba(7,80,60,0.1)" : "none",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                >
                  {v.num}
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.8 }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
