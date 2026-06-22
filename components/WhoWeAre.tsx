"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const BULLETS = [
  "Full spend transparency, every ringgit reported monthly",
  "Direct access to your strategist, no middlemen",
  "No long-term contracts, ever",
  "Dedicated team across media, creative & analytics",
  "Campaigns tied to revenue, not vanity metrics",
];

export default function WhoWeAre() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative SVG curves */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-80,160 Q280,80 560,260 Q840,440 1160,180 Q1360,40 1560,260"
          stroke="#07503c"
          strokeWidth="1.2"
          opacity="0.07"
        />
        <path
          d="M-80,360 Q180,260 460,400 Q740,540 1060,300 Q1280,160 1560,380"
          stroke="#32cd32"
          strokeWidth="0.9"
          opacity="0.055"
        />
        <circle cx="100" cy="60" r="160" fill="#07503c" opacity="0.02" />
        <circle cx="1360" cy="600" r="200" fill="#32cd32" opacity="0.016" />
      </svg>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{
          paddingTop: "clamp(40px, 5vw, 60px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Image block ── */}
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: -28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease }}
          >
            {/* Main image — double-bezel outer shell */}
            <div
              style={{
                borderRadius: "30px",
                padding: "6px",
                background: "rgba(7,80,60,0.03)",
                border: "1px solid rgba(7,80,60,0.08)",
                boxShadow:
                  "0 2px 4px rgba(7,80,60,0.04), 0 8px 24px rgba(7,80,60,0.07), 0 24px 64px rgba(7,80,60,0.09)",
              }}
            >
              {/* Inner core */}
              <div
                className="who-image-core"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  maxHeight: "568px",
                  position: "relative",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15)",
                }}
              >
                <Image
                  src="/whoweare-card.webp"
                  alt="Millecube team at work"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
                {/* Brand tint overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(160deg, rgba(7,80,60,0.08) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Color treatment — unifies photo with brand palette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#07503c",
                    mixBlendMode: "multiply",
                    opacity: 0.1,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Stat badge — bottom left — double-bezel */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: 0.28, ease }}
              style={{
                position: "absolute",
                bottom: "28px",
                left: "-18px",
                borderRadius: "22px",
                padding: "3px",
                backgroundColor: "rgba(255,214,0,0.18)",
                border: "1px solid rgba(255,214,0,0.32)",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.06), 0 12px 36px rgba(7,80,60,0.16)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFD600",
                  borderRadius: "18px",
                  padding: "18px 24px",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.55)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "46px",
                    fontWeight: 800,
                    color: "#07503c",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  35+
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "#07503c",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "3px",
                  }}
                >
                  Brands Served
                </p>
              </div>
            </motion.div>

            {/* Floating metric badge — top right — double-bezel */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: 0.42, ease }}
              style={{
                position: "absolute",
                top: "28px",
                right: "-18px",
                borderRadius: "20px",
                padding: "3px",
                backgroundColor: "rgba(7,80,60,0.3)",
                border: "1px solid rgba(7,80,60,0.45)",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(7,80,60,0.24)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#07503c",
                  borderRadius: "16px",
                  padding: "14px 20px",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.09)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "30px",
                    fontWeight: 800,
                    color: "#FFD600",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  RM 2M+
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "9.5px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  Ad Spend Managed
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.1, ease }}
          >
            {/* Eyebrow pill */}
            <span
              style={{
                display: "inline-block",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#07503c",
                backgroundColor: "rgba(7,80,60,0.07)",
                border: "1px solid rgba(7,80,60,0.11)",
                padding: "5px 12px",
                borderRadius: "100px",
                fontFamily: "var(--font-montserrat)",
                width: "fit-content",
              }}
            >
              Who We Are
            </span>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(28px, 3.4vw, 50px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#07503c",
              }}
            >
              A Penang team.
              <br />
              <span style={{ color: "#32cd32" }}>Built to make</span>
              <br />
              every ringgit count.
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "14px",
                lineHeight: 1.78,
                color: "rgba(7,80,60,0.68)",
                maxWidth: "460px",
              }}
            >
              Most agencies report on reach and impressions. We report on cost
              per lead, cost per sale, and revenue generated. Those are the
              numbers that actually move a business forward.
            </p>

            {/* Mobile-only inline stats — replaces hidden floating badges */}
            <div
              className="who-mobile-stats"
              style={{ display: "none", gap: "0", alignItems: "stretch" }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--font-bebas)", fontSize: "36px", fontWeight: 800, color: "#07503c", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>35+</p>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "9px", fontWeight: 700, color: "rgba(7,80,60,0.68)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "4px" }}>Brands Served</p>
              </div>
              <div style={{ width: "1px", backgroundColor: "rgba(7,80,60,0.12)", margin: "0 20px" }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--font-bebas)", fontSize: "36px", fontWeight: 800, color: "#07503c", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>RM 2M+</p>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "9px", fontWeight: 700, color: "rgba(7,80,60,0.68)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "4px" }}>Ad Spend Managed</p>
              </div>
            </div>

            {/* Accent divider */}
            <div
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "#32cd32",
                borderRadius: "2px",
                opacity: 0.5,
              }}
            />

            {/* Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {BULLETS.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.18 + i * 0.065, ease }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "11px" }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(50,205,50,0.1)",
                      border: "1px solid rgba(50,205,50,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <Check size={12} weight="light" color="#32cd32" />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      color: "rgba(7,80,60,0.68)",
                      fontWeight: 500,
                    }}
                  >
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: "6px" }}>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#07503c",
                  color: "#ffffff",
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "11px 10px 11px 20px",
                  borderRadius: "100px",
                  transition:
                    "background-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#055c44";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 12px 32px rgba(7,80,60,0.28)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#07503c";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Learn more about us
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.14)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 767px) {
          #about [style*="bottom: 28px"][style*="left: -18px"],
          #about [style*="top: 28px"][style*="right: -18px"] {
            display: none;
          }
          .who-image-core {
            aspect-ratio: 16/9 !important;
            max-height: 240px !important;
          }
          .who-mobile-stats {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
