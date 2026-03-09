import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";



export default function CreditReport({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="creditReport" />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main className="page-main" style={{ flex: 1, padding: "24px 16px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

              {/* Header */}
              <div className="cr-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 4px", letterSpacing: "-0.5px" }}>NTC Credit Report</h2>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Comprehensive financial health analysis • Last updated: Oct 24, 2023</p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[{ icon: "download", label: "Download PDF" }, { icon: "bookmark", label: "Save Later" }].map((btn) => (
                    <button key={btn.label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#0f172a" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{btn.icon}</span>
                      <span className="cr-btn-label">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="cr-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>

                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Score Card */}
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                    <div style={{ position: "relative", width: 130, height: 130, margin: "0 auto 16px" }}>
                      <svg viewBox="0 0 160 160" style={{ width: "100%", height: "100%" }}>
                        <circle cx="80" cy="80" r="65" fill="transparent" stroke="#e2e8f0" strokeWidth="12" />
                        <circle cx="80" cy="80" r="65" fill="transparent" stroke={GOLD} strokeWidth="12"
                          strokeDasharray="408" strokeDashoffset="110" strokeLinecap="round"
                          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }} />
                      </svg>
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 36, fontWeight: 900, color: MIDNIGHT, lineHeight: 1 }}>720</span>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>Score</span>
                      </div>
                    </div>
                    <span style={{ padding: "6px 14px", background: "#f0fdf4", color: "#16a34a", borderRadius: 999, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tier 1 Low Risk</span>
                    <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7, marginTop: 14 }}>Your credit profile is in the top 15% of applicants.</p>
                  </div>

                  {/* Eligibility Card */}
                  <div style={{ background: MIDNIGHT, color: "#fff", borderRadius: 16, padding: 22, boxShadow: "0 8px 32px rgba(17,66,93,.2)" }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, margin: "0 0 16px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified</span>Loan Eligibility
                    </h3>
                    <div style={{ marginBottom: 14 }}>
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>Max Amount</p>
                      <p style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>₹2,50,000</p>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>Expected APR</p>
                      <p style={{ fontSize: 26, fontWeight: 900, margin: 0 }}>10.5% <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.6 }}>Fixed</span></p>
                    </div>
                    <button style={{ width: "100%", background: GOLD, color: MIDNIGHT, padding: "11px 0", borderRadius: 10, fontWeight: 900, fontSize: 11, border: "none", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Proceed to Lender Selection
                    </button>
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Signals */}
                  <div className="signals-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6, margin: "0 0 14px", color: "#0f172a" }}>
                        <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: 18 }}>check_circle</span>Positive Signals
                      </h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          { icon: "calendar_month", title: "On-Time Payments", desc: "100% of your last 24 payments were on time." },
                          { icon: "pie_chart", title: "Low Utilization", desc: "You are using only 12% of your total credit limit." },
                        ].map((s) => (
                          <div key={s.title} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: 14, borderRadius: 12, display: "flex", gap: 10 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#fff" }}>{s.icon}</span>
                            </div>
                            <div>
                              <p style={{ fontSize: 12, fontWeight: 700, color: "#166534", margin: "0 0 2px" }}>{s.title}</p>
                              <p style={{ fontSize: 11, color: "#16a34a", margin: 0 }}>{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6, margin: "0 0 14px", color: "#0f172a" }}>
                        <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 18 }}>warning</span>Areas to Improve
                      </h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          { icon: "history", title: "Credit History Length", desc: "Average account age is 2.4 years. Goal: 5+ years." },
                          { icon: "search", title: "Recent Inquiries", desc: "3 hard inquiries in the last 6 months." },
                        ].map((s) => (
                          <div key={s.title} style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: 14, borderRadius: 12, display: "flex", gap: 10 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#fff" }}>{s.icon}</span>
                            </div>
                            <div>
                              <p style={{ fontSize: 12, fontWeight: 700, color: "#991b1b", margin: "0 0 2px" }}>{s.title}</p>
                              <p style={{ fontSize: 11, color: "#dc2626", margin: 0 }}>{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Plan */}
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 22, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0f172a", display: "flex", alignItems: "center", gap: 8, margin: "0 0 20px" }}>
                      <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>rocket_launch</span>Improvement Action Plan
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
                      {[
                        { n: 1, title: "Reduce Credit Card Balances", desc: "Paying down your balance by just ₹1,200 could increase your score by 15-20 points within 30 days.", progress: 65 },
                        { n: 2, title: "Request Credit Limit Increase", desc: "Increasing your available credit while keeping spend the same will lower your utilization ratio instantly.", tags: ["High Impact", "Easy Task"] },
                        { n: 3, title: "Maintain Age of Accounts", desc: "Avoid closing old credit card accounts, even if unused, to preserve your credit history length." },
                      ].map((step, idx, list) => (
                        <div key={step.n} style={{ display: "flex", gap: 14, paddingBottom: idx < list.length - 1 ? 20 : 0, position: "relative" }}>
                          {idx < list.length - 1 && <div style={{ position: "absolute", left: 14, top: 30, bottom: 0, width: 2, background: "#f1f5f9" }} />}
                          <div style={{ width: 28, height: 28, borderRadius: "50%", background: MIDNIGHT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, zIndex: 1 }}>{step.n}</div>
                          <div>
                            <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>{step.title}</p>
                            <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                            {step.progress && (
                              <div style={{ marginTop: 8 }}>
                                <div style={{ width: "100%", height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                                  <div style={{ width: `${step.progress}%`, height: "100%", background: GOLD, borderRadius: 99 }} />
                                </div>
                                <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginTop: 4 }}>{step.progress}% of target reached</p>
                              </div>
                            )}
                            {step.tags && (
                              <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                                {step.tags.map((t) => (
                                  <span key={t} style={{ padding: "3px 8px", background: "rgba(17,66,93,.05)", fontSize: 10, fontWeight: 700, borderRadius: 4, color: "#0f172a" }}>{t}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Factors Table */}
              <div style={{ marginTop: 24, borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", background: "#fff", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 400 }}>
                  <thead>
                    <tr style={{ background: "#f8fafc" }}>
                      {["Credit Factor", "Impact", "Status", "Value"].map((h, i) => (
                        <th key={h} style={{ padding: "12px 14px", fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", textAlign: i > 1 ? "center" : "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Payment History", sub: "Consistency in meeting deadlines", impact: 3, status: "Excellent", statusColor: "#16a34a", statusBg: "#f0fdf4", value: "100%" },
                      { factor: "Credit Utilization", sub: "Balance relative to total limits", impact: 3, status: "Good", statusColor: "#16a34a", statusBg: "#f0fdf4", value: "12%" },
                      { factor: "Derogatory Marks", sub: "Bankruptcies or collections", impact: 3, status: "None", statusColor: "#16a34a", statusBg: "#f0fdf4", value: "0" },
                      { factor: "Average Account Age", sub: "Total duration of history", impact: 1, status: "Fair", statusColor: "#d97706", statusBg: "#fffbeb", value: "2.4y" },
                    ].map((row) => (
                      <tr key={row.factor} style={{ borderTop: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "14px" }}>
                          <p style={{ fontSize: 13, fontWeight: 700, margin: 0, color: "#0f172a" }}>{row.factor}</p>
                          <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{row.sub}</p>
                        </td>
                        <td style={{ padding: "14px", textAlign: "center" }}>
                          <div style={{ display: "flex", justifyContent: "center", gap: 2 }}>
                            {[1, 2, 3].map((dot) => (
                              <div key={dot} style={{ width: 4, height: 10, borderRadius: 99, background: dot <= row.impact ? GOLD : "#e2e8f0" }} />
                            ))}
                          </div>
                        </td>
                        <td style={{ padding: "14px", textAlign: "center" }}>
                          <span style={{ padding: "4px 10px", background: row.statusBg, color: row.statusColor, borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{row.status}</span>
                        </td>
                        <td style={{ padding: "14px", textAlign: "center", fontSize: 13, fontFamily: "monospace", fontWeight: 600 }}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer CTA */}
              <div className="cr-footer-cta" style={{ marginTop: 24, background: MIDNIGHT, borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", boxShadow: "0 8px 32px rgba(17,66,93,.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(255,255,255,.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>lightbulb</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>Ready to take the next step?</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,.5)", margin: 0 }}>We've pre-selected 4 lenders based on your Tier 1 profile.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button style={{ padding: "10px 18px", background: "rgba(255,255,255,.1)", color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer" }}>Save and Apply Later</button>
                  <button style={{ padding: "10px 20px", background: GOLD, color: MIDNIGHT, borderRadius: 10, fontWeight: 900, fontSize: 13, border: "none", cursor: "pointer" }}>Proceed to Lender Selection</button>
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
          .cr-main-grid { grid-template-columns: 1fr !important; }
          .signals-grid { grid-template-columns: 1fr !important; }
          .cr-footer-cta { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .cr-btn-label { display: none !important; }
        }
      `}</style>
    </div>
  );
}