"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease },
  }),
};

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #07503c 0%, #0a6347 50%, #0d7354 100%)",
      }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow accents */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(50,205,50,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "30%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(50,205,50,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] mb-7"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-montserrat)" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              DIGITAL MARKETING AGENCY · PENANG, MALAYSIA
            </motion.p>

            <motion.h1
              style={{
                fontFamily: "var(--font-bebas)",
                fontWeight: 800,
                fontSize: "clamp(44px, 7vw, 88px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Strategy built on data.
              <br />
              <span style={{ color: "#32cd32" }}>Results</span> measured
              <br />
              in revenue.
            </motion.h1>

            <motion.p
              className="mt-6 text-base max-w-md"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-montserrat)",
                lineHeight: 1.8,
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
            >
              We manage Meta Ads, Google Ads, and your marketplace stores —
              Shopee, Lazada, TikTok Shop — tracked to every ringgit.
              No guesswork. No vanity metrics.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.34}
            >
              <Link
                href="https://wa.me/60164963875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-full transition-all duration-200"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  fontFamily: "var(--font-montserrat)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1db954";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-montserrat)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                }}
              >
                Explore Services →
              </Link>
            </motion.div>
          </div>

          {/* Right — Visual metrics card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <div
              className="rounded-2xl p-8 relative"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top metric */}
              <div className="mb-7 pb-7" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <p
                  className="text-xs font-semibold tracking-widest mb-2"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
                >
                  AD SPEND MANAGED
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontWeight: 800,
                    fontSize: "72px",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                  }}
                >
                  RM 2M<span style={{ color: "#32cd32" }}>+</span>
                </p>
              </div>

              {/* Bottom two metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontWeight: 800,
                      fontSize: "40px",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#ffffff",
                    }}
                  >
                    35<span style={{ color: "#32cd32" }}>+</span>
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Brands Managed
                  </p>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(50,205,50,0.1)",
                    border: "1px solid rgba(50,205,50,0.18)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontWeight: 800,
                      fontSize: "40px",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#32cd32",
                    }}
                  >
                    2024
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}
                  >
                    Founded in Penang
                  </p>
                </div>
              </div>

              {/* Platform tags */}
              <div className="flex flex-wrap gap-2">
                {["Meta Ads", "Google Ads", "Shopee", "Lazada", "TikTok Shop"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      />
    </section>
  );
}
