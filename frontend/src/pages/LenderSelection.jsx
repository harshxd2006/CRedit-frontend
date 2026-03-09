import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function LenderSelection({ navigate }) {
    const [showOtherLenders, setShowOtherLenders] = useState(false);
    const [showCompareBar, setShowCompareBar] = useState(true);

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar navigate={navigate} />

            {/* Sidebar + Content row */}
            <div style={{ display: "flex", flex: 1 }}>
                <Sidebar navigate={navigate} activePage="applyForLoan" />

                <main style={{ flex: 1, overflowY: "auto" }}>
                    {/* Header */}
                    <header style={{
                        position: "sticky", top: 0, zIndex: 10,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "16px 32px",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(8px)",
                        borderBottom: "1px solid #e2e8f0"
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500 }}>Applications / Personal Loan</span>
                            <span style={{ color: "#cbd5e1" }}>/</span>
                            <span style={{ color: "#0f172a", fontSize: 13, fontWeight: 700 }}>Lender Selection</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <button style={{ padding: 8, color: "#64748b", background: "none", border: "none", borderRadius: "50%", cursor: "pointer" }}>
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingLeft: 16, borderLeft: "1px solid #e2e8f0" }}>
                                <div style={{ textAlign: "right" }}>
                                    <div style={{ fontSize: 12, fontWeight: 700 }}>Rahul Sharma</div>
                                    <div style={{ fontSize: 10, color: "#64748b" }}>Credit Score: 785</div>
                                </div>
                                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e2e8f0", border: `2px solid rgba(255,215,0,0.2)`, overflow: "hidden" }}>
                                    <img src="https://i.pravatar.cc/40?img=12" alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    <div style={{ padding: "32px", maxWidth: 900, margin: "0 auto" }}>

                        {/* Hero Section */}
                        <div style={{ marginBottom: 32 }}>
                            <h1 style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", margin: "0 0 8px" }}>Choose Your Lender</h1>
                            <p style={{ fontSize: 16, color: "#475569", margin: 0 }}>We've matched your profile with 4 RBI-registered digital lenders. Compare and select the best offer for your needs.</p>
                        </div>

                        {/* Ranking Transparency banner */}
                        <div style={{
                            display: "flex", alignItems: "flex-start", gap: 12,
                            padding: "16px", background: "rgba(17,66,93,0.05)",
                            border: "1px solid rgba(17,66,93,0.1)", borderRadius: 12, marginBottom: 32
                        }}>
                            <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20, flexShrink: 0 }}>info</span>
                            <p style={{ fontSize: 13, color: "#334155", margin: 0, lineHeight: 1.6 }}>
                                <strong>Ranking Transparency:</strong> Lenders are ranked based on a composite score of your estimated eligibility (40%), APR (30%), processing speed (20%), and user reviews (10%). CreditFlow does not receive commissions for higher rankings.
                            </p>
                        </div>

                        {/* Tabs & Controls */}
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0", marginBottom: 24 }}>
                            <div style={{ display: "flex", gap: 32 }}>
                                <button style={{ paddingBottom: 16, borderBottom: `2px solid ${MIDNIGHT}`, color: MIDNIGHT, fontWeight: 700, fontSize: 13, background: "none", cursor: "pointer" }}>
                                    Matched Lenders (4)
                                </button>
                                <button style={{ paddingBottom: 16, borderBottom: "2px solid transparent", color: "#64748b", fontWeight: 500, fontSize: 13, background: "none", border: "none", cursor: "pointer" }}>
                                    Compare Selected (2)
                                </button>
                            </div>
                            <div style={{ paddingBottom: 16 }}>
                                <button style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "#64748b", background: "#f1f5f9", border: "none", padding: "6px 12px", borderRadius: 8, cursor: "pointer" }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
                                    Filter &amp; Sort
                                </button>
                            </div>
                        </div>

                        {/* Lender Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>

                            {/* Card 1 — HDFC Bank — Recommended */}
                            <div style={{ position: "relative", background: "#fff", border: `2px solid ${MIDNIGHT}`, borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                                <div style={{
                                    position: "absolute", top: -12, left: 24,
                                    background: MIDNIGHT, color: "#fff",
                                    fontSize: 10, fontWeight: 900, padding: "4px 12px",
                                    borderRadius: 9999, textTransform: "uppercase", letterSpacing: "0.1em"
                                }}>Highly Recommended</div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, alignItems: "center" }}>
                                    {/* Left: Bank Info */}
                                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                        <div style={{ width: 56, height: 56, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 8 }}>
                                            <div style={{ width: 40, height: 40, background: "#003580", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <span style={{ color: "#fff", fontSize: 10, fontWeight: 900, letterSpacing: "-0.5px" }}>HDFC</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>HDFC Bank</div>
                                            <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f97316" }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span>
                                                <span style={{ fontSize: 12, fontWeight: 700 }}>4.8</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle: Stats */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", padding: "0 24px" }}>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Max Amount</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>₹15,00,000</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Interest Rate</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#16a34a" }}>10.5% <span style={{ fontSize: 10, fontWeight: 400, color: "#94a3b8" }}>p.a.</span></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Tenure</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>12 - 60 mo</div>
                                        </div>
                                    </div>

                                    {/* Right: CTA */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <button style={{ width: "100%", background: GOLD, color: MIDNIGHT, fontWeight: 700, padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14 }}>Select Offer</button>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                                            <input type="checkbox" defaultChecked id="comp1" style={{ accentColor: MIDNIGHT }} />
                                            <label htmlFor="comp1" style={{ fontSize: 12, color: "#64748b", cursor: "pointer" }}>Add to compare</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Secondary row */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginTop: 24, paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>APR</div><div style={{ fontSize: 13, fontWeight: 600 }}>11.25%</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Est. EMI</div><div style={{ fontSize: 13, fontWeight: 600 }}>₹2,450 / lac</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Processing Fee</div><div style={{ fontSize: 13, fontWeight: 600 }}>₹999 + GST</div></div>
                                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                        <a href="#" style={{ display: "flex", alignItems: "center", gap: 4, color: MIDNIGHT, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>description</span>
                                            Key Fact Statement (KFS)
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 — ICICI Bank */}
                            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, alignItems: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                        <div style={{ width: 56, height: 56, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 8 }}>
                                            <div style={{ width: 40, height: 40, background: "#F7941D", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <span style={{ color: "#fff", fontSize: 9, fontWeight: 900 }}>ICICI</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>ICICI Bank</div>
                                            <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f97316" }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span>
                                                <span style={{ fontSize: 12, fontWeight: 700 }}>4.6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", padding: "0 24px" }}>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Max Amount</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>₹10,00,000</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Interest Rate</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>10.99% <span style={{ fontSize: 10, fontWeight: 400, color: "#94a3b8" }}>p.a.</span></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Tenure</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>12 - 48 mo</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <button style={{ width: "100%", background: "#e2e8f0", color: "#0f172a", fontWeight: 700, padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14 }}>Select Offer</button>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                                            <input type="checkbox" defaultChecked id="comp2" style={{ accentColor: MIDNIGHT }} />
                                            <label htmlFor="comp2" style={{ fontSize: 12, color: "#64748b", cursor: "pointer" }}>Add to compare</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginTop: 24, paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>APR</div><div style={{ fontSize: 13, fontWeight: 600 }}>11.80%</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Est. EMI</div><div style={{ fontSize: 13, fontWeight: 600 }}>₹2,510 / lac</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Processing Fee</div><div style={{ fontSize: 13, fontWeight: 600 }}>1% + GST</div></div>
                                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                        <a href="#" style={{ display: "flex", alignItems: "center", gap: 4, color: MIDNIGHT, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>description</span>
                                            Key Fact Statement (KFS)
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 — Axis Bank */}
                            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", opacity: 0.92 }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, alignItems: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                        <div style={{ width: 56, height: 56, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 8 }}>
                                            <div style={{ width: 40, height: 40, background: "#800000", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <span style={{ color: "#fff", fontSize: 9, fontWeight: 900 }}>AXIS</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>Axis Bank</div>
                                            <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f97316" }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span>
                                                <span style={{ fontSize: 12, fontWeight: 700 }}>4.4</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", padding: "0 24px" }}>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Max Amount</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>₹8,00,000</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Interest Rate</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>12.5% <span style={{ fontSize: 10, fontWeight: 400, color: "#94a3b8" }}>p.a.</span></div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Tenure</div>
                                            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>12 - 36 mo</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <button style={{ width: "100%", background: "#e2e8f0", color: "#0f172a", fontWeight: 700, padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14 }}>Select Offer</button>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                                            <input type="checkbox" id="comp3" style={{ accentColor: MIDNIGHT }} />
                                            <label htmlFor="comp3" style={{ fontSize: 12, color: "#64748b", cursor: "pointer" }}>Add to compare</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginTop: 24, paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>APR</div><div style={{ fontSize: 13, fontWeight: 600 }}>13.50%</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Est. EMI</div><div style={{ fontSize: 13, fontWeight: 600 }}>₹2,680 / lac</div></div>
                                    <div><div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Processing Fee</div><div style={{ fontSize: 13, fontWeight: 600 }}>₹1,499 + GST</div></div>
                                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                        <a href="#" style={{ display: "flex", alignItems: "center", gap: 4, color: MIDNIGHT, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>description</span>
                                            Key Fact Statement (KFS)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Lenders */}
                        <div style={{ marginBottom: 48 }}>
                            <button
                                onClick={() => setShowOtherLenders(!showOtherLenders)}
                                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, background: "#f1f5f9", borderRadius: 12, border: "1px solid #e2e8f0", cursor: "pointer" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span className="material-symbols-outlined" style={{ color: "#94a3b8" }}>lock</span>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: "#475569" }}>Other Lenders (12)</span>
                                    <span style={{ fontSize: 10, background: "#e2e8f0", padding: "2px 8px", borderRadius: 4, color: "#64748b" }}>Low Eligibility Match</span>
                                </div>
                                <span className="material-symbols-outlined" style={{ color: "#94a3b8" }}>{showOtherLenders ? "expand_less" : "expand_more"}</span>
                            </button>
                            {showOtherLenders && (
                                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "0 0 12px 12px", borderTop: "none" }}>
                                    {["Kotak Mahindra — 11.25% p.a.", "IndusInd Bank — 11.50% p.a.", "Yes Bank — 12.00% p.a."].map((item, i) => (
                                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderTop: "1px solid #f1f5f9" }}>
                                            <span style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>{item}</span>
                                            <button style={{ border: "1px solid #e2e8f0", background: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 12, cursor: "pointer", color: MIDNIGHT, fontWeight: 600 }}>View</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Comparison Table (hidden by default) */}
                        <div style={{ marginTop: 64, overflow: "hidden", borderRadius: 16, border: "1px solid #e2e8f0", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", display: "none" }}>
                            <div style={{ padding: 24, background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Detailed Side-by-Side</h2>
                            </div>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ background: "rgba(248,250,252,0.5)" }}>
                                        <th style={{ padding: 16, fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", textAlign: "left" }}>Feature</th>
                                        <th style={{ padding: 16, fontSize: 13, fontWeight: 700, borderLeft: "1px solid #f1f5f9", textAlign: "left" }}>HDFC Bank</th>
                                        <th style={{ padding: 16, fontSize: 13, fontWeight: 700, borderLeft: "1px solid #f1f5f9", textAlign: "left" }}>ICICI Bank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: "Interest Rate", hdfc: "10.50%", icici: "10.99%" },
                                        { feature: "Processing Fee", hdfc: "₹999 + GST", icici: "1.00% + GST" },
                                        { feature: "Prepayment", hdfc: "No Charges", icici: "3% Charges", hdfcGreen: true },
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderTop: "1px solid #f1f5f9" }}>
                                            <td style={{ padding: 16, fontSize: 11, fontWeight: 500, color: "#64748b", textTransform: "uppercase" }}>{row.feature}</td>
                                            <td style={{ padding: 16, fontSize: 13, fontWeight: 700, borderLeft: "1px solid #f1f5f9", color: row.hdfcGreen ? "#16a34a" : "#0f172a" }}>{row.hdfc}</td>
                                            <td style={{ padding: 16, fontSize: 13, fontWeight: 700, borderLeft: "1px solid #f1f5f9" }}>{row.icici}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Footer Meta */}
                    <footer style={{ padding: "32px", borderTop: "1px solid #e2e8f0", background: "#f8fafc" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900, margin: "0 auto" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                                    <div style={{ width: 48, height: 48, background: "#e2e8f0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: 10, fontWeight: 900, color: "#475569" }}>RBI</span>
                                    </div>
                                    <p style={{ fontSize: 12, color: "#64748b", margin: 0, maxWidth: 340, lineHeight: 1.6 }}>
                                        CreditFlow is a digital lending platform partner. All loans are subject to credit approval by the respective banking institutions.
                                    </p>
                                </div>
                                <div style={{ display: "flex", gap: 16 }}>
                                    <a href="#" style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>
                                    <a href="#" style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textDecoration: "none" }}>Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>

            {/* FAQSection & Footer OUTSIDE the flex row */}
            <FAQSection />
            <Footer />

            {/* Floating Compare Bar */}
            {showCompareBar && (
                <div style={{
                    position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
                    width: "100%", maxWidth: 800, padding: "0 16px", zIndex: 20
                }}>
                    <div style={{
                        background: MIDNIGHT, color: "#fff",
                        padding: "20px 24px", borderRadius: 16,
                        boxShadow: "0 20px 60px rgba(17,66,93,0.4)",
                        display: "flex", alignItems: "center", gap: 24,
                        border: "1px solid rgba(255,255,255,0.1)"
                    }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: 4 }}>Quick Comparison</div>
                            <div style={{ fontSize: 16, fontWeight: 700 }}>Compare 2 selected lenders</div>
                        </div>
                        <div style={{ display: "flex", gap: 12 }}>
                            {[
                                { name: "HDFC", rate: "10.5% p.a.", color: "#003580" },
                                { name: "ICICI", rate: "10.99% p.a.", color: "#F7941D" },
                            ].map((bank, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.1)", padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div style={{ width: 24, height: 24, background: bank.color, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ color: "#fff", fontSize: 7, fontWeight: 900 }}>{bank.name}</span>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 12, fontWeight: 700 }}>{bank.name}</div>
                                        <div style={{ fontSize: 11, opacity: 0.7 }}>{bank.rate}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button style={{ background: GOLD, color: MIDNIGHT, padding: "10px 20px", borderRadius: 10, fontWeight: 900, fontSize: 13, border: "none", cursor: "pointer" }}>
                            Compare Details
                        </button>
                        <button onClick={() => setShowCompareBar(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}