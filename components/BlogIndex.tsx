"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const EASE_SHARP: [number, number, number, number] = [0.32, 0.72, 0, 1];

interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

const POSTS: BlogPostSummary[] = [
  {
    slug: "digital-marketing-agency-malaysia-guide",
    title: "What Does a Digital Marketing Agency in Malaysia Do?",
    excerpt:
      "The seven disciplines it actually covers, real DOSM figures on Malaysia's digital economy, and how to verify an agency is legitimate before you sign anything.",
    date: "October 2026",
    tag: "Guide",
  },
];

export default function BlogIndex() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div
        className="max-w-5xl mx-auto"
        style={{ padding: "clamp(44px,6vw,76px) clamp(20px,3vw,40px)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_SHARP, delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }} className="blog-card-link">
                <div
                  className="blog-card"
                  style={{
                    borderRadius: "18px",
                    padding: "3px",
                    background: "rgba(7,80,60,0.02)",
                    border: "1px solid rgba(7,80,60,0.10)",
                    boxShadow: "0 2px 8px rgba(7,80,60,0.05)",
                    transition:
                      "border-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "15px",
                      padding: "clamp(22px,3vw,34px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "10.5px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#07503c",
                          background: "rgba(50,205,50,0.12)",
                          padding: "4px 10px",
                          borderRadius: 100,
                        }}
                      >
                        {post.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "11.5px",
                          color: "rgba(6,31,23,0.45)",
                        }}
                      >
                        {post.date}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(24px,3vw,32px)",
                        color: "#061f17",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13.5px",
                        color: "rgba(6,31,23,0.65)",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: 640,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        color: "#07503c",
                        marginTop: 6,
                      }}
                    >
                      Read the guide
                      <ArrowRight size={13} weight="bold" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .blog-card-link:hover .blog-card {
          border-color: rgba(7,80,60,0.25) !important;
          box-shadow: 0 4px 16px rgba(7,80,60,0.08), 0 16px 40px rgba(7,80,60,0.06) !important;
        }
      `}</style>
    </section>
  );
}
