"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES_LIST = [
  "Social Media Marketing",
  "Paid Ads (Meta / Google)",
  "Marketplace Management",
  "SEO & Search",
  "Website & Landing Pages",
  "Content & Creative",
  "Branding & Strategy",
];

const BUDGETS = [
  "< RM2,000/mo",
  "RM2,000 – RM5,000/mo",
  "RM5,000 – RM10,000/mo",
  "RM10,000+/mo",
  "Not sure yet",
];

const STEPS = [
  { num: 1, label: "Your Details" },
  { num: 2, label: "Services" },
  { num: 3, label: "Goals" },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "", phone: "",
    services: [], budget: "", message: "",
  });
  const [done, setDone] = useState(false);

  // Capture click IDs on mount (supports ?gclid= and ?fbclid= on any landing page)
  const clickIds = useRef({ gclid: "", fbclid: "" });
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const gclid = p.get("gclid") ?? sessionStorage.getItem("_gclid") ?? "";
    const fbclid = p.get("fbclid") ?? sessionStorage.getItem("_fbclid") ?? "";
    if (gclid) sessionStorage.setItem("_gclid", gclid);
    if (fbclid) sessionStorage.setItem("_fbclid", fbclid);
    clickIds.current = { gclid, fbclid };
  }, []);

  const setF = (f: keyof FormState, v: string) =>
    setForm((p) => ({ ...p, [f]: v }));

  const toggleSvc = (svc: string) =>
    setForm((p) => ({
      ...p,
      services: p.services.includes(svc)
        ? p.services.filter((s) => s !== svc)
        : [...p.services, svc],
    }));

  const canAdvance =
    step === 1 ? form.name.trim() !== "" && form.email.trim() !== "" :
    step === 2 ? form.services.length > 0 : true;

  const handleSubmit = async () => {
    const lines = [
      "Hi Millecube! I'd like to explore working together.",
      "",
      `*Name:* ${form.name}`,
      form.company ? `*Company:* ${form.company}` : "",
      `*Email:* ${form.email}`,
      form.phone ? `*Phone/WhatsApp:* ${form.phone}` : "",
      "",
      "*Services I'm interested in:*",
      ...form.services.map((s) => `• ${s}`),
      "",
      form.budget ? `*Monthly budget:* ${form.budget}` : "",
      form.message ? `\n*About my goals:*\n${form.message}` : "",
    ].filter((l) => l !== "");

    // Fire conversion events (non-blocking — WhatsApp opens regardless)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        gclid: clickIds.current.gclid || null,
        fbclid: clickIds.current.fbclid || null,
        event_id: `lead_${Date.now()}`,
      }),
    }).catch(() => { /* silently ignore — WhatsApp submit is the source of truth */ });

    window.open(
      `https://wa.me/60164963875?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
    setDone(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-montserrat)",
    fontSize: "13px",
    color: "#07503c",
    backgroundColor: "#f7fbf8",
    border: "1px solid rgba(7,80,60,0.15)",
    borderRadius: "10px",
    padding: "13px 16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 200ms ease",
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        style={{ textAlign: "center", padding: "48px 20px" }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
          style={{
            width: "60px", height: "60px", borderRadius: "50%",
            backgroundColor: "rgba(50,205,50,0.10)",
            border: "1px solid rgba(50,205,50,0.28)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "22px", color: "#32cd32",
          }}
        >
          ✓
        </motion.div>
        <h3 style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "30px", color: "#07503c",
          letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          WhatsApp opened!
        </h3>
        <p style={{
          fontFamily: "var(--font-montserrat)", fontSize: "13px",
          color: "rgba(7,80,60,0.52)", lineHeight: 1.75,
        }}>
          Your details were pre-filled. Hit send and we&apos;ll reply within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {/* ── Step indicator ── */}
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "32px" }}>
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            style={{ display: "flex", alignItems: "flex-start", flex: i < STEPS.length - 1 ? 1 : "none" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
              <motion.span
                animate={{
                  background: step >= s.num ? "#07503c" : "rgba(7,80,60,0.09)",
                  color: step > s.num ? "#32cd32" : step === s.num ? "#FFD600" : "rgba(7,80,60,0.28)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "34px", height: "34px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 700,
                  fontFamily: "var(--font-montserrat)", flexShrink: 0,
                }}
              >
                {step > s.num ? "✓" : s.num}
              </motion.span>
              <span style={{
                fontSize: "9px", fontFamily: "var(--font-montserrat)", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: step >= s.num ? "#07503c" : "rgba(7,80,60,0.28)",
                transition: "color 300ms ease",
              }}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: "1px", margin: "17px 10px 0",
                background: step > s.num ? "rgba(7,80,60,0.45)" : "rgba(7,80,60,0.12)",
                transition: "background 300ms ease",
              }} />
            )}
          </div>
        ))}
      </div>

      {/* ── Step content ── */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease }}
          >
            <p style={{
              fontFamily: "var(--font-montserrat)", fontSize: "12.5px",
              color: "rgba(7,80,60,0.48)", marginBottom: "18px", lineHeight: 1.65,
            }}>
              Tell us who you are — we&apos;ll keep this between us.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {[
                { placeholder: "Your name *", field: "name" as const, type: "text" },
                { placeholder: "Company name", field: "company" as const, type: "text" },
                { placeholder: "Email address *", field: "email" as const, type: "email" },
                { placeholder: "WhatsApp / Phone", field: "phone" as const, type: "tel" },
              ].map(({ placeholder, field, type }) => (
                <input
                  key={field}
                  style={inputStyle}
                  type={type}
                  placeholder={placeholder}
                  value={form[field] as string}
                  onChange={(e) => setF(field, e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = "#07503c")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(7,80,60,0.15)")}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease }}
          >
            <p style={{
              fontFamily: "var(--font-montserrat)", fontSize: "12.5px",
              color: "rgba(7,80,60,0.48)", marginBottom: "16px", lineHeight: 1.65,
            }}>
              Which services are you looking for? Select all that apply.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {SERVICES_LIST.map((svc) => {
                const active = form.services.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleSvc(svc)}
                    style={{
                      fontFamily: "var(--font-montserrat)", fontSize: "11.5px", fontWeight: 600,
                      padding: "8px 15px", borderRadius: "100px", cursor: "pointer",
                      border: `1px solid ${active ? "#07503c" : "rgba(7,80,60,0.18)"}`,
                      background: active ? "#07503c" : "transparent",
                      color: active ? "#FFD600" : "rgba(7,80,60,0.60)",
                      transition: "all 200ms ease",
                    }}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="s3"
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-montserrat)", fontSize: "9.5px", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(7,80,60,0.45)", marginBottom: "10px",
                }}>
                  Monthly Budget
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {BUDGETS.map((b) => {
                    const active = form.budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setF("budget", b)}
                        style={{
                          fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600,
                          padding: "7px 14px", borderRadius: "100px", cursor: "pointer",
                          border: `1px solid ${active ? "#07503c" : "rgba(7,80,60,0.18)"}`,
                          background: active ? "#07503c" : "transparent",
                          color: active ? "#FFD600" : "rgba(7,80,60,0.60)",
                          transition: "all 200ms ease",
                        }}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>
              <textarea
                placeholder="Tell us about your business — what are you hoping to achieve?"
                value={form.message}
                onChange={(e) => setF("message", e.target.value)}
                rows={4}
                onFocus={(e) => (e.target.style.borderColor = "#07503c")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(7,80,60,0.15)")}
                style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navigation ── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginTop: "28px",
      }}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            style={{
              fontFamily: "var(--font-montserrat)", fontSize: "12.5px", fontWeight: 600,
              color: "rgba(7,80,60,0.42)", background: "none", border: "none",
              cursor: "pointer", padding: 0,
            }}
          >
            ← Back
          </button>
        ) : <div />}

        {step < 3 ? (
          <button
            type="button"
            onClick={() => { if (canAdvance) setStep((s) => s + 1); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "#FFD600", color: "#07503c",
              fontFamily: "var(--font-montserrat)", fontSize: "13px", fontWeight: 700,
              padding: "11px 9px 11px 20px", borderRadius: "100px",
              border: "none", cursor: canAdvance ? "pointer" : "not-allowed",
              opacity: canAdvance ? 1 : 0.42,
              transition: "opacity 200ms ease",
            }}
          >
            Next
            <span style={{
              width: "28px", height: "28px", borderRadius: "50%",
              backgroundColor: "rgba(6,31,23,0.13)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px",
            }}>→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "#07503c", color: "#FFD600",
              fontFamily: "var(--font-montserrat)", fontSize: "13px", fontWeight: 700,
              padding: "11px 9px 11px 20px", borderRadius: "100px",
              border: "none", cursor: "pointer",
              transition: "background-color 260ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#064232")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#07503c")}
          >
            Send via WhatsApp
            <span style={{
              width: "28px", height: "28px", borderRadius: "50%",
              backgroundColor: "rgba(255,214,0,0.15)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px",
            }}>↗</span>
          </button>
        )}
      </div>
    </>
  );
}
