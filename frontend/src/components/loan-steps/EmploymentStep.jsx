import React from 'react';

// Common styles and components can be passed or imported.
export default function EmploymentStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Title & Subtitle */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 4px" }}>Employment Details</h3>
          <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Provide your professional background to help us verify your creditworthiness.</p>
        </div>

        {/* Employment Type Selector */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#64748b", textTransform: "uppercase", marginBottom: 12 }}>
            SELECT EMPLOYMENT TYPE
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {/* Salaried Individual Card */}
            <div
              onClick={() => setEmpType("Salaried Individual")}
              style={{
                border: empType === "Salaried Individual" ? `2px solid ${GOLD}` : "2px solid #e2e8f0",
                borderRadius: 12, padding: 20, cursor: "pointer", position: "relative",
                background: empType === "Salaried Individual" ? "rgba(255,215,0,0.04)" : "#fff"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 24 }}>badge</span>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%", border: empType === "Salaried Individual" ? `2px solid ${GOLD}` : "2px solid #e2e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {empType === "Salaried Individual" && <div style={{ width: 10, height: 10, borderRadius: "50%", background: GOLD }} />}
                </div>
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "10px 0 4px" }}>Salaried Individual</h4>
              <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>Receive regular monthly salary from an organization</p>
            </div>

            {/* Self-Employed Card */}
            <div
              onClick={() => setEmpType("Self-Employed")}
              style={{
                border: empType === "Self-Employed" ? `2px solid ${GOLD}` : "2px solid #e2e8f0",
                borderRadius: 12, padding: 20, cursor: "pointer", position: "relative",
                background: empType === "Self-Employed" ? "rgba(255,215,0,0.04)" : "#fff"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 24 }}>store</span>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%", border: empType === "Self-Employed" ? `2px solid ${GOLD}` : "2px solid #e2e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {empType === "Self-Employed" && <div style={{ width: 10, height: 10, borderRadius: "50%", background: GOLD }} />}
                </div>
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "10px 0 4px" }}>Self-Employed</h4>
              <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>Own a business or working as a professional freelancer</p>
            </div>
          </div>
        </div>

        {/* Form fields white card */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, marginTop: 16 }}>
          <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Employer Name */}
            <div style={{ position: "relative" }}>
              <label style={labelStyle}>Employer Name</label>
              <div style={{ position: "relative" }}>
                <input style={{ ...inputStyle, paddingRight: 110 }} value={form.companyName} onChange={e => set("companyName", e.target.value)} placeholder="e.g. Microsoft India" />
                <div style={{
                  position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                  fontSize: 9, background: "#f0fdf4", color: "#16a34a", padding: "2px 6px", borderRadius: 4, fontWeight: 700
                }}>
                  CAT-A EMPLOYER
                </div>
              </div>
            </div>

            {/* Designation */}
            <div>
              <label style={labelStyle}>Designation</label>
              <input style={inputStyle} placeholder="e.g. Senior Product Manager" />
            </div>

            {/* Total Work Experience */}
            <div>
              <label style={labelStyle}>Total Work Experience</label>
              <select style={selectStyle} value={form.workExperience} onChange={e => set("workExperience", e.target.value)}>
                <option value="">Select option</option>
                <option>0-1 Years</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            {/* Net Monthly Salary */}
            <div>
              <label style={labelStyle}>Net Monthly Salary</label>
              <input style={inputStyle} type="number" value={form.monthlyIncome} onChange={e => set("monthlyIncome", e.target.value)} placeholder="₹ 0.00" />
            </div>
          </div>

          {/* Toggle Groups below grid */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Mode of Salary */}
            <div>
              <label style={{ ...labelStyle, marginBottom: 12 }}>Mode of Salary</label>
              <div style={{ display: "flex", gap: 12 }}>
                {["Bank Transfer", "Cheque/Cash"].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setSalaryMode(mode)}
                    style={{
                      padding: "8px 20px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer",
                      background: salaryMode === mode ? MIDNIGHT : "#fff",
                      color: salaryMode === mode ? "#fff" : "#475569",
                      border: salaryMode === mode ? "none" : "1px solid #e2e8f0"
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Employment Nature */}
            <div>
              <label style={{ ...labelStyle, marginBottom: 12 }}>Employment Nature</label>
              <div style={{ display: "flex", gap: 12 }}>
                {["Permanent", "Contractual"].map(nature => (
                  <button
                    key={nature}
                    onClick={() => setEmpNature(nature)}
                    style={{
                      padding: "8px 20px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer",
                      background: empNature === nature ? MIDNIGHT : "#fff",
                      color: empNature === nature ? "#fff" : "#475569",
                      border: empNature === nature ? "none" : "1px solid #e2e8f0"
                    }}
                  >
                    {nature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div style={{ background: MIDNIGHT, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, marginTop: 16 }}>
          <span className="material-symbols-outlined" style={{ color: "rgba(255,255,255,0.5)", fontSize: 20 }}>info</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Why do we need this?</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>Your employment status and income stability are primary factors in determining your credit limit and interest rates.</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: GOLD, cursor: "pointer", flexShrink: 0 }}>LEARN MORE</div>
        </div>
      </div>
  );
}
