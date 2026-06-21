"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(6,31,23,0.97)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" style={{ flexShrink: 0 }}>
          <Image
            src="/logo-horizontal-white.png"
            alt="Millecube Digital"
            width={160}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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

          {/* CTA — yellow pill matching site system */}
          <Link
            href="/contact"
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
            Get in Touch
            <span
              style={{
                width: "26px",
                height: "26px",
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
          className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(6,31,23,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold py-2"
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
            href="/contact"
            className="flex items-center justify-center gap-2 text-sm font-bold rounded-full mt-1"
            style={{
              backgroundColor: "#FFD600",
              color: "#07503c",
              fontFamily: "var(--font-montserrat)",
              padding: "12px 20px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch →
          </Link>
        </div>
      )}
    </header>
  );
}
