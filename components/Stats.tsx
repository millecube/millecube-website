"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "35+", label: "Brands Managed", sub: "Across Malaysia" },
  { value: "RM 2M+", label: "Ad Spend Managed", sub: "Tracked to every ringgit" },
  { value: "3.8×", label: "Average ROAS", sub: "Across Meta campaigns" },
  { value: "Since 2024", label: "Founded in Penang", sub: "Technical-first agency" },
];

export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(7,80,60,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col py-10 px-6 lg:px-8"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(7,80,60,0.08)"
                    : "none",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#07503c",
                }}
              >
                {stat.value}
              </span>
              <span
                className="mt-2 text-xs font-bold tracking-wide"
                style={{
                  color: "#32cd32",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {stat.label}
              </span>
              <span
                className="mt-1 text-xs"
                style={{
                  color: "rgba(7,80,60,0.4)",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
