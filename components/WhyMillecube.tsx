"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "You see everything.",
    body: "Cost per lead. Cost per sale. Revenue generated. Every campaign is tracked so you know exactly which ad is working and which one to cut — in plain language, every month.",
    icon: "📊",
  },
  {
    num: "02",
    title: "A team. Not a freelancer.",
    body: "When a freelancer disappears or runs out of capacity, your business pays for it. Millecube is a professional team — accountability, redundancy, and someone always picks up the phone.",
    icon: "👥",
  },
  {
    num: "03",
    title: "Strategists, not account execs.",
    body: "You should never have to re-explain your business to a new junior every quarter. The people setting your strategy are the same ones you talk to. Direct access. No layers.",
    icon: "🎯",
  },
];

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="flex flex-col gap-5 p-8 rounded-2xl"
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
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                >
                  {pillar.num}
                </span>
                <span className="text-2xl">{pillar.icon}</span>
              </div>
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

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-xs"
          style={{
            color: "rgba(7,80,60,0.35)",
            fontFamily: "var(--font-montserrat)",
          }}
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
