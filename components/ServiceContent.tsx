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

/* Matches Homepage ease in Services.tsx / WhyMillecube.tsx */
const EASE_SHARP: [number, number, number, number] = [0.32, 0.72, 0, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
          Dark #061f17 — matches homepage WhyMillecube
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#061f17",
          position: "relative" as const,
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {/* Atmospheric radial glow — top centre */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute" as const,
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "780px",
            height: "480px",
            background:
              "radial-gradient(ellipse, rgba(50,205,50,0.055) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        {/* Right edge glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute" as const,
            top: "20%",
            right: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle at right, rgba(7,80,60,0.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
            position: "relative" as const,
            zIndex: 1,
          }}
        >
          <div className="svc-features-grid">
            {/* LEFT COL */}
            <div>
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE_SMOOTH }}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  color: "#32cd32",
                  textTransform: "uppercase" as const,
                  marginBottom: 18,
                }}
              >
                {featuresLabel}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: EASE_SHARP, delay: 0.06 }}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(34px,4.2vw,56px)",
                  color: "#ffffff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  margin: "0 0 20px 0",
                }}
              >
                {featuresHeadline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE_SMOOTH, delay: 0.14 }}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.50)",
                  lineHeight: 1.82,
                  margin: 0,
                  maxWidth: "420px",
                }}
              >
                {featuresBody}
              </motion.p>

              {/* Stats row */}
              {stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: EASE_SMOOTH, delay: 0.22 }}
                  style={{
                    display: "flex",
                    flexWrap: "wrap" as const,
                    gap: "28px 36px",
                    paddingTop: 24,
                    marginTop: 28,
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: EASE_SMOOTH,
                        delay: 0.28 + i * 0.07,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "clamp(28px,3vw,42px)",
                          color: "#FFD600",
                          lineHeight: 1,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.35)",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.10em",
                          marginTop: 5,
                        }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* RIGHT COL — dark glass feature cards, matching Services.tsx */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.78,
                    ease: EASE_SHARP,
                    delay: i * 0.07,
                  }}
                  /* Double-bezel outer shell */
                  className="svc-feat-outer"
                  style={{
                    borderRadius: "18px",
                    padding: "3px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.10)",
                    transition:
                      "border-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  {/* Inner core */}
                  <div
                    className="svc-feat-inner"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.025)",
                      borderRadius: "14px",
                      padding: "clamp(18px,2.2vw,26px)",
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
                      transition:
                        "background-color 240ms cubic-bezier(0.32,0.72,0,1)",
                    }}
                  >
                    {/* Feature name row */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row" as const,
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#32cd32",
                          opacity: 0.75,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#ffffff",
                        }}
                      >
                        {feature.name}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.46)",
                        lineHeight: 1.78,
                        margin: 0,
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 — PROCESS ("How it works")
          Dark #07503c with service-bg1.png
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#07503c",
          position: "relative" as const,
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.05)",
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
            style={{ objectFit: "cover", opacity: 0.15 }}
            aria-hidden="true"
          />
        </div>
        {/* Overlay to darken the bg image */}
        <div
          style={{
            position: "absolute" as const,
            inset: 0,
            background: "rgba(7,80,60,0.84)",
            pointerEvents: "none",
          }}
        />
        {/* Lime glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute" as const,
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "420px",
            background:
              "radial-gradient(ellipse, rgba(50,205,50,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
            position: "relative" as const,
            zIndex: 1,
          }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            style={{ marginBottom: "clamp(36px,4.5vw,60px)" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(32px,4vw,50px)",
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: 0,
                maxWidth: 520,
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
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.72,
                  ease: EASE_SHARP,
                  delay: i * 0.08,
                }}
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
                    color: "rgba(50,205,50,0.28)",
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
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.50)",
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
          Dark #061f17 — same base as features section
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#061f17",
          position: "relative" as const,
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {/* Logo watermark */}
        <div
          style={{
            position: "absolute" as const,
            top: "50%",
            right: "-4%",
            width: "clamp(200px,22vw,320px)",
            height: "clamp(200px,22vw,320px)",
            opacity: 0.04,
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
        {/* Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute" as const,
            bottom: 0,
            left: "30%",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(50,205,50,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
            position: "relative" as const,
            zIndex: 1,
          }}
        >
          <div className="svc-deliverables-grid">
            {/* LEFT COL */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: EASE_SHARP }}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(32px,4vw,50px)",
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "0 0 20px 0",
                }}
              >
                {deliverablesHeadline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE_SMOOTH, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.50)",
                  lineHeight: 1.82,
                  margin: "0 0 32px 0",
                  maxWidth: "380px",
                }}
              >
                {deliverablesBody}
              </motion.p>

              {/* Gold CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.18 }}
              >
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <span
                    className="svc-cta-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: "#FFD600",
                      color: "#061f17",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      padding: "11px 10px 11px 20px",
                      borderRadius: 100,
                      transition:
                        "transform 240ms cubic-bezier(0.32,0.72,0,1), background-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1)",
                      cursor: "pointer",
                    }}
                  >
                    {ctaText}
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "rgba(6,31,23,0.14)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT COL — deliverable pills on dark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.08 }}
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
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.48,
                    ease: EASE_SMOOTH,
                    delay: 0.08 + i * 0.05,
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.11)",
                    borderRadius: 100,
                    padding: "9px 16px",
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.82)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Lime checkmark */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="#32cd32"
                      fillOpacity="0.18"
                    />
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SERVICE CAROUSEL — light contrast break
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
          border-color: rgba(50,205,50,0.22) !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18), 0 16px 40px rgba(7,80,60,0.22) !important;
        }
        .svc-feat-outer:hover .svc-feat-inner {
          background-color: rgba(255,255,255,0.05) !important;
        }
        .svc-cta-btn:hover {
          transform: translateY(-2px);
          background-color: #e6c200 !important;
          box-shadow: 0 12px 32px rgba(255,214,0,0.28);
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
