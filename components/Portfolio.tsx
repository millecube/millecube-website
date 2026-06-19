"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const placeholders = [
  {
    label: "F&B · Meta Ads",
    title: "Food & Beverage Brand",
    result: "3.8x ROAS on Meta Ads campaign",
  },
  {
    label: "Retail · Marketplace",
    title: "Retail Product Seller",
    result: "Shopee store revenue doubled in 60 days",
  },
  {
    label: "Services · Google Ads",
    title: "Professional Services",
    result: "Cost per lead reduced by 42%",
  },
];

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
              className="font-display"
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.title}
              className="group flex flex-col rounded-lg overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(7,80,60,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ boxShadow: "0 8px 32px rgba(7,80,60,0.1)", y: -2 }}
            >
              {/* Placeholder image */}
              <div
                className="w-full flex items-center justify-center"
                style={{ height: "200px", backgroundColor: "#EBFFF3" }}
              >
                <span
                  className="text-xs font-medium tracking-widest"
                  style={{
                    color: "rgba(7,80,60,0.25)",
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  CLIENT WORK
                </span>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-2">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                >
                  {item.label}
                </span>
                <h3
                  className="text-sm font-bold"
                  style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "rgba(7,80,60,0.5)", fontFamily: "var(--font-montserrat)" }}
                >
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
