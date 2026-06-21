"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  MagnifyingGlass,
  Storefront,
  TrendUp,
  Code,
  PenNib,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    Icon: Target,
    title: "Meta & Social Ads",
    subtitle: "Turn Feeds Into Revenue",
    desc: "Facebook and Instagram campaigns engineered around outcomes — every ringgit traced to a lead, a sale, or a ROAS target your business actually cares about.",
  },
  {
    Icon: MagnifyingGlass,
    title: "Google Ads & Search",
    subtitle: "Own the Moment of Intent",
    desc: "Search, Performance Max, and Shopping campaigns that capture high-intent buyers when they're ready to act — not just when they're scrolling.",
  },
  {
    Icon: Storefront,
    title: "Marketplace Management",
    subtitle: "Dominate Shopee & Lazada",
    desc: "Full end-to-end management of your Shopee, Lazada, and TikTok Shop — listings, ads, flash deals, and monthly performance breakdowns.",
  },
  {
    Icon: TrendUp,
    title: "SEO & Organic Growth",
    subtitle: "Traffic That Never Stops Working",
    desc: "Keyword strategy, technical SEO, and content built to compound — organic visibility that keeps delivering long after the campaign ends.",
  },
  {
    Icon: Code,
    title: "Website & Landing Pages",
    subtitle: "Convert the Traffic You're Paying For",
    desc: "High-converting pages built around your funnel — fast, mobile-first, and designed to lower your cost-per-acquisition.",
  },
  {
    Icon: PenNib,
    title: "Content & Creative",
    subtitle: "Stop the Scroll. Start the Sale.",
    desc: "Ad creatives, copy, and short-form video built for performance — designed to resonate with the algorithm and the customer simultaneously.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background:
          "linear-gradient(to bottom, #07503c 0%, #07503c 50%, #1d6b48 80%, #ffffff 100%)",
        position: "relative",
      }}
    >
      {/* ── Layered atmospheric glows ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle at top right, rgba(50,205,50,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle at left, rgba(7,80,60,0.22) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "640px",
            height: "420px",
            background:
              "radial-gradient(ellipse, rgba(50,205,50,0.03) 0%, transparent 70%)",
          }}
        />
      </div>

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
              className="services-cta-btn"
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
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.88, delay: i * 0.06, ease }}
            >
              {/* Card — double-bezel outer shell */}
              <div
                style={{
                  borderRadius: "18px",
                  padding: "3px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
                  transition:
                    "border-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  const shell = e.currentTarget as HTMLElement;
                  shell.style.borderColor = "rgba(50,205,50,0.22)";
                  shell.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.16), 0 16px 40px rgba(7,80,60,0.22)";
                  const core = shell.querySelector("div") as HTMLElement;
                  if (core) core.style.backgroundColor = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  const shell = e.currentTarget as HTMLElement;
                  shell.style.borderColor = "rgba(255,255,255,0.07)";
                  shell.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)";
                  const core = shell.querySelector("div") as HTMLElement;
                  if (core) core.style.backgroundColor = "rgba(255,255,255,0.025)";
                }}
              >
                {/* Card — inner core */}
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                    borderRadius: "14px",
                    padding: "26px 28px",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
                    transition:
                      "background-color 240ms cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "18px",
                    }}
                  >
                    {/* Icon badge — double-bezel outer shell */}
                    <div
                      style={{
                        borderRadius: "14px",
                        padding: "3px",
                        background: "rgba(50,205,50,0.06)",
                        border: "1px solid rgba(50,205,50,0.13)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {/* Icon badge — inner core */}
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(50,205,50,0.09)",
                          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#32cd32",
                        }}
                      >
                        <service.Icon size={17} weight="light" />
                      </div>
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
              </div>
            </motion.div>
          ))}

          {/* Mobile-only: View all services link (desktop shows this in the left panel) */}
          <Link
            href="/services"
            className="services-mobile-cta"
            style={{
              display: "none",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFD600",
              color: "#061f17",
              fontFamily: "var(--font-montserrat)",
              fontSize: "13px",
              fontWeight: 700,
              padding: "11px 10px 11px 20px",
              borderRadius: "100px",
              alignSelf: "flex-start",
              transition:
                "background-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1), box-shadow 260ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#e6c200";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#FFD600";
              el.style.transform = "translateY(0)";
            }}
          >
            View all services
            <span style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(6,31,23,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>→</span>
          </Link>

          {/* Bottom CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.88, delay: 0.36, ease }}
          >
            {/* CTA — double-bezel outer shell */}
            <div
              style={{
                borderRadius: "18px",
                padding: "3px",
                background: "rgba(7,80,60,0.28)",
                border: "1px solid rgba(50,205,50,0.18)",
                boxShadow:
                  "0 4px 16px rgba(0,0,0,0.14), 0 16px 48px rgba(7,80,60,0.18)",
                transition:
                  "border-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1)",
              }}
              onMouseEnter={(e) => {
                const shell = e.currentTarget as HTMLElement;
                shell.style.borderColor = "rgba(50,205,50,0.38)";
                shell.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.18), 0 24px 64px rgba(7,80,60,0.3)";
                const core = shell.querySelector("a") as HTMLElement;
                if (core) core.style.backgroundColor = "#085c44";
              }}
              onMouseLeave={(e) => {
                const shell = e.currentTarget as HTMLElement;
                shell.style.borderColor = "rgba(50,205,50,0.18)";
                shell.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.14), 0 16px 48px rgba(7,80,60,0.18)";
                const core = shell.querySelector("a") as HTMLElement;
                if (core) core.style.backgroundColor = "#07503c";
              }}
            >
              {/* CTA — inner core */}
              <Link
                href="https://wa.me/60164963875"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  backgroundColor: "#07503c",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
                  transition:
                    "background-color 240ms cubic-bezier(0.32,0.72,0,1)",
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 1023px) {
          .services-split { flex-direction: column !important; }
          .services-left { position: static !important; width: 100% !important; height: auto !important; padding: 64px 24px 32px !important; }
          .services-left .services-cta-btn { display: none !important; }
          .services-right { padding: 0 24px 64px !important; }
          .services-mobile-cta { display: inline-flex !important; }
        }
        @media (min-width: 1024px) {
          .services-mobile-cta { display: none !important; }
        }
      `}</style>
    </section>
  );
}
