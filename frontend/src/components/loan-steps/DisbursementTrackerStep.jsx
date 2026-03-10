import React from 'react';

// Common styles and components can be passed or imported.
export default function DisbursementTrackerStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Status Top Card */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden", marginBottom: 32 }}>
          {/* Header row */}
          <div style={{ padding: "24px 32px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: MIDNIGHT, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 20 }}>GF</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>GoldFin Capital</h2>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Corporate Lending Partner</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", borderRadius: 9999, padding: "6px 16px", fontSize: 13, fontWeight: 600 }}>
                <span style={{ width: 8, height: 8, background: "#3b82f6", borderRadius: "50%", animation: "blink 1s infinite", display: "inline-block" }} />
                Disbursement in Progress
              </div>
              <div style={{ marginTop: 6, fontFamily: "monospace", fontSize: 11, color: "#94a3b8" }}>ID: #CF-98234-LX</div>
            </div>
          </div>

          <div className="tracker-body" style={{ display: "flex", flexWrap: "wrap" }}>
            {/* Left column */}
            <div style={{ flex: 1, minWidth: 280, padding: 32, borderRight: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 32, marginTop: 0 }}>APPLICATION PROGRESS</p>

              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 32 }}>
                {/* Step 1 */}
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ position: "absolute", left: 15, top: 32, bottom: -32, width: 2, background: "#22c55e" }} />
                  <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>check</span>
                  </div>
                  <div style={{ marginLeft: 48 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>Application Submitted</h4>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Completed on Oct 20, 2023</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ position: "absolute", left: 15, top: 32, bottom: -32, width: 2, background: "#22c55e" }} />
                  <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>check</span>
                  </div>
                  <div style={{ marginLeft: 48 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>Lender Decision</h4>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Approved for ₹75,000</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ position: "absolute", left: 15, top: 32, bottom: -32, width: 2, background: "#e2e8f0" }} />
                  <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 18 }}>check</span>
                  </div>
                  <div style={{ marginLeft: 48 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>Offer Accepted and eSigned</h4>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Loan agreement signed electronically</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ position: "absolute", left: 0, width: 32, height: 32, borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <div style={{ width: 10, height: 10, background: "#94a3b8", borderRadius: "50%" }} />
                  </div>
                  <div style={{ marginLeft: 48 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: "0 0 4px" }}>Loan Disbursed</h4>
                    <p style={{ fontSize: 13, color: "#2563eb", fontWeight: 500, margin: 0 }}>Expected within 4-6 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div style={{ flex: 1, minWidth: 280, padding: 32, background: "#f8fafc" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24, marginTop: 0 }}>LOAN SUMMARY</p>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Approved Amount</span>
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>₹75,000</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Interest Rate</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>10.5% p.a.</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Tenure</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>18 Months</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Monthly EMI</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>₹4,850</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Disbursal Mode</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: MIDNIGHT }}>Direct Bank Transfer</span>
                </div>
              </div>

              <div style={{ marginTop: 24, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                <span className="material-symbols-outlined" style={{ color: "#3b82f6", fontSize: 20 }}>info</span>
                <p style={{ fontSize: 13, color: "#1e40af", margin: 0, lineHeight: 1.6 }}>
                  The lender is processing the disbursement and the amount will be credited to your bank account within 6 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <button onClick={() => handleStepChange(9)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 20px", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>← Back to Sign</button>
          <button onClick={() => navigate('applicationSubmitted')} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Submit Final ✓</button>
        </div>
      </div>
  );
}
