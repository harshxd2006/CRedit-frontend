import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const sidebarLinks = [
  { icon: "dashboard",     label: "Dashboard" },
  { icon: "add_circle",    label: "Apply for Loan", active: true },
  { icon: "description",   label: "My Applications" },
  { icon: "account_balance", label: "My Loans" },
  { icon: "trending_up",   label: "Credit Building Journey" },
  { icon: "help",          label: "Help and Support" },
];

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

  const handleSign = (e) => {
    e.preventDefault();
    if (agreed) setSigned(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", height: "calc(100vh - 80px)", overflow: "hidden" }}>
        {/* Sidebar */}
        <aside style={{
          width: 256, background: MIDNIGHT, flexShrink: 0,
          display: "flex", flexDirection: "column",
        }}>
          <nav style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 4 }}>
            {sidebarLinks.map((link) => (
              <a key={link.label} href="#"
                onClick={(e) => { e.preventDefault(); if (link.label === "Dashboard") navigate?.("dashboard"); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 12px", borderRadius: 8, textDecoration: "none",
                  background: link.active ? GOLD : "transparent",
                  color: link.active ? "#000" : "rgba(255,255,255,.7)",
                  fontWeight: link.active ? 700 : 500,
                  fontSize: 14, transition: "all .15s",
                }}
                onMouseEnter={(e) => { if (!link.active) { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "#fff"; } }}
                onMouseLeave={(e) => { if (!link.active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; } }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{link.icon}</span>
                <span style={{ fontSize: 14 }}>{link.label}</span>
              </a>
            ))}
          </nav>
          <div style={{ padding: "16px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px", borderRadius: 8, textDecoration: "none",
              color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 500,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>person_settings</span>
              Profile and Settings
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "40px 48px" }}>
          <div style={{ maxWidth: 896, margin: "0 auto" }}>

            {/* Header / Progress */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: MIDNIGHT }}>Step 7 of 8</span>
                <div style={{ flex: 1, height: 6, background: "#e2e8f0", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: "87.5%", height: "100%", background: GOLD, borderRadius: 99 }} />
                </div>
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.5px" }}>Review &amp; E-Sign Loan Offer</h1>
              <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Please carefully review the Key Fact Statement (KFS) before proceeding with the Aadhaar eSign.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>

              {/* Left Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                {/* KFS Card */}
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(17,66,93,.05)", background: "rgba(17,66,93,.03)" }}>
                    <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: 8, color: "#0f172a" }}>
                      <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>analytics</span>
                      Key Fact Statement (KFS)
                    </h2>
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
                      {[
                        { label: "Loan Amount",   value: "₹5,00,000" },
                        { label: "Interest Rate", value: "10.5% p.a." },
                        { label: "Tenure",        value: "36 Months" },
                        { label: "Monthly EMI",   value: "₹16,254", highlight: true },
                      ].map((item) => (
                        <div key={item.label}>
                          <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 4px" }}>{item.label}</p>
                          <p style={{ fontSize: 22, fontWeight: 700, margin: 0, color: item.highlight ? MIDNIGHT : "#0f172a" }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
                      {[
                        { label: "Processing Fees (incl. GST)", value: "₹4,500" },
                        { label: "Insurance Premium",           value: "₹2,100" },
                      ].map((item) => (
                        <div key={item.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                          <span style={{ fontSize: 13, color: "#475569" }}>{item.label}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{item.value}</span>
                        </div>
                      ))}
                      <div style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: 16, background: MIDNIGHT, borderRadius: 10, color: "#fff",
                      }}>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Total Cost of Credit</p>
                          <p style={{ fontSize: 20, fontWeight: 900, margin: 0 }}>₹5,85,144</p>
                        </div>
                        <span className="material-symbols-outlined" style={{ fontSize: 32, opacity: 0.4 }}>payments</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cooling-off Period */}
                <div style={{
                  background: "#fffbeb", border: "1px solid #fef3c7",
                  borderRadius: 12, padding: 20, display: "flex", gap: 14,
                }}>
                  <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: 22, marginTop: 2, flexShrink: 0 }}>info</span>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 6px" }}>Cooling-off Period</h3>
                    <p style={{ fontSize: 13, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
                      You have a <strong>3-day cooling-off period</strong>. During this time, you can cancel the loan agreement without any foreclosure charges by repaying only the principal and proportionate APR.
                    </p>
                  </div>
                </div>

                {/* Document Preview */}
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <h3 style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 16px" }}>Document Preview</h3>
                  <div style={{
                    aspectRatio: "4 / 3", width: "100%", background: "#f8fafc",
                    border: "2px dashed #e2e8f0", borderRadius: 12,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "border-color .15s",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(17,66,93,.3)"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 48, color: "#cbd5e1", marginBottom: 8 }}>picture_as_pdf</span>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", margin: "0 0 16px" }}>KFS_Loan_Agreement_v1.pdf</p>
                    <button style={{
                      padding: "8px 16px", border: "1px solid #e2e8f0", borderRadius: 8,
                      fontSize: 12, fontWeight: 700, background: "#fff", cursor: "pointer", color: "#475569",
                    }}>View Full Document</button>
                  </div>
                </div>

                {/* Footer Stats */}
                <div style={{ display: "flex", gap: 32, paddingTop: 20, borderTop: "1px solid #e2e8f0" }}>
                  {[
                    { icon: "lock",  label: "Security",  sub: "256-bit Encrypted" },
                    { icon: "timer", label: "Process",   sub: "Instant Sanction" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 8, background: "#f1f5f9",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span className="material-symbols-outlined" style={{ color: "#64748b", fontSize: 20 }}>{item.icon}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 9, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 2px" }}>{item.label}</p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "#0f172a", margin: 0 }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column — eSign */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)",
                  padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,.08)",
                  position: "sticky", top: 0,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: "rgba(17,66,93,.08)", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 16 }}>shield_person</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: "#0f172a" }}>Aadhaar eSign</h3>
                  </div>

                  {signed ? (
                    <div style={{
                      background: "#f0fdf4", border: "1px solid #bbf7d0",
                      borderRadius: 12, padding: 20, textAlign: "center",
                    }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: "50%", background: "#22c55e",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 12px",
                      }}>
                        <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 24 }}>check</span>
                      </div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#166534", margin: "0 0 4px" }}>E-Sign Complete!</p>
                      <p style={{ fontSize: 12, color: "#16a34a", margin: 0 }}>Documents delivered to your email.</p>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      {/* Aadhaar Input */}
                      <div>
                        <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>
                          Aadhaar Number (Last 4 Digits)
                        </label>
                        <div style={{
                          display: "flex", alignItems: "center",
                          background: "#f8fafc", border: "1px solid #e2e8f0",
                          borderRadius: 8, padding: "0 14px", height: 48,
                        }}>
                          <span style={{ color: "#94a3b8", letterSpacing: "0.3em", marginRight: 8, fontSize: 14 }}>•••• ••••</span>
                          <input
                            type="text" maxLength={4} placeholder="5678"
                            value={aadhaarLast4}
                            onChange={(e) => setAadhaarLast4(e.target.value.replace(/\D/g, "").slice(0, 4))}
                            style={{
                              flex: 1, background: "transparent", border: "none", outline: "none",
                              fontSize: 18, fontFamily: "monospace", letterSpacing: "0.3em",
                              color: "#0f172a", fontWeight: 700,
                            }}
                          />
                        </div>
                      </div>

                      {/* OTP */}
                      <div>
                        <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>
                          Enter OTP
                        </label>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                          {otp.map((v, i) => (
                            <input key={i} ref={(el) => (otpRefs.current[i] = el)}
                              type="text" inputMode="numeric" maxLength={1} value={v}
                              onChange={(e) => handleOtpChange(e.target.value, i)}
                              onKeyDown={(e) => handleOtpKeyDown(e, i)}
                              style={{
                                height: 48, textAlign: "center", fontSize: 20, fontWeight: 700,
                                border: "1px solid #e2e8f0", borderRadius: 8,
                                background: "#f8fafc", color: "#0f172a",
                                fontFamily: "'Inter', sans-serif", outline: "none",
                              }}
                              onFocus={(e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = `0 0 0 3px rgba(17,66,93,.1)`; }}
                              onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                            />
                          ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                          <span style={{ fontSize: 11, color: "#64748b" }}>OTP sent to +91 ******4321</span>
                          <button style={{ fontSize: 11, fontWeight: 700, color: MIDNIGHT, background: "none", border: "none", cursor: "pointer" }}>Resend OTP</button>
                        </div>
                      </div>

                      {/* Consent Checkbox */}
                      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
                          style={{ marginTop: 3, width: 16, height: 16, cursor: "pointer", accentColor: MIDNIGHT }} />
                        <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>
                          I hereby authorize CreditFlow to use my Aadhaar details for e-sign purposes and agree to the terms of the Loan Agreement.
                        </span>
                      </label>

                      {/* Submit */}
                      <button onClick={handleSign}
                        style={{
                          width: "100%", padding: "14px 0",
                          background: agreed ? GOLD : "#e2e8f0",
                          color: agreed ? "#000" : "#94a3b8",
                          fontWeight: 700, fontSize: 14, borderRadius: 12,
                          border: "none", cursor: agreed ? "pointer" : "not-allowed",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                          transition: "all .2s",
                          boxShadow: agreed ? "0 6px 20px rgba(255,215,0,.3)" : "none",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>draw</span>
                        Complete E-Sign
                      </button>

                      <p style={{ textAlign: "center", fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                        Powered by CDAC &amp; Protean e-Gov Technologies
                      </p>
                    </div>
                  )}
                </div>

                {/* Success Alert */}
                {signed && (
                  <div style={{
                    background: "#f0fdf4", border: "1px solid #bbf7d0",
                    borderRadius: 12, padding: 16, display: "flex", alignItems: "center", gap: 12,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", background: "#22c55e",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>check</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#166534", margin: 0 }}>Documents Delivered</p>
                      <p style={{ fontSize: 11, color: "#16a34a", margin: 0 }}>Copy sent to registered email.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}