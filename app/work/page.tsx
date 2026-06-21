import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import WorkCases from "@/components/WorkCases";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Our Work — Millecube Digital",
  description:
    "Case studies and results from Millecube Digital. Meta Ads, Marketplace Management, SEO, and more — for Malaysian SMEs.",
};

export default function WorkPage() {
  return (
    <main>
      <InnerHero
        label="OUR WORK"
        title="Results that speak louder than decks."
        subtitle="A selection of what we've driven for our clients — measured in business outcomes, not social metrics."
        bgImage="/work-bg1.png"
      />
      <WorkCases />

      {/* Meet the team strip */}
      <section
        style={{
          backgroundColor: "#07503c",
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(50,205,50,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            paddingLeft: "clamp(20px, 3vw, 40px)",
            paddingRight: "clamp(20px, 3vw, 40px)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(20px, 2.5vw, 28px)",
          }}
        >
          <p
            style={{
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(50,205,50,0.75)",
              fontFamily: "var(--font-montserrat)",
              margin: 0,
            }}
          >
            The People Behind the Work
          </p>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            Want to know who you&apos;d actually be working with?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(13px, 1.4vw, 15.5px)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.56)",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            No rotating account managers. No invisible teams. The same people
            who pitch you are the ones who run your campaigns.
          </p>

          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#FFD600",
              color: "#07503c",
              fontFamily: "var(--font-montserrat)",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: "100px",
              transition:
                "background-color 240ms cubic-bezier(0.32,0.72,0,1), transform 240ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#ffe033";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#FFD600";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Meet the team
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "22px",
                height: "22px",
                borderRadius: "100%",
                backgroundColor: "rgba(7,80,60,0.15)",
                fontSize: "13px",
                lineHeight: 1,
              }}
            >
              →
            </span>
          </Link>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
