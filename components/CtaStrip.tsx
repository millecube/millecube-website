"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaStrip() {
  return (
    <section
      id="contact"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #e8f0eb 28%, #3f8968 58%, #07503c 100%)",
        padding: "clamp(36px, 5vw, 60px) clamp(20px, 3vw, 40px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Outer double-bezel shell */}
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.96, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.05, ease }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          borderRadius: "28px",
          padding: "3px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.28)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.10), 0 32px 80px rgba(7,80,60,0.18), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Inner core — single white box */}
        <div
          className="cta-inner"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "25px",
            overflow: "hidden",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "280px",
          }}
        >

          {/* ── LEFT: text content ── */}
          <div
            style={{
              padding: "clamp(36px, 4vw, 52px)",
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "14px",
            }}
          >

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              style={{
                display: "inline-block",
                width: "fit-content",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#07503c",
                backgroundColor: "rgba(7,80,60,0.07)",
                border: "1px solid rgba(7,80,60,0.12)",
                padding: "5px 13px",
                borderRadius: "100px",
                fontFamily: "var(--font-montserrat)",
                position: "relative",
                zIndex: 1,
              }}
            >
              Let&apos;s Talk
            </motion.span>

            {/* Heading — tighter copy */}
            <motion.h2
              initial={{ opacity: 0, y: 22, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.32, ease }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(30px, 3.8vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#07503c",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              Stop guessing.<br />
              <span style={{ color: "#32cd32" }}>Start growing.</span>
            </motion.h2>

            {/* Body — punchy, one line */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13.5px",
                lineHeight: 1.72,
                color: "rgba(7,80,60,0.70)",
                maxWidth: "340px",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              One conversation. We&apos;ll show you exactly where you&apos;re
              leaving money on the table.
            </motion.p>

            {/* CTA — yellow button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.52, ease }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#FFD600",
                  color: "#ffffff",
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "11px 10px 11px 22px",
                  borderRadius: "100px",
                  transition:
                    "background-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#e6c200";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 12px 32px rgba(255,214,0,0.36)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#FFD600";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(0.98)";
                }}
                onMouseUp={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1)";
                }}
              >
                Get in touch
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(6,31,23,0.12)",
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

          {/* ── RIGHT: girl breaks frame with zoom ── */}
          <motion.div
            className="cta-right"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.28, ease }}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "280px",
            }}
          >
            {/* Lady — static, anchored bottom, breaks box boundary */}
            <img
              src="/cta-box.webp"
              alt="Millecube team"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                mixBlendMode: "multiply",
                display: "block",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 1,
              }}
            />

            {/* Left-edge fade into white panel */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.0) 28%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </motion.div>

        </div>
      </motion.div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 767px) {
          .cta-inner {
            grid-template-columns: 1fr !important;
          }
          .cta-right {
            min-height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
