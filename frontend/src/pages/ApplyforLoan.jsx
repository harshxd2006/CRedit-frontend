import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const steps = ["Personal Information", "Employment & Income", "Loan Details", "Documents", "Review & Submit"];

export default function ApplyforLoan({ navigate }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "", dob: "", gender: "", mobile: "", email: "", pan: "", aadhar: "",
    employmentType: "", companyName: "", monthlyIncome: "", workExperience: "",
    loanAmount: "", loanPurpose: "", tenure: "",
  });

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const inputStyle = {
    width: "100%", height: 44, padding: "0 12px", borderRadius: 8,
    border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif",
    outline: "none", boxSizing: "border-box", background: "#fff",
  };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 };
  const selectStyle = { ...inputStyle };

  const renderStep = () => {
    if (currentStep === 0) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div><label style={labelStyle}>Full Name</label><input style={inputStyle} value={form.fullName} onChange={e => set("fullName", e.target.value)} placeholder="As per Aadhaar" /></div>
          <div><label style={labelStyle}>Date of Birth</label><input style={inputStyle} type="date" value={form.dob} onChange={e => set("dob", e.target.value)} /></div>
          <div>
            <label style={labelStyle}>Gender</label>
            <select style={selectStyle} value={form.gender} onChange={e => set("gender", e.target.value)}>
              <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
          <div><label style={labelStyle}>Mobile Number</label><input style={inputStyle} value={form.mobile} onChange={e => set("mobile", e.target.value)} placeholder="+91 XXXXX XXXXX" /></div>
          <div><label style={labelStyle}>Email Address</label><input style={inputStyle} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" /></div>
          <div><label style={labelStyle}>PAN Number</label><input style={inputStyle} value={form.pan} onChange={e => set("pan", e.target.value)} placeholder="ABCDE1234F" /></div>
          <div className="full-span"><label style={labelStyle}>Aadhaar Number</label><input style={inputStyle} value={form.aadhar} onChange={e => set("aadhar", e.target.value)} placeholder="XXXX XXXX XXXX" /></div>
        </div>
      </div>
    );
    if (currentStep === 1) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>Employment Type</label>
            <select style={selectStyle} value={form.employmentType} onChange={e => set("employmentType", e.target.value)}>
              <option value="">Select</option><option>Salaried</option><option>Self-Employed</option><option>Business Owner</option>
            </select>
          </div>
          <div><label style={labelStyle}>Company / Business Name</label><input style={inputStyle} value={form.companyName} onChange={e => set("companyName", e.target.value)} /></div>
          <div><label style={labelStyle}>Monthly Income (₹)</label><input style={inputStyle} type="number" value={form.monthlyIncome} onChange={e => set("monthlyIncome", e.target.value)} placeholder="e.g. 50000" /></div>
          <div><label style={labelStyle}>Work Experience (Years)</label><input style={inputStyle} type="number" value={form.workExperience} onChange={e => set("workExperience", e.target.value)} placeholder="e.g. 3" /></div>
        </div>
      </div>
    );
    if (currentStep === 2) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div><label style={labelStyle}>Loan Amount (₹)</label><input style={inputStyle} type="number" value={form.loanAmount} onChange={e => set("loanAmount", e.target.value)} placeholder="e.g. 250000" /></div>
          <div>
            <label style={labelStyle}>Loan Purpose</label>
            <select style={selectStyle} value={form.loanPurpose} onChange={e => set("loanPurpose", e.target.value)}>
              <option value="">Select</option><option>Personal Use</option><option>Medical Emergency</option><option>Education</option><option>Home Renovation</option><option>Business</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Repayment Tenure</label>
            <select style={selectStyle} value={form.tenure} onChange={e => set("tenure", e.target.value)}>
              <option value="">Select</option><option>12 Months</option><option>24 Months</option><option>36 Months</option><option>48 Months</option><option>60 Months</option>
            </select>
          </div>
        </div>
        {form.loanAmount && form.tenure && (
          <div style={{ background: "rgba(17,66,93,.05)", borderRadius: 12, padding: 18 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Estimated EMI</p>
            <p style={{ fontSize: 28, fontWeight: 900, color: MIDNIGHT, margin: 0 }}>
              ₹{Math.round((parseInt(form.loanAmount) || 0) / (parseInt(form.tenure) || 1) * 1.1).toLocaleString()}
              <span style={{ fontSize: 14, fontWeight: 400, color: "#64748b" }}>/month</span>
            </p>
          </div>
        )}
      </div>
    );
    if (currentStep === 3) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { label: "Aadhaar Card", desc: "Front and back side", icon: "badge" },
          { label: "PAN Card", desc: "Clear photo or scan", icon: "credit_card" },
          { label: "Last 3 Months Salary Slips", desc: "PDF or image format", icon: "description" },
          { label: "Bank Statement (6 months)", desc: "From your primary bank", icon: "account_balance" },
        ].map((doc) => (
          <div key={doc.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: 18, background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: MIDNIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#fff" }}>{doc.icon}</span>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>{doc.label}</p>
                <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>{doc.desc}</p>
              </div>
            </div>
            <button style={{ padding: "8px 16px", background: GOLD, color: MIDNIGHT, border: "none", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer", flexShrink: 0 }}>Upload</button>
          </div>
        ))}
      </div>
    );
    if (currentStep === 4) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { title: "Personal Information", items: [{ l: "Full Name", v: form.fullName || "—" }, { l: "PAN", v: form.pan || "—" }, { l: "Mobile", v: form.mobile || "—" }] },
          { title: "Employment & Income", items: [{ l: "Type", v: form.employmentType || "—" }, { l: "Company", v: form.companyName || "—" }, { l: "Monthly Income", v: form.monthlyIncome ? `₹${parseInt(form.monthlyIncome).toLocaleString()}` : "—" }] },
          { title: "Loan Details", items: [{ l: "Amount", v: form.loanAmount ? `₹${parseInt(form.loanAmount).toLocaleString()}` : "—" }, { l: "Purpose", v: form.loanPurpose || "—" }, { l: "Tenure", v: form.tenure || "—" }] },
        ].map((section) => (
          <div key={section.title} style={{ background: "#f8fafc", borderRadius: 12, padding: 18, border: "1px solid #e2e8f0" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>{section.title}</p>
            <div className="review-items" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {section.items.map((i) => (
                <div key={i.l}><p style={{ fontSize: 11, color: "#94a3b8", margin: "0 0 2px" }}>{i.l}</p><p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: 0 }}>{i.v}</p></div>
              ))}
            </div>
          </div>
        ))}
        <label style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, background: "#fffbeb", borderRadius: 10, border: "1px solid #fef3c7", cursor: "pointer" }}>
          <input type="checkbox" style={{ marginTop: 2 }} />
          <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>I confirm that all information provided is accurate and I agree to the Terms & Conditions and Privacy Policy of CreditFlow.</span>
        </label>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="applyForLoan" />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main className="page-main" style={{ flex: 1, padding: "24px 16px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>

              {/* Page Header */}
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Apply for Loan</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Complete all steps to submit your loan application.</p>
              </div>

              {/* Stepper */}
              <div style={{ overflowX: "auto", paddingBottom: 8, marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 480 }}>
                  {steps.map((step, i) => (
                    <div key={step} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer" }} onClick={() => i <= currentStep && setCurrentStep(i)}>
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                          background: i < currentStep ? "#22c55e" : i === currentStep ? MIDNIGHT : "#e2e8f0",
                          color: i <= currentStep ? "#fff" : "#94a3b8", fontWeight: 700, fontSize: 13,
                        }}>
                          {i < currentStep ? <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span> : i + 1}
                        </div>
                        <span style={{ fontSize: 9, fontWeight: 600, color: i === currentStep ? MIDNIGHT : "#94a3b8", textAlign: "center", maxWidth: 64, lineHeight: 1.3 }}>{step}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div style={{ flex: 1, height: 2, background: i < currentStep ? "#22c55e" : "#e2e8f0", margin: "0 4px", marginBottom: 20 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Card */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "24px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.04)", marginBottom: 20 }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: MIDNIGHT, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{currentStep + 1}</span>
                  {steps[currentStep]}
                </h2>
                {renderStep()}
              </div>

              {/* Nav Buttons */}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <button onClick={() => setCurrentStep(s => Math.max(0, s - 1))} disabled={currentStep === 0}
                  style={{ padding: "12px 24px", borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", fontWeight: 700, fontSize: 14, cursor: currentStep === 0 ? "not-allowed" : "pointer", color: currentStep === 0 ? "#94a3b8" : "#0f172a" }}>
                  ← Previous
                </button>
                <button onClick={() => currentStep < steps.length - 1 ? setCurrentStep(s => s + 1) : null}
                  style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: currentStep === steps.length - 1 ? "#22c55e" : GOLD, color: currentStep === steps.length - 1 ? "#fff" : MIDNIGHT, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {currentStep === steps.length - 1 ? "Submit ✓" : "Next →"}
                </button>
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .full-span { grid-column: span 1 !important; }
          .review-items { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}