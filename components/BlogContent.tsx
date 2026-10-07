"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CaretDown, Check, Warning } from "@phosphor-icons/react";
import type { ReactNode } from "react";

const EASE_SHARP: [number, number, number, number] = [0.32, 0.72, 0, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
  | { type: "quickAnswer"; paragraphs: string[] }
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "stats"; items: { value: string; label: string }[]; sourceLabel: string; sourceHref: string }
  | { type: "pillars"; items: { icon: ReactNode; title: string; desc: string; href: string }[] }
  | { type: "questions"; items: { q: string; good: string; bad: string }[] }
  | { type: "ctaBanner"; text: string; buttonText: string; href: string }
  | { type: "table"; headers: [string, string]; rows: [string, string][] };

interface BlogContentProps {
  blocks: BlogBlock[];
  faqs?: BlogFaq[];
}

function FaqItem({ item, isOpen, onToggle }: { item: BlogFaq; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderRadius: "14px",
        border: "1px solid rgba(7,80,60,0.10)",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: "clamp(16px,2vw,22px)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "14.5px",
            fontWeight: 700,
            color: "#061f17",
          }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE_SHARP }}
          style={{ flexShrink: 0, display: "flex" }}
        >
          <CaretDown size={15} color="#07503c" weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_SHARP }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13.5px",
                color: "rgba(6,31,23,0.7)",
                lineHeight: 1.75,
                margin: 0,
                padding: "0 clamp(16px,2vw,22px) clamp(16px,2vw,22px)",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BlogContent({ blocks, faqs }: BlogContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const quickAnswer = blocks[0]?.type === "quickAnswer" ? blocks[0] : null;
  const rest = quickAnswer ? blocks.slice(1) : blocks;

  const toc = rest
    .filter((b): b is { type: "h2"; text: string; id?: string } => b.type === "h2")
    .map((b) => ({ text: b.text, id: b.id || slugify(b.text) }));

  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const tocIdsRef = useRef<string[]>([]);
  tocIdsRef.current = toc.map((t) => t.id);

  useEffect(() => {
    const ids = tocIdsRef.current;
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the "active band" that's intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleTocClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <article style={{ background: "#ffffff", position: "relative" }}>
      {/* ── Quick Answer — full width, direct answer-first box ── */}
      {quickAnswer && (
        <div className="max-w-3xl mx-auto" style={{ padding: "clamp(44px,6vw,76px) clamp(20px,3vw,40px) 0" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            style={{
              borderRadius: "16px",
              padding: "3px",
              background: "rgba(50,205,50,0.06)",
              border: "1px solid rgba(50,205,50,0.3)",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "13px",
                padding: "clamp(20px,2.6vw,30px)",
                borderLeft: "4px solid #32cd32",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#07503c",
                  margin: "0 0 12px 0",
                }}
              >
                Quick answer
              </h2>
              {quickAnswer.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "14.5px",
                    color: "rgba(6,31,23,0.78)",
                    lineHeight: 1.82,
                    margin: i === quickAnswer.paragraphs.length - 1 ? 0 : "0 0 14px 0",
                  }}
                >
                  {renderInline(p)}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* ── Main grid: sticky TOC sidebar + article body ── */}
      <div
        className="max-w-6xl mx-auto blog-grid"
        style={{
          padding: "28px clamp(20px,3vw,40px) clamp(20px,3vw,40px)",
        }}
      >
        {/* Sidebar TOC */}
        {toc.length > 0 && (
          <aside className="blog-toc">
            <div className="blog-toc-sticky">
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(6,31,23,0.45)",
                  margin: "0 0 12px 0",
                }}
              >
                In this guide
              </p>
              <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {toc.map((item, i) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      style={{
                        display: "flex",
                        gap: 10,
                        textDecoration: "none",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "12.5px",
                        lineHeight: 1.4,
                        padding: "7px 8px",
                        borderRadius: 8,
                        marginLeft: -8,
                        color: isActive ? "#07503c" : "rgba(6,31,23,0.6)",
                        fontWeight: isActive ? 700 : 400,
                        background: isActive ? "rgba(50,205,50,0.12)" : "transparent",
                        borderLeft: isActive ? "2px solid #32cd32" : "2px solid transparent",
                        transition: "background-color 200ms ease, color 200ms ease",
                      }}
                    >
                      <span style={{ color: isActive ? "#07503c" : "rgba(7,80,60,0.45)", fontWeight: 700, flexShrink: 0 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item.text}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>
        )}

        {/* Article body */}
        <div className="blog-body">
          {rest.map((block, i) => {
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
                    id={block.id || slugify(block.text)}
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
                      scrollMarginTop: "100px",
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

              case "list": {
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
              }

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
                    <div style={{ backgroundColor: "#f4f9f6", borderRadius: "13px", padding: "clamp(18px,2.4vw,26px)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
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
                  <blockquote key={i} style={{ borderLeft: "3px solid #32cd32", margin: "8px 0 28px 0", padding: "4px 0 4px 20px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontStyle: "italic", color: "#061f17", lineHeight: 1.7, margin: 0 }}>
                      {renderInline(block.text)}
                    </p>
                    {block.cite && (
                      <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", color: "rgba(6,31,23,0.5)", marginTop: 8 }}>
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
                    <div className="blog-stats-grid" style={{ display: "grid", gap: 12 }}>
                      {block.items.map((stat, j) => (
                        <div key={j} style={{ borderRadius: "14px", border: "1px solid rgba(7,80,60,0.12)", background: "#ffffff", padding: "clamp(14px,2vw,20px)", textAlign: "center" }}>
                          <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(26px,3vw,38px)", color: "#07503c", lineHeight: 1 }}>{stat.value}</div>
                          <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "10.5px", color: "rgba(6,31,23,0.6)", marginTop: 6, lineHeight: 1.4 }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", color: "rgba(6,31,23,0.45)", marginTop: 10 }}>
                      Source:{" "}
                      <a href={block.sourceHref} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(7,80,60,0.6)" }}>
                        {block.sourceLabel}
                      </a>
                    </p>
                  </motion.div>
                );

              case "pillars":
                return (
                  <div key={i} className="blog-pillars-grid" style={{ display: "grid", gap: 10, margin: "8px 0 32px 0" }}>
                    {block.items.map((pillar, j) => (
                      <Link key={j} href={pillar.href} style={{ textDecoration: "none" }} className="blog-pillar-card">
                        <div style={{ borderRadius: "14px", border: "1px solid rgba(7,80,60,0.12)", background: "#f4f9f6", padding: "16px", height: "100%", transition: "border-color 200ms ease, background-color 200ms ease" }}>
                          {pillar.icon}
                          <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "13.5px", fontWeight: 700, color: "#061f17", marginTop: 8 }}>{pillar.title}</div>
                          <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", color: "rgba(6,31,23,0.62)", marginTop: 4, lineHeight: 1.5 }}>{pillar.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                );

              case "questions":
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14, margin: "8px 0 32px 0" }}>
                    {block.items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.65, ease: EASE_SHARP, delay: j * 0.05 }}
                        style={{ borderRadius: "16px", border: "1px solid rgba(7,80,60,0.12)", overflow: "hidden" }}
                      >
                        <div style={{ background: "#f4f9f6", padding: "14px 18px" }}>
                          <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "14.5px", fontWeight: 700, color: "#061f17" }}>
                            {j + 1}. {item.q}
                          </span>
                        </div>
                        <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <div style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: "50%", background: "rgba(50,205,50,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Check size={11} color="#1e7a22" weight="bold" />
                            </div>
                            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13.5px", color: "rgba(6,31,23,0.78)", lineHeight: 1.7, margin: 0 }}>
                              <strong style={{ color: "#1e7a22" }}>Good answer: </strong>
                              {renderInline(item.good)}
                            </p>
                          </div>
                          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <div style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: "50%", background: "rgba(192,57,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Warning size={11} color="#c0392b" weight="bold" />
                            </div>
                            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13.5px", color: "rgba(6,31,23,0.78)", lineHeight: 1.7, margin: 0 }}>
                              <strong style={{ color: "#c0392b" }}>Red flag: </strong>
                              {renderInline(item.bad)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                );

              case "ctaBanner":
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                    style={{
                      margin: "20px 0 36px 0",
                      borderRadius: "16px",
                      background: "#07503c",
                      padding: "clamp(18px,2.4vw,26px) clamp(20px,2.8vw,30px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#ffffff",
                        maxWidth: 420,
                      }}
                    >
                      {block.text}
                    </span>
                    <Link href={block.href} style={{ textDecoration: "none", flexShrink: 0 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          background: "#FFD600",
                          color: "#061f17",
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "13px",
                          fontWeight: 700,
                          padding: "11px 22px",
                          borderRadius: 100,
                          whiteSpace: "nowrap",
                        }}
                        className="blog-cta-banner-btn"
                      >
                        {block.buttonText}
                      </span>
                    </Link>
                  </motion.div>
                );

              case "table":
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                    style={{
                      margin: "8px 0 28px 0",
                      borderRadius: "14px",
                      border: "1px solid rgba(7,80,60,0.12)",
                      overflowX: "auto",
                    }}
                  >
                    <table style={{ width: "100%", minWidth: 480, borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          {block.headers.map((h, hi) => (
                            <th
                              key={hi}
                              style={{
                                background: "#07503c",
                                color: "#ffffff",
                                textAlign: "left",
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "12.5px",
                                fontWeight: 700,
                                letterSpacing: "0.03em",
                                textTransform: "uppercase",
                                padding: "12px 16px",
                                width: hi === 0 ? "30%" : "70%",
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, ri) => (
                          <tr key={ri} style={{ background: ri % 2 === 1 ? "#f4f9f6" : "#ffffff" }}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                style={{
                                  padding: "14px 16px",
                                  borderTop: "1px solid rgba(7,80,60,0.08)",
                                  fontFamily: "var(--font-montserrat)",
                                  fontSize: ci === 0 ? "13.5px" : "13.5px",
                                  fontWeight: ci === 0 ? 700 : 400,
                                  color: ci === 0 ? "#07503c" : "rgba(6,31,23,0.76)",
                                  lineHeight: 1.6,
                                  verticalAlign: "top",
                                }}
                              >
                                {renderInline(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>

      {/* FAQ — animated accordion */}
      {faqs && faqs.length > 0 && (
        <div style={{ background: "#f4f9f6", borderTop: "1px solid rgba(7,80,60,0.08)" }}>
          <div className="max-w-3xl mx-auto" style={{ padding: "clamp(44px,6vw,64px) clamp(20px,3vw,40px)" }}>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE_SHARP }}
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(26px,3vw,36px)", color: "#061f17", letterSpacing: "-0.02em", margin: "0 0 24px 0" }}
            >
              Frequently asked questions
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.65, ease: EASE_SHARP, delay: i * 0.06 }}
                >
                  <FaqItem item={item} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                </motion.div>
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
        .blog-cta-banner-btn {
          transition: transform 220ms cubic-bezier(0.32,0.72,0,1);
        }
        .blog-cta-banner-btn:hover {
          transform: translateY(-2px);
        }
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .blog-toc-sticky {
          padding: 18px 16px;
          border-radius: 14px;
          border: 1px solid rgba(7,80,60,0.1);
          background: #f4f9f6;
        }
        .blog-body {
          max-width: 760px;
          min-width: 0;
        }
        .blog-pillars-grid {
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        }
        .blog-stats-grid {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
        @media (max-width: 1023px) {
          .blog-toc {
            margin-bottom: 8px;
          }
        }
        @media (min-width: 1024px) {
          .blog-grid {
            grid-template-columns: 220px 1fr;
          }
          .blog-toc-sticky {
            position: sticky;
            top: 104px;
          }
        }
      `}</style>
    </article>
  );
}
