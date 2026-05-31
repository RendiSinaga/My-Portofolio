"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = links.map(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);

      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(href);
        },
        {
          threshold: 0.45,
          rootMargin: "-80px 0px -45% 0px",
        },
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "14px 20px" : "22px 20px",
        transition: "all 0.3s ease",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          width: "min(100%, 980px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "10px 12px 10px 16px",
          borderRadius: "999px",
          pointerEvents: "auto",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: scrolled
            ? "rgba(5, 8, 22, 0.82)"
            : "rgba(5, 8, 22, 0.45)",
          border: scrolled
            ? "1px solid rgba(56, 189, 248, 0.22)"
            : "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 18px 50px rgba(0, 0, 0, 0.35)"
            : "0 10px 35px rgba(0, 0, 0, 0.18)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          aria-label="Back to home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38BDF8",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(56,189,248,0.04))",
              border: "1px solid rgba(56,189,248,0.35)",
              boxShadow: "inset 0 0 18px rgba(56,189,248,0.08)",
            }}
          >
            R
          </span>

          <span
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
            }}
          >
            Rendi<span style={{ color: "#38BDF8" }}>.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "38px",
          }}
        >
          {links.map(({ label, href }) => {
            const isActive = active === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  color: isActive ? "#38BDF8" : "#94A3B8",
                  transition: "all 0.22s ease",
                  padding: "8px 0 10px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#E2E8F0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#94A3B8";
                  }
                }}
              >
                {label}

                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0px",
                    width: isActive ? "22px" : "0px",
                    height: "2px",
                    borderRadius: "999px",
                    background: "#38BDF8",
                    transform: "translateX(-50%)",
                    transition: "all 0.22s ease",
                    boxShadow: isActive
                      ? "0 0 12px rgba(56,189,248,0.8)"
                      : "none",
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          className="desktop-cta"
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 22px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
            color: "#020617",
            fontSize: "13px",
            fontWeight: 800,
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 10px 28px rgba(56, 189, 248, 0.22)",
            transition: "all 0.22s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 14px 34px rgba(56, 189, 248, 0.32)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 28px rgba(56, 189, 248, 0.22)";
          }}
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="mobile-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            width: "40px",
            height: "40px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "#E2E8F0",
            cursor: "pointer",
          }}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            display: open ? "flex" : "none",
            position: "absolute",
            top: "76px",
            left: "20px",
            right: "20px",
            flexDirection: "column",
            gap: "8px",
            padding: "14px",
            borderRadius: "24px",
            background: "rgba(5, 8, 22, 0.94)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {links.map(({ label, href }) => {
            const isActive = active === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 14px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: isActive ? "#38BDF8" : "#CBD5E1",
                  background: isActive
                    ? "rgba(56,189,248,0.12)"
                    : "rgba(255,255,255,0.03)",
                }}
              >
                {label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "4px",
              padding: "12px 14px",
              borderRadius: "14px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 800,
              color: "#020617",
              background: "#38BDF8",
            }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-cta {
            display: none !important;
          }

          .mobile-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          header {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }
        }
      `}</style>
    </header>
  );
}
