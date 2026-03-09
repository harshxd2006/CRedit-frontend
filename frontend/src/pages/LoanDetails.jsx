import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";



export default function LoanDetails({ navigate }) {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [purpose, setPurpose] = useState("Debt Consolidation");
  const [tenure, setTenure] = useState("36 Months");

  const maxAmount = 500000;
  const minAmount = 10000;
  const emi = Math.round(loanAmount * 0.0338);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="applyForLoan" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>

          {/* Sub-header */}
          <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 56, background: "#fff", borderBottom: "1px solid #e2e8f0", flexShrink: 0 }}>
            <h1 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: "#0f172a" }}>Configure Loan</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: 0 }}>Alex Thompson</p>
                <p style={{ fontSize: 9, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Premium Member</p>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#e2e8f0", border: `2px solid rgba(255,215,0,.4)` }} />
            </div>
          </header>

          {/* Main Content */}
          <main className="page-main" style={{ flex: 1, padding: "24px 16px" }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>

              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Loan Customization</h2>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Fine-tune your credit requirements.</p>
              </div>

              {/* Loan Amount Slider */}
              <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", padding: "24px 20px", marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div className="loan-slider-top" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 14 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>Desired Loan Amount</h3>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Drag to adjust your capital requirement</p>
                  </div>
                  <div style={{ background: "rgba(17,66,93,.05)", border: "1px solid rgba(17,66,93,.1)", borderRadius: 12, padding: "8px 16px", flexShrink: 0 }}>
                    <span style={{ fontSize: 24, fontWeight: 900, color: MIDNIGHT }}>₹{(loanAmount / 100000).toFixed(1)}L</span>
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <input type="range" min={minAmount} max={maxAmount} step={10000} value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    style={{ width: "100%", accentColor: MIDNIGHT, cursor: "pointer", height: 6 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
                    <span>₹10,000</span><span>₹5,00,000</span>
                  </div>
                </div>

                {/* EMI Preview */}
                <div className="emi-preview" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  <div style={{ padding: 12, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, textAlign: "center" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", margin: "0 0 4px" }}>Estimated EMI</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#15803d", margin: "0 0 2px" }}>₹{emi.toLocaleString()}</p>
                    <p style={{ fontSize: 10, color: "#22c55e", margin: 0 }}>Per Month</p>
                  </div>
                  <div style={{ padding: 12, background: "rgba(17,66,93,.05)", border: "1px solid rgba(17,66,93,.1)", borderRadius: 12, textAlign: "center" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: MIDNIGHT, textTransform: "uppercase", margin: "0 0 4px" }}>Interest Rate</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: MIDNIGHT, margin: "0 0 2px" }}>10.5%</p>
                    <p style={{ fontSize: 10, color: "#64748b", margin: 0 }}>p.a. Fixed</p>
                  </div>
                  <div style={{ padding: 12, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, textAlign: "center" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", margin: "0 0 4px" }}>Total Tenure</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>36 Months</p>
                    <p style={{ fontSize: 10, color: "#64748b", margin: 0 }}>Standard Term</p>
                  </div>
                </div>
              </div>

              {/* Purpose & Tenure */}
              <div className="purpose-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>Loan Purpose</label>
                  <select value={purpose} onChange={(e) => setPurpose(e.target.value)}
                    style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none" }}>
                    <option>Debt Consolidation</option>
                    <option>Home Renovation</option>
                    <option>Business Expansion</option>
                    <option>Education</option>
                    <option>Medical Emergency</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>Preferred Tenure</label>
                  <select value={tenure} onChange={(e) => setTenure(e.target.value)}
                    style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none" }}>
                    <option>12 Months</option>
                    <option>24 Months</option>
                    <option>36 Months</option>
                    <option>48 Months</option>
                    <option>60 Months</option>
                  </select>
                </div>
              </div>

              {/* Advanced Preferences */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>Advanced Preferences (Optional)</h3>
                  <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
                </div>
                <div className="adv-pref-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                  {[
                    { label: "Target EMI",      placeholder: "e.g. 10,000" },
                    { label: "Max Rate (%)",    placeholder: "e.g. 12" },
                    { label: "Collateral Type", placeholder: "Unsecured", disabled: true },
                  ].map((field) => (
                    <div key={field.label}>
                      <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{field.label}</label>
                      <input placeholder={field.placeholder} disabled={field.disabled}
                        style={{ width: "100%", height: 40, padding: "0 12px", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 13, fontFamily: "'Inter', sans-serif", outline: "none", background: field.disabled ? "#f8fafc" : "#fff", boxSizing: "border-box" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Banner */}
              <div style={{ display: "flex", gap: 12, padding: 16, background: "rgba(17,66,93,.05)", border: "1px solid rgba(17,66,93,.1)", borderRadius: 12, marginBottom: 28 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20, flexShrink: 0 }}>info</span>
                <p style={{ fontSize: 13, color: MIDNIGHT, lineHeight: 1.6, margin: 0 }}>
                  Your credit score is 780. You qualify for our <strong>Platinum Tier</strong> interest rates starting at 8.99% p.a.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="loan-footer-cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, borderTop: "1px solid #e2e8f0", paddingBottom: 32, gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => navigate?.("dashboard")}
                  style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#64748b", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
                  Back to Employment
                </button>
                <button style={{ padding: "12px 28px", background: GOLD, color: MIDNIGHT, borderRadius: 12, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(255,215,0,.3)", transition: "transform .15s" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
                  Generate My Report
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>analytics</span>
                </button>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* FAQ — full width, outside the sidebar+content flex row */}
      <FAQSection />

      {/* Footer — full width */}
      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .emi-preview { grid-template-columns: 1fr !important; }
          .purpose-grid { grid-template-columns: 1fr !important; }
          .adv-pref-grid { grid-template-columns: 1fr !important; }
          .loan-slider-top { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
}