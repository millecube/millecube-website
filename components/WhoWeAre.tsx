"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "#EBFFF3",
        borderBottom: "1px solid rgba(7,80,60,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-bold tracking-[0.28em]"
              style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
            >
              WHO WE ARE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontWeight: 800,
                fontSize: "clamp(34px, 4.5vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#07503c",
              }}
            >
              Built for businesses done spending money on marketing that goes nowhere.
            </h2>
            <p
              className="text-sm"
              style={{
                color: "rgba(7,80,60,0.55)",
                fontFamily: "var(--font-montserrat)",
                lineHeight: 1.85,
              }}
            >
              Most agency reports are full of numbers that feel good on screen and mean nothing at the bank. Reach. Impressions. Engagement rate.
            </p>
            <p
              className="text-sm font-semibold"
              style={{
                color: "#07503c",
                fontFamily: "var(--font-montserrat)",
                lineHeight: 1.85,
              }}
            >
              We track different things. Cost per lead. Cost per sale. Revenue generated. Every campaign tied back to a number your business actually cares about.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-bold mt-2 transition-colors duration-200"
              style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#32cd32")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#07503c")}
            >
              Learn more about us →
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Highlight card */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#07503c",
                border: "1px solid rgba(7,80,60,0.12)",
              }}
            >
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
              >
                OUR APPROACH
              </p>
              <p
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 42px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                Technical-first. Data-driven.{" "}
                <span style={{ color: "#32cd32" }}>Result focused.</span>
              </p>
              <p
                className="mt-4 text-sm"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 1.8,
                }}
              >
                Millecube is a technical-first digital agency from Penang. We handle Meta Ads, Google Ads, and marketplace management end-to-end — with full tracking on everything, so you always know exactly what your spend is producing.
              </p>
            </div>

            {/* Two small info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "No Lock-in Contract", desc: "Month-to-month. Stay because we earn it every month." },
                { label: "Direct Access", desc: "No account executives. Talk directly to the people doing the work." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(7,80,60,0.1)",
                  }}
                >
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: "rgba(7,80,60,0.5)",
                      fontFamily: "var(--font-montserrat)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
