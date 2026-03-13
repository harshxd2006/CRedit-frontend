import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export default function PartnerB2B({ navigate }) {
  const [formData, setFormData] = useState({
    name: "", designation: "", company: "", nbfc: "", email: "", volume: "₹10L - ₹50L",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  useScrollReveal();
  const handleSubmit = (e) => { e.preventDefault(); alert("Demo request submitted!"); };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar navigate={navigate} variant="partner" />

      {/* HERO */}
      <section style={{ backgroundColor: "#11425D", padding: "48px 20px 48px", position: "relative", overflow: "hidden" }}>
        <div className="partner-hero-grid reveal-on-scroll" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ flex: "0 0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", borderRadius: 9999, background: "rgba(255,215,0,0.1)", padding: "4px 12px", fontSize: 14, fontWeight: 600, color: "#FFD700", border: "1px solid rgba(255,215,0,0.2)", marginBottom: 12 }}>
              LSP Solutions for NBFCs
            </div>
            <h1 className="partner-hero-h1 reveal-on-scroll delay-1" style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 14 }}>
              Stop Losing Money on NTC Borrowers You Can't Accurately Assess.
            </h1>
            <p className="reveal-on-scroll delay-2" style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.75, marginBottom: 40 }}>
              CreditFlow delivers pre-verified, risk-tiered NTC borrowers with full bank statement intelligence and ML-driven repayment forecasting.
            </p>
            <div className="partner-hero-btns reveal-on-scroll delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <a href="#demo" className="shimmer-btn" style={{ background: "#FFD700", color: "#0f172a", fontWeight: 700, fontSize: 16, padding: "14px 28px", borderRadius: 8, textDecoration: "none", boxShadow: "0 8px 24px rgba(255,215,0,0.3)" }}>
                Request a Demo
              </a>
              <a href="#" style={{ background: "#fff", color: "#0f172a", fontWeight: 700, fontSize: 16, padding: "14px 28px", borderRadius: 8, textDecoration: "none", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined">analytics</span>
                View Model Methodology
              </a>
            </div>
          </div>

          {/* Image — fully framed with padding on all sides */}
          <div className="partner-hero-img" style={{ alignSelf: "center" }}>
            <div style={{ borderRadius: 20, background: "#e8edf2", padding: 12, border: "1px solid #d1d9e0", boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmPPmlvtrpyhkQOzQHlqNqH3op5Vs9TyDM0ioyG9iO9rSoBgZWFlYEcUA49XX25EDu6COPIdXq1OFfwoDJTXOSrxBj-TbCl7tYaJrz4eTngPnqrHgQz0vZhNW94WxAAjBGgVEhJye17NxgeBz5lvVqH2s_zUhkNG4tEmt6SWcahtyPeO3yPw01DF4iay7d73e4EI0Qspwa55VuijDwHE9aR8QLOMKvzOdftug7Y6UEWcNYIcxDZV6gyOKqfqQMvHsMyCFp6DvOm1Q"
                  alt="Analytics dashboard"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NTC PROBLEM */}
      <section style={{ background: "#f8f9ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0f172a" }}>The NTC Problem</h2>
            <p style={{ marginTop: 16, color: "#475569" }}>Why current credit models fail 28% of viable Indian borrowers.</p>
          </div>
          <div className="partner-3col reveal-on-scroll delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { icon: "warning", title: "Generic Models", stat: "6-8% Average Default", desc: "Standard scoring fails to capture true repayment capacity, leading to broad-brush rejections or high-risk approvals." },
              { icon: "payments", title: "Manual Verification", stat: "₹1,200+ Per File", desc: "High overheads for verifying non-traditional data sources and physical documentation drives up acquisition costs." },
              { icon: "blind", title: "Risk Blindness", stat: "40% Rejection Rate", desc: "Inability to differentiate risk tiers results in missing high-potential borrowers due to lack of granular data." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#fff", padding: "28px 24px", border: "1px solid #e2e8f0", borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: "#11425D", display: "block", marginBottom: 16 }}>{c.icon}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#11425D", marginBottom: 12 }}>{c.stat}</p>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "#fff", padding: "72px 20px" }}>
        <div className="partner-how-grid reveal-on-scroll delay-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>Technical Assessment Journey</h2>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 36 }}>Our ML model processes 2,000+ data points per applicant, focusing on 14 critical liquidity factors.</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { n: 1, title: "Bank Statement Intelligence", desc: "Automated parsing of salary consistency, average daily balance, and bounce history." },
                { n: 2, title: "Repayment Probability Engine", desc: "ML models trained on ₹500Cr+ loan data to predict default with 94% accuracy." },
                { n: 3, title: "Automated Risk Tiering", desc: "Instant categorization into Tiers 1, 2, or 3 based on your specific risk appetite." },
              ].map((s) => (
                <li key={s.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, color: "#0f172a" }}>{s.n}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{s.title}</h4>
                    <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "#11425D", borderRadius: 16, padding: 28, color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 16, marginBottom: 24 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Model Output: Real-time Analysis</span>
              <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(34,197,94,0.2)", color: "#4ade80", padding: "4px 10px", borderRadius: 99 }}>STABLE</span>
            </div>
            <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 8, padding: "16px 18px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>Liquidity Score</span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>88/100</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: "88%", height: "100%", background: "#FFD700", borderRadius: 99 }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              {[
                { label: "Risk Tier", value: "TIER 1 (Prime)" },
                { label: "Est. PD Rate", value: "1.2%" },
              ].map(item => (
                <div key={item.label} style={{ background: "rgba(0,0,0,0.2)", borderRadius: 8, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>{item.label}</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: item.label === "Risk Tier" ? "#FFD700" : "#fff" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontStyle: "italic", lineHeight: 1.65 }}>
              "No cheque bounces in 24 months. Steady 12% MoM growth in avg. balance. Utility bill repayment history: Consistent."
            </p>
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section style={{ background: "#f8f9ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0f172a" }}>Value for Lending Partners</h2>
          </div>
          <div className="partner-4col reveal-on-scroll delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { icon: "person_search", title: "Pre-screened Borrowers", desc: "Access a curated pipeline of borrowers who have already passed KYC and initial credit filters." },
              { icon: "layers", title: "Risk-Tiered Apps", desc: "Review applications pre-sorted by risk level, allowing for differentiated interest rates." },
              { icon: "dashboard", title: "Real-Time Dashboard", desc: "Monitor your entire CreditFlow-originated portfolio performance in a single view." },
              { icon: "notifications_active", title: "Early Warning Alerts", desc: "Automated notifications on borrower behavior changes to mitigate delinquency before it happens." },
            ].map((v) => (
              <div key={v.title} style={{ background: "#fff", padding: "24px 20px", border: "1px solid #e2e8f0", borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#11425D", display: "block", marginBottom: 16 }}>{v.icon}</span>
                <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 8, fontSize: 15 }}>{v.title}</h3>
                <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section style={{ background: "#FFD700", padding: "56px 20px" }}>
        <div className="partner-metrics reveal-on-scroll delay-2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
          {[
            { val: "2.4%", label: "NPA Rate", sub: "vs 7.2% Industry Avg" },
            { val: "70%", label: "Cost Reduction", sub: "On manual verification" },
            { val: "140M+", label: "NTC Profiles", sub: "Validated Monthly" },
            { val: "94%", label: "Model Accuracy", sub: "In repayment prediction" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 40, fontWeight: 900, color: "#0f172a", letterSpacing: "-2px" }}>{s.val}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(17,66,93,0.7)", marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "rgba(17,66,93,0.5)", marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP STRUCTURE */}
      <section id="pricing" style={{ background: "#fff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0f172a" }}>Partnership Structure</h2>
            <p style={{ marginTop: 16, color: "#475569" }}>Simple, transparent, and aligned with your lending targets.</p>
          </div>
          <div className="partner-structure-grid reveal-on-scroll delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "handshake", title: "Referral Fee Model", desc: "Pay only for successful loan disbursements. Zero upfront platform costs." },
                { icon: "verified_user", title: "Lender Retains Authority", desc: "Full sanction and rejection authority remains with the NBFC credit committee." },
                { icon: "history_edu", title: "LSP Agreement", desc: "Formal agreement following RBI guidelines for Lending Service Providers." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 16, borderRadius: 8, background: "#f8f9ff" }}>
                  <span className="material-symbols-outlined" style={{ color: "#11425D", fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "#f8fafc", border: "2px solid rgba(17,66,93,0.2)", borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", marginBottom: 16 }}>Pilot Program Offer</h3>
              <p style={{ color: "#475569", marginBottom: 24 }}>Experience CreditFlow risk tiers with zero commitment.</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                {["50 Pre-screened Borrowers", "3-Month Performance Evaluation", "Full Data Access & Model Transparency"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#334155" }}>
                    <span className="material-symbols-outlined" style={{ color: "#11425D", fontSize: 18 }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#demo" style={{ display: "block", width: "100%", textAlign: "center", background: "#FFD700", fontWeight: 700, padding: "12px", borderRadius: 8, color: "#0f172a", textDecoration: "none", fontSize: 15, boxSizing: "border-box" }}>
                Start Your Pilot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" style={{ background: "#11425D", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: "#fff" }}>Compliance &amp; Security</h2>
            <p style={{ marginTop: 16, color: "rgba(255,255,255,0.4)" }}>Meeting the highest regulatory standards for digital lending.</p>
          </div>
          <div className="partner-compliance-grid reveal-on-scroll delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28, textAlign: "center" }}>
            {[
              { icon: "gavel", title: "RBI 2025 Compliant", desc: "Adheres strictly to Digital Lending Directions 2025." },
              { icon: "storage", title: "Indian Servers", desc: "All data stored and processed within Indian geography." },
              { icon: "no_accounts", title: "No Contact Access", desc: "Zero access to mobile contacts or media galleries." },
              { icon: "history", title: "Full Audit Trail", desc: "End-to-end logs of assessment logic for regulatory audit." },
            ].map((c) => (
              <div key={c.title}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: "#FFD700", display: "block", marginBottom: 16 }}>{c.icon}</span>
                <h4 style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{c.title}</h4>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#fff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="partner-testi-grid reveal-on-scroll delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { quote: "CreditFlow has revolutionized our NTC underwriting. Their Tier-1 borrowers perform remarkably similar to our established credit customers, allowing us to expand our book safely.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfSLEQZW2GceH3GQjYCuTqT5tTAkcIAI4Gb8ERniEN0rhSev55eRpLTQWkazuvK4x3LxogvZSmckpqbV38ycmBX4IcPcEGapC2qpcrcSAe5RyhtmSdndPe1ugJdjJJW63fPpjv0DriGk-Ur8Og8cu766emMDT9avwq0uLjNPF2HWfGW-mep5vbWP8aFTGKy3rv26DZRslpwqOT7H2h5nIQSzy4ZjgG7vt6ZftCXR5BipIo6auPPEeJaB2QTWpqt_S2jtD_FIz7UjY", role: "Chief Risk Officer", org: "Tier-1 Registered NBFC" },
              { quote: "The level of bank statement intelligence provided exceeds any other LSP we've partnered with. Their bounce prediction model is a game changer for collection overheads.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjflh4WucWMzAWza6dZ69d_xDqi9SCxvg8-Vfe2HQHn_ZwQJl2Jb4z_-Ha_0xgg9t8szet1mvIYQbAM9mY11wlA2K-vy6QldMpFiDkaT61_7QZgzXKbFtgyGGQ7RgwSyWy3HkH98RyV90CMiTrz4hNnB6jotCys1R19RLdSu3xAa444FCkXzwLgZHxHmuTWdyUSvXIMK5-QoDCiu2Byt_ZDkTx3OXGyTdDhkBdxodTZLMrABJ9XyUNoHXSG8GFW0-wO6qQQ3BRdPs", role: "Head of Credit", org: "Fintech Lending Corp" },
            ].map((t, i) => (
              <div key={i} style={{ background: "#f8f9ff", padding: "32px 28px", borderRadius: 8, border: "1px solid #e2e8f0", position: "relative" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 60, color: "rgba(17,66,93,0.1)", position: "absolute", top: 16, right: 16 }}>format_quote</span>
                <p style={{ fontSize: 15, color: "#334155", fontStyle: "italic", lineHeight: 1.8, marginBottom: 24, position: "relative", zIndex: 1 }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#cbd5e1", overflow: "hidden", flexShrink: 0 }}>
                    <img src={t.img} alt={t.role} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0f172a" }}>{t.role}</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>{t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" style={{ background: "#f8f9ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ background: "#11425D", padding: "24px 28px" }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Partner with CreditFlow</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>Schedule a technical walkthrough with our credit risk team.</p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "28px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="partner-form">
              {[
                { label: "Full Name", name: "name", placeholder: "Enter name", type: "text" },
                { label: "Designation", name: "designation", placeholder: "e.g. CRO, Head of Credit", type: "text" },
                { label: "Company Name", name: "company", placeholder: "Enter NBFC name", type: "text" },
                { label: "NBFC License Number", name: "nbfc", placeholder: "N-XX.XXXXX", type: "text" },
                { label: "Work Email", name: "email", placeholder: "name@company.com", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>{field.label}</label>
                  <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder}
                    style={{ width: "100%", height: 48, padding: "0 14px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "#11425D"; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                </div>
              ))}

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>Monthly Volume Target</label>
                <select name="volume" value={formData.volume} onChange={handleChange}
                  style={{ width: "100%", height: 48, padding: "0 14px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none", cursor: "pointer" }}>
                  <option>₹10L - ₹50L</option>
                  <option>₹50L - ₹5Cr</option>
                  <option>₹5Cr+</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <button type="submit" style={{ width: "100%", background: "#FFD700", color: "#0f172a", fontWeight: 700, fontSize: 16, padding: "16px", borderRadius: 8, border: "none", cursor: "pointer", boxShadow: "0 6px 20px rgba(255,215,0,0.35)" }}>
                  Request Technical Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-btn {
          background: linear-gradient(90deg, #FFD700 0%, #fff3b0 20%, #FFD700 40%, #FFD700 100%) !important;
          background-size: 200% auto !important;
          animation: shimmer 4s infinite linear;
          color: #0f172a !important;
          border: 1px solid rgba(255,215,0,0.5);
          transition: all 0.2s ease !important;
        }
        .shimmer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255,215,0,0.4) !important;
        }

        /* Float animation for the dashboard image */
        @keyframes floatDash {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .partner-hero-img > div {
          animation: floatDash 6s ease-in-out infinite;
        }

        /* Hover lift for cards */
        .partner-3col > div, .partner-4col > div {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .partner-3col > div:hover, .partner-4col > div:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08) !important;
        }

        @media (max-width: 768px) {
          .partner-hero-grid { grid-template-columns: 1fr !important; }
          .partner-hero-img { display: none !important; }
          .partner-hero-h1 { font-size: 36px !important; letter-spacing: -1px !important; }
          .partner-hero-btns { flex-direction: column !important; }
          .partner-hero-btns a { text-align: center; justify-content: center; }
          .partner-3col { grid-template-columns: 1fr !important; }
          .partner-how-grid { grid-template-columns: 1fr !important; }
          .partner-4col { grid-template-columns: 1fr 1fr !important; }
          .partner-metrics { grid-template-columns: 1fr 1fr !important; }
          .partner-structure-grid { grid-template-columns: 1fr !important; }
          .partner-compliance-grid { grid-template-columns: 1fr 1fr !important; }
          .partner-testi-grid { grid-template-columns: 1fr !important; }
          .partner-form { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .partner-4col { grid-template-columns: 1fr !important; }
          .partner-metrics { grid-template-columns: 1fr 1fr !important; }
          .partner-compliance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}