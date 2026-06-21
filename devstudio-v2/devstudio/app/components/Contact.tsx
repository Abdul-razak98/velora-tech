"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", title: "", desc: "", budget: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi! I want to start a project.\n\nName: ${form.name}\nEmail: ${form.email}\nProject: ${form.title}\nBudget: ${form.budget}\n\n${form.desc}`);
    window.open(`https://wa.me/919032018799?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    transition: "border-color 0.2s",
  };

  const selectStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "#0e0e1a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    transition: "border-color 0.2s",
    cursor: "pointer",
    colorScheme: "dark" as const,
    appearance: "auto" as const,
  };

  return (
    <section id="contact" style={{ padding: "120px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "var(--purple-light)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "12px" }}>Contact</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, lineHeight: 1.05 }}>
            {"Let's get"} <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--purple-light)" }}>started!</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "15px", marginTop: "1rem" }}>{"Tell us what you need. We'll get back within hours."}</p>
        </div>

        {sent ? (
          <div style={{ textAlign: "center", padding: "4rem", background: "rgba(107,92,231,0.1)", borderRadius: "16px", border: "1px solid rgba(107,92,231,0.3)" }}>
            <div style={{ fontSize: "48px", marginBottom: "1rem" }}>✅</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", marginBottom: "0.5rem" }}>Message Sent!</h3>
            <p style={{ color: "var(--muted)" }}>{"We'll reply on WhatsApp very soon."}</p>
            <button onClick={() => setSent(false)} style={{ marginTop: "1.5rem", padding: "10px 24px", borderRadius: "100px", background: "var(--purple)", border: "none", color: "#fff", cursor: "pointer", fontSize: "14px" }}>Send Another</button>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Your Name *</label>
                <input name="name" required placeholder="John Doe" value={form.name} onChange={handle} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Email Address *</label>
                <input name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={handle} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>WhatsApp Number</label>
                <input name="whatsapp" placeholder="+91 98765 43210" value={form.whatsapp} onChange={handle} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Project Title *</label>
                <input name="title" required placeholder="E.g. React Dashboard" value={form.title} onChange={handle} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Project Description</label>
              <textarea name="desc" rows={4} placeholder="Describe your project — features, tech stack, any references..." value={form.desc} onChange={handle}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "'DM Sans', sans-serif" }}
                onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Budget</label>
              <select name="budget" value={form.budget} onChange={handle} style={selectStyle}
                onFocus={e => { e.target.style.borderColor = "rgba(107,92,231,0.6)"; }}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <option value="" style={{ background: "#0e0e1a", color: "#fff" }}>Select budget range</option>
                <option style={{ background: "#0e0e1a", color: "#fff" }}>₹300 (Quick Build)</option>
                <option style={{ background: "#0e0e1a", color: "#fff" }}>₹500 (Standard)</option>
                <option style={{ background: "#0e0e1a", color: "#fff" }}>₹1,000 (Advanced)</option>
                <option style={{ background: "#0e0e1a", color: "#fff" }}>Custom Project</option>
              </select>
            </div>
            <button type="submit" style={{
              padding: "16px",
              borderRadius: "100px",
              background: "var(--purple)",
              border: "none",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--purple-light)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--purple)"; }}
            >
              <span>✳</span> Take My Brand to Next Level
            </button>
          </form>
        )}
      </div>
    </section>
  );
}