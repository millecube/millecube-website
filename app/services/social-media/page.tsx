import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Social Media Marketing — Millecube Digital",
  description:
    "Social media management for Malaysian businesses. Meta, TikTok, LinkedIn, Xiaohongshu — content strategy, creative, and community management.",
};

const platforms = [
  { name: "Meta (Facebook & Instagram)", desc: "Feed posts, Stories, and Reels — planned, created, and posted consistently. Community management and comment replies included." },
  { name: "TikTok", desc: "Short-form video strategy and content calendar. We brief and coordinate video production, or work with content you supply." },
  { name: "LinkedIn", desc: "For B2B brands and professional services. Thought leadership content, company page management, and lead-generating posts." },
  { name: "Xiaohongshu (RED)", desc: "For brands targeting Chinese-Malaysian audiences. Authentic lifestyle content and community engagement." },
];

const deliverables = [
  "Monthly content calendar",
  "Caption copywriting (English / BM / Mandarin)",
  "Graphic and creative direction",
  "Posting and scheduling",
  "Community management and replies",
  "Monthly analytics report",
  "Competitor benchmarking",
];

export default function SocialMediaPage() {
  return (
    <main>
      <InnerHero
        label="SOCIAL MEDIA MARKETING"
        title="Consistent presence. Content that connects."
        subtitle="We manage your social channels so you don't have to — strategy, creative, copy, and posting, handled every month."
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
                CHANNELS WE MANAGE
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: 1.05,
                  color: "#07503c",
                }}
              >
                Posting once a week is not a social media strategy.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Inconsistency kills trust. Audiences don't follow brands that disappear for weeks. We keep your channels active, on-brand, and strategically directed — so your social presence works even when you're not looking at it.
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
                Done-for-you. Every month.
              </h2>
              <p
                className="mt-5 text-sm"
                style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.85 }}
              >
                Month-to-month retainer. No lock-in.
              </p>
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
