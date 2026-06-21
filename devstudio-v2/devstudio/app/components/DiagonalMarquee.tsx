"use client";
export default function DiagonalMarquee() {
  const items = [
    "REACT JS", "SPRING BOOT", "DJANGO", "MYSQL", "NEXT.JS",
    "REST API", "FULL STACK", "FAST DELIVERY", "TAILWIND CSS", "POSTGRESQL",
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div style={{
      overflow: "hidden",
      padding: "0",
      position: "relative",
      zIndex: 2,
      marginBottom: "0",
    }}>
      {/* Top band */}
      <div style={{
        transform: "rotate(-2deg) scaleX(1.05)",
        marginLeft: "-5%",
        width: "110%",
        background: "var(--purple)",
        padding: "14px 0",
        overflow: "hidden",
        marginBottom: "-8px",
      }}>
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              whiteSpace: "nowrap",
              padding: "0 2px",
            }}>
              <span style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                padding: "0 20px",
              }}>{item}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>✳</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom band (reversed) */}
      <div style={{
        transform: "rotate(-2deg) scaleX(1.05)",
        marginLeft: "-5%",
        width: "110%",
        background: "rgba(107,92,231,0.15)",
        border: "1px solid rgba(107,92,231,0.3)",
        padding: "12px 0",
        overflow: "hidden",
        marginTop: "6px",
      }}>
        <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
          {repeated.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}>
              <span style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "var(--purple-light)",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                padding: "0 20px",
              }}>{item}</span>
              <span style={{ color: "var(--purple)", fontSize: "14px" }}>✳</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
