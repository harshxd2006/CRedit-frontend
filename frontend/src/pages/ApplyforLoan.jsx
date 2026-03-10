import PersonalInfoStep from '../components/loan-steps/PersonalInfoStep';
import EmploymentStep from '../components/loan-steps/EmploymentStep';
import LoanDetailsStep from '../components/loan-steps/LoanDetailsStep';
import DocumentsStep from '../components/loan-steps/DocumentsStep';
import CreditReportStep from '../components/loan-steps/CreditReportStep';
import LenderSelectionStep from '../components/loan-steps/LenderSelectionStep';
import ReviewSubmitStep from '../components/loan-steps/ReviewSubmitStep';
import ApplicationTrackerStep from '../components/loan-steps/ApplicationTrackerStep';
import OfferReviewStep from '../components/loan-steps/OfferReviewStep';
import ConfirmSignStep from '../components/loan-steps/ConfirmSignStep';
import DisbursementTrackerStep from '../components/loan-steps/DisbursementTrackerStep';
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

  
  const stepProps = {
    form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature,
    showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
    otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
    otpRefs, handleOtpChange, handleOtpKeyDown,
    GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0: return <PersonalInfoStep {...stepProps} />;
      case 1: return <EmploymentStep {...stepProps} />;
      case 2: return <LoanDetailsStep {...stepProps} />;
      case 3: return <DocumentsStep {...stepProps} />;
      case 4: return <CreditReportStep {...stepProps} />;
      case 5: return <LenderSelectionStep {...stepProps} />;
      case 6: return <ReviewSubmitStep {...stepProps} />;
      case 7: return <ApplicationTrackerStep {...stepProps} />;
      case 8: return <OfferReviewStep {...stepProps} />;
      case 9: return <ConfirmSignStep {...stepProps} />;
      case 10: return <DisbursementTrackerStep {...stepProps} />;
      default: return null;
    }
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
                    <>Continue <span className="material-symbols-outlined" style={{ fontSize: 18 }}>analytics</span></>
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