import { useState } from "react";
import Footer from "../components/Footer";

const GOLD     = "#FFD700";
const MIDNIGHT = "#11425D";
const BG_LIGHT = "#f8f9ff";

function MatIcon({ name, size = 24, color }) {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: size, color, lineHeight: 1, display: "block" }}>
      {name}
    </span>
  );
}

function Stat({ val, label, sub }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 44, fontWeight: 900, color: MIDNIGHT, letterSpacing: "-2px" }}>{val}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(17,66,93,.65)", marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: 11, color: "rgba(17,66,93,.45)", marginTop: 2 }}>{sub}</div>
    </div>
  );
}

function FormField({ label, placeholder, type = "text", value, onChange, inputStyle, onFocus, onBlur }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>{label}</label>
      <input
        type={type} value={value} placeholder={placeholder}
        onChange={onChange}
        style={inputStyle} onFocus={onFocus} onBlur={onBlur}
      />
    </div>
  );
}

export default function PartnerB2B({ navigate }) {
  const [form, setForm]       = useState({ name: "", designation: "", company: "", nbfc: "", email: "", volume: "₹10L - ₹50L" });
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const inputStyle = {
    width: "100%", height: 48, padding: "0 14px", borderRadius: 8,
    border: "1px solid #e2e8f0", fontSize: 14, color: "#0f172a",
    fontFamily: "'Inter', sans-serif", background: "#fff",
    transition: "border-color .2s, box-shadow .2s",
  };

  const onFocus = (e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = `0 0 0 3px rgba(17,66,93,.1)`; };
  const onBlur  = (e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; };
  const handleChange = (fkey) => (e) => setForm({ ...form, [fkey]: e.target.value });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ background: MIDNIGHT, padding: "80px 24px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,215,0,.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, background: "rgba(255,215,0,.10)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 99, padding: "6px 16px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.06em" }}>LSP SOLUTIONS FOR NBFCs</span>
            </div>
            <h1 style={{ fontSize: 50, fontWeight: 900, color: "#fff", lineHeight: 1.08, letterSpacing: "-1.2px", marginBottom: 24 }}>
              Stop Losing Money on NTC Borrowers You Can't Accurately Assess.
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.65)", lineHeight: 1.75, marginBottom: 40 }}>
              CreditFlow delivers pre-verified, risk-tiered NTC borrowers with full bank statement intelligence and ML-driven repayment forecasting.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#demo" style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, fontSize: 15, padding: "14px 36px", borderRadius: 10, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "transform .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                Request a Demo →
              </a>
              <a href="#how-it-works" style={{ background: "#fff", color: "#0f172a", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid #e2e8f0", transition: "background .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                View Model Methodology
              </a>
            </div>
          </div>

          {/* Dashboard card */}
          <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 16, padding: 2, border: "1px solid rgba(255,255,255,.1)" }}>
            <div style={{ background: "#1a3a50", borderRadius: 14, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,.08)", paddingBottom: 16, marginBottom: 24 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Model Output: Real-time Analysis</span>
                <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(34,197,94,.15)", color: "#4ade80", padding: "4px 10px", borderRadius: 99 }}>STABLE</span>
              </div>
              <div style={{ background: "rgba(0,0,0,.25)", borderRadius: 10, padding: "16px 18px", marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.7)" }}>Liquidity Score</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>88/100</span>
                </div>
                <div style={{ height: 8, background: "rgba(255,255,255,.1)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: "88%", height: "100%", background: GOLD, borderRadius: 99 }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ background: "rgba(0,0,0,.25)", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(255,255,255,.06)" }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>Risk Tier</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: GOLD }}>TIER 1 (Prime)</div>
                </div>
                <div style={{ background: "rgba(0,0,0,.25)", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(255,255,255,.06)" }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>Est. PD Rate</span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>1.2%</div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.35)", fontStyle: "italic", lineHeight: 1.65 }}>
                "No cheque bounces in 24 months. Steady 12% MoM growth in avg. balance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NTC PROBLEM ── */}
      <section style={{ background: BG_LIGHT, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0f172a" }}>The NTC Problem</h2>
            <p style={{ fontSize: 15, color: "#64748b", marginTop: 10 }}>Why current credit models fail 28% of viable Indian borrowers.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { icon: "warning",  title: "Generic Models",      stat: "6-8% Average Default", desc: "Standard scoring fails to capture true repayment capacity, leading to broad-brush rejections." },
              { icon: "payments", title: "Manual Verification", stat: "₹1,200+ Per File",      desc: "High overheads for verifying non-traditional data sources drives up acquisition costs." },
              { icon: "blind",    title: "Risk Blindness",      stat: "40% Rejection Rate",    desc: "Inability to differentiate risk tiers results in missing high-potential borrowers." },
            ].map((c) => (
              <div key={c.title} className="card" style={{ background: "#fff", padding: "36px 28px", border: "1px solid #e2e8f0", borderRadius: 12 }}>
                <MatIcon name={c.icon} size={40} color={MIDNIGHT} />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginTop: 16, marginBottom: 6 }}>{c.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, marginBottom: 10 }}>{c.stat}</p>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>Technical Assessment Journey</h2>
            <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75, marginBottom: 40 }}>Our ML model processes 2,000+ data points per applicant, focusing on 14 critical liquidity factors.</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { n: 1, title: "Bank Statement Intelligence",   desc: "Automated parsing of salary consistency, average daily balance, and bounce history." },
                { n: 2, title: "Repayment Probability Engine",  desc: "ML models trained on ₹500Cr+ loan data to predict default with 94% accuracy." },
                { n: 3, title: "Automated Risk Tiering",        desc: "Instant categorization into Tiers 1, 2, or 3 based on your specific risk appetite." },
              ].map((s) => (
                <li key={s.n} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: MIDNIGHT }}>{s.n}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{s.title}</h4>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Model card */}
          <div style={{ background: MIDNIGHT, borderRadius: 16, padding: 32, color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,.08)", paddingBottom: 16, marginBottom: 24 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Model Output</span>
              <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(34,197,94,.15)", color: "#4ade80", padding: "4px 10px", borderRadius: 99 }}>STABLE</span>
            </div>
            <div style={{ background: "#1e3a52", borderRadius: 10, padding: "16px 18px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>Liquidity Score</span>
                <span style={{ fontSize: 13, fontWeight: 800 }}>88/100</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,.1)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: "88%", height: "100%", background: GOLD, borderRadius: 99 }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "#1e3a52", borderRadius: 10, padding: "14px 16px" }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>Risk Tier</span>
                <div style={{ fontSize: 17, fontWeight: 800, color: GOLD }}>TIER 1 (Prime)</div>
              </div>
              <div style={{ background: "#1e3a52", borderRadius: 10, padding: "14px 16px" }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>Est. PD Rate</span>
                <div style={{ fontSize: 17, fontWeight: 800 }}>1.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE CARDS ── */}
      <section style={{ background: BG_LIGHT, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 48 }}>Value for Lending Partners</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { icon: "person_search",        title: "Pre-screened Borrowers", desc: "Access a curated pipeline of borrowers who have already passed KYC and initial credit filters." },
              { icon: "layers",               title: "Risk-Tiered Apps",        desc: "Review applications pre-sorted by risk level, allowing for differentiated interest rates." },
              { icon: "dashboard",            title: "Real-Time Dashboard",     desc: "Monitor your entire CreditFlow-originated portfolio performance in a single view." },
              { icon: "notifications_active", title: "Early Warning Alerts",    desc: "Automated notifications on borrower behavior changes to mitigate delinquency." },
            ].map((v) => (
              <div key={v.title} className="card" style={{ background: "#fff", padding: "28px 22px", border: "1px solid #e2e8f0", borderRadius: 12 }}>
                <MatIcon name={v.icon} size={28} color={MIDNIGHT} />
                <h3 style={{ fontWeight: 700, color: "#0f172a", marginTop: 14, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section style={{ background: GOLD, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
          <Stat val="2.4%" label="NPA Rate"        sub="vs 7.2% Industry Avg" />
          <Stat val="70%"  label="Cost Reduction"  sub="On manual verification" />
          <Stat val="140M+" label="NTC Profiles"   sub="Validated Monthly" />
          <Stat val="94%"  label="Model Accuracy"  sub="In repayment prediction" />
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section id="compliance" style={{ background: MIDNIGHT, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>Compliance & Security</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.45)", marginTop: 10 }}>Meeting the highest regulatory standards for digital lending.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 36, textAlign: "center" }}>
            {[
              { icon: "gavel",       title: "RBI 2025 Compliant", desc: "Adheres strictly to Digital Lending Directions 2025." },
              { icon: "storage",     title: "Indian Servers",      desc: "All data stored and processed within Indian geography." },
              { icon: "no_accounts", title: "No Contact Access",   desc: "Zero access to mobile contacts or media galleries." },
              { icon: "history",     title: "Full Audit Trail",     desc: "End-to-end logs of assessment logic for regulatory audit." },
            ].map((c) => (
              <div key={c.title}>
                <MatIcon name={c.icon} size={40} color={GOLD} />
                <h4 style={{ fontWeight: 700, color: "#fff", margin: "14px 0 8px" }}>{c.title}</h4>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {[
            { quote: "CreditFlow has revolutionized our NTC underwriting. Their Tier-1 borrowers perform remarkably similar to our established credit customers.", role: "Chief Risk Officer", org: "Tier-1 Registered NBFC" },
            { quote: "The level of bank statement intelligence provided exceeds any other LSP we've partnered with. Their bounce prediction model is a game changer.", role: "Head of Credit", org: "Fintech Lending Corp" },
          ].map((t, i) => (
            <div key={i} className="card" style={{ background: BG_LIGHT, padding: "36px 32px", borderRadius: 14, border: "1px solid #e2e8f0", position: "relative" }}>
              <p style={{ fontSize: 15, color: "#334155", fontStyle: "italic", lineHeight: 1.8, marginBottom: 24 }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: MIDNIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: GOLD }}>{t.role[0]}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{t.role}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo" style={{ background: BG_LIGHT, padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,.08)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ background: MIDNIGHT, padding: "28px 40px" }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Partner with CreditFlow</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.55)" }}>Schedule a technical walkthrough with our credit risk team.</p>
            </div>

            {submitted ? (
              <div style={{ padding: "60px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: MIDNIGHT, marginBottom: 12 }}>Request Submitted!</h3>
                <p style={{ fontSize: 15, color: "#64748b", marginBottom: 32 }}>Our credit risk team will reach out within 24 hours.</p>
                <button onClick={() => navigate("home")} style={{ background: MIDNIGHT, color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer" }}>
                  ← Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: "36px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <FormField label="Full Name"           fkey="name"        placeholder="Enter name"        value={form.name}        onChange={handleChange("name")}        inputStyle={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <FormField label="Designation"         fkey="designation" placeholder="e.g. CRO, Head of Credit" value={form.designation} onChange={handleChange("designation")} inputStyle={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <FormField label="Company Name"        fkey="company"     placeholder="Enter NBFC name"     value={form.company}     onChange={handleChange("company")}     inputStyle={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <FormField label="NBFC License Number" fkey="nbfc"        placeholder="N-XX.XXXXX"        value={form.nbfc}        onChange={handleChange("nbfc")}        inputStyle={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <FormField label="Work Email"          fkey="email"       placeholder="name@company.com" type="email" value={form.email}       onChange={handleChange("email")}       inputStyle={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>Monthly Volume Target</label>
                  <select
                    value={form.volume}
                    onChange={(e) => setForm({ ...form, volume: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option>₹10L - ₹50L</option>
                    <option>₹50L - ₹5Cr</option>
                    <option>₹5Cr+</option>
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" style={{
                    width: "100%", background: GOLD, color: MIDNIGHT, fontWeight: 800,
                    fontSize: 16, padding: "15px", borderRadius: 10, border: "none", cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(255,215,0,.35)", transition: "all .15s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(255,215,0,.5)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,215,0,.35)"; }}
                  >
                    Request Technical Demo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}