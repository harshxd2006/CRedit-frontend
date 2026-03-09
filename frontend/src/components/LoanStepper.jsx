import React from 'react';

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
const MIDNIGHT = "#11425D";
const GOLD = "#FFD700";

export default function LoanStepper({ currentStep }) {
    return (
        <div className="no-scrollbar" style={{ overflowX: "auto", fontFamily: "'Inter', sans-serif", width: "100%", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            <div style={{ display: "flex", alignItems: "flex-start", minWidth: 500, padding: "10px 0 16px 0" }}>
                {steps.map((step, i) => {
                    const isActive = i === currentStep;
                    const isCompleted = i < currentStep;

                    return (
                        <React.Fragment key={step}>
                            {/* Step Circle & Label */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80, flexShrink: 0 }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                                    background: isActive || isCompleted ? MIDNIGHT : "#e2e8f0",
                                    color: isActive || isCompleted ? "#fff" : "#94a3b8", fontWeight: 700, fontSize: 14,
                                }}>
                                    {isCompleted ? <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check</span> : i + 1}
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: isActive ? "#0f172a" : "#94a3b8",
                                    textAlign: "center",
                                    maxWidth: 64,
                                    marginTop: 8,
                                    lineHeight: 1.3
                                }}>
                                    {step}
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {i < steps.length - 1 && (
                                <div style={{
                                    flex: 1,
                                    height: 2,
                                    background: isCompleted ? MIDNIGHT : "#e2e8f0",
                                    marginTop: 17,
                                    marginLeft: -8,
                                    marginRight: -8
                                }} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
