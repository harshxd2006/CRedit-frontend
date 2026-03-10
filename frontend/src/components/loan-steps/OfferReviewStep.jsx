import React from 'react';

// Common styles and components can be passed or imported.
export default function OfferReviewStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* ── Lender Information Card ── */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 56, height: 56, background: "#eff6ff", borderRadius: 12, border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 28 }}>account_balance</span>
            </div>
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>PrimeCapital</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ padding: "2px 8px", background: "#dcfce7", color: "#15803d", fontSize: 10, fontWeight: 700, borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Approved
                </span>
                <span style={{ fontSize: 11, color: "#94a3b8" }}>Ref: #CF-98234-LX</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Application Date</p>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#0f172a", margin: 0 }}>October 24, 2023</p>
          </div>
        </div>

        {/* ── Loan Configuration Card ── */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          {/* Section Header */}
          <div style={{ padding: "14px 24px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>LOAN CONFIGURATION</p>
          </div>

          {/* 2-col grid */}
          <div className="offer-grid" style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 48px" }}>
            {/* Approved Loan Amount */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, opacity: 0.5, fontSize: 20, marginTop: 2 }}>payments</span>
              <div>
                <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Approved Loan Amount</p>
                <p style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", margin: 0 }}>₹1,50,000</p>
              </div>
            </div>

            {/* Interest Rate */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, opacity: 0.5, fontSize: 20, marginTop: 2 }}>percent</span>
              <div>
                <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Interest Rate</p>
                <p style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", margin: 0 }}>
                  12.5% <span style={{ fontSize: 13, fontWeight: 400, color: "#94a3b8" }}>p.a.</span>
                </p>
              </div>
            </div>

            {/* Tenure */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, opacity: 0.5, fontSize: 20, marginTop: 2 }}>calendar_month</span>
              <div>
                <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Tenure</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>24 Months</p>
              </div>
            </div>

            {/* Monthly EMI */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, opacity: 0.5, fontSize: 20, marginTop: 2 }}>event_repeat</span>
              <div>
                <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Monthly EMI</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>₹7,100</p>
              </div>
            </div>
          </div>

          {/* Totals Row */}
          <div className="offer-grid" style={{ margin: "0 24px", borderTop: "1px dashed #e2e8f0", padding: "18px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Total Interest Payable</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 }}>₹20,400</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Total Repayment</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 }}>₹1,70,400</p>
            </div>
          </div>

          {/* Remarks */}
          <div style={{ margin: "0 24px 24px", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: 16, marginTop: 1, flexShrink: 0 }}>info</span>
            <p style={{ fontSize: 12, color: "#92400e", fontStyle: "italic", margin: 0 }}>
              Remarks: Offer valid for 48 hours. Subject to final eSign verification.
            </p>
          </div>
        </div>

        {/* ── RBI Cooling-Off Notice ── */}
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 34, height: 34, background: "#2563eb", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>verified_user</span>
          </div>
          <p style={{ fontSize: 13, color: "#1e3a8a", margin: 0, lineHeight: 1.6 }}>
            As per RBI guidelines, you have a 3-day cooling-off period to cancel this loan without any penalty, even after e-signing.
          </p>
        </div>

        {/* ── Action Buttons ── */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <button onClick={() => handleStepChange(7)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 20px", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>← Back to Tracker</button>
          <button onClick={() => handleStepChange(9)} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Accept Offer ✓</button>
        </div>
      </div>
  );
}
