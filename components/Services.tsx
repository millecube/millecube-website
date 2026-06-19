"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    name: "Social Media Marketing",
    desc: "Build your brand voice, keep your channels active, and turn followers into customers with content built for each platform.",
    platforms: "Meta · TikTok · LinkedIn · Xiaohongshu",
    href: "/services/social-media",
  },
  {
    num: "02",
    name: "Media Advertisement",
    desc: "Meta Ads, Google Ads, TikTok Ads — every ringgit tracked back to a lead or a sale. No guesswork.",
    platforms: "Facebook · Instagram · Google · TikTok",
    href: "/services/media-advertisement",
  },
  {
    num: "03",
    name: "Marketplace Management",
    desc: "We manage your Shopee, Lazada, and TikTok Shop end-to-end — listings, ads, promotions, and monthly reporting.",
    platforms: "Shopee · Lazada · TikTok Shop",
    href: "/services/marketplace-management",
  },
  {
    num: "04",
    name: "SEO & Search",
    desc: "Keyword strategy, on-page SEO, and content that compounds — organic visibility that builds over time.",
    platforms: "Google · Bing · AI Search",
    href: "/services/seo",
  },
  {
    num: "05",
    name: "Website & Landing Pages",
    desc: "Websites and landing pages engineered to convert the traffic you're already paying for.",
    platforms: "WordPress · Next.js · Webflow",
    href: "/services/website",
  },
  {
    num: "06",
    name: "Content & Creative",
    desc: "Copy, graphics, and video assets designed for performance — built to stop the scroll.",
    platforms: "Ad Creative · Copywriting · Video",
    href: "/services/content-creative",
  },
  {
    num: "07",
    name: "Branding & Strategy",
    desc: "Brand positioning, messaging, and identity — the thinking that makes every downstream investment work harder.",
    platforms: "Brand Identity · Strategy · Analytics",
    href: "/services/branding-strategy",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "#F5F5F5",
        borderBottom: "1px solid rgba(7,80,60,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
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
              WHAT WE DO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#07503c",
              }}
            >
              Every channel your
              <br />revenue depends on.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold shrink-0 transition-colors duration-200"
            style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#07503c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#32cd32")}
          >
            View all services →
          </Link>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 48px rgba(7,80,60,0.1)",
              }}
              style={{ transition: "box-shadow 0.2s" }}
            >
              <Link
                href={service.href}
                className="group flex flex-col gap-4 p-7 rounded-xl h-full transition-colors duration-200"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(7,80,60,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#32cd32";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,80,60,0.1)";
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                  >
                    {service.num}
                  </span>
                  <span
                    className="text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "rgba(7,80,60,0.25)" }}
                  >
                    ↗
                  </span>
                </div>

                <h3
                  className="text-base font-bold leading-snug"
                  style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                >
                  {service.name}
                </h3>

                <p
                  className="text-sm flex-1"
                  style={{
                    color: "rgba(7,80,60,0.55)",
                    fontFamily: "var(--font-montserrat)",
                    lineHeight: 1.75,
                  }}
                >
                  {service.desc}
                </p>

                <p
                  className="text-xs font-medium pt-4"
                  style={{
                    color: "rgba(7,80,60,0.3)",
                    fontFamily: "var(--font-montserrat)",
                    borderTop: "1px solid rgba(7,80,60,0.07)",
                  }}
                >
                  {service.platforms}
                </p>
              </Link>
            </motion.div>
          ))}

          {/* 8th card — CTA */}
          <motion.div
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 7 * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(7,80,60,0.15)" }}
            style={{ backgroundColor: "#07503c", minHeight: "200px" }}
          >
            <Link
              href="/contact"
              className="group flex flex-col justify-between gap-6 p-7"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: "200px",
              }}
            >
              <p
                className="text-xs font-bold tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
              >
                NOT SURE WHERE TO START?
              </p>
              <h3
                className="text-xl font-bold leading-snug"
                style={{ color: "#ffffff", fontFamily: "var(--font-montserrat)" }}
              >
                Let&apos;s talk about what your business needs.
              </h3>
              <span
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
                style={{ color: "#32cd32" }}
              >
                Start a conversation →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
