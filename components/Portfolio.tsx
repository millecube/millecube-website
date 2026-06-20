"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const cases = [
  {
    label: "F&B · Meta Ads",
    title: "Food & Beverage Brand",
    stat: "3.8×",
    statLabel: "ROAS",
    result: "Meta Ads campaign managed end-to-end. Every ringgit tracked back to a sale — no vanity metrics.",
    featured: true,
  },
  {
    label: "Retail · Marketplace",
    title: "Retail Product Seller",
    stat: "2×",
    statLabel: "Revenue in 60 days",
    result: "Shopee store revenue doubled through listing optimisation, in-platform ads, and monthly reporting.",
  },
  {
    label: "Services · Google Ads",
    title: "Professional Services",
    stat: "−42%",
    statLabel: "Cost per lead",
    result: "Google Ads restructured from the ground up. Cost per lead dropped 42% in the first 45 days.",
  },
];

const ease = [0.32, 0.72, 0, 1] as const;

function FeaturedCase() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [10, -10]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), {
    stiffness: 300,
    damping: 28,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Perspective wrapper */}
      <div style={{ perspective: "1000px" }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            willChange: "transform",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#07503c",
            minHeight: "280px",
            boxShadow: "0 24px 64px rgba(7,80,60,0.2)",
          }}
        >
          {/* Gold accent top strip */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #FFD600 0%, rgba(255,214,0,0.3) 70%, transparent 100%)",
              boxShadow: "0 0 12px rgba(255,214,0,0.3)",
            }}
          />

          {/* Decorative giant stat */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              right: "-2%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-bebas)",
              fontWeight: 800,
              fontSize: "clamp(120px, 20vw, 280px)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              color: "rgba(50,205,50,0.07)",
            }}
          >
            3.8×
          </div>

          <div
            className="relative p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
            style={{ minHeight: "270px" }}
          >
            {/* Left col */}
            <div className="flex flex-col justify-between h-full" style={{ minHeight: "200px" }}>
              <span
                className="text-xs font-bold tracking-widest"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-montserrat)" }}
              >
                {cases[0].label}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontWeight: 800,
                    fontSize: "clamp(64px, 10vw, 128px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "#32cd32",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {cases[0].stat}
                </div>
                <div
                  className="text-sm font-semibold mt-1"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
                >
                  {cases[0].statLabel}
                </div>
              </div>
            </div>

            {/* Right col */}
            <div className="flex flex-col justify-end gap-4">
              <h3
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 2.5vw, 34px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}
              >
                {cases[0].title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.8,
                  fontSize: "14px",
                  maxWidth: "400px",
                }}
              >
                {cases[0].result}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p
              className="text-xs font-bold tracking-[0.28em] mb-4"
              style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
            >
              OUR WORK
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontWeight: 800,
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#07503c",
              }}
            >
              Results that speak louder than decks.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-bold shrink-0 transition-colors duration-200"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#07503c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#32cd32")}
          >
            View all work →
          </Link>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Featured case — 3D tilt, spans both columns */}
          <FeaturedCase />

          {/* Cases 2 and 3 — each in one col */}
          {cases.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(7,80,60,0.1)",
                minHeight: "240px",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 48px rgba(7,80,60,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(50,205,50,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,80,60,0.1)";
              }}
            >
              {/* Decorative background stat */}
              <div
                className="absolute select-none pointer-events-none"
                style={{
                  right: "12px",
                  top: "-8px",
                  fontFamily: "var(--font-bebas)",
                  fontWeight: 800,
                  fontSize: "110px",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  color: "rgba(7,80,60,0.04)",
                }}
              >
                {item.stat}
              </div>

              <div
                className="relative flex flex-col justify-between p-7"
                style={{ minHeight: "240px" }}
              >
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                >
                  {item.label}
                </span>

                <div className="mt-auto pt-8">
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontWeight: 800,
                      fontSize: "clamp(44px, 7vw, 80px)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "#07503c",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    className="text-xs font-bold mt-1 mb-5"
                    style={{ color: "rgba(7,80,60,0.35)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.statLabel}
                  </div>
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{
                      color: "rgba(7,80,60,0.45)",
                      fontFamily: "var(--font-montserrat)",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
