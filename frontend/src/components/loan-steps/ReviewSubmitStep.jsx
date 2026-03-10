import React from 'react';

// Common styles and components can be passed or imported.
export default function ReviewSubmitStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 8px" }}>Review & Confirm Application</h2>
          <p style={{ fontSize: 15, color: "#64748b", margin: 0 }}>Please check all details carefully before proceeding.</p>
        </div>

        <div className="review-submit-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 1000, marginTop: 32 }}>

          {/* Card 1 — Personal Details */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>person</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: MIDNIGHT, margin: 0 }}>Personal Details</h3>
              </div>
              <button style={{ background: "none", border: "none", color: MIDNIGHT, fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>edit</span> Edit
              </button>
            </div>
            <div className="field-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Full Name" value="Rajesh Kumar" />
              <Field label="PAN Card" value="ABCDE1234F" />
              <Field label="DOB & Gender" value="12/05/1988 | Male" />
              <Field label="Contact Info" value="+91 98765 43210" />
              <Field label="Current Address" value="Flat 402, Garden Towers, Whitefield, Bangalore - 560066" colSpan={2} />
            </div>
          </div>

          {/* Card 2 — Employment */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>work</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: MIDNIGHT, margin: 0 }}>Employment</h3>
              </div>
              <button style={{ background: "none", border: "none", color: MIDNIGHT, fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>edit</span> Edit
              </button>
            </div>
            <div className="field-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Employment Type" value="Salaried" />
              <Field label="Employer" value="TechCorp Solutions" />
              <Field label="Monthly Salary" value="₹52,000" />
              <Field label="Current Tenure" value="10 Months" />
            </div>
          </div>

          {/* Card 3 — Loan Selection */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>account_balance</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: MIDNIGHT, margin: 0 }}>Loan Selection</h3>
              </div>
              <button style={{ background: "none", border: "none", color: MIDNIGHT, fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>edit</span> Edit
              </button>
            </div>
            <div className="field-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Requested Amount" value="₹2,50,000" highlight />
              <Field label="Loan Purpose" value="Debt Consolidation" />
              <Field label="Preferred Tenure" value="36 Months" />
              <Field label="Estimated EMI" value="₹8,450/mo" />
            </div>
          </div>

          {/* Card 4 — Selected Lender */}
          <div style={{ background: "rgba(255,215,0,0.08)", border: `2px solid ${GOLD}`, borderRadius: 12, padding: 24, position: "relative" }}>
            <div style={{ position: "absolute", top: 0, right: 0, background: GOLD, color: MIDNIGHT, fontSize: 10, fontWeight: 800, padding: "4px 16px", textTransform: "uppercase" }}>Recommended</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: MIDNIGHT }}>domain</span>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: MIDNIGHT }}>HDFC Bank</span>
                  <span style={{ background: "rgba(17,66,93,0.08)", color: MIDNIGHT, fontSize: 10, fontWeight: 700, borderRadius: 20, padding: "2px 8px" }}>Fast & Reliable</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14, color: "#f59e0b" }}>star</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>4.5</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>(1.2k reviews)</span>
                </div>
              </div>
            </div>
            <div className="lender-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 20 }}>
              <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 8, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Interest Rate</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT }}>10.5% p.a.</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 8, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Processing</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT }}>₹1,500</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 8, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Disbursal</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT }}>24 hrs</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
          <button onClick={() => handleStepChange(5)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 20px", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>← Back to Lender Selection</button>
          <button onClick={() => handleStepChange(7)} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Proceed to Confirm →</button>
        </div>
      </div>
  );
}
