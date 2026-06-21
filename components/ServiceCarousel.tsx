"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceEntry {
  slug: string;
  label: string;
  tagline: string;
  category: string;
}

const ALL_SERVICES: ServiceEntry[] = [
  {
    slug: "media-advertisement",
    label: "Meta & Google Ads",
    tagline: "Every ringgit traced to a lead or sale.",
    category: "Performance",
  },
  {
    slug: "social-media",
    label: "Social Media Marketing",
    tagline: "Consistent presence across every channel.",
    category: "Performance",
  },
  {
    slug: "marketplace-management",
    label: "Marketplace Management",
    tagline: "Shopee, Lazada, TikTok Shop — end to end.",
    category: "Performance",
  },
  {
    slug: "seo",
    label: "SEO & Search",
    tagline: "Traffic that compounds when you stop paying.",
    category: "Performance",
  },
  {
    slug: "website",
    label: "Website & Landing Pages",
    tagline: "Pages that convert the traffic you're paying for.",
    category: "Creative & Web",
  },
  {
    slug: "content-creative",
    label: "Content & Creative",
    tagline: "Creative that earns attention. Copy that earns clicks.",
    category: "Creative & Web",
  },
  {
    slug: "branding-strategy",
    label: "Branding & Strategy",
    tagline: "Know what you stand for before you spend on ads.",
    category: "Creative & Web",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ServiceCarouselProps {
  currentSlug: string;
}

export default function ServiceCarousel({ currentSlug }: ServiceCarouselProps) {
  const visible = ALL_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section
      style={{
        background: "#ffffff",
        padding:
          "clamp(52px,6.5vw,88px) clamp(20px,3vw,40px)",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ marginBottom: "clamp(32px,4vw,52px)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            color: "#32cd32",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          EXPLORE OTHER SERVICES
        </p>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(32px,4vw,52px)",
            color: "#07503c",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          More ways we can help.
        </h2>
      </motion.div>

      {/* Card grid / carousel */}
      <div className="svc-grid">
        {visible.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
            style={{
              scrollSnapAlign: "start",
              flexShrink: 0,
              width: "clamp(240px,26vw,280px)",
              height: "180px",
            }}
            className="svc-grid-item"
          >
            <Link
              href={`/services/${service.slug}`}
              style={{ textDecoration: "none", display: "block", height: "100%" }}
            >
              <div
                className="svc-card-outer"
                style={{
                  borderRadius: 15,
                  padding: "2.5px",
                  border: "1px solid rgba(7,80,60,0.09)",
                  boxShadow:
                    "0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.07)",
                  height: "100%",
                  boxSizing: "border-box",
                  transition:
                    "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div
                  style={{
                    borderRadius: "12.5px",
                    background:
                      "linear-gradient(145deg, #07503c 0%, #064232 55%, #073d2e 100%)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    padding: "clamp(16px,2vw,22px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Logo watermark */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 90,
                      height: 90,
                      opacity: 0.05,
                      pointerEvents: "none",
                    }}
                  >
                    <Image
                      src="/logo-3d.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* TOP — category badge */}
                  <div style={{ display: "flex" }}>
                    <span
                      style={{
                        background: "rgba(255,255,255,0.10)",
                        color: "#ffffff",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "7.5px",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: 100,
                        display: "inline-block",
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* BOTTOM — label, tagline, arrow */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(18px,2vw,24px)",
                        color: "#ffffff",
                        margin: "0 0 4px 0",
                        lineHeight: 1.1,
                      }}
                    >
                      {service.label}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.52)",
                          margin: 0,
                          lineHeight: 1.5,
                          flex: 1,
                        }}
                      >
                        {service.tagline}
                      </p>
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "rgba(255,214,0,0.20)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#FFD600",
                          fontSize: "13px",
                          lineHeight: 1,
                        }}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .svc-grid {
          display: flex;
          flex-direction: row;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }
        .svc-grid::-webkit-scrollbar {
          display: none;
        }
        .svc-card-outer:hover {
          border-color: rgba(255,214,0,0.40) !important;
          transform: translateY(-4px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.12) !important;
        }
        @media (min-width: 1024px) {
          .svc-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow-x: visible;
            scroll-snap-type: none;
          }
          .svc-grid-item {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
