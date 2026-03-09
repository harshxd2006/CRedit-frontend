import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";
import LoanStepper from "../components/LoanStepper";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";



const steps = [
  'Personal Information',
  'Employment & Income',
  'Loan Details',
  'Documents',
  'Credit Report',
  'Lender Selection',
  'Review & Submit',
  'Application Tracker',
  'Offer Review',
  'Confirm & Sign',
  'Disbursement Tracker'
];

export default function ApplyforLoan({ navigate }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (newStep) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(newStep);
  };
  const [form, setForm] = useState({
    fullName: "", dob: "", gender: "", mobile: "", email: "", pan: "", aadhar: "",
    employmentType: "", companyName: "", monthlyIncome: "", workExperience: "",
    loanAmount: "250000", loanPurpose: "Debt Consolidation", tenure: "36 Months",
    targetEmi: "", maxRate: "", collateralType: "Unsecured"
  });

  const [empType, setEmpType] = useState("Salaried Individual");
  const [salaryMode, setSalaryMode] = useState("Bank Transfer");
  const [empNature, setEmpNature] = useState("Permanent");
  const [showOtherLenders, setShowOtherLenders] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [aadhaarLast4, setAadhaarLast4] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);
  const otpRefs = React.useRef([]);

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[idx] = val; setOtp(next);
    if (val && idx < 3) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) otpRefs.current[idx - 1]?.focus();
  };

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const inputStyle = {
    width: "100%", height: 44, padding: "0 12px", borderRadius: 8,
    border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif",
    outline: "none", boxSizing: "border-box", background: "#fff",
  };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 };
  const selectStyle = { ...inputStyle };

  const Field = ({ label, value, highlight, colSpan }) => (
    <div style={{ gridColumn: colSpan === 2 ? 'span 2' : undefined }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: highlight ? MIDNIGHT : '#334155' }}>{value}</div>
    </div>
  );

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
    if (currentStep === 2) return (
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
    if (currentStep === 4) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Page header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: MIDNIGHT, margin: "0 0 4px" }}>NTC Credit Report</h3>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Comprehensive financial health analysis • Last updated: Oct 24, 2023</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>↓ Download PDF</button>
            <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>Save Later</button>
          </div>
        </div>

        {/* Top section — 3 column grid */}
        <div className="credit-report-grid" style={{ display: "grid", gridTemplateColumns: "220px auto auto", gap: 16, alignItems: "start" }}>
          {/* Column 1 — Score Card */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, textAlign: "center" }}>
            <div style={{ width: 120, height: 120, margin: "0 auto", position: "relative" }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle cx="60" cy="60" r="54" fill="none" stroke={GOLD} strokeWidth="8" strokeDasharray="339.292" strokeDashoffset="67.858" strokeLinecap="round" transform="rotate(-90 60 60)" />
              </svg>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "100%" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: MIDNIGHT, lineHeight: 1 }}>720</div>
                <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em", marginTop: 2 }}>SCORE</div>
              </div>
            </div>
            <div style={{ background: "rgba(255,215,0,0.12)", color: "#b45309", fontSize: 11, fontWeight: 700, borderRadius: 20, padding: "4px 12px", marginTop: 12, display: "inline-block" }}>TIER 1 LOW RISK</div>
            <p style={{ fontSize: 12, color: "#64748b", marginTop: 8, marginBottom: 0, lineHeight: 1.4 }}>Your credit profile is in the top 15% of applicants.</p>

            <div style={{ background: MIDNIGHT, borderRadius: 12, padding: 16, marginTop: 16, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 16 }}>verified</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Loan Eligibility</span>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 2 }}>MAX AMOUNT</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>₹2,50,000</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 2 }}>EXPECTED APR</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: GOLD }}>10.5% Fixed</div>
              </div>
              <button onClick={() => handleStepChange(5)} style={{ width: "100%", marginTop: 16, background: GOLD, color: MIDNIGHT, fontWeight: 800, fontSize: 12, borderRadius: 8, padding: 10, border: "none", cursor: "pointer" }}>
                PROCEED TO LENDER SELECTION
              </button>
            </div>
          </div>

          {/* Column 2 — Positive Signals */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ color: "#22c55e", fontSize: 20 }}>check_circle</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#15803d" }}>Positive Signals</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#15803d", fontSize: 16 }}>calendar_today</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#15803d" }}>On-Time Payments</span>
                </div>
                <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.4 }}>100% of your last 24 payments were on time.</div>
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#15803d", fontSize: 16 }}>credit_card</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#15803d" }}>Low Utilization</span>
                </div>
                <div style={{ fontSize: 12, color: "#166534", lineHeight: 1.4 }}>You are using only 12% of your total credit limit.</div>
              </div>
            </div>
          </div>

          {/* Column 3 — Areas to Improve */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ color: "#f59e0b", fontSize: 20 }}>warning</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#b45309" }}>Areas to Improve</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#b45309", fontSize: 16 }}>history</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#b45309" }}>Credit History Length</span>
                </div>
                <div style={{ fontSize: 12, color: "#92400e", lineHeight: 1.4 }}>Average account age is 2.4 years. Goal: 5+ years.</div>
              </div>
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ color: "#b45309", fontSize: 16 }}>search</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#b45309" }}>Recent Inquiries</span>
                </div>
                <div style={{ fontSize: 12, color: "#92400e", lineHeight: 1.4 }}>3 hard inquiries in the last 6 months.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Action Plan */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, marginTop: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>rocket_launch</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: MIDNIGHT }}>Improvement Action Plan</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Reduce Credit Card Balances</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, marginBottom: 12 }}>Paying down your balance by just ₹1,200 could increase your score by 15–20 points within 30 days.</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, height: 6, borderRadius: 4, background: "#e2e8f0", overflow: "hidden" }}>
                    <div style={{ width: "65%", height: "100%", background: GOLD }}></div>
                  </div>
                  <div style={{ fontSize: 10, color: "#b45309", fontWeight: 700, letterSpacing: "0.05em" }}>65% OF TARGET REACHED</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</div>
              <div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Request Credit Limit Increase</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, marginBottom: 8 }}>Increasing your available credit while keeping spend the same will lower your utilization ratio instantly.</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ background: "#f0fdf4", color: "#15803d", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "3px 10px" }}>High Impact</span>
                  <span style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "3px 10px" }}>Easy Task</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 36, height: 36, background: MIDNIGHT, color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
              <div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 14, marginBottom: 4 }}>Maintain Age of Accounts</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>Avoid closing old credit card accounts, even if unused, to preserve your credit history length.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Factors Table */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, marginTop: 16, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 16, background: "#f8fafc", padding: "12px 20px", fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <div>CREDIT FACTOR</div>
            <div>IMPACT</div>
            <div>STATUS</div>
            <div>VALUE</div>
          </div>
          {[
            { title: "Payment History", sub: "Consistency in making deadlines", impact: "|||", status: "Excellent", statusColor: "#22c55e", val: "100%" },
            { title: "Credit Utilization", sub: "Balance relative to total limits", impact: "|||", status: "Good", statusColor: "#22c55e", val: "12%" },
            { title: "Derogatory Marks", sub: "Bankruptcies or collections", impact: "|||", status: "None", statusColor: "#22c55e", val: "0" },
            { title: "Average Account Age", sub: "Total duration of history", impact: "|", status: "Fair", statusColor: "#f59e0b", val: "2.4y" }
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 16, alignItems: "center", padding: "16px 20px", borderTop: "1px solid #f1f5f9" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{row.title}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{row.sub}</div>
              </div>
              <div style={{ fontSize: 16, color: GOLD, letterSpacing: -2, fontWeight: 900 }}>
                {row.impact}<span style={{ color: "#e2e8f0" }}>{"|||".slice(row.impact.length)}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: row.statusColor }}>{row.status}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{row.val}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div style={{ background: MIDNIGHT, borderRadius: 16, padding: "20px 28px", marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 24 }}>place</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Ready to take the next step?</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>We've pre-selected 4 lenders based on your Tier 1 profile.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "10px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Save and Apply Later</button>
            <button onClick={() => handleStepChange(5)} style={{ background: GOLD, color: MIDNIGHT, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 800, fontSize: 13, cursor: "pointer" }}>Proceed to Lender Selection</button>
          </div>
        </div>
      </div>
    );
    if (currentStep === 5) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Page Header */}
        <div>
          <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>Applications / Personal Loan / Lender Selection</div>
          <h3 style={{ fontSize: 28, fontWeight: 900, color: MIDNIGHT, margin: "0 0 4px" }}>Choose Your Lender</h3>
          <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>We've matched your profile with 4 RBI-registered digital lenders. Compare and select the best offer for your needs.</p>
        </div>

        {/* Ranking Transparency banner */}
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 16px", marginTop: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
          <span className="material-symbols-outlined" style={{ color: "#3b82f6", fontSize: 20 }}>info</span>
          <div>
            <span style={{ fontWeight: 700, color: "#1d4ed8" }}>Ranking Transparent:</span>
            <span style={{ fontSize: 13, color: "#1e40af" }}> Lenders are ranked based on a composite score of your estimated eligibility (40%), APR (30%), processing speed (20%), and user reviews (10%). CreditFlow does not receive commissions for higher rankings.</span>
          </div>
        </div>

        {/* Filter row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT }}>Matched Lenders (4)</span>
            <span style={{ fontSize: 13, color: "#64748b", marginLeft: 16 }}>Compare Selected (2)</span>
          </div>
          <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>Filter & Sort</button>
        </div>

        {/* Card 1 — HDFC Bank */}
        <div style={{ background: "#fff", border: `2px solid ${GOLD}`, borderRadius: 16, padding: 20, marginBottom: 12 }}>
          <div style={{ background: GOLD, color: MIDNIGHT, fontSize: 10, fontWeight: 800, borderRadius: 20, padding: "3px 12px", marginBottom: 12, display: "inline-block" }}>BEST RECOMMENDED</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontWeight: 800, fontSize: 16, color: MIDNIGHT }}>HDFC Bank</span>
              <span style={{ color: GOLD, fontSize: 16, marginLeft: 8 }}>★★★</span>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>4 lenders compared</div>
            </div>
            <button style={{ background: GOLD, color: MIDNIGHT, fontWeight: 700, borderRadius: 10, padding: "8px 20px", border: "none", cursor: "pointer" }}>Select Offer</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 12 }}>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>MAX AMOUNT</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>₹18,00,000</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>INTEREST RATE</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>10.5%</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>TENURE</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>12–60 mo</div></div>
            <div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f1f5f9" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>EMI <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹11,250</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>SET <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹2,450/lac</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>PROCESSING FEE <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹500 + GST</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: MIDNIGHT, textDecoration: "underline", cursor: "pointer", textAlign: "right" }}>Key Fact Statement (KFS)</div>
          </div>
        </div>

        {/* Card 2 — ICICI Bank */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontWeight: 800, fontSize: 16, color: MIDNIGHT }}>ICICI Bank</span>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>4 lenders compared</div>
            </div>
            <button style={{ border: "1px solid #e2e8f0", background: "#fff", color: MIDNIGHT, fontWeight: 700, borderRadius: 10, padding: "8px 20px", cursor: "pointer" }}>Select Offer</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 12 }}>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>MAX AMOUNT</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>₹10,00,000</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>INTEREST RATE</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>10.99%</div></div>
            <div><div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 2 }}>TENURE</div><div style={{ fontSize: 15, fontWeight: 800, color: MIDNIGHT }}>12–48 mo</div></div>
            <div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 10, paddingTop: 10, borderTop: "1px solid #f1f5f9" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>EMI <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹11,020</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>SET <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹2,570/lac</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>PROCESSING FEE <span style={{ color: MIDNIGHT, fontWeight: 700 }}>₹1 + GST</span></div>
            <div style={{ fontSize: 12, fontWeight: 600, color: MIDNIGHT, textDecoration: "underline", cursor: "pointer", textAlign: "right" }}>Key Fact Statement (KFS)</div>
          </div>
        </div>

        {/* Compare Bar */}
        <div style={{ background: MIDNIGHT, borderRadius: 12, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: GOLD, marginBottom: 6, letterSpacing: "0.05em" }}>BETTER THAN 80%</div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 12, borderRadius: 20, padding: "4px 12px" }}>HDFC</span>
              <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 12, borderRadius: 20, padding: "4px 12px" }}>ABC</span>
            </div>
          </div>
          <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <button style={{ background: GOLD, color: MIDNIGHT, fontWeight: 700, borderRadius: 8, padding: "8px 18px", border: "none", cursor: "pointer" }}>Compare Details</button>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>4 to compare</div>
          </div>
        </div>

        {/* Other Lenders accordion */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 20px", marginTop: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => setShowOtherLenders(!showOtherLenders)}>
            <div>
              <span style={{ fontWeight: 700, fontSize: 14, color: MIDNIGHT }}>Other Lenders (13)</span>
              <span style={{ fontSize: 12, color: "#64748b", marginLeft: 8 }}>Investigate more</span>
            </div>
            <span className="material-symbols-outlined" style={{ color: "#64748b" }}>{showOtherLenders ? "expand_less" : "expand_more"}</span>
          </div>
          {showOtherLenders && (
            <div style={{ marginTop: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid #f1f5f9" }}>
                <div><div style={{ fontWeight: 700, fontSize: 13, color: MIDNIGHT }}>Axis Bank</div><div style={{ fontSize: 11, color: "#64748b" }}>Rate: 11.25% p.a.</div></div>
                <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 12, cursor: "pointer" }}>View</button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderTop: "1px solid #f1f5f9" }}>
                <div><div style={{ fontWeight: 700, fontSize: 13, color: MIDNIGHT }}>Kotak Mahindra</div><div style={{ fontSize: 11, color: "#64748b" }}>Rate: 11.50% p.a.</div></div>
                <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 12, cursor: "pointer" }}>View</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
    if (currentStep === 6) return (
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
    if (currentStep === 7) return (
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
          <button onClick={() => handleStepChange(8)} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Proceed to Sign →</button>
        </div>
      </div>
    );
    if (currentStep === 8) return (
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
    if (currentStep === 9) return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Header */}
        <div style={{ marginBottom: 0 }}>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Review &amp; E-Sign Loan Offer</h1>
          <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Please carefully review the Key Fact Statement (KFS) before proceeding with the Aadhaar eSign.</p>
        </div>

        {/* Two-column layout */}
        <div className="review-cols" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          {/* ── Left Column ── */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* KFS Card */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ padding: "18px 20px", borderBottom: "1px solid rgba(17,66,93,.05)", background: "rgba(17,66,93,.03)" }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: 8, color: "#0f172a" }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 18 }}>analytics</span>
                  Key Fact Statement (KFS)
                </h2>
              </div>
              <div style={{ padding: "20px 16px" }}>
                <div className="kfs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  {[
                    { label: "Loan Amount", value: "₹5,00,000" },
                    { label: "Interest Rate", value: "10.5% p.a." },
                    { label: "Tenure", value: "36 Months" },
                    { label: "Monthly EMI", value: "₹16,254", highlight: true },
                  ].map((item) => (
                    <div key={item.label}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 4px" }}>{item.label}</p>
                      <p style={{ fontSize: 18, fontWeight: 700, margin: 0, color: item.highlight ? MIDNIGHT : "#0f172a" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  {[
                    { label: "Processing Fees (incl. GST)", value: "₹4,500" },
                    { label: "Insurance Premium", value: "₹2,100" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{ fontSize: 13, color: "#475569" }}>{item.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{item.value}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 14, background: MIDNIGHT, borderRadius: 10, color: "#fff" }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Total Cost of Credit</p>
                      <p style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>₹5,85,144</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ fontSize: 28, opacity: 0.4 }}>payments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cooling-off */}
            <div style={{ background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: 12, padding: 18, display: "flex", gap: 12 }}>
              <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: 20, marginTop: 2, flexShrink: 0 }}>info</span>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 5px" }}>Cooling-off Period</h3>
                <p style={{ fontSize: 13, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
                  You have a <strong>3-day cooling-off period</strong>. During this time, you can cancel the loan agreement without any foreclosure charges.
                </p>
              </div>
            </div>

            {/* Document Preview */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <h3 style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 14px" }}>Document Preview</h3>
              <div style={{ aspectRatio: "4 / 3", width: "100%", background: "#f8fafc", border: "2px dashed #e2e8f0", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 44, color: "#cbd5e1", marginBottom: 8 }}>picture_as_pdf</span>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", margin: "0 0 14px" }}>KFS_Loan_Agreement_v1.pdf</p>
                <button style={{ padding: "8px 16px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontWeight: 700, background: "#fff", cursor: "pointer", color: "#475569" }}>View Full Document</button>
              </div>
            </div>
          </div>

          {/* ── Right Column — eSign ── */}
          <div className="esign-col" style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(17,66,93,.1)", padding: 22, boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(17,66,93,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 15 }}>shield_person</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Aadhaar eSign</h3>
              </div>

              {signed ? (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: 20, textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                    <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 22 }}>check</span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#166534", margin: "0 0 4px" }}>E-Sign Complete!</p>
                  <p style={{ fontSize: 13, color: "#16a34a", margin: 0 }}>Documents delivered to your email.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Aadhaar */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 7 }}>Aadhaar Number (Last 4 Digits)</label>
                    <div style={{ display: "flex", alignItems: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "0 12px", height: 46 }}>
                      <span style={{ color: "#94a3b8", letterSpacing: "0.3em", marginRight: 8, fontSize: 12 }}>•••• ••••</span>
                      <input type="text" maxLength={4} placeholder="5678" value={aadhaarLast4}
                        onChange={(e) => setAadhaarLast4(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        style={{ flex: 1, width: "100%", background: "transparent", border: "none", outline: "none", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.3em", color: "#0f172a", fontWeight: 700 }} />
                    </div>
                  </div>

                  {/* OTP */}
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 7 }}>Enter OTP</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      {otp.map((v, i) => (
                        <input key={i} ref={(el) => (otpRefs.current[i] = el)}
                          type="text" inputMode="numeric" maxLength={1} value={v}
                          onChange={(e) => handleOtpChange(e.target.value, i)}
                          onKeyDown={(e) => handleOtpKeyDown(e, i)}
                          style={{ flex: 1, minWidth: 0, height: 46, textAlign: "center", fontSize: 20, fontWeight: 700, border: "1px solid #e2e8f0", borderRadius: 8, background: "#f8fafc", color: "#0f172a", fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }}
                          onFocus={(e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
                        />
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
                      <span style={{ fontSize: 11, color: "#64748b" }}>OTP sent to +91 ******4321</span>
                      <button style={{ fontSize: 11, fontWeight: 700, color: MIDNIGHT, background: "none", border: "none", cursor: "pointer" }}>Resend OTP</button>
                    </div>
                  </div>

                  {/* Consent */}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, cursor: "pointer", accentColor: MIDNIGHT }} />
                    <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>I hereby authorize CreditFlow to use my Aadhaar details for e-sign purposes and agree to the terms of the Loan Agreement.</span>
                  </label>

                  <button onClick={() => agreed && setSigned(true)}
                    style={{ width: "100%", padding: "13px 0", background: agreed ? GOLD : "#e2e8f0", color: agreed ? "#000" : "#94a3b8", fontWeight: 700, fontSize: 13, borderRadius: 12, border: "none", cursor: agreed ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .2s", boxShadow: agreed ? "0 6px 20px rgba(255,215,0,.3)" : "none" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>draw</span>
                    Complete E-Sign
                  </button>

                  <p style={{ textAlign: "center", fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                    Powered by CDAC &amp; Protean e-Gov Technologies
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <button onClick={() => handleStepChange(8)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 20px", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>← Back to Offer</button>
          <button onClick={() => handleStepChange(10)} style={{ background: GOLD, color: MIDNIGHT, fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Confirm & Sign →</button>
        </div>
      </div>
    );
    if (currentStep === 10) return (
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
          <button onClick={() => navigate('applicationSubmitted')} style={{ background: "#22c55e", color: "#fff", fontWeight: 800, borderRadius: 10, padding: "12px 28px", border: "none", fontSize: 15, cursor: "pointer" }}>Submit Final ✓</button>
        </div>
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
              <div style={{ minHeight: 580, background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "24px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.04)", marginBottom: 20 }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: MIDNIGHT, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{currentStep + 1}</span>
                  {steps[currentStep]}
                </h2>
                <div style={{ position: "relative", width: "100%" }}>
                  {renderStep()}
                </div>
              </div>

              <div className="step-buttons" style={{ display: (currentStep >= 6 && currentStep <= 10) ? "none" : "flex", justifyContent: "space-between", gap: 12 }}>
                <button onClick={() => {
                  if (currentStep === 10) handleStepChange(9);
                  else if (currentStep === 5) handleStepChange(4);
                  else handleStepChange(Math.max(0, currentStep - 1));
                }} disabled={currentStep === 0}
                  style={{ padding: "12px 24px", borderRadius: 10, border: currentStep === 3 ? "none" : "1px solid #e2e8f0", background: currentStep === 3 ? "transparent" : "#fff", fontWeight: 700, fontSize: 14, cursor: currentStep === 0 ? "not-allowed" : "pointer", color: "#64748b", flex: 1, textAlign: "center" }}>
                  {currentStep === 2 ? "← Back to Employment" : currentStep === 3 ? "← Back to Loan Details" : currentStep === 4 ? "← Back to Documents" : currentStep === 5 ? "← Back to Credit Report" : currentStep === 10 ? "← Back to Tracker" : "← Back"}
                </button>
                <button onClick={() => {
                  if (currentStep === 10) navigate('applicationSubmitted');
                  else if (currentStep === 5) handleStepChange(6);
                  else handleStepChange(currentStep + 1);
                }}
                  style={{ padding: "12px 24px", borderRadius: 10, border: "none", background: currentStep === 10 ? "#22c55e" : GOLD, color: currentStep === 10 ? "#fff" : MIDNIGHT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, flex: 1 }}>
                  {currentStep === 3 ? (
                    <>Generate My Report <span className="material-symbols-outlined" style={{ fontSize: 18 }}>analytics</span></>
                  ) : currentStep === 4 ? "Continue to Lender Selection" : currentStep === 5 ? "Continue to Review" : currentStep === 10 ? "Submit ✓" : "Save and Continue →"}
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
        @media (max-width: 768px) {
          .review-items { grid-template-columns: 1fr 1fr !important; }
          .review-cols { flex-direction: column !important; }
          .esign-col { width: 100% !important; }
          .kfs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .form-grid-3 { grid-template-columns: 1fr !important; }
          .full-span { grid-column: span 1 !important; }
          .review-items { grid-template-columns: 1fr !important; }
          .offer-grid { grid-template-columns: 1fr !important; }
          .tracker-body { flex-direction: column !important; }
          .credit-report-grid { grid-template-columns: 1fr !important; }
          .review-submit-grid { grid-template-columns: 1fr !important; }
          .field-grid { grid-template-columns: 1fr !important; }
          .lender-grid { grid-template-columns: 1fr !important; }
          .page-main { padding: 24px 12px !important; }
        }
        @media (max-width: 480px) {
          .review-items { grid-template-columns: 1fr !important; }
          .review-card { padding: 12px !important; }
          .page-main { padding: 24px 12px !important; }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}