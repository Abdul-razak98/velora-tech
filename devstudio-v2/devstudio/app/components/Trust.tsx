"use client";
export default function Trust() {
  return (
    <section style={{
      padding: "80px 0",
      background: "var(--purple)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(80px, 15vw, 200px)",
        fontWeight: 900,
        color: "rgba(0,0,0,0.12)",
        whiteSpace: "nowrap",
        userSelect: "none",
        pointerEvents: "none",
        lineHeight: 1,
      }}>Velora</div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'DM Mono', monospace",
          marginBottom: "1.5rem",
        }}>Our principle</p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "1rem",
          color: "#fff",
        }}>Velora Technologies</h2>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 3vw, 32px)",
          fontStyle: "italic",
          fontWeight: 400,
          color: "rgba(255,255,255,0.8)",
          marginBottom: "3rem",
          lineHeight: 1.5,
        }}>
          is dedicated to the <em style={{ color: "var(--yellow)" }}>craft</em> of creating 0 —→ 1 experiences<br />
          till the last <em style={{ color: "var(--yellow)" }}>detail.</em>
        </p>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "1.5rem",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div style={{
            width: 48, height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px",
            flexShrink: 0,
          }}>👤</div>
          <div style={{ textAlign: "left" }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "4px",
              lineHeight: 1.5,
            }}>&ldquo;Built a complete LMS with JWT auth, role-based access, and a clean React frontend. Delivered on time with great communication.&rdquo;</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Abdul Razak — Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}