import Image from "next/image";
import Link from "next/link";

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

      {/* Dark gradient overlay — top for text, clears in middle to show faces */}
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

      {/* Left vignette — depth on text side */}
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

      {/* Radial lime glow */}
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

      {/* Radial gold accent */}
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

      {/* ── Text content ── */}
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
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontWeight: 800,
            fontSize: "clamp(42px, 5.8vw, 80px)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: "1060px",
            textShadow: "0 2px 32px rgba(6,31,23,0.5)",
            animation: "heroFadeUp 0.70s cubic-bezier(0.32,0.72,0,1) both",
          }}
        >
          <span style={{ color: "#FFD600" }}>Strategy</span> built on data.
          <br />
          <span style={{ color: "#32cd32" }}>Results</span> measured in revenue.
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "clamp(17px, 1.8vw, 24px)",
            maxWidth: "680px",
            color: "rgba(255,255,255,0.52)",
            fontFamily: "var(--font-montserrat)",
            lineHeight: 1.65,
            textShadow: "0 1px 12px rgba(6,31,23,0.6)",
            animation: "heroFadeUp 0.80s 0.12s cubic-bezier(0.32,0.72,0,1) both",
          }}
        >
          Meta, Google & marketplace ads — fully managed.
          <br />
          Every ringgit tracked. No guesswork, no vanity.
        </p>

        {/* CTAs */}
        <div
          style={{
            marginTop: "26px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            animation: "heroFadeUp 0.80s 0.22s cubic-bezier(0.32,0.72,0,1) both",
          }}
        >
          {/* Primary — WhatsApp */}
          <Link
            href="https://wa.me/60164963875"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-wa"
          >
            <span className="hero-btn-icon-wa">
              <WhatsAppIcon />
            </span>
            WhatsApp Us
          </Link>

          {/* Secondary — Explore Services */}
          <Link href="/services" className="hero-btn-explore">
            Explore Services
            <span className="hero-btn-icon-arrow">↗</span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* WhatsApp button */
        .hero-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 20px 6px 6px;
          border-radius: 100px;
          background-color: #25D366;
          color: #ffffff;
          font-family: var(--font-montserrat);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 320ms cubic-bezier(0.32,0.72,0,1),
                      transform 320ms cubic-bezier(0.32,0.72,0,1),
                      box-shadow 320ms cubic-bezier(0.32,0.72,0,1);
        }
        .hero-btn-icon-wa {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 320ms cubic-bezier(0.32,0.72,0,1);
        }
        @media (hover: hover) {
          .hero-btn-wa:hover {
            background-color: #1eb350;
            transform: translateY(-2px);
            box-shadow: 0 14px 36px rgba(37,211,102,0.38);
          }
          .hero-btn-wa:hover .hero-btn-icon-wa { transform: scale(1.1); }
        }
        .hero-btn-wa:active { transform: scale(0.97); }

        /* Explore Services button */
        .hero-btn-explore {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 6px 6px 20px;
          border-radius: 100px;
          border: 1.5px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.8);
          font-family: var(--font-montserrat);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          transition: border-color 320ms cubic-bezier(0.32,0.72,0,1),
                      color 320ms cubic-bezier(0.32,0.72,0,1),
                      transform 320ms cubic-bezier(0.32,0.72,0,1);
        }
        .hero-btn-icon-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
          transition: transform 320ms cubic-bezier(0.32,0.72,0,1);
        }
        @media (hover: hover) {
          .hero-btn-explore:hover {
            border-color: rgba(255,255,255,0.45);
            color: #ffffff;
            transform: translateY(-2px);
          }
          .hero-btn-explore:hover .hero-btn-icon-arrow {
            transform: translateX(2px) translateY(-2px);
          }
        }
        .hero-btn-explore:active { transform: scale(0.97); }
      `}</style>
    </section>
  );
}
