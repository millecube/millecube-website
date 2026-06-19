"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface InnerHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function InnerHero({ label, title, subtitle, breadcrumbs }: InnerHeroProps) {
  return (
    <section
      className="pt-32 pb-20"
      style={{
        backgroundColor: "#07503c",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-xs font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>›</span>
                <Link
                  href={crumb.href}
                  className="text-xs font-medium transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </motion.div>
        )}

        <motion.p
          className="text-xs font-bold tracking-[0.28em] mb-5"
          style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="font-display max-w-3xl"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(44px, 7vw, 88px)",
            lineHeight: 1,
            color: "#ffffff",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-5 max-w-lg text-sm"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-montserrat)",
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
