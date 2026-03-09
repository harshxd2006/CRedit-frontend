import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";



export default function ReviewSign({ navigate }) {
  const [aadhaarLast4, setAadhaarLast4] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);
  const otpRefs = useRef([]);

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[idx] = val; setOtp(next);
    if (val && idx < 3) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) otpRefs.current[idx - 1]?.focus();
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="reviewSign" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main className="page-main" style={{ flex: 1, padding: "24px 16px" }}>
            <div style={{ maxWidth: 896, margin: "0 auto" }}>

              {/* Header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: MIDNIGHT }}>Step 7 of 8</span>
                  <div style={{ flex: 1, height: 5, background: "#e2e8f0", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ width: "87.5%", height: "100%", background: GOLD, borderRadius: 99 }} />
                  </div>
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Review &amp; E-Sign Loan Offer</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Please carefully review the Key Fact Statement (KFS) before proceeding with the Aadhaar eSign.</p>
              </div>

              {/* Two-column layout */}
              <div className="review-cols" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

                {/* ── Left Column ── */}
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>

                  {/* KFS Card */}
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                    <div style={{ padding: "18px 20px", borderBottom: "1px solid rgba(17,66,93,.05)", background: "rgba(17,66,93,.03)" }}>
                      <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: 8, color: "#0f172a" }}>
                        <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 18 }}>analytics</span>
                        Key Fact Statement (KFS)
                      </h2>
                    </div>
                    <div style={{ padding: "20px 16px" }}>
                      <div className="kfs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                        {[
                          { label: "Loan Amount",   value: "₹5,00,000" },
                          { label: "Interest Rate", value: "10.5% p.a." },
                          { label: "Tenure",        value: "36 Months" },
                          { label: "Monthly EMI",   value: "₹16,254", highlight: true },
                        ].map((item) => (
                          <div key={item.label}>
                            <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 4px" }}>{item.label}</p>
                            <p style={{ fontSize: 18, fontWeight: 700, margin: 0, color: item.highlight ? MIDNIGHT : "#0f172a" }}>{item.value}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                        {[
                          { label: "Processing Fees (incl. GST)", value: "₹4,500" },
                          { label: "Insurance Premium",           value: "₹2,100" },
                        ].map((item) => (
                          <div key={item.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                            <span style={{ fontSize: 13, color: "#475569" }}>{item.label}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{item.value}</span>
                          </div>
                        ))}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 14, background: MIDNIGHT, borderRadius: 10, color: "#fff" }}>
                          <div>
                            <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Total Cost of Credit</p>
                            <p style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>₹5,85,144</p>
                          </div>
                          <span className="material-symbols-outlined" style={{ fontSize: 28, opacity: 0.4 }}>payments</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cooling-off */}
                  <div style={{ background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: 12, padding: 18, display: "flex", gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: 20, marginTop: 2, flexShrink: 0 }}>info</span>
                    <div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 5px" }}>Cooling-off Period</h3>
                      <p style={{ fontSize: 13, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
                        You have a <strong>3-day cooling-off period</strong>. During this time, you can cancel the loan agreement without any foreclosure charges.
                      </p>
                    </div>
                  </div>

                  {/* Document Preview */}
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                    <h3 style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 14px" }}>Document Preview</h3>
                    <div style={{ aspectRatio: "4 / 3", width: "100%", background: "#f8fafc", border: "2px dashed #e2e8f0", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 44, color: "#cbd5e1", marginBottom: 8 }}>picture_as_pdf</span>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", margin: "0 0 14px" }}>KFS_Loan_Agreement_v1.pdf</p>
                      <button style={{ padding: "8px 16px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontWeight: 700, background: "#fff", cursor: "pointer", color: "#475569" }}>View Full Document</button>
                    </div>
                  </div>
                </div>

                {/* ── Right Column — eSign ── */}
                <div className="esign-col" style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", padding: 22, boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(17,66,93,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 15 }}>shield_person</span>
                      </div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Aadhaar eSign</h3>
                    </div>

                    {signed ? (
                      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: 20, textAlign: "center" }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                          <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 22 }}>check</span>
                        </div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#166534", margin: "0 0 4px" }}>E-Sign Complete!</p>
                        <p style={{ fontSize: 13, color: "#16a34a", margin: 0 }}>Documents delivered to your email.</p>
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                        {/* Aadhaar */}
                        <div>
                          <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 7 }}>Aadhaar Number (Last 4 Digits)</label>
                          <div style={{ display: "flex", alignItems: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "0 12px", height: 46 }}>
                            <span style={{ color: "#94a3b8", letterSpacing: "0.3em", marginRight: 8, fontSize: 12 }}>•••• ••••</span>
                            <input type="text" maxLength={4} placeholder="5678" value={aadhaarLast4}
                              onChange={(e) => setAadhaarLast4(e.target.value.replace(/\D/g, "").slice(0, 4))}
                              style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.3em", color: "#0f172a", fontWeight: 700 }} />
                          </div>
                        </div>

                        {/* OTP */}
                        <div>
                          <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 7 }}>Enter OTP</label>
                          <div style={{ display: "flex", gap: 8 }}>
                            {otp.map((v, i) => (
                              <input key={i} ref={(el) => (otpRefs.current[i] = el)}
                                type="text" inputMode="numeric" maxLength={1} value={v}
                                onChange={(e) => handleOtpChange(e.target.value, i)}
                                onKeyDown={(e) => handleOtpKeyDown(e, i)}
                                style={{ flex: 1, minWidth: 0, height: 46, textAlign: "center", fontSize: 20, fontWeight: 700, border: "1px solid #e2e8f0", borderRadius: 8, background: "#f8fafc", color: "#0f172a", fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }}
                                onFocus={(e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; }}
                                onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                              />
                            ))}
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
                            <span style={{ fontSize: 11, color: "#64748b" }}>OTP sent to +91 ******4321</span>
                            <button style={{ fontSize: 11, fontWeight: 700, color: MIDNIGHT, background: "none", border: "none", cursor: "pointer" }}>Resend OTP</button>
                          </div>
                        </div>

                        {/* Consent */}
                        <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, cursor: "pointer", accentColor: MIDNIGHT }} />
                          <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>I hereby authorize CreditFlow to use my Aadhaar details for e-sign purposes and agree to the terms of the Loan Agreement.</span>
                        </label>

                        <button onClick={() => agreed && setSigned(true)}
                          style={{ width: "100%", padding: "13px 0", background: agreed ? GOLD : "#e2e8f0", color: agreed ? "#000" : "#94a3b8", fontWeight: 700, fontSize: 13, borderRadius: 12, border: "none", cursor: agreed ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .2s", boxShadow: agreed ? "0 6px 20px rgba(255,215,0,.3)" : "none" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>draw</span>
                          Complete E-Sign
                        </button>

                        <p style={{ textAlign: "center", fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                          Powered by CDAC &amp; Protean e-Gov Technologies
                        </p>
                      </div>
                    )}
                  </div>
                </div>
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
        @media (max-width: 768px) {
          .review-cols { flex-direction: column !important; }
          .esign-col { width: 100% !important; }
          .kfs-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}