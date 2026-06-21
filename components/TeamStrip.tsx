"use client";

import Link from "next/link";

export default function TeamStrip() {
  return (
    <section
      style={{
        backgroundColor: "#07503c",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "clamp(48px, 6vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          No rotating account managers. No invisible teams. The same people who
          pitch you are the ones who run your campaigns.
        </p>

        <Link href="/about" className="team-strip-cta">
          Meet the team
          <span className="team-strip-icon">→</span>
        </Link>
      </div>

      <style>{`
        .team-strip-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #FFD600;
          color: #07503c;
          font-family: var(--font-montserrat);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 100px;
          transition:
            background-color 240ms cubic-bezier(0.32,0.72,0,1),
            transform 240ms cubic-bezier(0.32,0.72,0,1);
        }
        .team-strip-cta:hover {
          background-color: #ffe033;
          transform: translateY(-2px);
        }
        .team-strip-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 100%;
          background-color: rgba(7,80,60,0.15);
          font-size: 13px;
          line-height: 1;
        }
      `}</style>
    </section>
  );
}
