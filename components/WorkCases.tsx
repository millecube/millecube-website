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
    label: "Consumer Brand · Meta Ads",
    metric: "3.8×",
    detail: "ROAS on Meta Ads",
    desc: "Created high-converting ad creatives for D'Haifa Global, a Penang-based brand manufacturer. Restructured audience targeting and cut cost per sale by 62% over 90 days.",
    img: "/ourwork-fbpost_sq1.webp",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.32) 40%, rgba(6,31,23,0.96) 78%)",
  },
  {
    id: "c2",
    label: "Fashion · Website Design",
    metric: "2×",
    detail: "E-commerce conversions",
    desc: "Designed and built Maison Elle's fashion e-commerce site. UX built around the modern female buyer to maximise product-to-checkout conversion.",
    img: "/ourwork-landingpage_sq1.webp",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 38%, rgba(6,31,23,0.95) 76%)",
  },
  {
    id: "c3",
    label: "Furniture · Website Design",
    metric: "−42%",
    detail: "Cost per lead",
    desc: "Built Norsen's premium furniture landing page. Drove paid traffic to a conversion-focused design that cut cost per lead by 42%.",
    img: "/ourwork-landingpage_h1.webp",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.04) 0%, rgba(6,31,23,0.33) 42%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c4",
    label: "Interior Design · Social Media",
    metric: "4×",
    detail: "Organic reach in 3 months",
    desc: "Managed Wocohwood's social presence across Meta and TikTok. Lifestyle-driven content grew organic reach 4× in 90 days.",
    img: "/ourwork-igreel_sq1.webp",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.30) 40%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c5",
    label: "Fitness · Paid Ads",
    metric: "#1",
    detail: "Category ranking",
    desc: "Ran bilingual paid campaigns for Razak City fitness centre. Localised ad creatives drove top category ranking and consistent member sign-ups.",
    img: "/ourwork-landingpage_h2.webp",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 38%, rgba(6,31,23,0.94) 76%)",
  },
  {
    id: "c6",
    label: "F&B · Branding",
    metric: "22",
    detail: "Business inquiries — first month",
    desc: "Complete brand identity for Crispytoo, a Penang biscuit brand — logo, packaging, and retail collateral. 22 wholesale inquiries came in within 30 days of launch.",
    img: "/ourwork-branding_sq1.webp",
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
      className="case-card"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.88, delay: DELAYS[item.id] ?? 0, ease }}
    >
      {/* Outer shell — hover handled by .wc-outer CSS */}
      <div className="wc-outer">
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
              transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
            }}
            className="wc-img"
          />

          {/* Gradient overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: item.overlay,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Category badge — always visible */}
          <span
            className="wc-badge"
            style={{
              position: "absolute",
              top: "14px",
              left: "16px",
              fontSize: "7.5px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
              backgroundColor: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
              padding: "3px 9px",
              borderRadius: "100px",
              fontFamily: "var(--font-montserrat)",
              zIndex: 3,
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </span>

          {/* Default state: large metric at bottom — fades out on hover */}
          <div className="wc-metric-default">
            <p
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(28px, 2.8vw, 44px)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#FFD600",
                margin: "0 0 4px",
              }}
            >
              {item.metric}
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.58)",
                margin: 0,
              }}
            >
              {item.detail}
            </p>
          </div>

          {/* Hover reveal panel — slides up from bottom */}
          <div className="wc-reveal">
            <p
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(24px, 2.4vw, 36px)",
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
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.52)",
                margin: "0 0 10px",
              }}
            >
              {item.detail}
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "11.5px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.60)",
                margin: 0,
              }}
            >
              {item.desc}
            </p>
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
          opacity: 0.04,
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

        {/* Bento grid */}
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
        /* Outer shell */
        .wc-outer {
          flex: 1;
          display: flex;
          border-radius: 15px;
          padding: 2.5px;
          background: rgba(7,80,60,0.02);
          border: 1px solid rgba(7,80,60,0.09);
          box-shadow: 0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.07);
          transition:
            border-color 280ms cubic-bezier(0.32,0.72,0,1),
            box-shadow 280ms cubic-bezier(0.32,0.72,0,1),
            transform 280ms cubic-bezier(0.32,0.72,0,1);
          height: 100%;
        }
        .wc-outer > div {
          width: 100%;
        }
        .wc-outer:hover {
          border-color: rgba(255,214,0,0.40);
          box-shadow: 0 6px 16px rgba(0,0,0,0.10), 0 16px 44px rgba(7,80,60,0.16);
          transform: translateY(-4px);
        }

        /* Image subtle zoom on hover */
        .wc-outer:hover .wc-img {
          transform: scale(1.04);
        }

        /* Default metric — sits at bottom, fades out on hover */
        .wc-metric-default {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          z-index: 2;
          transition:
            opacity 240ms cubic-bezier(0.22,1,0.36,1),
            transform 240ms cubic-bezier(0.22,1,0.36,1);
        }
        .wc-outer:hover .wc-metric-default {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }

        /* Reveal panel — slides up from bottom on hover */
        .wc-reveal {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          background: rgba(4, 19, 13, 0.91);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 16px 16px 20px;
          border-radius: 0 0 12px 12px;
          transform: translateY(100%);
          transition: transform 380ms cubic-bezier(0.22,1,0.36,1);
        }
        .wc-outer:hover .wc-reveal {
          transform: translateY(0%);
        }

        /* Responsive grid */
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
