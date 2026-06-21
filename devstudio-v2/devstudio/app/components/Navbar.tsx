"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "0 1.5rem",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(14,14,26,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
    }}>
      <style>{`
        .nav-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          padding: 6px 4px;
          transition: color 0.25s ease;
        }
        .nav-link:hover { color: #fff; }
        .desktop-links { display: none; align-items: center; gap: 2rem; }
        .desktop-cta { display: none; align-items: center; gap: 12px; }
        .mobile-btn { display: flex; }
        @media (min-width: 769px) {
          .desktop-links { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
        @keyframes b1anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(2px,-3px); } }
        @keyframes b2anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(4px,-5px); } }
        @keyframes b3anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-4px); } }
        @keyframes b4anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(3px,-6px); } }
        @keyframes b5anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(7px,-3px); } }
        @keyframes b6anim { 0%,100% { transform: translate(0,0); } 50% { transform: translate(5px,-7px); } }
        .b1 { animation: b1anim 2.0s ease-in-out infinite; }
        .b2 { animation: b2anim 2.4s ease-in-out infinite 0.2s; }
        .b3 { animation: b3anim 2.1s ease-in-out infinite 0.4s; }
        .b4 { animation: b4anim 2.6s ease-in-out infinite 0.1s; }
        .b5 { animation: b5anim 1.9s ease-in-out infinite 0.3s; }
        .b6 { animation: b6anim 2.3s ease-in-out infinite 0.5s; }
      `}</style>

      {/* Logo — V with flying birds */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* V letter */}
          <path d="M4 6 L22 38 L40 6" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Birds — small curved wing shapes flying out top-right */}
          <g className="b1" style={{ transformOrigin: "33px 8px" }}>
            <path d="M31 8 Q33 5.5 35 8 Q33 7 31 8Z" fill="white" opacity="0.95"/>
          </g>
          <g className="b2" style={{ transformOrigin: "36px 5px" }}>
            <path d="M34 5 Q36 2.5 38 5 Q36 4 34 5Z" fill="white" opacity="0.85"/>
          </g>
          <g className="b3" style={{ transformOrigin: "40px 7px" }}>
            <path d="M38 7 Q40 4.5 42 7 Q40 6 38 7Z" fill="white" opacity="0.7"/>
          </g>
          <g className="b4" style={{ transformOrigin: "34px 11px" }}>
            <path d="M32 11 Q34 8.5 36 11 Q34 10 32 11Z" fill="white" opacity="0.8"/>
          </g>
          <g className="b5" style={{ transformOrigin: "39px 3px" }}>
            <path d="M37 3 Q39 1 41 3 Q39 2 37 3Z" fill="white" opacity="0.6"/>
          </g>
          <g className="b6" style={{ transformOrigin: "43px 5px" }}>
            <path d="M41 5 Q43 3 45 5 Q43 4 41 5Z" fill="white" opacity="0.5"/>
          </g>
        </svg>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "15px", lineHeight: 1 }}>
            Velora Technologies
          </div>
          <div style={{ fontSize: "10px", color: "var(--muted)", lineHeight: 1, marginTop: "2px" }}>
            Full Stack Projects
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div className="desktop-links">
        <a href="#how-we-work" className="nav-link">How we work</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      {/* Desktop CTA */}
      <div className="desktop-cta">
        <a href="#how-we-work" style={{
          padding: "8px 14px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: "13px",
          color: "rgba(255,255,255,0.8)",
          textDecoration: "none",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
          See Our Work
        </a>
        <a href="#contact" style={{
          padding: "10px 20px",
          borderRadius: "100px",
          background: "var(--purple)",
          fontSize: "13px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}>
          {"Let's work"}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none", border: "none", color: "#fff",
          cursor: "pointer", alignItems: "center", justifyContent: "center",
          padding: "4px",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {menuOpen ? (
            <path d="M4 4L18 18M18 4L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <>
              <rect y="4" width="22" height="2" rx="1" fill="white" />
              <rect y="10" width="22" height="2" rx="1" fill="white" />
              <rect y="16" width="22" height="2" rx="1" fill="white" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "65px", left: 0, right: 0,
          background: "rgba(14,14,26,0.98)",
          backdropFilter: "blur(20px)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          borderBottom: "1px solid var(--border)",
          zIndex: 99,
        }}>
          <a href="#how-we-work" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>How we work</a>
          <a href="#services" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Services</a>
          <a href="#pricing" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Pricing</a>
          <a href="#contact" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Contact</a>
          <a href="#contact" onClick={closeMenu} style={{
            padding: "12px",
            borderRadius: "100px",
            background: "var(--purple)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            marginTop: "0.5rem",
          }}>
            {"Let's work"}
          </a>
        </div>
      )}
    </nav>
  );
}