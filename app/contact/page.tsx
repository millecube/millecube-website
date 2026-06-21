import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Millecube Digital",
  description:
    "Talk to Millecube Digital about your business. We'll look at your current setup and tell you honestly whether we're the right fit.",
};

const CONTACT_ITEMS = [
  {
    label: "WhatsApp (fastest)",
    value: "+60 16-496 3875",
    href: "https://wa.me/60164963875",
  },
  {
    label: "Email",
    value: "hello@millecube.com",
    href: "mailto:hello@millecube.com",
  },
  {
    label: "Office",
    value: "2-5-9, Gat Lebuh Macallum\n10300 George Town\nPulau Pinang, Malaysia",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      <InnerHero
        label="GET IN TOUCH"
        title="Talk to us about your business."
        subtitle="We'll look at what you're currently running, identify where you're losing money, and tell you honestly whether we're the right fit."
        bgImage="/contactus-bg1.png"
      />

      {/* ── Two-column contact section ── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(52px, 6.5vw, 88px) clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "16px",
              alignItems: "start",
            }}
          >
            {/* ── LEFT: Info card with map ── */}
            <div
              style={{
                borderRadius: "20px",
                padding: "2.5px",
                background: "rgba(7,80,60,0.06)",
                border: "1px solid rgba(7,80,60,0.12)",
                boxShadow:
                  "0 2px 10px rgba(7,80,60,0.08), 0 8px 28px rgba(7,80,60,0.10)",
                position: "sticky",
                top: "96px",
              }}
            >
              <div
                style={{
                  borderRadius: "17.5px",
                  background:
                    "linear-gradient(145deg, #07503c 0%, #064232 60%, #073d2e 100%)",
                  padding: "clamp(28px, 3.5vw, 44px)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.07)",
                }}
              >
                {/* Logo watermark */}
                <img
                  src="/logo-3d.png"
                  alt=""
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "-6%",
                    right: "-5%",
                    width: "clamp(150px, 18vw, 220px)",
                    opacity: 0.065,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
                {/* Lime radial glow */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(50,205,50,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Heading */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "8.5px",
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#32cd32",
                      backgroundColor: "rgba(50,205,50,0.08)",
                      border: "1px solid rgba(50,205,50,0.20)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      marginBottom: "14px",
                    }}
                  >
                    Millecube Digital
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(32px, 3.2vw, 48px)",
                      fontWeight: 800,
                      lineHeight: 1.0,
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                    }}
                  >
                    Contact Us
                  </h2>
                </div>

                {/* Google Maps embed */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.10)",
                    flexShrink: 0,
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=2-5-9+Gat+Lebuh+Macallum+10300+George+Town+Pulau+Pinang+Malaysia&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Millecube Digital office location"
                  />
                </div>

                {/* Contact items */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  {CONTACT_ITEMS.map((c) => (
                    <div key={c.label}>
                      <p
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.32)",
                          marginBottom: "4px",
                        }}
                      >
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            c.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#ffffff",
                            textDecoration: "none",
                          }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {c.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <a
                    href="https://wa.me/60164963875"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      backgroundColor: "#FFD600",
                      color: "#07503c",
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      padding: "11px 9px 11px 20px",
                      borderRadius: "100px",
                      textDecoration: "none",
                      transition: "background-color 240ms ease",
                    }}
                  >
                    WhatsApp Us Now
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(6,31,23,0.13)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                      }}
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact form card ── */}
            <div
              style={{
                borderRadius: "20px",
                padding: "2.5px",
                background: "rgba(7,80,60,0.03)",
                border: "1px solid rgba(7,80,60,0.10)",
                boxShadow:
                  "0 2px 10px rgba(7,80,60,0.05), 0 8px 28px rgba(7,80,60,0.07)",
              }}
            >
              <div
                style={{
                  borderRadius: "17.5px",
                  backgroundColor: "#ffffff",
                  padding: "clamp(28px, 3.5vw, 48px)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#32cd32",
                    marginBottom: "10px",
                  }}
                >
                  Get in Touch
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(28px, 2.8vw, 40px)",
                    fontWeight: 800,
                    lineHeight: 1.04,
                    letterSpacing: "-0.02em",
                    color: "#07503c",
                    marginBottom: "28px",
                  }}
                >
                  Start the conversation.
                </h2>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
