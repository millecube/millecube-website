"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUpBlur = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.80, delay, ease },
  }),
};

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        backgroundColor: "#061f17",
        overflow: "hidden",
      }}
    >
      {/* ── Background photo — fills entire section ── */}
      <Image
        src="/hero-bg2.webp"
        fill
        priority
        quality={75}
        sizes="100vw"
        alt="Millecube team collaborating at Penang office"
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />

      {/* ── Gradient overlays ──
          Dark at top (text readability) → transparent in the middle (faces visible) → slight dark at bottom
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(6,31,23,0.96) 0%, rgba(6,31,23,0.88) 16%, rgba(6,31,23,0.64) 30%, rgba(6,31,23,0.28) 46%, rgba(6,31,23,0.10) 60%, transparent 75%, rgba(6,31,23,0.18) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle left vignette — adds depth to the text side */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(6,31,23,0.25) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Fixed grain — GPU-pinned */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          pointerEvents: "none",
          opacity: 0.038,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial lime glow — behind headline */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(50,205,50,0.06) 0%, transparent 62%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial gold accent — CTA zone */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "24%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "960px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,214,0,0.038) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Text content — confined to upper ~42% so it doesn't cover faces ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "clamp(88px, 11.5vh, 136px)",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* H1 — "Strategy" gold, "Results" lime */}
        <motion.h1
          variants={fadeUpBlur}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: "var(--font-bebas)",
            fontWeight: 800,
            fontSize: "clamp(42px, 5.8vw, 80px)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: "1060px",
            textShadow: "0 2px 32px rgba(6,31,23,0.5)",
          }}
        >
          <span style={{ color: "#FFD600" }}>Strategy</span> built on data.
          <br />
          <span style={{ color: "#32cd32" }}>Results</span> measured in revenue.
        </motion.h1>

        {/* Body copy */}
        <motion.p
          variants={fadeUpBlur}
          initial="hidden"
          animate="visible"
          custom={0.14}
          style={{
            marginTop: "20px",
            fontSize: "clamp(17px, 1.8vw, 24px)",
            maxWidth: "680px",
            color: "rgba(255,255,255,0.52)",
            fontFamily: "var(--font-montserrat)",
            lineHeight: 1.65,
            textShadow: "0 1px 12px rgba(6,31,23,0.6)",
          }}
        >
          Meta, Google & marketplace ads — fully managed.
          <br />
          Every ringgit tracked. No guesswork, no vanity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpBlur}
          initial="hidden"
          animate="visible"
          custom={0.26}
          style={{
            marginTop: "26px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {/* Primary — WhatsApp */}
          <Link
            href="https://wa.me/60164963875"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 pr-5 pl-1.5 py-1.5 rounded-full"
            style={{
              backgroundColor: "#25D366",
              color: "#ffffff",
              fontFamily: "var(--font-montserrat)",
              fontSize: "14px",
              fontWeight: 700,
              transition:
                "background-color 320ms cubic-bezier(0.32,0.72,0,1), transform 320ms cubic-bezier(0.32,0.72,0,1), box-shadow 320ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#1eb350";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 14px 36px rgba(37,211,102,0.38)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#25D366";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
          >
            <span
              className="group-hover:scale-110"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.22)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "transform 320ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              <WhatsAppIcon />
            </span>
            WhatsApp Us
          </Link>

          {/* Secondary — Explore Services */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full"
            style={{
              border: "1.5px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-montserrat)",
              fontSize: "14px",
              fontWeight: 600,
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              transition:
                "border-color 320ms cubic-bezier(0.32,0.72,0,1), color 320ms cubic-bezier(0.32,0.72,0,1), transform 320ms cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.45)";
              el.style.color = "#ffffff";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.18)";
              el.style.color = "rgba(255,255,255,0.8)";
              el.style.transform = "translateY(0)";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
          >
            Explore Services
            <span
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "15px",
                transition: "transform 320ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              ↗
            </span>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
