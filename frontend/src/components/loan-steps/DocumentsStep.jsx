import React from 'react';

// Common styles and components can be passed or imported.
export default function DocumentsStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Header & Progress */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 4px" }}>Bank Statement Analysis</h3>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Verify your financial health and income stability through automated data extraction.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ width: 12, height: 4, borderRadius: 2, background: i <= 3 ? GOLD : "#e2e8f0" }} />
              ))}
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD }}>60% Complete</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Option 1 */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 18 }}>upload_file</span>
              Option 1: Manual PDF Upload
            </div>
            <div style={{ border: "2px dashed #e2e8f0", borderRadius: 12, background: "#f8fafc", padding: 32, textAlign: "center", marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 36, color: "#94a3b8" }}>cloud_upload</span>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "10px 0 4px" }}>Drag & drop bank statements</p>
              <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 16px" }}>Accepts PDF files (last 6 months required)</p>
              <button style={{ background: GOLD, color: MIDNIGHT, border: "none", padding: "10px 28px", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Browse Files</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={{ ...labelStyle, marginBottom: 8 }}>Statement Password (if any)</label>
                <input style={inputStyle} type="password" placeholder="••••••••" />
                <p style={{ fontSize: 12, color: "#94a3b8", margin: "6px 0 0" }}>Passwords are encrypted and never stored</p>
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "#64748b", textTransform: "uppercase", marginBottom: 8 }}>HELPER TIPS</div>
                <ul style={{ margin: 0, paddingLeft: 16, fontSize: 11, color: "#64748b", lineHeight: 1.8 }}>
                  <li>Ensure text is searchable (not scanned images)</li>
                  <li>Include all pages of each statement</li>
                  <li>Resolution must be at least 300 DPI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 18 }}>bolt</span>
              Option 2: Instant AA Connect
              <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4, marginLeft: 8 }}>RECOMMENDED</span>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>Connect your bank account directly via the Account Aggregator framework for 100% verified digital data.</p>
            <button style={{ width: "100%", background: MIDNIGHT, color: "#fff", border: "none", padding: 13, borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Connect Bank Account →</button>
            <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", margin: "8px 0 16px" }}>Supported by 40+ leading financial institutions</p>
            <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: 16 }}>check_circle</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>Real-time Pull</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: 16 }}>check_circle</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>Zero Fraud Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
