"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "35+", label: "Brands managed" },
  { value: "RM2M+", label: "Ad spend managed" },
  { value: "2024", label: "Founded in Penang" },
];

const values = [
  {
    num: "01",
    title: "Track everything.",
    body: "We don't report reach or impressions. We track cost per lead, cost per sale, and revenue generated — and we report that. If it can't be tied back to a business number, it doesn't count.",
  },
  {
    num: "02",
    title: "Be direct.",
    body: "If something isn't working, we say it. If we're not the right fit for your business, we'll tell you before you sign anything. No hard sells, no locked-in contracts.",
  },
  {
    num: "03",
    title: "Stay hands-on.",
    body: "The people you meet are the people who work on your account. We don't hand you to a junior after the pitch. You get direct access to the team making your strategy.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* ── STORY SECTION ── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(52px, 6.5vw, 88px) clamp(20px, 3vw, 40px)",
        }}
      >
        <div
          className="max-w-7xl mx-auto about-story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Left: image in double-bezel */}
          <motion.div
            initial={{ opacity: 0, x: -28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.92, ease }}
          >
            <div
              style={{
                borderRadius: "20px",
                padding: "3px",
                background: "rgba(7,80,60,0.03)",
                border: "1px solid rgba(7,80,60,0.10)",
                boxShadow:
                  "0 4px 24px rgba(7,80,60,0.08), 0 20px 56px rgba(7,80,60,0.13)",
              }}
            >
              <div
                style={{
                  borderRadius: "17.5px",
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                  position: "relative",
                }}
              >
                <img
                  src="/whoweare-card.png"
                  alt="The Millecube Digital team"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(7,80,60,0.06)",
                    mixBlendMode: "multiply",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.88, delay: 0.1, ease }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "9.5px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#32cd32",
                margin: 0,
              }}
            >
              Our Story
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(30px, 3.2vw, 46px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#07503c",
                margin: 0,
              }}
            >
              Most agency reports look good. Most businesses can&apos;t trace them to a single sale.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13.5px",
                  lineHeight: 1.82,
                  color: "rgba(7,80,60,0.55)",
                  margin: 0,
                }}
              >
                Millecube was founded in 2024 by a team who had run their own businesses and been on the wrong end of agency relationships — paying monthly retainers, getting reports full of reach and impressions, and never really knowing whether the marketing was working.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13.5px",
                  lineHeight: 1.82,
                  fontWeight: 600,
                  color: "#07503c",
                  margin: 0,
                }}
              >
                We built Millecube around one principle: every ringgit you spend on marketing should be traceable to a business outcome. Not a social metric. A business outcome.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "13.5px",
                  lineHeight: 1.82,
                  color: "rgba(7,80,60,0.55)",
                  margin: 0,
                }}
              >
                We work with Malaysian SMEs — owner-operated businesses typically doing RM1 million to RM10 million in revenue, with no internal marketing team. Businesses where the owner is the marketing department, and where the stakes are real.
              </p>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: "clamp(24px, 3vw, 44px)",
                paddingTop: "24px",
                borderTop: "1px solid rgba(7,80,60,0.10)",
                marginTop: "4px",
                flexWrap: "wrap",
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
                  style={{ display: "flex", flexDirection: "column", gap: "3px" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(28px, 2.8vw, 42px)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "#07503c",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "10.5px",
                      color: "rgba(7,80,60,0.42)",
                      textTransform: "uppercase",
                      letterSpacing: "0.10em",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES SECTION (dark green — intentional contrast) ── */}
      <section
        style={{
          backgroundColor: "#07503c",
          padding: "clamp(52px, 6.5vw, 88px) clamp(20px, 3vw, 40px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(50,205,50,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#32cd32",
              marginBottom: "clamp(28px, 3.5vw, 44px)",
            }}
          >
            How we work
          </motion.p>

          {/* 3-col values */}
          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.88, delay: i * 0.1, ease }}
                style={{
                  padding: "clamp(28px, 3.5vw, 44px)",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  backgroundColor: "rgba(6,31,23,0.20)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(52px, 5.5vw, 76px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "rgba(50,205,50,0.28)",
                    display: "block",
                  }}
                >
                  {v.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(22px, 2.2vw, 30px)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "13.5px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.50)",
                    margin: 0,
                  }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .about-story-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          .values-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
          }
          .values-grid > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </>
  );
}
