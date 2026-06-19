import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = {
  title: "Contact — Millecube Digital",
  description:
    "Talk to Millecube Digital about your business. We'll look at your current setup and tell you honestly whether we're the right fit.",
};

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
      />

      {/* Contact section */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#EBFFF3", borderBottom: "1px solid rgba(7,80,60,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Contact options */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <p
                  className="text-xs font-bold tracking-[0.28em] mb-6"
                  style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
                >
                  REACH US
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "rgba(7,80,60,0.45)", fontFamily: "var(--font-montserrat)" }}
                    >
                      WhatsApp (fastest)
                    </p>
                    <Link
                      href="https://wa.me/60164963875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-dark text-base font-bold"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      +60 16-496 3875
                    </Link>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "rgba(7,80,60,0.45)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Email
                    </p>
                    <Link
                      href="mailto:hello@millecube.com"
                      className="link-dark text-base font-bold"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      hello@millecube.com
                    </Link>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "rgba(7,80,60,0.45)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Office
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#07503c", fontFamily: "var(--font-montserrat)", lineHeight: 1.7 }}
                    >
                      2-5-9, Gat Lebuh Macallum<br />
                      10300 George Town<br />
                      Pulau Pinang, Malaysia
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="pt-8"
                style={{ borderTop: "1px solid rgba(7,80,60,0.1)" }}
              >
                <Link
                  href="https://wa.me/60164963875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center px-7 py-3.5 text-sm font-bold rounded"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Message us on WhatsApp →
                </Link>
                <p
                  className="mt-3 text-xs"
                  style={{ color: "rgba(7,80,60,0.35)", fontFamily: "var(--font-montserrat)" }}
                >
                  No long-term commitment required. Start with a conversation.
                </p>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-7">
              <p
                className="text-xs font-bold tracking-[0.28em] mb-8"
                style={{ color: "#32cd32", fontFamily: "var(--font-montserrat)" }}
              >
                COMMON QUESTIONS
              </p>
              <div className="flex flex-col">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="py-6 flex flex-col gap-3"
                    style={{ borderTop: "1px solid rgba(7,80,60,0.1)" }}
                  >
                    <h3
                      className="text-sm font-bold"
                      style={{ color: "#07503c", fontFamily: "var(--font-montserrat)" }}
                    >
                      {faq.q}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(7,80,60,0.6)", fontFamily: "var(--font-montserrat)", lineHeight: 1.8 }}
                    >
                      {faq.a}
                    </p>
                  </div>
                ))}
                <div style={{ borderBottom: "1px solid rgba(7,80,60,0.1)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
