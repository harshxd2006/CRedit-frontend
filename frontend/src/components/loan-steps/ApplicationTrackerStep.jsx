import React from 'react';

// Common styles and components can be passed or imported.
export default function ApplicationTrackerStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Status Top Card */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 32 }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "#f1f5f9", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: MIDNIGHT, fontSize: 16 }}>GF</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: MIDNIGHT, margin: "0 0 2px" }}>Gold Tier Finance</h2>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Official Credit Partner</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fefce8", color: "#854d0e", border: "1px solid #fde68a", borderRadius: 9999, padding: "6px 16px", fontSize: 13, fontWeight: 600 }}>
                <span style={{ width: 8, height: 8, background: "#eab308", borderRadius: "50%", animation: "blink 1s infinite", display: "inline-block" }} />
                Under Review
              </div>
              <div style={{ marginTop: 6, fontFamily: "monospace", fontSize: 11, color: "#94a3b8" }}>#CF-98234-LX</div>
            </div>
          </div>

          <h3 style={{ fontSize: 17, fontWeight: 700, color: MIDNIGHT, marginTop: 40, marginBottom: 32 }}>Application Progress</h3>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 15, top: 8, bottom: 8, width: 2, background: "#e2e8f0" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {/* Step 1 */}
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>check</span>
                </div>
                <div style={{ marginLeft: 48 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, margin: "0 0 4px" }}>Application Submitted</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 8px", lineHeight: 1.6 }}>System has verified all uploaded documents and identity information.</p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Completed</span>
                </div>
              </div>
              {/* Step 2 */}
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 0 0 6px rgba(255,215,0,0.2)" }}>
                  <div style={{ width: 12, height: 12, background: MIDNIGHT, borderRadius: "50%" }} />
                </div>
                <div style={{ marginLeft: 48 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, margin: "0 0 4px" }}>Lender Decision</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 8px", lineHeight: 1.6 }}>A specialized credit officer is reviewing your credit limit and terms. This usually takes 24–48 hours.</p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#b45309", textTransform: "uppercase", letterSpacing: "0.08em" }}>In Progress</span>
                </div>
              </div>
              {/* Step 3 */}
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: 8, height: 8, background: "#94a3b8", borderRadius: "50%" }} />
                </div>
                <div style={{ marginLeft: 48, opacity: 0.6 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, margin: "0 0 4px" }}>Offer Accepted and eSigned</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 8px", lineHeight: 1.6 }}>Review the final offer and digitally sign the agreement to initiate disbursement.</p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Upcoming</span>
                </div>
              </div>
              {/* Step 4 */}
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: 8, height: 8, background: "#94a3b8", borderRadius: "50%" }} />
                </div>
                <div style={{ marginLeft: 48, opacity: 0.6 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, margin: "0 0 4px" }}>Loan Disbursed</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 8px", lineHeight: 1.6 }}>Funds will be instantly transferred to your linked bank account ending in **4902.</p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            { label: "Requested Amount", value: "₹75,000" },
            { label: "Purpose", value: "Emergency Medical" },
            { label: "Preferred EMI", value: "₹4,850/mo" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24, textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{item.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: MIDNIGHT }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Info Notice */}
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <span className="material-symbols-outlined" style={{ color: "#3b82f6", fontSize: 22, flexShrink: 0 }}>info</span>
          <p style={{ fontSize: 13, color: "#1e40af", margin: 0, lineHeight: 1.6 }}>
            The lender will respond within 24 hours and you will be notified on your registered mobile number and email.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <button onClick={() => handleStepChange(6)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 20px", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>← Back to Review</button>
          <button onClick={() => handleStepChange(8)} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Continue →</button>
        </div>
      </div>
  );
}
