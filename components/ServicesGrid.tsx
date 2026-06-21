"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

// ── SINGLE-ROW MARQUEE ────────────────────────────────────────
const MARQUEE_ITEMS = [
  "Social Media", "Meta Ads", "TikTok Shop", "Shopee", "Lazada",
  "Google Ads", "SEO & Search", "Website Design", "Content Creation", "Brand Strategy",
];

function MarqueeTrack() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ overflow: "hidden", display: "flex" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee-l 32s linear infinite",
          flexShrink: 0,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              padding: "0 18px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: i % 4 === 1 ? "rgba(7,80,60,0.40)" : "#07503c",
              }}
            >
              {item}
            </span>
            <span style={{ color: "#07503c", fontSize: "5px", opacity: 0.28 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── SERVICE DATA ──────────────────────────────────────────────
interface SvcItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  platforms: string[];
  accent: "#32cd32" | "#FFD600";
  featured?: boolean;
  cardImg: string;
}

const SERVICES: SvcItem[] = [
  {
    id: "c1",
    name: "Social Media Marketing",
    slug: "social-media",
    description: "Build your brand presence and grow your audience without managing it daily.",
    platforms: ["Meta", "TikTok", "LinkedIn", "Xiaohongshu"],
    accent: "#32cd32",
    cardImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c2",
    name: "Media Advertisement",
    slug: "media-advertisement",
    description: "Every ringgit tracked back to a lead or a sale. No guesswork.",
    platforms: ["Facebook", "Instagram", "Google", "TikTok"],
    accent: "#FFD600",
    cardImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c3",
    name: "Marketplace Management",
    slug: "marketplace-management",
    description: "Shopee, Lazada, and TikTok Shop managed end-to-end.",
    platforms: ["Shopee", "Lazada", "TikTok Shop"],
    accent: "#32cd32",
    cardImg: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c4",
    name: "SEO & Search",
    slug: "seo",
    description: "Organic visibility that builds over time and compounds.",
    platforms: ["Google", "Bing", "AI Search"],
    accent: "#FFD600",
    cardImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c5",
    name: "Website & Landing Pages",
    slug: "website",
    description: "Pages built to convert the traffic you're paying for.",
    platforms: ["WordPress", "Next.js", "Webflow"],
    accent: "#32cd32",
    cardImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c6",
    name: "Content & Creative",
    slug: "content-creative",
    description: "Copy, graphics, and video assets built to stop the scroll and drive action.",
    platforms: ["Ad Creative", "Copywriting", "Video"],
    accent: "#FFD600",
    cardImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=75",
  },
  {
    id: "c7",
    name: "Branding & Strategy",
    slug: "branding-strategy",
    description:
      "Define your positioning before you spend on channels. The thinking behind everything else.",
    platforms: ["Brand Identity", "Strategy", "Analytics"],
    accent: "#FFD600",
    featured: true,
    cardImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=600&fit=crop&q=75",
  },
];

const DELAYS: Record<string, number> = {
  c1: 0, c2: 0.07, c3: 0.13,
  c4: 0.17, c5: 0.22, c6: 0.27,
  c7: 0.31,
};

// ── DARK CARD (Magnus-style, logo watermark) ──────────────────
function ServiceCard({ item }: { item: SvcItem }) {
  const isLime = item.accent === "#32cd32";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.88, delay: DELAYS[item.id] ?? 0, ease }}
      style={{ height: "100%" }}
    >
      <Link
        href={`/services/${item.slug}`}
        style={{
          display: "flex",
          height: "100%",
          textDecoration: "none",
          // Outer shell
          borderRadius: "20px",
          padding: "2.5px",
          background: "rgba(7,80,60,0.06)",
          border: "1px solid rgba(7,80,60,0.12)",
          boxShadow: "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.10)",
          transition:
            "border-color 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,214,0,0.55)";
          el.style.boxShadow = "0 6px 20px rgba(255,214,0,0.10), 0 18px 50px rgba(255,214,0,0.18)";
          el.style.transform = "translateY(-5px)";
          const arrow = el.querySelector<HTMLElement>(".svc-arrow");
          if (arrow) {
            arrow.style.backgroundColor = "rgba(255,214,0,0.22)";
            arrow.style.borderColor = "rgba(255,214,0,0.55)";
            arrow.style.color = "#FFD600";
            arrow.style.transform = "scale(1.08)";
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(7,80,60,0.12)";
          el.style.boxShadow = "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.10)";
          el.style.transform = "translateY(0)";
          const arrow = el.querySelector<HTMLElement>(".svc-arrow");
          if (arrow) {
            arrow.style.backgroundColor = isLime ? "rgba(50,205,50,0.08)" : "rgba(255,214,0,0.08)";
            arrow.style.borderColor = isLime ? "rgba(50,205,50,0.30)" : "rgba(255,214,0,0.30)";
            arrow.style.color = item.accent;
            arrow.style.transform = "scale(1)";
          }
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(0.99)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-5px) scale(1)";
        }}
      >
        {/* Inner core */}
        <div
          style={{
            flex: 1,
            borderRadius: "17.5px",
            background: "linear-gradient(145deg, #07503c 0%, #064232 60%, #073d2e 100%)",
            padding: "clamp(22px, 2.6vw, 30px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "256px",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
          }}
        >
          {/* Background photo — sits below everything else */}
          <img
            src={item.cardImg}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Gradient overlay: transparent at top (image shows), deep dark at bottom (text readable) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(6,31,23,0.22) 0%, rgba(7,80,60,0.60) 44%, rgba(6,31,23,0.94) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Logo watermark */}
          <img
            src="/logo-3d.png"
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-14%",
              right: "-6%",
              width: "clamp(130px, 16vw, 200px)",
              opacity: 0.072,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />

          {/* Radial accent glow (top-left for depth) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: isLime
                ? "radial-gradient(circle, rgba(50,205,50,0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,214,0,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* ── TOP: arrow button ── */}
          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
            <span
              className="svc-arrow"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: `1px solid ${isLime ? "rgba(50,205,50,0.30)" : "rgba(255,214,0,0.30)"}`,
                backgroundColor: isLime ? "rgba(50,205,50,0.08)" : "rgba(255,214,0,0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.accent,
                fontSize: "14px",
                flexShrink: 0,
                transition:
                  "background-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              ↗
            </span>
          </div>

          {/* ── BOTTOM: name + description + tags ── */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(22px, 2vw, 30px)",
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "8px",
                textShadow: "0 1px 8px rgba(0,0,0,0.18)",
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "12.5px",
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.56)",
                marginBottom: "16px",
              }}
            >
              {item.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {item.platforms.map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.68)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    padding: "3px 9px",
                    borderRadius: "100px",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── FEATURED CARD (full-width, Branding & Strategy) ───────────
function FeaturedCard({ item }: { item: SvcItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.88, delay: DELAYS[item.id] ?? 0, ease }}
    >
      <Link
        href={`/services/${item.slug}`}
        style={{
          display: "flex",
          textDecoration: "none",
          borderRadius: "20px",
          padding: "2.5px",
          background: "rgba(7,80,60,0.06)",
          border: "1px solid rgba(7,80,60,0.12)",
          boxShadow: "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.10)",
          transition:
            "border-color 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,214,0,0.55)";
          el.style.boxShadow = "0 6px 20px rgba(255,214,0,0.10), 0 18px 50px rgba(255,214,0,0.18)";
          el.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(7,80,60,0.12)";
          el.style.boxShadow = "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.10)";
          el.style.transform = "translateY(0)";
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(0.99)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-5px) scale(1)";
        }}
      >
        <div
          className="featured-inner"
          style={{
            flex: 1,
            borderRadius: "17.5px",
            background: "linear-gradient(135deg, #07503c 0%, #064232 50%, #073d2e 100%)",
            padding: "clamp(24px, 3vw, 36px) clamp(24px, 3vw, 44px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(28px, 5vw, 72px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
          }}
        >
          {/* Background photo */}
          <img
            src={item.cardImg}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
            }}
          />
          {/* Overlay: left-heavy dark for text readability, right fades to show image */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(6,31,23,0.92) 0%, rgba(7,80,60,0.80) 42%, rgba(7,80,60,0.55) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Logo watermark (right edge) */}
          <img
            src="/logo-3d.png"
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              right: "-4%",
              transform: "translateY(-50%)",
              width: "clamp(140px, 16vw, 210px)",
              opacity: 0.065,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />

          {/* Left: name + description */}
          <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
            {/* Eyebrow */}
            <span
              style={{
                display: "inline-flex",
                fontFamily: "var(--font-montserrat)",
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.48)",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                padding: "3px 10px",
                borderRadius: "100px",
                marginBottom: "12px",
              }}
            >
              Strategy
            </span>
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(26px, 2.6vw, 38px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13px",
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "480px",
              }}
            >
              {item.description}
            </p>
          </div>

          {/* Right: tags + CTA */}
          <div
            className="featured-right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "14px",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="featured-tags" style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "flex-end" }}>
              {item.platforms.map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.68)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    padding: "3px 9px",
                    borderRadius: "100px",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#FFD600",
                color: "#07503c",
                fontFamily: "var(--font-montserrat)",
                fontSize: "11px",
                fontWeight: 700,
                padding: "9px 8px 9px 18px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              Explore
              <span
                style={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(6,31,23,0.14)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────
export default function ServicesGrid() {
  const regular = SERVICES.filter((s) => !s.featured);
  const featured = SERVICES.find((s) => s.featured)!;

  return (
    <section style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>

      {/* ── SINGLE-ROW MARQUEE DIVIDER ────────────────────────── */}
      <div style={{ backgroundColor: "#FFD600", overflow: "hidden", padding: "14px 0" }}>
        <MarqueeTrack />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div
        style={{
          padding: "clamp(52px, 6.5vw, 88px) clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Section heading */}
          <motion.div
            style={{ marginBottom: "clamp(32px, 3.5vw, 48px)" }}
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.82, ease }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(36px, 4.4vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "#07503c",
                marginBottom: "10px",
              }}
            >
              Seven disciplines.{" "}
              <span style={{ color: "#32cd32" }}>One team.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "14px",
                color: "rgba(7,80,60,0.48)",
                lineHeight: 1.75,
                maxWidth: "440px",
              }}
            >
              Every service connects to the next. Strategy informs creative,
              creative drives campaigns, campaigns feed growth.
            </p>
          </motion.div>

          {/* ── 3-COL CARD GRID ─────────────────────────────────── */}
          <div
            className="svc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            {regular.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>

          {/* ── FEATURED FULL-WIDTH ──────────────────────────────── */}
          <FeaturedCard item={featured} />
        </div>
      </div>

      {/* ── CSS ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes marquee-l {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 1023px) {
          .svc-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .featured-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .featured-right {
            align-items: flex-start !important;
            flex-shrink: unset !important;
            width: 100%;
          }
          .featured-tags {
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 639px) {
          .svc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
