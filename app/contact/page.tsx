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

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
];

const faqs = [
  {
    q: "Do you require a long-term contract?",
    a: "No. We work on month-to-month retainers. You can stop at any time. We earn your business each month through results.",
  },
  {
    q: "What size of business do you typically work with?",
    a: "Malaysian SMEs doing RM1 million to RM10 million in revenue, typically with no internal marketing team. Owner-operated businesses where the stakes are real.",
  },
  {
    q: "How quickly can you start?",
    a: "Typically within 1–2 weeks of onboarding. We do a full audit of your current setup before launching anything.",
  },
  {
    q: "Do you work with businesses outside Penang?",
    a: "Yes. We work with clients across Malaysia — Penang, KL, Selangor, Johor, and beyond. Everything is managed remotely.",
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
            {/* ── LEFT: Info card ── */}
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
                  minHeight: "560px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
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

                {/* Top content */}
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
                      marginBottom: "16px",
                    }}
                  >
                    Let&apos;s Talk
                  </span>

                  <h2
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "clamp(30px, 3vw, 44px)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                      marginBottom: "12px",
                    }}
                  >
                    Ready to grow your business?
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.50)",
                      lineHeight: 1.78,
                      maxWidth: "300px",
                      marginBottom: "32px",
                    }}
                  >
                    No long-term contracts. No guesswork. We track every ringgit
                    back to revenue.
                  </p>

                  {/* Contact items */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                </div>

                {/* Bottom: socials + CTA */}
                <div style={{ position: "relative", zIndex: 1, marginTop: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                      marginBottom: "18px",
                    }}
                  >
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-montserrat)",
                          fontSize: "9.5px",
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.50)",
                          backgroundColor: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          padding: "5px 12px",
                          borderRadius: "100px",
                          textDecoration: "none",
                          transition: "color 200ms ease, border-color 200ms ease",
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>

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

      {/* ── FAQ section ── */}
      <section
        style={{
          backgroundColor: "#f4f9f6",
          padding: "clamp(52px, 5.5vw, 72px) clamp(20px, 3vw, 40px)",
          borderTop: "1px solid rgba(7,80,60,0.07)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#32cd32",
              marginBottom: "10px",
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#07503c",
              marginBottom: "clamp(28px, 3vw, 44px)",
            }}
          >
            Things people ask before they reach out.
          </h2>

          <div
            className="faq-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "16px",
                  padding: "2px",
                  background: "rgba(7,80,60,0.03)",
                  border: "1px solid rgba(7,80,60,0.09)",
                }}
              >
                <div
                  style={{
                    borderRadius: "14px",
                    backgroundColor: "#ffffff",
                    padding: "clamp(20px, 2.5vw, 28px)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: "#07503c",
                      marginBottom: "10px",
                      lineHeight: 1.55,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      color: "rgba(7,80,60,0.55)",
                      lineHeight: 1.80,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
