"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const OTHERS = [
  "Vanity metrics — reach, impressions, engagement rate",
  "A junior account exec who reads from a sheet",
  "6 or 12-month lock-in contracts",
  "Reports you can't understand or act on",
  "One person doing everything — strategy, ads, content",
];

const MILLECUBE = [
  "Revenue metrics — cost per lead, cost per sale, ROAS",
  "The strategist running your campaigns picks up the phone",
  "Month-to-month. We earn your business every 30 days",
  "Plain-language reports with clear next steps, every month",
  "A full team — strategy, media buying, creative — behind every account",
];

export default function WhyMillecube() {
  return (
    <section
      style={{
        backgroundColor: "#061f17",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(50,205,50,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          className="pt-24 lg:pt-32 pb-14 lg:pb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p
            className="text-xs font-bold tracking-[0.28em] mb-5"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
          >
            WHY MILLECUBE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "760px",
            }}
          >
            The difference is in the details most agencies{" "}
            <span style={{ color: "#FFD600" }}>hope you don&apos;t notice.</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Left — others column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              padding: "clamp(28px, 4vw, 48px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.60)",
                }}
              >
                Most agencies
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {OTHERS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 0",
                    borderBottom: i < OTHERS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.60)",
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Millecube column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="millecube-col"
          style={{
              backgroundColor: "rgba(50,205,50,0.04)",
              padding: "clamp(28px, 4vw, 48px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(50,205,50,0.12)",
                  border: "1px solid rgba(50,205,50,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5l3 3 6-7" stroke="#32cd32" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#32cd32",
                }}
              >
                Millecube
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {MILLECUBE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 + 0.08, ease }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 0",
                    borderBottom: i < MILLECUBE.length - 1 ? "1px solid rgba(50,205,50,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(50,205,50,0.1)",
                      border: "1px solid rgba(50,205,50,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5l2.5 2.5 5-5.5" stroke="#32cd32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.78)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .millecube-col {
              border-left: 1px solid rgba(50,205,50,0.08);
            }
          }
        `}</style>

        {/* Bottom strip */}
        <motion.div
          className="pb-24 lg:pb-32 pt-10"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
        >
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.62)",
              letterSpacing: "0.02em",
            }}
          >
            No long-term commitment required. Start with a conversation.
          </p>
          <Link
            href="https://wa.me/60164963875"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFD600",
              color: "#061f17",
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
              el.style.backgroundColor = "#e6c200";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 32px rgba(255,214,0,0.28)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#FFD600";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Let&apos;s talk
            <span
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "rgba(6,31,23,0.14)",
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
        </motion.div>
      </div>
    </section>
  );
}
