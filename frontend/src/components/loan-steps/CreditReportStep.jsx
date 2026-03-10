import React from 'react';

// Common styles and components can be passed or imported.
export default function CreditReportStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Page header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: MIDNIGHT, margin: "0 0 4px" }}>NTC Credit Report</h3>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Comprehensive financial health analysis • Last updated: Oct 24, 2023</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>↓ Download PDF</button>
            <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>Save Later</button>
          </div>
        </div>

        {/* Top section — 3 column grid */}
        <div className="credit-report-grid" style={{ display: "grid", gridTemplateColumns: "220px auto auto", gap: 16, alignItems: "start" }}>
          {/* Column 1 — Score Card */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, textAlign: "center" }}>
            <div style={{ width: 120, height: 120, margin: "0 auto", position: "relative" }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle cx="60" cy="60" r="54" fill="none" stroke={GOLD} strokeWidth="8" strokeDasharray="339.292" strokeDashoffset="67.858" strokeLinecap="round" transform="rotate(-90 60 60)" />
              </svg>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "100%" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: MIDNIGHT, lineHeight: 1 }}>720</div>
                <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em", marginTop: 2 }}>SCORE</div>
              </div>
            </div>
            <div style={{ background: "rgba(255,215,0,0.12)", color: "#b45309", fontSize: 11, fontWeight: 700, borderRadius: 20, padding: "4px 12px", marginTop: 12, display: "inline-block" }}>TIER 1 LOW RISK</div>
            <p style={{ fontSize: 12, color: "#64748b", marginTop: 8, marginBottom: 0, lineHeight: 1.4 }}>Your credit profile is in the top 15% of applicants.</p>

            <div style={{ background: MIDNIGHT, borderRadius: 12, padding: 16, marginTop: 16, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 16 }}>verified</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Loan Eligibility</span>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 2 }}>MAX AMOUNT</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>₹2,50,000</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 2 }}>EXPECTED APR</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: GOLD }}>10.5% Fixed</div>
              </div>
              <button onClick={() => handleStepChange(5)} style={{ width: "100%", marginTop: 16, background: GOLD, color: MIDNIGHT, fontWeight: 800, fontSize: 12, borderRadius: 8, padding: 10, border: "none", cursor: "pointer" }}>
                PROCEED TO LENDER SELECTION
              </button>
            </div>
          </div>

          {/* Column 2 — Positive Signals */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: 20 }}>check_circle</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#15803d" }}>Positive Signals</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#15803d", fontSize: 16 }}>calendar_today</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#15803d" }}>On-Time Payments</span>
                </div>
                <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.4 }}>100% of your last 24 payments were on time.</div>
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#15803d", fontSize: 16 }}>credit_card</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#15803d" }}>Low Utilization</span>
                </div>
                <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.4 }}>You are using only 12% of your total credit limit.</div>
              </div>
            </div>
          </div>

          {/* Column 3 — Areas to Improve */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ color: "#f59e0b", fontSize: 20 }}>warning</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#b45309" }}>Areas to Improve</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#b45309", fontSize: 16 }}>history</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#b45309" }}>Credit History Length</span>
                </div>
                <div style={{ fontSize: 12, color: "#92400e", lineHeight: 1.4 }}>Average account age is 2.4 years. Goal: 5+ years.</div>
              </div>
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#b45309", fontSize: 16 }}>search</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#b45309" }}>Recent Inquiries</span>
                </div>
                <div style={{ fontSize: 12, color: "#92400e", lineHeight: 1.4 }}>3 hard inquiries in the last 6 months.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Action Plan */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, marginTop: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>rocket_launch</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: MIDNIGHT }}>Improvement Action Plan</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Reduce Credit Card Balances</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, marginBottom: 12 }}>Paying down your balance by just ₹1,200 could increase your score by 15–20 points within 30 days.</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, height: 6, borderRadius: 4, background: "#e2e8f0", overflow: "hidden" }}>
                    <div style={{ width: "65%", height: "100%", background: GOLD }}></div>
                  </div>
                  <div style={{ fontSize: 10, color: "#b45309", fontWeight: 700, letterSpacing: "0.05em" }}>65% OF TARGET REACHED</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</div>
              <div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Request Credit Limit Increase</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, marginBottom: 8 }}>Increasing your available credit while keeping spend the same will lower your utilization ratio instantly.</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ background: "#f0fdf4", color: "#15803d", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "3px 10px" }}>High Impact</span>
                  <span style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "3px 10px" }}>Easy Task</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
              <div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Maintain Age of Accounts</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>Avoid closing old credit card accounts, even if unused, to preserve your credit history length.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Factors Table */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, marginTop: 16, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 16, background: "#f8fafc", padding: "12px 20px", fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <div>CREDIT FACTOR</div>
            <div>IMPACT</div>
            <div>STATUS</div>
            <div>VALUE</div>
          </div>
          {[
            { title: "Payment History", sub: "Consistency in making deadlines", impact: "|||", status: "Excellent", statusColor: "#22c55e", val: "100%" },
            { title: "Credit Utilization", sub: "Balance relative to total limits", impact: "|||", status: "Good", statusColor: "#22c55e", val: "12%" },
            { title: "Derogatory Marks", sub: "Bankruptcies or collections", impact: "|||", status: "None", statusColor: "#22c55e", val: "0" },
            { title: "Average Account Age", sub: "Total duration of history", impact: "|", status: "Fair", statusColor: "#f59e0b", val: "2.4y" }
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 16, alignItems: "center", padding: "16px 20px", borderTop: "1px solid #f1f5f9" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{row.title}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{row.sub}</div>
              </div>
              <div style={{ fontSize: 16, color: GOLD, letterSpacing: -2, fontWeight: 900 }}>
                {row.impact}<span style={{ color: "#e2e8f0" }}>{"|||".slice(row.impact.length)}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: row.statusColor }}>{row.status}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{row.val}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div style={{ background: MIDNIGHT, borderRadius: 16, padding: "20px 28px", marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 24 }}>place</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Ready to take the next step?</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>We've pre-selected 4 lenders based on your Tier 1 profile.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "10px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Save and Apply Later</button>
            <button onClick={() => handleStepChange(5)} style={{ background: GOLD, color: MIDNIGHT, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 800, fontSize: 13, cursor: "pointer" }}>Proceed to Lender Selection</button>
          </div>
        </div>
      </div>
  );
}
