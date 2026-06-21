"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface CaseItem {
  id: string;
  label: string;
  metric: string;
  detail: string;
  desc: string;
  img: string;
  overlay: string;
}

const CASES: CaseItem[] = [
  {
    id: "c1",
    label: "F&B · Meta Ads",
    metric: "3.8×",
    detail: "ROAS on Meta Ads",
    desc: "Reduced cost per sale by 62% over 90 days through audience restructuring and creative testing.",
    img: "/ourwork-fbpost_sq1.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.32) 40%, rgba(6,31,23,0.96) 78%)",
  },
  {
    id: "c2",
    label: "Retail · Shopee",
    metric: "2×",
    detail: "Shopee revenue in 60 days",
    desc: "Full store audit, listing optimisation, and Shopee Ads restructure.",
    img: "/ourwork-landingpage_sq1.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 38%, rgba(6,31,23,0.95) 76%)",
  },
  {
    id: "c3",
    label: "Services · Google Ads",
    metric: "−42%",
    detail: "Cost per lead",
    desc: "Google Search rebuilt from scratch with a new keyword strategy and landing page.",
    img: "/ourwork-landingpage_h1.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.04) 0%, rgba(6,31,23,0.33) 42%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c4",
    label: "F&B · Social Media",
    metric: "4×",
    detail: "Organic reach in 3 months",
    desc: "Content calendar, creative direction, and consistent posting across Meta and TikTok.",
    img: "/ourwork-igreel_sq1.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.30) 40%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c5",
    label: "E-commerce · Lazada",
    metric: "#1",
    detail: "Category ranking",
    desc: "Listing optimisation, Lazada Sponsored Discovery, and a structured review strategy.",
    img: "/ourwork-landingpage_h2.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 38%, rgba(6,31,23,0.94) 76%)",
  },
  {
    id: "c6",
    label: "B2B · Meta Ads",
    metric: "22",
    detail: "Qualified leads — first month",
    desc: "Lead gen campaign with CRM integration and a structured follow-up sequence.",
    img: "/ourwork-branding_sq1.png",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.30) 38%, rgba(6,31,23,0.95) 78%)",
  },
];

const DELAYS: Record<string, number> = {
  c1: 0,
  c2: 0.07,
  c3: 0.13,
  c4: 0.18,
  c5: 0.23,
  c6: 0.28,
};

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <motion.div
      className={`case-card case-card--${item.id}`}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.88, delay: DELAYS[item.id] ?? 0, ease }}
    >
      {/* Outer shell */}
      <div
        style={{
          flex: 1,
          borderRadius: "15px",
          padding: "2.5px",
          background: "rgba(7,80,60,0.02)",
          border: "1px solid rgba(7,80,60,0.09)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.07)",
          transition:
            "border-color 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,214,0,0.35)";
          el.style.boxShadow =
            "0 4px 12px rgba(0,0,0,0.08), 0 12px 40px rgba(7,80,60,0.14)";
          el.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(7,80,60,0.09)";
          el.style.boxShadow =
            "0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.07)";
          el.style.transform = "translateY(0)";
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px) scale(0.99)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1)";
        }}
      >
        {/* Inner core */}
        <div
          style={{
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Background photo */}
          <img
            src={item.img}
            alt={item.label}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Gradient overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: item.overlay,
              pointerEvents: "none",
            }}
          />

          {/* Card content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "14px 16px 18px",
            }}
          >
            {/* Top: category badge */}
            <span
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.82)",
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "3px 9px",
                borderRadius: "100px",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {item.label}
            </span>

            {/* Bottom: metric + detail + description */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(28px, 2.8vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#FFD600",
                  margin: "0 0 3px",
                }}
              >
                {item.metric}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.60)",
                  margin: "0 0 9px",
                }}
              >
                {item.detail}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "11.5px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.48)",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkCases() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark */}
      <img
        src="/logo-3d.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-35%, -42%)",
          width: "clamp(300px, 38vw, 500px)",
          opacity: 0.045,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: "clamp(20px, 3vw, 40px)",
          paddingRight: "clamp(20px, 3vw, 40px)",
          paddingTop: "clamp(44px, 5vw, 64px)",
          paddingBottom: "clamp(24px, 3vw, 36px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <motion.div
          style={{ marginBottom: "clamp(20px, 2.4vw, 30px)" }}
          initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.82, ease }}
        >
          <p
            style={{
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#32cd32",
              fontFamily: "var(--font-montserrat)",
              marginBottom: "9px",
            }}
          >
            Case Studies
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#07503c",
              margin: 0,
            }}
          >
            Results measured in{" "}
            <span style={{ color: "#32cd32" }}>business outcomes.</span>
          </h2>
        </motion.div>

        {/* Bento grid — same structure as Portfolio */}
        <div
          className="cases-bento"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "300px 280px",
            gridTemplateAreas: `
              "c1 c1 c2 c3"
              "c4 c5 c6 c6"
            `,
            gap: "10px",
          }}
        >
          {CASES.map((item) => (
            <div key={item.id} style={{ gridArea: item.id, minHeight: 0 }}>
              <CaseCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .cases-bento {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 240px 200px 200px 220px !important;
            grid-template-areas:
              "c1 c1"
              "c2 c3"
              "c4 c5"
              "c6 c6" !important;
          }
        }
        @media (max-width: 639px) {
          .cases-bento {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 200px) !important;
            grid-template-areas:
              "c1" "c2" "c3" "c4" "c5" "c6" !important;
          }
        }
        .case-card { height: 100%; }
      `}</style>
    </section>
  );
}
