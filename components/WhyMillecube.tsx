"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "You see everything.",
    body: "Cost per lead. Cost per sale. Revenue generated. Every campaign is tracked so you know exactly which ad is working and which one to cut — in plain language, every month.",
  },
  {
    num: "02",
    title: "A team. Not a freelancer.",
    body: "When a freelancer disappears or runs out of capacity, your business pays for it. Millecube is a professional team — accountability, redundancy, and someone always picks up the phone.",
  },
  {
    num: "03",
    title: "Strategists, not account execs.",
    body: "You should never have to re-explain your business to a new junior every quarter. The people setting your strategy are the same ones you talk to. Direct access. No layers.",
  },
];

const ease = [0.32, 0.72, 0, 1] as const;

function FeaturedPillar() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), {
    stiffness: 340,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), {
    stiffness: 340,
    damping: 30,
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
      className="mb-5"
      initial={{ opacity: 0, y: 24 }}
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
          }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Dark green background */}
          <div
            style={{
              backgroundColor: "#07503c",
              position: "relative",
            }}
          >
            {/* Large decorative number */}
            <div
              className="absolute top-0 right-6 select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontWeight: 800,
                fontSize: "clamp(120px, 18vw, 240px)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: "rgba(50,205,50,0.07)",
              }}
            >
              01
            </div>
            <div className="relative p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span
                  className="text-xs font-bold tracking-[0.22em]"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-montserrat)" }}
                >
                  01
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontWeight: 800,
                    fontSize: "clamp(28px, 4vw, 52px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                    marginTop: "12px",
                  }}
                >
                  {pillars[0].title}
                </h3>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.85,
                  fontSize: "15px",
                }}
              >
                {pillars[0].body}
              </p>
            </div>
            {/* Gold accent strip at the bottom */}
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #FFD600 0%, rgba(255,214,0,0.4) 60%, transparent 100%)",
                boxShadow: "0 0 16px rgba(255,214,0,0.35)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function WhyMillecube() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs font-bold tracking-[0.28em] mb-4"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
          >
            WHY US
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontWeight: 800,
              fontSize: "clamp(34px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#07503c",
            }}
          >
            We work the way you&apos;d want an agency to work.
          </h2>
        </motion.div>

        {/* Featured pillar 01 — 3D tilt + gold strip */}
        <FeaturedPillar />

        {/* Pillars 02 and 03 — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.slice(1).map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#F5F5F5",
                border: "1px solid rgba(7,80,60,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                backgroundColor: "#EBFFF3",
                borderColor: "rgba(50,205,50,0.2)",
                y: -4,
                boxShadow: "0 12px 40px rgba(7,80,60,0.08)",
              }}
            >
              {/* Decorative background number */}
              <div
                className="absolute -top-2 right-4 select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontWeight: 800,
                  fontSize: "120px",
                  lineHeight: 0.85,
                  letterSpacing: "-0.05em",
                  color: "rgba(7,80,60,0.04)",
                }}
              >
                {pillar.num}
              </div>
              <span
                className="text-xs font-bold"
                style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
              >
                {pillar.num}
              </span>
              <h3
                className="text-lg font-bold leading-snug"
                style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "rgba(7,80,60,0.55)",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.8,
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-xs"
          style={{ color: "rgba(7,80,60,0.35)", fontFamily: "var(--font-montserrat)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          No long-term commitment required. Start with a conversation.
        </motion.p>
      </div>
    </section>
  );
}
