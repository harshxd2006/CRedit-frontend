import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const STEPS = [
  { id: 1, label: "Personal Info",  icon: "person" },
  { id: 2, label: "Employment",     icon: "work" },
  { id: 3, label: "Bank Statement", icon: "account_balance" },
  { id: 4, label: "Loan Details",   icon: "currency_rupee" },
  { id: 5, label: "Review & Sign",  icon: "draw" },
];

// ── Step components ──────────────────────────────────────────────

function StepPersonal({ data, setData }) {
  const field = (label, key, type = "text", placeholder = "") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</label>
      <input
        type={type} value={data[key] || ""} placeholder={placeholder}
        onChange={e => setData({ ...data, [key]: e.target.value })}
        style={{ height: 48, borderRadius: 8, border: "1px solid #e2e8f0", padding: "0 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none", transition: "border-color .2s, box-shadow .2s" }}
        onFocus={e => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; }}
        onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
      />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>Personal Information</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>We need a few basic details to get started.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {field("Full Name", "fullName", "text", "As per Aadhaar")}
        {field("Date of Birth", "dob", "date")}
        {field("PAN Number", "pan", "text", "ABCDE1234F")}
        {field("Mobile Number", "mobile", "tel", "10-digit number")}
        {field("Email Address", "email", "email", "you@example.com")}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Gender</label>
        <div style={{ display: "flex", gap: 12 }}>
          {["Male", "Female", "Other"].map(g => (
            <label key={g} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "10px 20px",
              border: `2px solid ${data.gender === g ? MIDNIGHT : "#e2e8f0"}`,
              borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600,
              background: data.gender === g ? "rgba(17,66,93,.06)" : "#fff", transition: "all .15s",
            }}>
              <input type="radio" name="gender" value={g} checked={data.gender === g}
                onChange={() => setData({ ...data, gender: g })} style={{ accentColor: MIDNIGHT }} />
              {g}
            </label>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Residential Address</label>
        <textarea
          value={data.address || ""} onChange={e => setData({ ...data, address: e.target.value })}
          placeholder="House/Flat no., Street, City, State, PIN" rows={3}
          style={{ borderRadius: 8, border: "1px solid #e2e8f0", padding: "12px 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none", resize: "none", transition: "border-color .2s, box-shadow .2s" }}
          onFocus={e => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; }}
          onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
        />
      </div>
    </div>
  );
}

function StepEmployment({ data, setData }) {
  const field = (label, key, type = "text", placeholder = "") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</label>
      <input
        type={type} value={data[key] || ""} placeholder={placeholder}
        onChange={e => setData({ ...data, [key]: e.target.value })}
        style={{ height: 48, borderRadius: 8, border: "1px solid #e2e8f0", padding: "0 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none", transition: "border-color .2s" }}
        onFocus={e => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; }}
        onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
      />
    </div>
  );

  const select = (label, key, options) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</label>
      <select
        value={data[key] || ""} onChange={e => setData({ ...data, [key]: e.target.value })}
        style={{ height: 48, borderRadius: 8, border: "1px solid #e2e8f0", padding: "0 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none" }}
      >
        <option value="">Select...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>Employment Details</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Tell us about your income and employment status.</p>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["Salaried", "Self-Employed", "Freelancer", "Business Owner"].map(type => (
          <label key={type} style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
            border: `2px solid ${data.empType === type ? MIDNIGHT : "#e2e8f0"}`,
            borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600,
            background: data.empType === type ? "rgba(17,66,93,.06)" : "#fff",
          }}>
            <input type="radio" name="empType" checked={data.empType === type}
              onChange={() => setData({ ...data, empType: type })} style={{ accentColor: MIDNIGHT }} />
            {type}
          </label>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {field("Employer / Company Name", "employer", "text", "e.g. Infosys Ltd.")}
        {field("Designation / Role", "designation", "text", "e.g. Software Engineer")}
        {field("Monthly Net Salary (₹)", "salary", "text", "e.g. 75000")}
        {field("Work Experience (Years)", "experience", "text", "e.g. 3")}
        {select("Industry", "industry", ["IT / Software", "Banking / Finance", "Healthcare", "Education", "Manufacturing", "Retail", "Government", "Other"])}
        {field("Office Location / City", "officeCity", "text", "City name")}
      </div>
      <div style={{ padding: 16, background: "rgba(255,215,0,.08)", borderRadius: 12, border: "1px solid rgba(255,215,0,.2)", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20, marginTop: 2 }}>info</span>
        <p style={{ fontSize: 12, color: MIDNIGHT, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
          Your employment info helps us match you with the best lender rates. We use bank-grade encryption and never share details without consent.
        </p>
      </div>
    </div>
  );
}

function StepBankStatement({ data, setData }) {
  const [dragging, setDragging] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>Bank Statement Upload</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Upload last 6 months of bank statements for instant analysis.</p>
      </div>
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); setData({ ...data, statementFile: e.dataTransfer.files[0]?.name }); }}
        style={{
          border: `2px dashed ${dragging ? MIDNIGHT : "#cbd5e1"}`,
          borderRadius: 16, padding: "48px 32px", textAlign: "center",
          background: dragging ? "rgba(17,66,93,.04)" : "#f8fafc",
          transition: "all .2s", cursor: "pointer",
        }}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <input id="fileInput" type="file" accept=".pdf" style={{ display: "none" }}
          onChange={e => setData({ ...data, statementFile: e.target.files[0]?.name })} />
        <span className="material-symbols-outlined" style={{ fontSize: 48, color: data.statementFile ? "#22c55e" : "#94a3b8", display: "block", marginBottom: 16 }}>
          {data.statementFile ? "check_circle" : "upload_file"}
        </span>
        {data.statementFile ? (
          <>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#22c55e", margin: "0 0 4px" }}>{data.statementFile}</p>
            <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>File ready for upload. Click to replace.</p>
          </>
        ) : (
          <>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Drop your PDF here or click to browse</p>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>Supports PDF • Last 6 months • Max 10MB per file</p>
          </>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#94a3b8", margin: "0 0 12px" }}>— or connect directly —</p>
        <button style={{
          padding: "12px 28px", background: MIDNIGHT, color: "#fff",
          border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13,
          cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>account_balance</span>
          Connect via NetBanking (AA Framework)
        </button>
      </div>
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>What we analyse</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            ["Salary Consistency",    "check_circle",         "#22c55e"],
            ["Average Daily Balance", "account_balance_wallet","#3b82f6"],
            ["Bounce History",        "warning",              "#f59e0b"],
            ["Spending Patterns",     "pie_chart",            "#8b5cf6"],
          ].map(([label, icon, color]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color }}>{icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepLoanDetails({ data, setData }) {
  const amount = data.loanAmount || 250000;
  const emi = Math.round((amount * 0.00875 * Math.pow(1.00875, 36)) / (Math.pow(1.00875, 36) - 1));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>Loan Customization</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Configure your loan parameters and we'll match you with ideal lenders.</p>
      </div>
      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>Loan Amount</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Drag to adjust</p>
          </div>
          <div style={{ background: "rgba(17,66,93,.06)", padding: "8px 20px", borderRadius: 10, border: "1px solid rgba(17,66,93,.1)" }}>
            <span style={{ fontSize: 24, fontWeight: 900, color: MIDNIGHT }}>₹{amount.toLocaleString("en-IN")}</span>
          </div>
        </div>
        <input type="range" min={10000} max={500000} step={5000} value={amount}
          onChange={e => setData({ ...data, loanAmount: Number(e.target.value) })}
          style={{ width: "100%", accentColor: MIDNIGHT, cursor: "pointer" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#94a3b8", marginTop: 6, textTransform: "uppercase" }}>
          <span>₹10,000</span><span>₹5,00,000</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 20 }}>
          {[
            { label: "Est. EMI",      value: `₹${emi.toLocaleString("en-IN")}`, sub: "Per Month",     bg: "#f0fdf4", color: "#16a34a" },
            { label: "Interest Rate", value: "10.5%",                            sub: "p.a. Fixed",   bg: "rgba(17,66,93,.06)", color: MIDNIGHT },
            { label: "Tenure",        value: `${data.tenure || 36} Months`,      sub: "Standard Term", bg: "#f8fafc", color: "#475569" },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, borderRadius: 10, padding: 14, textAlign: "center", border: "1px solid rgba(0,0,0,.06)" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>{c.label}</p>
              <p style={{ fontSize: 18, fontWeight: 800, color: c.color, margin: "0 0 2px" }}>{c.value}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Loan Purpose</label>
          <select value={data.purpose || ""} onChange={e => setData({ ...data, purpose: e.target.value })}
            style={{ height: 48, borderRadius: 8, border: "1px solid #e2e8f0", padding: "0 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none" }}>
            <option value="">Select purpose</option>
            {["Debt Consolidation", "Home Renovation", "Business Expansion", "Education", "Medical Emergency", "Travel", "Wedding"].map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Preferred Tenure</label>
          <select value={data.tenure || 36} onChange={e => setData({ ...data, tenure: Number(e.target.value) })}
            style={{ height: 48, borderRadius: 8, border: "1px solid #e2e8f0", padding: "0 14px", fontSize: 14, fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff", outline: "none" }}>
            {[12, 24, 36, 48, 60].map(t => <option key={t} value={t}>{t} Months</option>)}
          </select>
        </div>
      </div>
      <div style={{ padding: "14px 18px", background: "rgba(17,66,93,.05)", border: "1px solid rgba(17,66,93,.12)", borderRadius: 10, display: "flex", gap: 10, alignItems: "center" }}>
        <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>info</span>
        <p style={{ fontSize: 12, color: MIDNIGHT, fontWeight: 500, margin: 0 }}>
          Your credit score qualifies for <strong>Platinum Tier</strong> rates starting at <strong>8.99% p.a.</strong>
        </p>
      </div>
    </div>
  );
}

function StepReview({ data }) {
  const rows = [
    ["Full Name",       data.fullName || "—"],
    ["PAN",             data.pan || "—"],
    ["Mobile",          data.mobile || "—"],
    ["Employment Type", data.empType || "—"],
    ["Employer",        data.employer || "—"],
    ["Monthly Salary",  data.salary ? `₹${Number(data.salary).toLocaleString("en-IN")}` : "—"],
    ["Loan Amount",     data.loanAmount ? `₹${Number(data.loanAmount).toLocaleString("en-IN")}` : "—"],
    ["Loan Purpose",    data.purpose || "—"],
    ["Tenure",          data.tenure ? `${data.tenure} Months` : "—"],
    ["Bank Statement",  data.statementFile || "Not uploaded"],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>Review Your Application</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Please verify all details before submitting.</p>
      </div>
      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
        {rows.map(([label, value], i) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px", borderBottom: i < rows.length - 1 ? "1px solid #f1f5f9" : "none", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
            <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>{label}</span>
            <span style={{ fontSize: 13, color: "#0f172a", fontWeight: 700 }}>{value}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: 16, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#16a34a" }}>verified_user</span>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#15803d", margin: "0 0 2px" }}>Your data is secure</p>
          <p style={{ fontSize: 11, color: "#16a34a", margin: 0 }}>All information is encrypted with 256-bit SSL and shared only with RBI-registered lenders upon approval.</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────

export default function ApplyforLoan({ navigate }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData]       = useState({});
  const [submitted, setSubmitted]     = useState(false);

  const progress = Math.round((currentStep / STEPS.length) * 100);

  const handleNext = () => {
    if (currentStep < STEPS.length) setCurrentStep(s => s + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(s => s - 1);
  };

  const stepContent = () => {
    switch (currentStep) {
      case 1: return <StepPersonal      data={formData} setData={setFormData} />;
      case 2: return <StepEmployment    data={formData} setData={setFormData} />;
      case 3: return <StepBankStatement data={formData} setData={setFormData} />;
      case 4: return <StepLoanDetails   data={formData} setData={setFormData} />;
      case 5: return <StepReview        data={formData} />;
      default: return null;
    }
  };

  // ── Submitted success screen ──
  if (submitted) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif", background: "#f6f7f8", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar navigate={navigate} />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
          <div style={{ textAlign: "center", maxWidth: 480 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 44, color: MIDNIGHT }}>check</span>
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>Application Submitted!</h1>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: "0 0 32px" }}>
              Your application has been received. Our team will match you with the best lenders and get back to you within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button onClick={() => navigate?.("dashboard")}
                style={{ padding: "12px 28px", background: MIDNIGHT, color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                Back to Dashboard
              </button>
              <button onClick={() => navigate?.("myApplications")}
                style={{ padding: "12px 28px", background: GOLD, color: MIDNIGHT, border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                View My Applications
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Main form ──
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f6f7f8", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>

        {/* Universal Sidebar — sticky, scrolls with page */}
        <div style={{ flexShrink: 0, position: "sticky", top: 80, alignSelf: "flex-start" }}>
          <Sidebar navigate={navigate} activePage="applyForLoan" />
        </div>

        {/* Right column: content + footer */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main style={{ flex: 1, padding: "40px 48px" }}>

            {/* Step Progress Panel */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, marginBottom: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  {STEPS.map(step => (
                    <div key={step.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                        background: step.id < currentStep ? GOLD : step.id === currentStep ? MIDNIGHT : "#e2e8f0",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {step.id < currentStep
                          ? <span className="material-symbols-outlined" style={{ fontSize: 14, color: MIDNIGHT }}>check</span>
                          : <span style={{ fontSize: 11, fontWeight: 700, color: step.id === currentStep ? "#fff" : "#94a3b8" }}>{step.id}</span>
                        }
                      </div>
                      <span style={{ fontSize: 12, fontWeight: step.id === currentStep ? 700 : 400, color: step.id <= currentStep ? "#0f172a" : "#94a3b8", whiteSpace: "nowrap" }}>
                        {step.label}
                      </span>
                      {step.id < STEPS.length && <div style={{ width: 24, height: 2, background: step.id < currentStep ? GOLD : "#e2e8f0", marginLeft: 4 }} />}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: MIDNIGHT }}>{progress}% Complete</span>
              </div>
              <div style={{ height: 6, background: "#e2e8f0", borderRadius: 99 }}>
                <div style={{ height: "100%", width: `${progress}%`, background: GOLD, borderRadius: 99, transition: "width .4s ease" }} />
              </div>
            </div>

            {/* Step Content Card */}
            <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", padding: 36, boxShadow: "0 2px 8px rgba(0,0,0,.05)", marginBottom: 24 }}>
              {stepContent()}
            </div>

            {/* Nav Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleBack} disabled={currentStep === 1}
                style={{
                  padding: "12px 28px", borderRadius: 10, border: "1px solid #e2e8f0",
                  background: "#fff", color: currentStep === 1 ? "#cbd5e1" : "#475569",
                  fontWeight: 700, fontSize: 14, cursor: currentStep === 1 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
                Back
              </button>
              <button onClick={handleNext}
                style={{
                  padding: "12px 32px", borderRadius: 10, border: "none",
                  background: MIDNIGHT, color: "#fff",
                  fontWeight: 700, fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                {currentStep === STEPS.length ? "Submit Application" : "Continue"}
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  {currentStep === STEPS.length ? "send" : "arrow_forward"}
                </span>
              </button>
            </div>

          </main>

          {/* ── FOOTER ── */}
          <Footer />
        </div>
      </div>
    </div>
  );
}