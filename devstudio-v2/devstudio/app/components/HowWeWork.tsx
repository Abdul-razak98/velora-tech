"use client";
export default function HowWeWork() {
  const steps = [
    {
      num: "Step 1",
      title: "Tell us your idea",
      desc: "Fill the contact form or WhatsApp us directly. Share your project requirements, tech stack preference, and deadline. We respond within hours.",
      visual: (
        <div style={{
          background: "rgba(107,92,231,0.1)",
          border: "1px solid rgba(107,92,231,0.2)",
          borderRadius: "12px",
          padding: "1.5rem",
        }}>
          <div style={{ marginBottom: "1rem", fontSize: "13px", color: "var(--muted)" }}>Start your journey</div>
          <div style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "10px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.8)",
          }}>Project: React + Django Dashboard</div>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "10px 12px",
            background: "rgba(74,222,128,0.1)",
            borderRadius: "8px",
            fontSize: "12px", color: "#4ade80",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
            Started working on it!
          </div>
        </div>
      ),
    },
    {
      num: "Step 2",
      title: "We build it clean",
      desc: "Your project is built using industry best practices — clean, readable, documented code. We keep you updated at every stage via WhatsApp.",
      visual: (
        <div style={{
          background: "rgba(107,92,231,0.1)",
          border: "1px solid rgba(107,92,231,0.2)",
          borderRadius: "12px",
          padding: "1.5rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
        }}>
          {["// UserDashboard.tsx", "export default function Dashboard() {", "  const [data, setData] = useState([])", "  // Clean, documented code", "  return <Layout data={data} />", "}"].map((line, i) => (
            <div key={i} style={{ color: i === 0 || i === 3 ? "#6B5CE7" : "rgba(255,255,255,0.7)", padding: "2px 0", paddingLeft: i > 0 && i < 5 ? "16px" : "0" }}>{line}</div>
          ))}
        </div>
      ),
    },
    {
      num: "Step 3",
      title: "Delivered on time",
      desc: "You receive a clean zip file or GitHub repo, with instructions on how to run it. We explain everything so you learn too.",
      visual: (
        <div style={{
          background: "rgba(107,92,231,0.1)",
          border: "1px solid rgba(107,92,231,0.2)",
          borderRadius: "12px",
          padding: "1.5rem",
        }}>
          {[
            { label: "project-final.zip", status: "✓ Delivered", color: "#4ade80" },
            { label: "README.md", status: "✓ Included", color: "#4ade80" },
            { label: "WhatsApp Support", status: "✓ Ongoing", color: "var(--purple-light)" },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              fontSize: "13px",
            }}>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>{item.label}</span>
              <span style={{ color: item.color }}>{item.status}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="how-we-work" style={{ padding: "80px 0", position: "relative" }}>
      <style>{`
        @media (max-width: 768px) {
          .step-grid { grid-template-columns: 1fr !important; gap: 24px !important; direction: ltr !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{
            color: "var(--purple-light)", fontSize: "12px",
            letterSpacing: "0.15em", textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace", marginBottom: "12px",
          }}>How we work</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>
            3 <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--purple-light)" }}>effortless</em> steps
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {steps.map((step, i) => (
            <div key={step.num} className="step-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}>
              <div style={{ direction: "ltr" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "6px 16px",
                  background: "rgba(107,92,231,0.15)",
                  border: "1px solid rgba(107,92,231,0.3)",
                  borderRadius: "100px", fontSize: "12px",
                  color: "var(--purple-light)",
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: "1.2rem",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--purple)", display: "inline-block" }}></span>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(24px, 3.5vw, 42px)",
                  fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem",
                }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8 }}>{step.desc}</p>
              </div>
              <div style={{ direction: "ltr" }}>{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}