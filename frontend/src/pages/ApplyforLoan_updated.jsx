import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";
import LoanStepper from "../components/LoanStepper";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";



const steps = ["Personal Information", "Employment & Income", "Loan Details", "Documents", "Review & Submit"];

export default function ApplyforLoan({ navigate }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (newStep) => {
    setCurrentStep(newStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [form, setForm] = useState({
    fullName: "", dob: "", gender: "", mobile: "", email: "", pan: "", aadhar: "",
    employmentType: "", companyName: "", monthlyIncome: "", workExperience: "",
    loanAmount: "", loanPurpose: "", tenure: "",
  });

  const [empType, setEmpType] = useState("Salaried Individual");
  const [salaryMode, setSalaryMode] = useState("Bank Transfer");
  const [empNature, setEmpNature] = useState("Permanent");

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
    if (currentStep === 1) return (
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
    if (currentStep === 3) return (
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

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
          {/* Left Column */}
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

          {/* Right Column (Preview) */}
          <div style={{ position: "sticky", top: 80, alignSelf: "start", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Analysis Preview</h4>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: "0 0 20px" }}>Mockup of verification parameters</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "work", iconColor: MIDNIGHT, label: "Employment Status", value: "MATCHED EMPLOYER: TechWave Solutions PVT LTD", badge: "VERIFIED", badgeBg: "#f0fdf4", badgeColor: "#16a34a" },
                { icon: "payments", iconColor: MIDNIGHT, label: "Salary Credits", value: "AVG. MONTHLY INFLOW: ₹4,650.00", badge: "VERIFIED", badgeBg: "#f0fdf4", badgeColor: "#16a34a" },
                { icon: "schedule", iconColor: MIDNIGHT, label: "Employment Tenure", value: "CALCULATED TENURE: 8 Months", badge: "WARNING", badgeBg: "#fffbeb", badgeColor: "#d97706" },
                { icon: "account_balance", iconColor: MIDNIGHT, label: "Salary Mode", value: "DETECTED CHANNEL: Cash Deposits Found", badge: "REJECTED", badgeBg: "#fef2f2", badgeColor: "#ef4444" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: 12, background: "#f8fafc", borderRadius: 10 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(17,66,93,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: row.iconColor }}>{row.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.label}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", marginTop: 2 }}>{row.value}</div>
                    </div>
                  </div>
                  <div style={{ background: row.badgeBg, color: row.badgeColor, fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 }}>
                    {row.badge}
                  </div>
                </div>
              ))}
            </div>

            <button style={{ width: "100%", background: MIDNIGHT, color: "#fff", border: "none", padding: 13, borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 20 }}>
              Generate Full Report
            </button>
          </div>
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

      {/* Sidebar + Content row */}
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
              <LoanStepper currentStep={currentStep} onStepClick={handleStepChange} />

              {/* Step Card */}
              <div style={{ minHeight: 650, background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "24px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.04)", marginBottom: 20 }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: MIDNIGHT, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{currentStep + 1}</span>
                  {steps[currentStep]}
                </h2>
                <div style={{ position: "relative", width: "100%" }}>
                  {renderStep()}
                </div>
              </div>

              {/* Nav Buttons */}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <button onClick={() => handleStepChange(Math.max(0, currentStep - 1))} disabled={currentStep === 0}
                  style={{ padding: "12px 24px", borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", fontWeight: 700, fontSize: 14, cursor: currentStep === 0 ? "not-allowed" : "pointer", color: "#64748b" }}>
                  ← Back
                </button>
                <button onClick={() => currentStep < steps.length - 1 ? handleStepChange(currentStep + 1) : null}
                  style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: currentStep === steps.length - 1 ? "#22c55e" : GOLD, color: currentStep === steps.length - 1 ? "#fff" : MIDNIGHT, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {currentStep === steps.length - 1 ? "Submit ✓" : "Save and Continue →"}
                </button>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* FAQ — full width, outside the sidebar+content flex row */}
      <FAQSection />

      {/* Footer — full width */}
      <Footer />

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