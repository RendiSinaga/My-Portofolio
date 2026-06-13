"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      // Supaya saat masih di Hero, tidak ada menu yang aktif
      if (scrollY < 320) {
        setActive("");
        return;
      }

      let currentActive = "";

      links.forEach(({ href }) => {
        const section = document.querySelector(href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          currentActive = href;
        }
      });

      setActive(currentActive);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackHome = () => {
    setActive("");
    setOpen(false);
  };

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
        padding: scrolled ? "12px 20px" : "18px 20px",
        transition: "all 0.3s ease",
        pointerEvents: "none",
      }}
    >
      {/* Mobile dark overlay */}
      {open && (
        <div
          className="mobile-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(2, 6, 23, 0.48)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            pointerEvents: "auto",
          }}
        />
      )}

      <nav
        style={{
          position: "relative",
          zIndex: 1000,
          width: "min(calc(100% - 40px), 1120px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "9px 12px 9px 14px",
          borderRadius: "999px",
          pointerEvents: "auto",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: scrolled ? "rgba(5, 8, 22, 0.84)" : "rgba(5, 8, 22, 0.5)",
          border: scrolled
            ? "1px solid rgba(56, 189, 248, 0.24)"
            : "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 18px 50px rgba(0, 0, 0, 0.35)"
            : "0 10px 35px rgba(0, 0, 0, 0.18)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand */}
        <a
          href="#hero"
          aria-label="Back to home"
          onClick={handleBackHome}
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
              boxShadow:
                "inset 0 0 18px rgba(56,189,248,0.08), 0 0 18px rgba(56,189,248,0.08)",
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

        {/* Desktop CTA */}
        <a
          className="desktop-cta"
          href="#contact"
          onClick={() => setActive("#contact")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
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
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            width: "40px",
            height: "40px",
            borderRadius: "999px",
            border: "1px solid rgba(56,189,248,0.18)",
            background: open
              ? "rgba(56,189,248,0.12)"
              : "rgba(255,255,255,0.05)",
            color: "#E2E8F0",
            cursor: "pointer",
            fontSize: "17px",
            transition: "all 0.22s ease",
          }}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
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
            background: "rgba(5, 8, 22, 0.98)",
            border: "1px solid rgba(56,189,248,0.18)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.08)",
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
                onClick={() => {
                  setActive(href);
                  setOpen(false);
                }}
                style={{
                  padding: "12px 14px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: isActive ? "#38BDF8" : "#CBD5E1",
                  background: isActive
                    ? "rgba(56,189,248,0.12)"
                    : "rgba(255,255,255,0.035)",
                  border: isActive
                    ? "1px solid rgba(56,189,248,0.18)"
                    : "1px solid rgba(255,255,255,0.04)",
                  transition: "all 0.22s ease",
                }}
              >
                {label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => {
              setActive("#contact");
              setOpen(false);
            }}
            style={{
              marginTop: "4px",
              padding: "12px 14px",
              borderRadius: "14px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 900,
              color: "#020617",
              background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
              boxShadow: "0 12px 30px rgba(56,189,248,0.24)",
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

        @media (min-width: 769px) {
          .mobile-overlay {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          header {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }

          .mobile-menu {
            left: 14px !important;
            right: 14px !important;
          }
        }
      `}</style>
    </header>
  );
}
