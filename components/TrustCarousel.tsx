"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

const CARDS = [
  {
    title: "Tailored Plan",
    desc: "Packages built around your business. No one-size-fits-all.",
    img: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=440&h=580&fit=crop&q=80",
    accent: "#FFD600",
  },
  {
    title: "No Lock-in",
    desc: "Month-to-month. Stay because results show up.",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=440&h=580&fit=crop&q=80",
    accent: "#32cd32",
  },
  {
    title: "Expert Strategy",
    desc: "Every solution backed by specialists.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=440&h=580&fit=crop&q=80",
    accent: "#EBFFF3",
  },
  {
    title: "Built Together",
    desc: "A full team on your account: media, creative, and analytics.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=440&h=580&fit=crop&q=80",
    accent: "#FFD600",
  },
  {
    title: "Data Driven",
    desc: "Every decision backed by real numbers.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=440&h=580&fit=crop&q=80",
    accent: "#32cd32",
  },
];

const CARD_W = 220;
const CARD_H = 330;

// position data indexed by abs(offset from center): 0, 1, 2
const POS = [
  { scale: 1.13, rotateY: 0,  opacity: 1,    blurPx: 0,   zIndex: 10 }, // center
  { scale: 0.87, rotateY: 18, opacity: 0.82,  blurPx: 1.5, zIndex: 7  }, // ±1
  { scale: 0.70, rotateY: 30, opacity: 0.42,  blurPx: 5,   zIndex: 4  }, // ±2
];
const X_OFFSET = [0, 270, 500]; // px from center per abs-offset level

export default function TrustCarousel() {
  const [active, setActive] = useState(2);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % CARDS.length), []);
  const prev = useCallback(
    () => setActive((p) => (p - 1 + CARDS.length) % CARDS.length),
    []
  );

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) next();
    }, 3800);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      aria-label="Why brands trust Millecube"
      style={{ backgroundColor: "#FFFFFF", position: "relative", overflow: "hidden" }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{
          paddingTop: "clamp(40px, 5vw, 60px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
        }}
      >
        {/* Section header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "56px" }}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-block",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#07503c",
              backgroundColor: "rgba(7,80,60,0.07)",
              border: "1px solid rgba(7,80,60,0.11)",
              padding: "5px 12px",
              borderRadius: "100px",
              fontFamily: "var(--font-montserrat)",
              marginBottom: "20px",
            }}
          >
            Why Choose Us
          </span>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontWeight: 800,
              fontSize: "clamp(34px, 4vw, 54px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#07503c",
              marginBottom: "14px",
            }}
          >
            Why Brands Trust{" "}
            <span style={{ color: "#32cd32" }}>Millecube</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "14px",
              color: "rgba(7,80,60,0.45)",
              lineHeight: 1.72,
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            From first campaign to long-term growth. Here&apos;s what makes us
            different.
          </p>
        </motion.div>

        {/* Carousel stage */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#07503c",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(7,80,60,0.22)",
              fontSize: "20px",
              lineHeight: 1,
              transition:
                "background-color 220ms cubic-bezier(0.32,0.72,0,1), transform 220ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#055c44";
              el.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#07503c";
              el.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ‹
          </button>

          {/* Card track */}
          <div
            style={{
              position: "relative",
              height: `${Math.round(CARD_H * 1.2)}px`,
              margin: "0 60px",
              perspective: "1400px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
              }}
            >
              {CARDS.map((card, i) => {
                let offset = i - active;
                if (offset > Math.floor(CARDS.length / 2)) offset -= CARDS.length;
                if (offset < -Math.floor(CARDS.length / 2)) offset += CARDS.length;

                const abs = Math.abs(offset);
                if (abs > 2) return null;

                const sign = offset > 0 ? 1 : offset < 0 ? -1 : 0;
                const pos = POS[abs];
                const xVal = X_OFFSET[abs] * sign;
                const ryVal = pos.rotateY * sign;

                return (
                  <motion.div
                    key={i}
                    onClick={() => abs > 0 && setActive(i)}
                    animate={{
                      x: xVal,
                      scale: pos.scale,
                      rotateY: ryVal,
                      opacity: pos.opacity,
                      filter: `blur(${pos.blurPx}px)`,
                    }}
                    transition={{ duration: 0.75, ease }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      marginLeft: -CARD_W / 2,
                      marginTop: -CARD_H / 2,
                      width: CARD_W,
                      height: CARD_H,
                      cursor: abs > 0 ? "pointer" : "default",
                      zIndex: pos.zIndex,
                    }}
                  >
                    {/* Card — double-bezel outer shell */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "24px",
                        padding: "3px",
                        background:
                          abs === 0
                            ? "rgba(7,80,60,0.07)"
                            : "rgba(7,80,60,0.03)",
                        border: `1px solid ${
                          abs === 0
                            ? "rgba(7,80,60,0.15)"
                            : "rgba(7,80,60,0.07)"
                        }`,
                        boxShadow:
                          abs === 0
                            ? "0 4px 8px rgba(7,80,60,0.06), 0 16px 48px rgba(7,80,60,0.2), 0 32px 80px rgba(7,80,60,0.12)"
                            : "0 4px 20px rgba(7,80,60,0.1)",
                      }}
                    >
                      {/* Card — inner core */}
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
                        }}
                      >
                        {/* Background image */}
                        <img
                          src={card.img}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />

                        {/* Gradient overlay — transparent top → dark bottom */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to bottom, rgba(6,31,23,0.08) 0%, rgba(6,31,23,0.5) 42%, rgba(6,31,23,0.97) 72%)",
                          }}
                        />

                        {/* Card text */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "20px 22px 22px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "var(--font-bebas)",
                              fontSize: "24px",
                              fontWeight: 800,
                              letterSpacing: "-0.01em",
                              color: "#ffffff",
                              lineHeight: 1.1,
                              marginBottom: "7px",
                            }}
                          >
                            {card.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-montserrat)",
                              fontSize: "11.5px",
                              lineHeight: 1.55,
                              color: "rgba(255,255,255,0.72)",
                            }}
                          >
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#07503c",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(7,80,60,0.22)",
              fontSize: "20px",
              lineHeight: 1,
              transition:
                "background-color 220ms cubic-bezier(0.32,0.72,0,1), transform 220ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#055c44";
              el.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#07503c";
              el.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ›
          </button>
        </div>

        {/* Dot indicators — layout-animated via Framer Motion (GPU-safe, no width transition) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "36px",
          }}
        >
          {CARDS.map((_, i) => (
            <motion.button
              key={i}
              layout
              onClick={() => setActive(i)}
              aria-label={`Go to card ${i + 1}`}
              animate={{
                backgroundColor:
                  i === active ? "#07503c" : "rgba(7,80,60,0.18)",
              }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
