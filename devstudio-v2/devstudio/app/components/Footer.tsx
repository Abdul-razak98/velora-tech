"use client";
export default function Footer() {
  return (
    <footer style={{
      background: "var(--purple)",
      padding: "80px 2rem 40px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {["10% 20%", "85% 30%", "50% 10%", "20% 70%", "75% 65%"].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          left: pos.split(" ")[0],
          top: pos.split(" ")[1],
          color: "rgba(255,255,255,0.2)",
          fontSize: i % 2 === 0 ? "18px" : "12px",
        }}>✳</div>
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        <p style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'DM Mono', monospace",
          marginBottom: "1.5rem",
        }}>
          Available for new projects
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 8vw, 90px)",
          fontWeight: 700,
          lineHeight: 1.0,
          marginBottom: "2rem",
          color: "#fff",
        }}>
          {"Let's get"}<br />
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>started!</em>
        </h2>

        <a href="#contact" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "16px 36px",
          borderRadius: "100px",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: 500,
          marginBottom: "4rem",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
        >
          <span>✳</span> Take My Brand to Next Level
        </a>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          fontSize: "13px",
          color: "rgba(255,255,255,0.5)",
        }}>
          <span>2026 © Velora Technologies</span>
        </div>
      </div>
    </footer>
  );
}