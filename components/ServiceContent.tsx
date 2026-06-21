"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ServiceCarousel from "./ServiceCarousel";

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceFeature {
  name: string;
  desc: string;
}

interface ServiceStep {
  num: string;
  title: string;
  body: string;
}

interface ServiceContentProps {
  slug: string;
  stats: ServiceStat[];
  featuresLabel: string;
  featuresHeadline: string;
  featuresBody: string;
  features: ServiceFeature[];
  process: ServiceStep[];
  deliverablesLabel: string;
  deliverablesHeadline: string;
  deliverablesBody: string;
  deliverables: string[];
  ctaText: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ServiceContent({
  slug,
  stats,
  featuresLabel,
  featuresHeadline,
  featuresBody,
  features,
  process,
  deliverablesLabel,
  deliverablesHeadline,
  deliverablesBody,
  deliverables,
  ctaText,
}: ServiceContentProps) {
  return (
    <>
      {/* ─────────────────────────────────────────────
          SECTION 1 — FEATURES ("What we do")
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#ffffff",
          padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
        }}
      >
        <div className="svc-features-grid">
          {/* LEFT COL */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#32cd32",
                textTransform: "uppercase" as const,
                marginBottom: 14,
              }}
            >
              {featuresLabel}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(36px,4.5vw,58px)",
                color: "#07503c",
                lineHeight: 1.05,
                margin: "0 0 20px 0",
              }}
            >
              {featuresHeadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13.5px",
                color: "rgba(7,80,60,0.55)",
                lineHeight: 1.82,
                margin: 0,
              }}
            >
              {featuresBody}
            </motion.p>

            {/* Stats row */}
            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.21 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap" as const,
                  gap: 28,
                  paddingTop: 24,
                  marginTop: 28,
                  borderTop: "1px solid rgba(7,80,60,0.08)",
                }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.28 + i * 0.07,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(28px,3vw,42px)",
                        color: "#FFD600",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "10px",
                        color: "rgba(7,80,60,0.42)",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.10em",
                        marginTop: 4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* RIGHT COL — Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
                className="svc-feat-outer"
                style={{
                  borderRadius: 15,
                  padding: "2.5px",
                  border: "1px solid rgba(7,80,60,0.09)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transition:
                    "border-color 0.22s ease, box-shadow 0.22s ease",
                }}
              >
                <div
                  style={{
                    borderRadius: "12.5px",
                    backgroundColor: "#f4f9f6",
                    padding: "clamp(18px,2.2vw,26px)",
                    position: "relative" as const,
                  }}
                >
                  {/* Feature name row */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#32cd32",
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#07503c",
                      }}
                    >
                      {feature.name}
                    </span>
                  </div>
                  {/* Feature desc */}
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      color: "rgba(7,80,60,0.55)",
                      lineHeight: 1.8,
                      marginTop: 8,
                      marginBottom: 0,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 — PROCESS ("How it works")
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#07503c",
          position: "relative" as const,
          overflow: "hidden",
          padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute" as const,
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/service-bg1.png"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.18 }}
            aria-hidden="true"
          />
        </div>
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute" as const,
            inset: 0,
            background: "rgba(7,80,60,0.82)",
            pointerEvents: "none",
          }}
        />

        {/* Content above overlay */}
        <div style={{ position: "relative" as const, zIndex: 1 }}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ marginBottom: "clamp(36px,4.5vw,60px)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#32cd32",
                textTransform: "uppercase" as const,
                marginBottom: 14,
              }}
            >
              HOW IT WORKS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(32px,4vw,50px)",
                color: "#ffffff",
                lineHeight: 1.05,
                margin: 0,
                maxWidth: 480,
              }}
            >
              A process that doesn&apos;t leave you guessing.
            </h2>
          </motion.div>

          {/* Steps grid */}
          <div
            className="svc-process-grid"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.09 }}
                style={{
                  padding: "clamp(24px,3vw,40px)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  borderLeft:
                    i % 2 === 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : undefined,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(52px,5.5vw,72px)",
                    color: "rgba(50,205,50,0.30)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(20px,2.2vw,28px)",
                    color: "#ffffff",
                    marginTop: 4,
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.52)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 — DELIVERABLES
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#f4f9f6",
          position: "relative" as const,
          overflow: "hidden",
          padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
        }}
      >
        {/* Logo watermark */}
        <div
          style={{
            position: "absolute" as const,
            top: "50%",
            right: "-5%",
            width: "clamp(200px,22vw,320px)",
            height: "clamp(200px,22vw,320px)",
            opacity: 0.045,
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/logo-3d.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
            aria-hidden="true"
          />
        </div>

        <div
          className="svc-deliverables-grid"
          style={{ position: "relative" as const, zIndex: 1 }}
        >
          {/* LEFT COL */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#32cd32",
                textTransform: "uppercase" as const,
                marginBottom: 14,
              }}
            >
              {deliverablesLabel}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(32px,4vw,50px)",
                color: "#07503c",
                lineHeight: 1.05,
                margin: "0 0 20px 0",
              }}
            >
              {deliverablesHeadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13.5px",
                color: "rgba(7,80,60,0.55)",
                lineHeight: 1.82,
                margin: "0 0 32px 0",
              }}
            >
              {deliverablesBody}
            </motion.p>

            {/* Gold CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.21 }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <span
                  className="svc-cta-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#FFD600",
                    color: "#07503c",
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    padding: "12px 10px 12px 22px",
                    borderRadius: 100,
                    transition: "transform 0.22s ease, background 0.22s ease",
                    cursor: "pointer",
                  }}
                >
                  {ctaText} →
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "rgba(6,31,23,0.13)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COL — Deliverable pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: 10,
              alignContent: "flex-start",
            }}
          >
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: 0.1 + i * 0.05,
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "rgba(7,80,60,0.07)",
                  border: "1px solid rgba(7,80,60,0.12)",
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#07503c",
                }}
              >
                {/* Lime checkmark SVG */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="6" cy="6" r="6" fill="#32cd32" fillOpacity="0.18" />
                  <path
                    d="M3.5 6.2L5.2 7.9L8.5 4.5"
                    stroke="#32cd32"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE CAROUSEL
      ───────────────────────────────────────────── */}
      <ServiceCarousel currentSlug={slug} />

      <style>{`
        .svc-features-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px,5vw,80px);
          align-items: start;
        }
        .svc-process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }
        .svc-deliverables-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px,5vw,80px);
          align-items: start;
        }
        .svc-feat-outer:hover {
          border-color: rgba(7,80,60,0.20) !important;
          box-shadow: 0 2px 12px rgba(7,80,60,0.10), 0 1px 4px rgba(0,0,0,0.06) !important;
        }
        .svc-cta-btn:hover {
          transform: translateY(-2px);
          background: #ffe033 !important;
        }
        @media (max-width: 1023px) {
          .svc-features-grid {
            grid-template-columns: 1fr;
          }
          .svc-process-grid {
            grid-template-columns: 1fr;
          }
          .svc-deliverables-grid {
            grid-template-columns: 1fr;
          }
          .svc-process-grid > div {
            border-left: none !important;
          }
        }
      `}</style>
    </>
  );
}
