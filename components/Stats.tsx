"use client";

// Platform marquee divider — replaces Stats section
// Infinite horizontal ticker on gold #FFD600 background
// Icons rendered in brand dark green (#07503c) — grayscale-on-gold effect

const ICON_COLOR = "#07503c";
const ICON_OPACITY = 0.72;

// ─── Platform Icon SVGs ───────────────────────────────────────────────────────

const MetaIcon = () => (
  <svg width="44" height="22" viewBox="0 0 44 22" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    {/* Two connected oval lobes — the Meta infinity mark */}
    <path d="M22 11C22 5.2 18.7 1 14.5 1 10.3 1 7 5.2 7 11s3.3 10 7.5 10c2.1 0 4-1 5.5-2.8C21.5 20 23.4 21 25.5 21 29.7 21 37 16.8 37 11S29.7 1 25.5 1c-2.1 0-4 1-5.5 2.8C18.5 2 16.6 1 14.5 1" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M14 2.5C11 2.5 9 4.5 9 7.5V10H6.5v3.5H9V22h3.5V13.5H15l.5-3.5h-3V8c0-1 .5-1.5 1.5-1.5H15.5V3c-.5-.2-1-.5-1.5-.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity={ICON_OPACITY} aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke={ICON_COLOR} strokeWidth="2.2" />
    <circle cx="12" cy="12" r="5" stroke={ICON_COLOR} strokeWidth="2.2" />
    <circle cx="17.8" cy="6.2" r="1.4" fill={ICON_COLOR} />
  </svg>
);

const ThreadsIcon = () => (
  <svg width="22" height="24" viewBox="0 0 192 192" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.05l13.78 9.478c5.73-8.694 14.725-10.548 21.347-10.548h.23c8.248.054 14.473 2.452 18.502 7.13 2.932 3.405 4.893 8.11 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 6.99 4.708 15.98 6.998 25.342 6.485 12.35-.678 22.044-5.394 28.816-14.013 5.178-6.676 8.46-15.302 9.927-26.1 5.955 3.594 10.365 8.32 12.867 14.048 4.243 9.783 4.489 25.843-8.484 38.793-11.382 11.359-25.063 16.287-45.789 16.43-22.972-.158-40.336-7.53-51.64-21.916-10.575-13.408-16.025-32.786-16.184-57.577.159-24.79 5.61-44.17 16.183-57.576 11.304-14.386 28.67-21.76 51.64-21.916 23.126.157 40.882 7.568 52.8 22.025 5.752 7.045 10.093 15.91 12.97 26.394l16.157-4.308c-3.507-12.93-9.066-24.04-16.61-33.139-15.452-18.954-37.979-28.638-66.937-28.81h-.464c-29.03.172-51.977 9.916-68.192 28.97C13.432 45.368 6.867 67.748 6.696 96c.17 28.252 6.735 50.63 19.528 66.526 16.216 19.054 39.162 28.8 68.192 28.97h.464c25.986-.152 44.289-6.966 59.3-21.958 19.658-19.626 19.044-44.215 12.565-59.441-4.629-10.679-13.357-19.386-24.208-24.11zm-54.11 51.42c-10.43.587-21.256-4.099-21.82-14.18-.424-7.944 5.654-16.799 24.068-17.815 2.105-.12 4.17-.178 6.197-.178 6.086 0 11.784.558 16.987 1.636-1.93 24.04-15.214 29.908-25.432 30.537z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="22" height="24" viewBox="0 0 24 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.4a8.07 8.07 0 004.77 1.52V7.48a4.85 4.85 0 01-1-.79z" />
  </svg>
);

const ShopeeIcon = () => (
  <svg width="24" height="26" viewBox="0 0 24 26" opacity={ICON_OPACITY} aria-hidden="true">
    {/* Bag body */}
    <path d="M19.5 8.5h-2a5.5 5.5 0 00-11 0h-2A1.5 1.5 0 003 10v12.5A1.5 1.5 0 004.5 24h15a1.5 1.5 0 001.5-1.5V10a1.5 1.5 0 00-1.5-1.5zm-7.5-4a3.5 3.5 0 013.5 3.5H8.5A3.5 3.5 0 0112 4.5z" fill={ICON_COLOR} />
    {/* Face details cut through — white on dark, inverted circles */}
    <circle cx="9" cy="17" r="1.3" fill="#FFD600" />
    <circle cx="15" cy="17" r="1.3" fill="#FFD600" />
    <path d="M9.5 19.5c.6.7 1.5 1.1 2.5 1.1s1.9-.4 2.5-1.1" stroke="#FFD600" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

const LazadaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    {/* Lazada "L" shopping bag */}
    <path d="M17 7.5h-2.5V6A4.5 4.5 0 0010 1.5 4.5 4.5 0 005.5 6v1.5H3A1.5 1.5 0 001.5 9v12A1.5 1.5 0 003 22.5h14A1.5 1.5 0 0018.5 21V9A1.5 1.5 0 0017 7.5zM10 3.5A2.5 2.5 0 0112.5 6v1.5h-5V6A2.5 2.5 0 0110 3.5z" />
    <path d="M7 14h4v4H7z" />
    <path d="M11 14h2l-1 4h-1v-4z" />
  </svg>
);

const WordPressIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM3.9 12c0-1.34.3-2.61.83-3.75L8.5 19.73A8.1 8.1 0 013.9 12zm8.1 8.1a8.1 8.1 0 01-2.36-.35L12 13.2l2.43 6.65c-.78.16-1.57.25-2.43.25zm1.05-10.9l2.1 6.33-.59 1.97-2.56-7.6c.43-.02.82-.04 1.05-.7zm4.52 9.5l-2.56-7.66c.42-.22.72-.7.72-1.26 0-.14-.01-.26-.04-.38A8.1 8.1 0 0120.1 12c0 2.62-1.25 4.94-3.18 6.4l-.45.3z" />
  </svg>
);

const MagentoIcon = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    {/* Magento M diamond */}
    <path d="M11 0L0 6.5v11L11 24l11-6.5v-11L11 0zm-.9 19.2L7.5 7.5 11 5.5l3.5 2-2.6 11.7h-1.8zm-2.6.3L3.2 7.1 11 2.5l7.8 4.6-4.3 12.4h-1l2.5-11.3L11 5.9l-4 2.3 2.5 11.3h-.9z" />
  </svg>
);

const ShopifyIcon = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill={ICON_COLOR} opacity={ICON_OPACITY} aria-hidden="true">
    <path d="M18.86 4.75c-.02-.16-.16-.26-.3-.27l-2.15-.04-.94-.95C15.08 3.2 14.6 3.1 14.2 3c-.14-.4-.33-.8-.57-1.2C13 .7 12.27.3 11.5.3c-.04 0-.09 0-.13.01-.07-.09-.16-.17-.25-.24C10.78-.2 10.36-.1 9.93.2c-1.2.8-1.77 2.5-1.96 3.4l-2.5.4c-.5.08-.52.1-.58.57L4 19.8l13.54 2.53 4.56-1.12L18.86 4.75zM13.97 3.18c-.35.06-.72.12-1.1.17v-.24c0-.67-.1-1.2-.28-1.64.73.1 1.2.83 1.38 1.7zm-2.38-1.7c.2.43.34.98.34 1.75v.15l-2.6.4c.32-1.25 1.1-2.07 2.26-2.3zm-.96-.5c.17 0 .34.05.5.16-1.42.33-2.42 1.6-2.73 3.25L6.5 4.83c.33-1.33 1.56-4.03 4.13-3.85zM10 17.5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5z" />
  </svg>
);

// ─── Platform list ─────────────────────────────────────────────────────────────

const platforms = [
  { name: "Meta",      icon: <MetaIcon /> },
  { name: "Facebook",  icon: <FacebookIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "Threads",   icon: <ThreadsIcon /> },
  { name: "WhatsApp",  icon: <WhatsAppIcon /> },
  { name: "TikTok",    icon: <TikTokIcon /> },
  { name: "Shopee",    icon: <ShopeeIcon /> },
  { name: "Lazada",    icon: <LazadaIcon /> },
  { name: "WordPress", icon: <WordPressIcon /> },
  { name: "Magento",   icon: <MagentoIcon /> },
  { name: "Shopify",   icon: <ShopifyIcon /> },
];

export default function Stats() {
  return (
    <section
      aria-label="Platforms we operate"
      style={{
        backgroundColor: "#FFD600",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(7,80,60,0.08)",
        borderBottom: "1px solid rgba(7,80,60,0.08)",
      }}
    >
      {/* Keyframe animation + reduced-motion override */}
      <style>{`
        @keyframes millecube-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .millecube-ticker {
          display: flex;
          align-items: center;
          width: max-content;
          animation: millecube-ticker 42s linear infinite;
        }
        .millecube-ticker:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .millecube-ticker { animation: none; }
        }
      `}</style>

      {/* Left fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to right, #FFD600 20%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to left, #FFD600 20%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Shimmer overlay on the gold surface */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Marquee track — duplicated for seamless loop */}
      <div style={{ position: "relative", zIndex: 0, paddingTop: "22px", paddingBottom: "22px" }}>
        <div className="millecube-ticker">
          {[...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
                paddingLeft: "clamp(28px, 5vw, 56px)",
                paddingRight: "clamp(28px, 5vw, 56px)",
                flexShrink: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "clamp(20px, 4vw, 28px)",
                  height: "clamp(20px, 4vw, 28px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {p.icon}
              </div>
              {/* Platform name */}
              <span
                style={{
                  color: "#07503c",
                  opacity: 0.5,
                  fontSize: "clamp(7px, 1.2vw, 9px)",
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
