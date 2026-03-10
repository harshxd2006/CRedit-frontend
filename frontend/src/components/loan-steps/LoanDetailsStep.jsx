import React from 'react';

// Common styles and components can be passed or imported.
export default function LoanDetailsStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Card 1 — Loan Amount Slider */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Desired Loan Amount</h4>
              <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Drag to adjust your capital requirement</p>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 18px", fontSize: 22, fontWeight: 900, color: MIDNIGHT }}>
              ₹{(parseInt(form.loanAmount) / 100000).toFixed(1)}L
            </div>
          </div>

          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={form.loanAmount}
            onChange={(e) => set("loanAmount", e.target.value)}
            style={{ width: "100%", accentColor: MIDNIGHT, cursor: "pointer" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>₹10,000</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>₹5,00,000</span>
          </div>

          <div className="form-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>ESTIMATED EMI</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#15803d", marginBottom: 2 }}>₹{Math.round(parseInt(form.loanAmount) * 0.0338).toLocaleString()}</div>
              <div style={{ fontSize: 11, color: "#22c55e" }}>Per Month</div>
            </div>
            <div style={{ background: "rgba(17,66,93,0.05)", border: "1px solid rgba(17,66,93,0.1)", borderRadius: 12, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: MIDNIGHT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>INTEREST RATE</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: MIDNIGHT, marginBottom: 2 }}>10.5%</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>p.a. Fixed</div>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>TOTAL TENURE</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", marginBottom: 2 }}>{form.tenure.split(' ')[0]}</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>Months</div>
            </div>
          </div>
        </div>

        {/* Card 2 — Purpose & Tenure */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
          <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={labelStyle}>Loan Purpose</label>
              <select style={selectStyle} value={form.loanPurpose} onChange={e => set("loanPurpose", e.target.value)}>
                <option>Debt Consolidation</option>
                <option>Home Renovation</option>
                <option>Business Expansion</option>
                <option>Education</option>
                <option>Medical Emergency</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Preferred Tenure</label>
              <select style={selectStyle} value={form.tenure} onChange={e => set("tenure", e.target.value)}>
                <option>12 Months</option>
                <option>24 Months</option>
                <option>36 Months</option>
                <option>48 Months</option>
                <option>60 Months</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "#e2e8f0" }}></div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase" }}>ADVANCED PREFERENCES (OPTIONAL)</div>
            <div style={{ flex: 1, height: 1, background: "#e2e8f0" }}></div>
          </div>

          <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ ...labelStyle, fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>TARGET EMI</label>
              <input style={inputStyle} value={form.targetEmi} onChange={e => set("targetEmi", e.target.value)} placeholder="e.g. 10,000" />
            </div>
            <div>
              <label style={{ ...labelStyle, fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>MAX RATE (%)</label>
              <input style={inputStyle} value={form.maxRate} onChange={e => set("maxRate", e.target.value)} placeholder="e.g. 12" />
            </div>
            <div>
              <label style={{ ...labelStyle, fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>COLLATERAL TYPE</label>
              <input style={{ ...inputStyle, background: "#f8fafc", color: "#94a3b8", cursor: "not-allowed" }} value="Unsecured" disabled readOnly />
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
          <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>info</span>
          <div style={{ fontSize: 13, color: "#475569" }}>
            Your credit score is 780. You qualify for our <span style={{ fontWeight: 700, color: MIDNIGHT }}>Platinum Tier</span> interest rates starting at 8.99% p.a.
          </div>
        </div>

      </div>
  );
}
