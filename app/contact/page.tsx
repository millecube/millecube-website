import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Millecube Digital",
  description:
    "Talk to Millecube Digital about your Malaysian business. WhatsApp, email, or fill in the form — we will look at your current setup and tell you honestly whether we are the right fit.",
  alternates: { canonical: "https://millecube.com/contact" },
  openGraph: {
    title: "Contact Millecube Digital — Digital Marketing Agency Malaysia",
    description: "Get in touch with Millecube. WhatsApp +60 16-496 3875 or fill in our contact form.",
    url: "https://millecube.com/contact",
    images: [{ url: "/logo-3d.png", width: 500, height: 500, alt: "Millecube Digital" }],
  },
};

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "rgba(7,80,60,0.08)",
        border: "1px solid rgba(7,80,60,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "#07503c",
      }}
    >
      {children}
    </div>
  );
}

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
          {/* Single container — both columns same height via grid stretch */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              alignItems: "stretch",
              border: "1px solid rgba(7,80,60,0.09)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(7,80,60,0.06), 0 8px 32px rgba(7,80,60,0.07)",
            }}
          >
            {/* ── LEFT: Map + contact info ── */}
            <div
              style={{
                backgroundColor: "#f4f9f6",
                borderRight: "1px solid rgba(7,80,60,0.09)",
                padding: "clamp(32px, 4vw, 52px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "28px",
              }}
            >
              {/* Top content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Google Maps */}
                <div
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(7,80,60,0.10)",
                    flexShrink: 0,
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=2-5-9+Gat+Lebuh+Macallum+10300+George+Town+Pulau+Pinang+Malaysia&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Millecube Digital office location"
                  />
                </div>

                {/* Company name + address */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#07503c",
                      marginBottom: "6px",
                    }}
                  >
                    Millecube Digital
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "13px",
                      color: "rgba(7,80,60,0.55)",
                      lineHeight: 1.75,
                    }}
                  >
                    2-5-9, Gat Lebuh Macallum,<br />
                    10300 George Town,<br />
                    Pulau Pinang, Malaysia.
                  </p>
                </div>

                {/* Contact rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {/* Email */}
                  <a
                    href="mailto:hello@millecube.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <IconCircle>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 10 7 10-7" />
                      </svg>
                    </IconCircle>
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "#07503c",
                      }}
                    >
                      hello@millecube.com
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/60164963875"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <IconCircle>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.99 1.18 2 2 0 013 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </IconCircle>
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "13.5px",
                        fontWeight: 500,
                        color: "#07503c",
                      }}
                    >
                      +60 16-496 3875
                    </span>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA — pinned to bottom */}
              <div>
                <a
                  href="https://wa.me/60164963875"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    backgroundColor: "#07503c",
                    color: "#FFD600",
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
                      backgroundColor: "rgba(255,214,0,0.15)",
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

            {/* ── RIGHT: Contact form ── */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "clamp(32px, 4vw, 52px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(7,80,60,0.09) !important;
          }
        }
      `}</style>
    </main>
  );
}
