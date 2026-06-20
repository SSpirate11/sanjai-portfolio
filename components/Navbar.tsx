"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(2, 0, 18, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(157,78,221,0.15)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "linear-gradient(135deg, #7B2FBE, #9D4EDD)",
            border: "1px solid rgba(199,125,255,0.4)",
            boxShadow: "0 0 16px rgba(157,78,221,0.35)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#ffffff",
            fontFamily: "var(--font-mono, monospace)",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          SS
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C77DFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="mailto:sanjaisiddharth2002@gmail.com"
          className="hidden lg:flex glow-btn-primary items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white"
          style={{ textDecoration: "none" }}
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(2, 0, 18, 0.97)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(157,78,221,0.2)",
            padding: "1.5rem",
          }}
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1rem",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="mailto:sanjaisiddharth2002@gmail.com"
                className="glow-btn-primary inline-flex px-5 py-2 rounded-full text-sm font-medium text-white"
                style={{ textDecoration: "none" }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
