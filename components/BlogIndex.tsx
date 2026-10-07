"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

const EASE_SHARP: [number, number, number, number] = [0.32, 0.72, 0, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  readTime: string;
}

const POSTS: BlogPostSummary[] = [
  {
    slug: "digital-marketing-agency-malaysia-guide",
    title: "What Does a Digital Marketing Agency in Malaysia Do?",
    excerpt:
      "The seven disciplines it actually covers, real DOSM figures on Malaysia's digital economy, and how to verify an agency is legitimate before you sign anything.",
    image: "/blog-digital-marketing-agency-malaysia-hero.png",
    tag: "Digital Marketing",
    readTime: "9 min read",
  },
];

export default function BlogIndex() {
  return (
    <section style={{ background: "#ffffff" }}>
      {/* ── Header: title + subtitle, white background ── */}
      <div
        className="max-w-7xl mx-auto pt-32"
        style={{ paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: EASE_SHARP }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(40px,6vw,76px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "#061f17",
            margin: 0,
          }}
        >
          The Millecube{" "}
          <span
            style={{
              display: "inline-block",
              background: "#FFD600",
              color: "#061f17",
              padding: "2px clamp(10px,1.4vw,18px)",
              borderRadius: "10px",
            }}
          >
            Blog
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_SMOOTH }}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "15px",
            color: "rgba(6,31,23,0.62)",
            lineHeight: 1.75,
            maxWidth: 560,
            margin: "20px 0 0 0",
          }}
        >
          Guides we&apos;d actually want to read before hiring an agency ourselves, grounded in real data, not vendor claims.
        </motion.p>
      </div>

      {/* ── Card grid ── */}
      <div
        className="max-w-7xl mx-auto blog-card-grid"
        style={{ padding: "clamp(36px,5vw,56px) clamp(20px,3vw,40px) clamp(56px,7vw,88px)" }}
      >
        {POSTS.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: EASE_SHARP, delay: i * 0.08 }}
          >
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }} className="blog-index-card-link">
              <div className="blog-index-card">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "#FFD600",
                      color: "#061f17",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      padding: "5px 11px",
                      borderRadius: 100,
                    }}
                  >
                    {post.tag}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "16.5px",
                    fontWeight: 700,
                    color: "#061f17",
                    lineHeight: 1.35,
                    margin: "16px 0 8px 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "13px",
                    color: "rgba(6,31,23,0.6)",
                    lineHeight: 1.65,
                    margin: "0 0 16px 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 14,
                    borderTop: "1px solid rgba(7,80,60,0.1)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", color: "rgba(6,31,23,0.5)" }}>
                    {post.readTime}
                  </span>
                  <span
                    className="blog-index-read-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: "#07503c",
                    }}
                  >
                    Read
                    <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .blog-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 640px) {
          .blog-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .blog-card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .blog-index-card {
          border-radius: 18px;
          border: 1px solid rgba(7,80,60,0.10);
          background: #ffffff;
          padding: 14px;
          height: 100%;
          transition: border-color 240ms cubic-bezier(0.32,0.72,0,1), box-shadow 240ms cubic-bezier(0.32,0.72,0,1), transform 240ms cubic-bezier(0.32,0.72,0,1);
        }
        .blog-index-card-link:hover .blog-index-card {
          border-color: rgba(7,80,60,0.25);
          box-shadow: 0 8px 24px rgba(7,80,60,0.08), 0 20px 48px rgba(7,80,60,0.06);
          transform: translateY(-3px);
        }
        .blog-index-card-link:hover .blog-index-read-link {
          gap: 9px;
        }
        .blog-index-read-link {
          transition: gap 200ms ease;
        }
      `}</style>
    </section>
  );
}
