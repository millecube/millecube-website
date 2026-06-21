"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

/* ── Service categories for the dropdown ── */
const serviceCategories = [
  {
    heading: "Performance Marketing",
    items: [
      {
        label: "Meta & Google Ads",
        href: "/services/media-advertisement",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        ),
      },
      {
        label: "Marketplace Management",
        href: "/services/marketplace-management",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        ),
      },
      {
        label: "SEO & Search",
        href: "/services/seo",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
      },
    ],
  },
  {
    heading: "Creative & Web",
    items: [
      {
        label: "Website & Landing Pages",
        href: "/services/website",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        label: "Content & Creative",
        href: "/services/content-creative",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        ),
      },
      {
        label: "Branding & Strategy",
        href: "/services/branding-strategy",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const otherLinks = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(7,80,60,0.97)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" style={{ flexShrink: 0 }}>
          <Image
            src="/logo-horizontal-white.png"
            alt="Millecube Digital"
            width={210}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Services — dropdown trigger */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
              style={{
                color: isServicesActive || servicesOpen ? "#FFD600" : "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-montserrat)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 260ms cubic-bezier(0.32,0.72,0,1)",
                  opacity: 0.7,
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 18px)",
                left: "50%",
                width: "580px",
                background: "rgba(247,252,249,0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(7,80,60,0.10)",
                borderRadius: "18px",
                boxShadow:
                  "0 8px 32px rgba(7,80,60,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                padding: "24px",
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? "auto" : "none",
                transform: `translateX(-50%) translateY(${servicesOpen ? "0px" : "-8px"})`,
                transition:
                  "opacity 220ms cubic-bezier(0.32,0.72,0,1), transform 220ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              {/* Connecting bridge — prevents gap between trigger and panel */}
              <div
                style={{
                  position: "absolute",
                  top: "-18px",
                  left: 0,
                  right: 0,
                  height: "18px",
                }}
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {serviceCategories.map((cat) => (
                  <div key={cat.heading}>
                    {/* Category heading */}
                    <p
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#07503c",
                        margin: "0 0 12px 0",
                        paddingLeft: "4px",
                      }}
                    >
                      {cat.heading}
                    </p>

                    {/* Items */}
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                      {cat.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="dropdown-item"
                            onClick={() => setServicesOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "10px 10px",
                              borderRadius: "10px",
                              textDecoration: "none",
                              transition: "background-color 180ms",
                            }}
                          >
                            {/* Icon box */}
                            <span
                              className="dropdown-icon"
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                backgroundColor: "rgba(7,80,60,0.08)",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#07503c",
                                flexShrink: 0,
                                transition: "background-color 180ms, color 180ms",
                              }}
                            >
                              {item.icon}
                            </span>

                            <span
                              className="dropdown-label"
                              style={{
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#064232",
                                lineHeight: 1.3,
                                transition: "color 180ms",
                              }}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom: view all services link */}
              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(7,80,60,0.08)",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "#07503c",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    opacity: 0.65,
                    transition: "opacity 180ms",
                  }}
                >
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {otherLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#FFD600" : "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-montserrat)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  pathname === link.href ? "#FFD600" : "rgba(255,255,255,0.65)")
              }
            >
              {link.label}
            </Link>
          ))}

          {/* CTA — WhatsApp pill */}
          <Link
            href="https://wa.me/60164963875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold rounded-full transition-all duration-200"
            style={{
              backgroundColor: "#FFD600",
              color: "#07503c",
              fontFamily: "var(--font-montserrat)",
              padding: "9px 8px 9px 18px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#f0ca00";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FFD600";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            WhatsApp Us
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                backgroundColor: "rgba(6,31,23,0.13)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 transition-all duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.75)",
                transform:
                  i === 0 && menuOpen
                    ? "rotate(45deg) translateY(7px)"
                    : i === 2 && menuOpen
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-1"
          style={{
            backgroundColor: "rgba(7,80,60,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Services expandable */}
          <button
            className="flex items-center justify-between w-full text-sm font-semibold py-3"
            style={{
              color: isServicesActive ? "#FFD600" : "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-montserrat)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 220ms",
                opacity: 0.6,
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div style={{ paddingLeft: "12px", paddingBottom: "8px", display: "flex", flexDirection: "column", gap: "0" }}>
              {serviceCategories.map((cat) => (
                <div key={cat.heading} style={{ marginBottom: "12px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#32cd32",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {cat.heading}
                  </p>
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {otherLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold py-3"
              style={{
                color: pathname === link.href ? "#FFD600" : "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-montserrat)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/60164963875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-bold rounded-full mt-2"
            style={{
              backgroundColor: "#FFD600",
              color: "#07503c",
              fontFamily: "var(--font-montserrat)",
              padding: "12px 20px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp Us
          </Link>
        </div>
      )}

      {/* Dropdown hover styles */}
      <style>{`
        .dropdown-item:hover {
          background-color: rgba(7,80,60,0.06) !important;
        }
        .dropdown-item:hover .dropdown-icon {
          background-color: rgba(7,80,60,0.15) !important;
          color: #32cd32 !important;
        }
        .dropdown-item:hover .dropdown-label {
          color: #07503c !important;
        }
      `}</style>
    </header>
  );
}
