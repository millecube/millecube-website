"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Card data ─────────────────────────────── */
const WHO_CARDS = [
  {
    icon: "compass",
    tag: "Our Philosophy",
    title: "Technical-first. Data-driven. Result focused.",
    desc: "We don't build campaigns on gut feel. Every strategy is grounded in data — from pixel setup to attribution modelling — so you always know what's working and why.",
  },
  {
    icon: "chart",
    tag: "Full Transparency",
    title: "You see exactly where every ringgit goes.",
    desc: "Monthly reports in plain language — cost per lead, cost per sale, revenue generated. No vanity metrics, no padded screenshots, no impressions that don't pay rent.",
  },
  {
    icon: "unlock",
    tag: "No Lock-in",
    title: "Month-to-month. Stay because results prove it.",
    desc: "No 6-month or 12-month traps. We earn your business every 30 days. If we're not delivering real numbers, you shouldn't be tied to us.",
  },
  {
    icon: "chat",
    tag: "Direct Access",
    title: "Talk to the person running your campaigns.",
    desc: "No account executives, no middlemen relaying messages. The strategist you brief is the same one setting up your ads, reading your data, and making decisions.",
  },
  {
    icon: "team",
    tag: "Full Team Behind You",
    title: "A specialist team — not a one-person show.",
    desc: "Media buyers, copywriters, creative designers, and analysts all working on your account. The depth of a full agency without the bureaucratic overhead.",
  },
];

/* ─── Icons ─────────────────────────────────── */
function CardIcon({ name }: { name: string }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "compass")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
      </svg>
    );
  if (name === "chart")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
        <polyline points="16,7 22,7 22,13" />
      </svg>
    );
  if (name === "unlock")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 019.9-1" />
      </svg>
    );
  if (name === "chat")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    );
  if (name === "team")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  return null;
}

/* ─── Component ─────────────────────────────── */
export default function WhoWeAre() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#FFE2C8",
        position: "relative",
        borderTop: "1px solid rgba(7,80,60,0.06)",
      }}
    >
      {/* Ambient radial glows — melon warmth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "30%",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: 0,
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(255,180,80,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Split container ── */}
      <div
        className="whoweare-split max-w-7xl mx-auto"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        {/* ── LEFT: sticky panel ── */}
        <div
          className="whoweare-left"
          style={{
            position: "sticky",
            top: 0,
            width: "44%",
            height: "100dvh",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 48px 60px 40px",
            overflow: "hidden",
          }}
        >
          {/* Logo watermark — dark tint on warm bg */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-18%",
              left: "-22%",
              width: "110%",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <Image
              src="/logo-white.png"
              alt=""
              width={560}
              height={560}
              style={{
                width: "100%",
                height: "auto",
                filter: "brightness(0)",
                opacity: 0.04,
              }}
            />
          </div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Eyebrow pill */}
            <span
              style={{
                display: "inline-block",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#07503c",
                backgroundColor: "rgba(7,80,60,0.08)",
                border: "1px solid rgba(7,80,60,0.12)",
                padding: "4px 10px",
                borderRadius: "100px",
                fontFamily: "var(--font-montserrat)",
                marginBottom: "22px",
              }}
            >
              Who We Are
            </span>

            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(36px, 4.2vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#07503c",
                marginBottom: "22px",
              }}
            >
              Built for businesses
              <br />
              done spending money
              <br />
              on{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#07503c",
                }}
              >
                marketing that
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "6px",
                    overflow: "visible",
                  }}
                >
                  <path
                    d="M2,6 Q50,1 100,6 Q150,11 198,6"
                    stroke="#FFB347"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              goes nowhere.
            </h2>

            <p
              style={{
                fontSize: "13.5px",
                lineHeight: 1.78,
                color: "rgba(7,80,60,0.55)",
                fontFamily: "var(--font-montserrat)",
                maxWidth: "340px",
                marginBottom: "32px",
              }}
            >
              Millecube is a technical-first digital agency from Penang. We
              handle Meta Ads, Google Ads, and marketplace management
              end-to-end — with full attribution on everything, so you always
              know exactly what your spend is producing.
            </p>

            {/* CTA — dark green pill, button-in-button */}
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
        </div>

        {/* ── RIGHT: scrollable cards ── */}
        <div
          className="whoweare-right"
          style={{
            flex: 1,
            padding: "80px 40px 200px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {WHO_CARDS.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.52, delay: i * 0.07, ease }}
              whileHover={{ y: -3 }}
              style={{ cursor: "default" }}
            >
              {/* ── Double-bezel outer shell ── */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.42)",
                  border: "1px solid rgba(7,80,60,0.08)",
                  borderRadius: "20px",
                  padding: "5px",
                  transition:
                    "border-color 220ms cubic-bezier(0.32,0.72,0,1), background-color 220ms cubic-bezier(0.32,0.72,0,1), box-shadow 220ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(7,80,60,0.16)";
                  el.style.backgroundColor = "rgba(255,255,255,0.62)";
                  el.style.boxShadow = "0 12px 36px rgba(7,80,60,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(7,80,60,0.08)";
                  el.style.backgroundColor = "rgba(255,255,255,0.42)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* ── Double-bezel inner core ── */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "24px 26px",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(7,80,60,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "11px",
                        backgroundColor: "rgba(7,80,60,0.06)",
                        border: "1px solid rgba(7,80,60,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#07503c",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <CardIcon name={card.icon} />
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1 }}>
                      {/* Tag pill */}
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#07503c",
                          backgroundColor: "rgba(7,80,60,0.06)",
                          border: "1px solid rgba(7,80,60,0.1)",
                          padding: "2px 7px",
                          borderRadius: "100px",
                          fontFamily: "var(--font-montserrat)",
                          marginBottom: "8px",
                        }}
                      >
                        {card.tag}
                      </span>

                      <h3
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#07503c",
                          lineHeight: 1.3,
                          marginBottom: "8px",
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "13px",
                          lineHeight: 1.72,
                          color: "rgba(7,80,60,0.52)",
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.52, delay: 0.35, ease }}
            whileHover={{ y: -3 }}
          >
            <Link
              href="https://wa.me/60164963875"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              {/* Outer shell */}
              <div
                style={{
                  backgroundColor: "rgba(7,80,60,0.06)",
                  border: "1px solid rgba(7,80,60,0.12)",
                  borderRadius: "20px",
                  padding: "5px",
                  transition:
                    "border-color 220ms cubic-bezier(0.32,0.72,0,1), box-shadow 220ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(7,80,60,0.24)";
                  el.style.boxShadow = "0 12px 36px rgba(7,80,60,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(7,80,60,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Inner core */}
                <div
                  style={{
                    backgroundColor: "#07503c",
                    borderRadius: "15px",
                    padding: "26px 28px",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "var(--font-montserrat)",
                      marginBottom: "10px",
                    }}
                  >
                    Ready to talk numbers?
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                    }}
                  >
                    Start a conversation. No pitch decks, no obligation.
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#FFD600",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    WhatsApp us →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile overrides ── */}
      <style>{`
        @media (max-width: 1023px) {
          .whoweare-split { flex-direction: column !important; }
          .whoweare-left {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            padding: 64px 24px 40px !important;
          }
          .whoweare-right {
            padding: 0 24px 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
