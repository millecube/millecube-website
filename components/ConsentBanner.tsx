"use client";

import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("millecube_consent")) {
      setVisible(true);
    }
  }, []);

  const grant = () => {
    localStorage.setItem("millecube_consent", "granted");
    window.dispatchEvent(new Event("millecube_consent_update"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("millecube_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9000,
        width: "min(calc(100vw - 32px), 520px)",
        background: "#061f17",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "20px 24px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.42), 0 24px 64px rgba(0,0,0,0.28)",
        display: "flex",
        flexDirection: "column" as const,
        gap: "14px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "12.5px",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        We use cookies to measure how visitors use our site and improve your
        experience. Under Malaysia&apos;s PDPA, we need your consent before
        loading analytics and advertising tools.
      </p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
        <button
          onClick={grant}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "12px",
            fontWeight: 700,
            padding: "9px 22px",
            borderRadius: "100px",
            border: "none",
            backgroundColor: "#FFD600",
            color: "#061f17",
            cursor: "pointer",
            transition: "background-color 180ms ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = "#e6c200"))}
          onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = "#FFD600"))}
        >
          Accept cookies
        </button>
        <button
          onClick={decline}
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "12px",
            fontWeight: 600,
            padding: "9px 18px",
            borderRadius: "100px",
            border: "1px solid rgba(255,255,255,0.10)",
            backgroundColor: "transparent",
            color: "rgba(255,255,255,0.40)",
            cursor: "pointer",
            transition: "color 180ms ease, border-color 180ms ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.40)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
