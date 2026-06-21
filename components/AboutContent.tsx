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
                  aspectRatio: "3 / 2",
                  position: "relative",
                }}
              >
                <img
                  src="/aboutus-bg1.png"
                  alt="Millecube Digital office and team"
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

      {/* ── VISION & MISSION SECTION ── */}
      <section
        style={{
          backgroundColor: "#f4f9f6",
          padding: "clamp(36px, 4.5vw, 56px) clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section eyebrow */}
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
              marginBottom: "clamp(24px, 3vw, 36px)",
            }}
          >
            Our Direction
          </motion.p>

          {/* Two cards */}
          <div
            className="vm-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
          >
            {/* ── VISION card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.88, delay: 0, ease }}
              style={{ display: "flex" }}
            >
              {/* Outer shell */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "20px",
                  padding: "2.5px",
                  background: "rgba(7,80,60,0.06)",
                  border: "1px solid rgba(7,80,60,0.14)",
                  boxShadow:
                    "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.12)",
                  transition:
                    "border-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(50,205,50,0.35)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(7,80,60,0.14)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Inner core */}
                <div
                  style={{
                    borderRadius: "17.5px",
                    background:
                      "linear-gradient(145deg, #07503c 0%, #064232 60%, #073d2e 100%)",
                    padding: "clamp(24px, 3vw, 40px)",
                    minHeight: "260px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Radial glow top-left */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "260px",
                      height: "260px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(50,205,50,0.10) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Logo watermark */}
                  <img
                    src="/logo-3d.png"
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: "-14%",
                      right: "-5%",
                      width: "clamp(130px, 16vw, 200px)",
                      opacity: 0.065,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />

                  {/* Top: badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "8.5px",
                      fontWeight: 700,
                      letterSpacing: "0.20em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Our Vision
                  </span>

                  {/* Bottom: headline + body */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(34px, 3.6vw, 52px)",
                        fontWeight: 800,
                        lineHeight: 1.04,
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                        margin: 0,
                      }}
                    >
                      To lead with data,<br />
                      not assumptions.
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13px",
                        lineHeight: 1.8,
                        color: "rgba(255,255,255,0.50)",
                        margin: 0,
                      }}
                    >
                      To be the most accountable digital agency in Malaysia —
                      where every ringgit is tracked, every campaign is honest,
                      and every result is real.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── MISSION card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.88, delay: 0.1, ease }}
              style={{ display: "flex" }}
            >
              {/* Outer shell */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "20px",
                  padding: "2.5px",
                  background: "rgba(7,80,60,0.06)",
                  border: "1px solid rgba(7,80,60,0.14)",
                  boxShadow:
                    "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.12)",
                  transition:
                    "border-color 260ms cubic-bezier(0.32,0.72,0,1), transform 260ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,214,0,0.45)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(7,80,60,0.14)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Inner core — image background, left-heavy overlay */}
                <div
                  style={{
                    borderRadius: "17.5px",
                    minHeight: "260px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                    padding: "clamp(24px, 3vw, 40px)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Background photo — team image */}
                  <img
                    src="/aboutus-card1.png"
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                  {/* Left-heavy overlay — dark for text, fades right to reveal photo */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, rgba(6,31,23,0.97) 0%, rgba(7,80,60,0.88) 48%, rgba(7,80,60,0.72) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Bottom fade — ensures text is readable */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(6,31,23,0.92) 0%, transparent 55%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top: badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "8.5px",
                      fontWeight: 700,
                      letterSpacing: "0.20em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Our Mission
                  </span>

                  {/* Bottom: headline + body */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(34px, 3.6vw, 52px)",
                        fontWeight: 800,
                        lineHeight: 1.04,
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                        margin: 0,
                      }}
                    >
                      Marketing that works.<br />
                      Every ringgit.
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13px",
                        lineHeight: 1.8,
                        color: "rgba(255,255,255,0.50)",
                        margin: 0,
                      }}
                    >
                      To help Malaysian business owners grow with marketing that
                      is honest, hands-on, and tied back to business outcomes
                      they can actually measure.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
        {/* Background photo */}
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            pointerEvents: "none",
          }}
        />
        {/* Dark green overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(7,80,60,0.80)",
            pointerEvents: "none",
          }}
        />
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
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
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
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.09)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  backgroundColor: "rgba(6,31,23,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
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
          .vm-grid {
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
