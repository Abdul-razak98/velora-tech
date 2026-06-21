"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(107,92,231,0.15) 0%, rgba(14,14,26,0.7) 70%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "120px 2rem 80px" }}>
        <style>{`
          @keyframes pulseGreen { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
          @keyframes floatA { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        `}</style>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 18px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "100px",
          fontSize: "13px",
          color: "rgba(255,255,255,0.8)",
          marginBottom: "3rem",
          backdropFilter: "blur(10px)",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#4ade80",
            display: "inline-block",
            animation: "pulseGreen 2s ease-in-out infinite",
          }}></span>
          Available for new projects
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "0.5rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Full Stack Projects
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 900,
            lineHeight: 1.0,
            marginBottom: "0.2em",
            color: "var(--white)",
          }}>
            Dream It.
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            color: "var(--purple-light)",
          }}>
            We Build It.
          </h1>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "540px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            React · Spring Boot · Django · MySQL — delivered clean, fast, and affordable. Starting at <strong style={{ color: "var(--white)" }}>₹400</strong>.
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "16px 36px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "15px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s",
              backdropFilter: "blur(10px)",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            >
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "var(--purple)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px",
              }}>✳</span>
              Start Your Journey
            </a>

            <a href="https://wa.me/919032018799" target="_blank" rel="noopener noreferrer" style={{
              padding: "16px 36px",
              borderRadius: "100px",
              background: "var(--purple)",
              fontSize: "15px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--purple-light)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--purple)"; }}
            >
              {"Let's work"}
            </a>
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "var(--muted)",
          fontSize: "11px",
          letterSpacing: "0.1em",
        }}>
          <span style={{ textTransform: "uppercase" }}>scroll</span>
          <div style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--muted), transparent)",
            animation: "floatA 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}