"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    icon: "target",
    title: "Meta & Social Ads",
    subtitle: "Turn Feeds Into Revenue",
    desc: "Facebook and Instagram campaigns engineered around outcomes — every ringgit traced to a lead, a sale, or a ROAS target your business actually cares about.",
  },
  {
    icon: "search",
    title: "Google Ads & Search",
    subtitle: "Own the Moment of Intent",
    desc: "Search, Performance Max, and Shopping campaigns that capture high-intent buyers when they're ready to act — not just when they're scrolling.",
  },
  {
    icon: "store",
    title: "Marketplace Management",
    subtitle: "Dominate Shopee & Lazada",
    desc: "Full end-to-end management of your Shopee, Lazada, and TikTok Shop — listings, ads, flash deals, and monthly performance breakdowns.",
  },
  {
    icon: "chart",
    title: "SEO & Organic Growth",
    subtitle: "Traffic That Never Stops Working",
    desc: "Keyword strategy, technical SEO, and content built to compound — organic visibility that keeps delivering long after the campaign ends.",
  },
  {
    icon: "code",
    title: "Website & Landing Pages",
    subtitle: "Convert the Traffic You're Paying For",
    desc: "High-converting pages built around your funnel — fast, mobile-first, and designed to lower your cost-per-acquisition.",
  },
  {
    icon: "creative",
    title: "Content & Creative",
    subtitle: "Stop the Scroll. Start the Sale.",
    desc: "Ad creatives, copy, and short-form video built for performance — designed to resonate with the algorithm and the customer simultaneously.",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "target")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  if (name === "search")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    );
  if (name === "store")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    );
  if (name === "chart")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
        <polyline points="16,7 22,7 22,13" />
      </svg>
    );
  if (name === "code")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    );
  if (name === "creative")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...strokeProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    );
  return null;
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ backgroundColor: "#061f17", position: "relative" }}
    >
      {/* Subtle radial glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at top right, rgba(50,205,50,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Split container ── */}
      <div
        className="services-split max-w-7xl mx-auto"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        {/* ── LEFT: sticky panel ── */}
        <div
          className="services-left"
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
          {/* Cube watermark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-18%",
              left: "-22%",
              width: "110%",
              opacity: 0.045,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <Image
              src="/logo-white.png"
              alt=""
              width={560}
              height={560}
              style={{ width: "100%", height: "auto", filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#32cd32",
                fontFamily: "var(--font-montserrat)",
                marginBottom: "22px",
              }}
            >
              What We Do
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(38px, 4.2vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Our Range of
              <br />
              <span style={{ color: "#FFD600" }}>Performance</span>
              <br />
              <span style={{ color: "#32cd32" }}>Marketing Services</span>
            </h2>

            <p
              style={{
                fontSize: "13.5px",
                lineHeight: 1.78,
                color: "rgba(255,255,255,0.48)",
                fontFamily: "var(--font-montserrat)",
                maxWidth: "340px",
                marginBottom: "36px",
              }}
            >
              Top brands partner with Millecube for campaigns tied to real
              numbers — cost per lead, cost per sale, revenue generated. No
              vanity metrics, no guesswork.
            </p>

            <Link
              href="/services"
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
              View all services
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
          </div>
        </div>

        {/* ── RIGHT: scrollable service cards ── */}
        <div
          className="services-right"
          style={{
            flex: 1,
            padding: "80px 40px 200px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.52, delay: i * 0.06, ease }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "26px 28px",
                  transition:
                    "border-color 220ms ease, background-color 220ms ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(50,205,50,0.22)";
                  el.style.backgroundColor = "rgba(255,255,255,0.045)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.backgroundColor = "rgba(255,255,255,0.025)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                  {/* Icon badge */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(50,205,50,0.08)",
                      border: "1px solid rgba(50,205,50,0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#32cd32",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <ServiceIcon name={service.icon} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        color: "#FFD600",
                        fontFamily: "var(--font-montserrat)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      {service.subtitle}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.72,
                        color: "rgba(255,255,255,0.46)",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {service.desc}
                    </p>
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
            transition={{ duration: 0.52, delay: 0.36, ease }}
          >
            <Link
              href="https://wa.me/60164963875"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#07503c",
                border: "1px solid rgba(50,205,50,0.2)",
                borderRadius: "14px",
                padding: "28px",
                transition:
                  "border-color 220ms ease, background-color 220ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(50,205,50,0.4)";
                el.style.backgroundColor = "#085c44";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(50,205,50,0.2)";
                el.style.backgroundColor = "#07503c";
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-montserrat)",
                  marginBottom: "10px",
                }}
              >
                Not Sure Where to Start?
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
                Let&apos;s talk about what your business needs.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#32cd32",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Start a conversation →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 1023px) {
          .services-split {
            flex-direction: column !important;
          }
          .services-left {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            padding: 64px 24px 40px !important;
          }
          .services-right {
            padding: 0 24px 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
