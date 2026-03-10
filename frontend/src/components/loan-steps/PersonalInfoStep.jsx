import React from 'react';

// Common styles and components can be passed or imported.
export default function PersonalInfoStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Title & Subtitle */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Identity Verification</h3>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Securely verify your identity using Government-issued documents.</p>
        </div>

        {/* Card 1 — PAN Card Verification */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 20 }}>lock</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>PAN Card Verification</span>
            </div>
            <div style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>✓ Verified</div>
          </div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 8 }}>PAN Card Number</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              style={{ ...inputStyle, flex: 1, borderRadius: "8px 0 0 8px", borderRight: "none", color: "#0f172a", fontWeight: 600, background: "#fff" }}
              value="ABCDE1234F"
              readOnly
            />
            <button style={{ background: "#f1f5f9", color: "#64748b", height: 44, padding: "0 16px", borderRadius: "0 8px 8px 0", border: "1px solid #e2e8f0", fontWeight: 700, cursor: "default" }}>Verified</button>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginTop: 8, marginBottom: 0 }}>Name on PAN: <span style={{ fontWeight: 700 }}>RAHUL S. KAPOOR</span></p>
        </div>

        {/* Card 2 — Aadhaar eKYC */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginTop: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 20 }}>shield</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>Aadhaar eKYC (DigiLocker)</span>
          </div>

          <div style={{ border: "2px dashed #e2e8f0", borderRadius: 12, background: "#f8fafc", padding: 36, textAlign: "center", margin: "16px 0" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 32, color: GOLD }}>shield</span>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "10px 0 6px" }}>Connect to DigiLocker</h3>
            <p style={{ fontSize: 13, color: "#64748b", maxWidth: 320, margin: "0 auto 20px" }}>Fast-track your application by pulling verified data directly from Aadhaar.</p>
            <button style={{ background: MIDNIGHT, color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>key</span> Authenticate Aadhaar
            </button>
          </div>

          <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Full Name <span className="material-symbols-outlined" style={{ fontSize: 14 }}>lock</span></label>
              <input style={{ ...inputStyle, background: "#f8fafc", color: "#94a3b8", cursor: "not-allowed" }} placeholder="Fetch from Aadhaar" readOnly />
            </div>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Date of Birth <span className="material-symbols-outlined" style={{ fontSize: 14 }}>lock</span></label>
              <input style={{ ...inputStyle, background: "#f8fafc", color: "#94a3b8", cursor: "not-allowed" }} placeholder="DD/MM/YYYY" readOnly />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Registered Address <span className="material-symbols-outlined" style={{ fontSize: 14 }}>lock</span></label>
              <textarea style={{ ...inputStyle, height: 80, padding: 12, resize: "none", background: "#f8fafc", color: "#94a3b8", cursor: "not-allowed", fontFamily: "'Inter', sans-serif" }} placeholder="Permanent address from UIDAI records will appear here" readOnly />
            </div>
          </div>
        </div>
      </div>
  );
}
