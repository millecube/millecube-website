"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  img: string;
  tint: string;
  overlay: string;
}

const GALLERY: GalleryItem[] = [
  {
    id: "c1",
    category: "Website Design",
    title: "Conversion-Driven Landing Pages",
    img: "/ourwork-landingpage_h1.webp",
    tint: "rgba(7,80,60,0.14)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.22) 30%, rgba(6,31,23,0.94) 76%)",
  },
  {
    id: "c2",
    category: "E-Commerce Design",
    title: "Fashion-Forward Storefronts",
    img: "/ourwork-landingpage_sq1.webp",
    tint: "rgba(50,205,50,0.06)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 38%, rgba(6,31,23,0.95) 80%)",
  },
  {
    id: "c3",
    category: "Facebook Ads",
    title: "Ad Creatives That Convert",
    img: "/ourwork-fbpost_sq1.webp",
    tint: "rgba(255,214,0,0.06)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.04) 0%, rgba(6,31,23,0.33) 42%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c4",
    category: "Branding & Identity",
    title: "Brand Identity That Commands Attention",
    img: "/ourwork-branding_sq1.webp",
    tint: "rgba(7,80,60,0.15)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.28) 35%, rgba(6,31,23,0.95) 76%)",
  },
  {
    id: "c5",
    category: "Instagram Reels",
    title: "Reels That Stop the Scroll",
    img: "/ourwork-igreel_sq1.webp",
    tint: "rgba(255,214,0,0.08)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.30) 40%, rgba(6,31,23,0.95) 78%)",
  },
  {
    id: "c6",
    category: "Social Media Content",
    title: "Scroll-Stopping Social Ads",
    img: "/ourwork-landingpage_h2.webp",
    tint: "rgba(7,80,60,0.14)",
    overlay:
      "linear-gradient(to bottom, rgba(6,31,23,0.0) 0%, rgba(6,31,23,0.20) 32%, rgba(6,31,23,0.93) 74%)",
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

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      className={`gallery-card gallery-card--${item.id}`}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.88, delay: DELAYS[item.id] ?? 0, ease }}
    >
      {/* Outer shell — subtle on white */}
      <div
        style={{
          flex: 1,
          borderRadius: "15px",
          padding: "2.5px",
          background: "rgba(7,80,60,0.02)",
          border: "1px solid rgba(7,80,60,0.09)",
          boxShadow:
            "0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.07)",
          transition:
            "border-color 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(50,205,50,0.30)";
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
          {/* Photo */}
          <img
            src={item.img}
            alt={item.category}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Brand tint */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: item.tint,
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
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
              padding: "13px 14px 16px",
            }}
          >
            {/* Category badge */}
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
              {item.category}
            </span>

            {/* Title only — no description */}
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(17px, 1.8vw, 23px)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Logo watermark — centered, 3D version for glass texture */}
      <img
        src="/logo-3d.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-35%, -42%)",
          width: "clamp(300px, 38vw, 500px)",
          opacity: 0.055,
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
        {/* Section header — minimal */}
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
            Our Work
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
            The Creative Side of{" "}
            <span style={{ color: "#32cd32" }}>Performance</span>
          </h2>
        </motion.div>

        {/* 4-column bento: top row 2+1+1, bottom row 1+1+2 */}
        <div
          className="gallery-bento"
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
          {GALLERY.map((item) => (
            <div
              key={item.id}
              style={{ gridArea: item.id, minHeight: 0 }}
            >
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1023px) {
          .gallery-bento {
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
          .gallery-bento {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 180px) !important;
            grid-template-areas:
              "c1" "c2" "c3" "c4" "c5" "c6" !important;
          }
        }
        .gallery-card { height: 100%; }
      `}</style>
    </section>
  );
}
