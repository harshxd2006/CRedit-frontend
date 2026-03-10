import React from 'react';

// Common styles and components can be passed or imported.
export default function LenderSelectionStep({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
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
}
