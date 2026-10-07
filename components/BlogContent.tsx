"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const EASE_SHARP: [number, number, number, number] = [0.32, 0.72, 0, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Inline text with **bold** markdown + [label](/href) link support ── */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#061f17", fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link
          key={i}
          href={linkMatch[2]}
          style={{ color: "#07503c", fontWeight: 600, textDecoration: "underline", textDecorationColor: "rgba(7,80,60,0.3)" }}
        >
          {linkMatch[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export interface BlogFaq {
  q: string;
  a: string;
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "stats"; items: { value: string; label: string }[]; sourceLabel: string; sourceHref: string }
  | { type: "pillars"; items: { icon: ReactNode; title: string; desc: string; href: string }[] };

interface BlogContentProps {
  blocks: BlogBlock[];
  faqs?: BlogFaq[];
  ctaText?: string;
}

export default function BlogContent({ blocks, faqs, ctaText = "Talk to us" }: BlogContentProps) {
  return (
    <article
      style={{
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div
        className="max-w-3xl mx-auto"
        style={{
          padding: "clamp(44px,6vw,76px) clamp(20px,3vw,40px) clamp(20px,3vw,40px)",
        }}
      >
        {blocks.map((block, i) => {
          switch (block.type) {
            case "p":
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_SMOOTH }}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "15.5px",
                    color: "rgba(6,31,23,0.76)",
                    lineHeight: 1.85,
                    margin: "0 0 22px 0",
                  }}
                >
                  {renderInline(block.text)}
                </motion.p>
              );

            case "h2":
              return (
                <motion.h2
                  key={i}
                  id={block.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: EASE_SHARP }}
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(26px,3vw,36px)",
                    color: "#061f17",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    margin: "clamp(40px,5vw,56px) 0 18px 0",
                  }}
                >
                  {block.text}
                </motion.h2>
              );

            case "h3":
              return (
                <h3
                  key={i}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#061f17",
                    margin: "28px 0 12px 0",
                  }}
                >
                  {block.text}
                </h3>
              );

            case "list":
              const Tag = block.ordered ? "ol" : "ul";
              return (
                <Tag
                  key={i}
                  style={{
                    margin: "0 0 22px 0",
                    paddingLeft: "22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "15px",
                        color: "rgba(6,31,23,0.76)",
                        lineHeight: 1.75,
                      }}
                    >
                      {renderInline(item)}
                    </li>
                  ))}
                </Tag>
              );

            case "callout":
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                  style={{
                    borderRadius: "16px",
                    padding: "3px",
                    background: "rgba(7,80,60,0.03)",
                    border: "1px solid rgba(7,80,60,0.14)",
                    margin: "8px 0 28px 0",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#f4f9f6",
                      borderRadius: "13px",
                      padding: "clamp(18px,2.4vw,26px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#32cd32" }} />
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#07503c",
                        }}
                      >
                        {block.title}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "14.5px",
                        color: "rgba(6,31,23,0.78)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {renderInline(block.text)}
                    </p>
                  </div>
                </motion.div>
              );

            case "quote":
              return (
                <blockquote
                  key={i}
                  style={{
                    borderLeft: "3px solid #32cd32",
                    margin: "8px 0 28px 0",
                    padding: "4px 0 4px 20px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "#061f17",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {renderInline(block.text)}
                  </p>
                  {block.cite && (
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "12px",
                        color: "rgba(6,31,23,0.5)",
                        marginTop: 8,
                      }}
                    >
                      {block.cite}
                    </p>
                  )}
                </blockquote>
              );

            case "stats":
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                  style={{ margin: "12px 0 32px 0" }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${block.items.length}, 1fr)`,
                      gap: 12,
                    }}
                  >
                    {block.items.map((stat, j) => (
                      <div
                        key={j}
                        style={{
                          borderRadius: "14px",
                          border: "1px solid rgba(7,80,60,0.12)",
                          background: "#ffffff",
                          padding: "clamp(14px,2vw,20px)",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-bebas)",
                            fontSize: "clamp(26px,3vw,38px)",
                            color: "#07503c",
                            lineHeight: 1,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "10.5px",
                            color: "rgba(6,31,23,0.6)",
                            marginTop: 6,
                            lineHeight: 1.4,
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "11px",
                      color: "rgba(6,31,23,0.45)",
                      marginTop: 10,
                    }}
                  >
                    Source:{" "}
                    <a
                      href={block.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgba(7,80,60,0.6)" }}
                    >
                      {block.sourceLabel}
                    </a>
                  </p>
                </motion.div>
              );

            case "pillars":
              return (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 10,
                    margin: "8px 0 32px 0",
                  }}
                >
                  {block.items.map((pillar, j) => {
                    return (
                      <Link
                        key={j}
                        href={pillar.href}
                        style={{ textDecoration: "none" }}
                        className="blog-pillar-card"
                      >
                        <div
                          style={{
                            borderRadius: "14px",
                            border: "1px solid rgba(7,80,60,0.12)",
                            background: "#f4f9f6",
                            padding: "16px",
                            height: "100%",
                            transition: "border-color 200ms ease, background-color 200ms ease",
                          }}
                        >
                          {pillar.icon}
                          <div
                            style={{
                              fontFamily: "var(--font-montserrat)",
                              fontSize: "13.5px",
                              fontWeight: 700,
                              color: "#061f17",
                              marginTop: 8,
                            }}
                          >
                            {pillar.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-montserrat)",
                              fontSize: "12px",
                              color: "rgba(6,31,23,0.62)",
                              marginTop: 4,
                              lineHeight: 1.5,
                            }}
                          >
                            {pillar.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <div
          style={{
            background: "#f4f9f6",
            borderTop: "1px solid rgba(7,80,60,0.08)",
          }}
        >
          <div
            className="max-w-3xl mx-auto"
            style={{ padding: "clamp(44px,6vw,64px) clamp(20px,3vw,40px)" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(26px,3vw,36px)",
                color: "#061f17",
                letterSpacing: "-0.02em",
                margin: "0 0 24px 0",
              }}
            >
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: "14px",
                    border: "1px solid rgba(7,80,60,0.10)",
                    background: "#ffffff",
                    padding: "clamp(16px,2vw,22px)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "14.5px",
                      fontWeight: 700,
                      color: "#061f17",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13.5px",
                      color: "rgba(6,31,23,0.7)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .blog-pillar-card > div:hover {
          border-color: rgba(7,80,60,0.28) !important;
          background-color: #ffffff !important;
        }
        @media (max-width: 640px) {
          .blog-pillar-card {
            grid-column: span 1;
          }
        }
      `}</style>
    </article>
  );
}
