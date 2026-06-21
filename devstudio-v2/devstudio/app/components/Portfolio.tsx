"use client";
export default function Portfolio() {
  const projects = [
  {
    title: "Learning Management System",
    stack: "React + Spring Boot + MySQL",
    type: "Full Stack",
    color: "#6B5CE7",
  },
  {
    title: "AI Weather Forecasting",
    stack: "Spring Boot + React + OpenWeather API",
    type: "Full Stack",
    color: "#8B7CF8",
  },
  {
    title: "YouTube Comment Sentiment",
    stack: "React + Django + AI",
    type: "Full Stack",
    color: "#6B5CE7",
  },
  {
    title: "LMS Python Edition",
    stack: "React + Django + MySQL",
    type: "Full Stack",
    color: "#8B7CF8",
  },
];

  const typeColors: Record<string, string> = {
    "Full Stack": "#6B5CE7",
    "Frontend": "#4ade80",
    "Backend": "#F5C842",
    "Dashboard": "#60a5fa",
  };

  return (
    <section id="how-we-work" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{
            color: "var(--purple-light)",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px",
          }}>Portfolio</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05 }}>
            We do work<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--purple-light)" }}>that&apos;s worth doing</em>
          </h2>
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "16px",
        }}>
          {projects.map((p) => (
            <div key={p.title} style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "transform 0.2s, border-color 0.2s",
              cursor: "pointer",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(107,92,231,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Preview area */}
              <div style={{
                height: "160px",
                background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderBottom: "1px solid var(--border)",
              }}>
                {/* macOS dots */}
                <div style={{ position: "absolute", top: "12px", left: "14px", display: "flex", gap: "6px" }}>
                  {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "14px",
                  background: `${p.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  border: `1px solid ${p.color}44`,
                }}>⌨️</div>
              </div>
              {/* Info */}
              <div style={{ padding: "1.2rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700 }}>{p.title}</h3>
                  <span style={{
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    background: `${typeColors[p.type]}20`,
                    color: typeColors[p.type],
                    fontFamily: "'DM Mono', monospace",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}>{p.type}</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>{p.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
