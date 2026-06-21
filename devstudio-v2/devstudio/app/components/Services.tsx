"use client";
export default function Services() {
  const services = [
    {
      num: "01",
      title: "React JS",
      subtitle: "Frontend Development",
      desc: "Pixel-perfect UIs, SPAs, dashboards, portfolio sites, and component libraries.",
      tags: ["SPA", "Dashboard", "Portfolio", "UI Components"],
      color: "#6B5CE7",
    },
    {
      num: "02",
      title: "Spring Boot",
      subtitle: "Backend Systems",
      desc: "Robust REST APIs, JWT authentication, microservices, and enterprise backend systems.",
      tags: ["REST API", "Auth", "Microservices", "JPA"],
      color: "#8B7CF8",
    },
    {
      num: "03",
      title: "Django",
      subtitle: "Python Backend",
      desc: "Full-stack Python apps, admin panels, e-commerce backends, and REST APIs.",
      tags: ["Admin Panel", "DRF", "Python", "Full Stack"],
      color: "#6B5CE7",
    },
    {
      num: "04",
      title: "MySQL / DB",
      subtitle: "Database Design",
      desc: "Schema design, complex queries, optimization, and complete database integration.",
      tags: ["Schema", "CRUD", "Optimization", "Integration"],
      color: "#8B7CF8",
    },
    {
      num: "05",
      title: "Full Stack",
      subtitle: "End-to-End Apps",
      desc: "Complete applications combining frontend, backend, and database — all in one.",
      tags: ["React + Spring", "React + Django", "Deployment", "MVP"],
      color: "#6B5CE7",
    },
    {
      num: "06",
      title: "Bug Fixes",
      subtitle: "Debug & Optimize",
      desc: "Stuck on an error? We debug, fix, and explain — fast. Code review included.",
      tags: ["Debugging", "Code Review", "Optimization", "Fixes"],
      color: "#8B7CF8",
    },
  ];

  return (
    <section id="services" style={{
      padding: "120px 0",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <p style={{
            color: "var(--purple-light)",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px",
          }}>What We Build</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2 style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
            }}>
              Tailored <br />
              <em style={{ fontWeight: 400, color: "var(--purple-light)" }}>solutions for you</em>
            </h2>
            <p style={{
              color: "var(--muted)",
              fontSize: "15px",
              maxWidth: "300px",
              lineHeight: 1.7,
              textAlign: "right",
            }}>From a simple REST API to a complete full-stack app — we have you covered.</p>
          </div>
        </div>

        {/* Service cards - 3 column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1px",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          overflow: "hidden",
          background: "var(--border)",
        }}>
          {services.map((s) => (
            <div
              key={s.num}
              style={{
                background: "var(--bg2)",
                padding: "2.5rem",
                position: "relative",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(107,92,231,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--bg2)"; }}
            >
              {/* Large number watermark */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                fontFamily: "'Playfair Display', serif",
                fontSize: "64px",
                fontWeight: 900,
                color: "rgba(107,92,231,0.08)",
                lineHeight: 1,
                userSelect: "none",
              }}>{s.num}</div>

              <div style={{ marginBottom: "0.5rem" }}>
                <p style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: "8px",
                }}>{s.subtitle}</p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}>{s.title}</h3>
              </div>

              <p style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}>{s.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{
                    padding: "4px 10px",
                    borderRadius: "100px",
                    border: "1px solid rgba(107,92,231,0.3)",
                    fontSize: "11px",
                    color: "var(--purple-light)",
                    fontFamily: "'DM Mono', monospace",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
