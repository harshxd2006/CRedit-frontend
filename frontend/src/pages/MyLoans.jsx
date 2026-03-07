import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const sidebarLinks = [
  { icon: "dashboard",     label: "Dashboard" },
  { icon: "add_card",      label: "Apply for Loan" },
  { icon: "assignment",    label: "My Applications" },
  { icon: "payments",      label: "My Loans",       active: true },
  { icon: "trending_up",   label: "Credit Building Journey" },
  { icon: "help",          label: "Help and Support" },
];

const tabs = ["Active Loans (1)", "Completed Loans", "All Loans"];

const recentActivity = [
  { label: "EMI Payment - Sep 2023",  value: "Successful",  valueColor: "#16a34a" },
  { label: "Document Verification",   value: "Completed",   valueColor: "#0f172a" },
  { label: "Interest Accrual",        value: "-$210.45",    valueColor: "#0f172a" },
];

export default function MyLoans({ navigate }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside style={{
          width: 288, background: MIDNIGHT, color: "#fff",
          padding: "24px 16px", position: "sticky", top: 80,
          height: "calc(100vh - 80px)", display: "flex", flexDirection: "column",
          justifyContent: "space-between", flexShrink: 0,
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {sidebarLinks.map((link) => (
              <a key={link.label} href="#"
                onClick={(e) => { e.preventDefault(); if (link.label === "Dashboard") navigate?.("dashboard"); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 12, textDecoration: "none",
                  background: link.active ? GOLD : "transparent",
                  color: link.active ? MIDNIGHT : "rgba(255,255,255,.7)",
                  fontWeight: link.active ? 700 : 500,
                  fontSize: 14, transition: "all .15s",
                }}
                onMouseEnter={(e) => { if (!link.active) { e.currentTarget.style.background = "rgba(255,255,255,.10)"; e.currentTarget.style.color = "#fff"; } }}
                onMouseLeave={(e) => { if (!link.active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; } }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", borderRadius: 12, textDecoration: "none",
            color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 500,
            borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 16,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
            Profile and Settings
          </a>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "40px", maxWidth: 960 }}>
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Loan Management</h1>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Manage your active applications and repayment schedules.</p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #e2e8f0", marginBottom: 32, gap: 0 }}>
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                style={{
                  padding: "12px 24px", fontSize: 14,
                  fontWeight: activeTab === i ? 600 : 500,
                  color: activeTab === i ? MIDNIGHT : "#64748b",
                  background: "none", border: "none",
                  borderBottom: activeTab === i ? `2px solid ${MIDNIGHT}` : "2px solid transparent",
                  cursor: "pointer", transition: "color .15s", whiteSpace: "nowrap",
                }}
              >{tab}</button>
            ))}
          </div>

          {/* Active Loan Card */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,.04)", overflow: "hidden" }}>
            <div style={{ padding: "32px" }}>
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 12, border: "1px solid #e2e8f0",
                    background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center",
                    padding: 8, boxSizing: "border-box",
                  }}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF5-P3i3d6L1rlrk1t9qcy5omeVzBdXhvoTCd4msquERu_04YdfAYbZD50KoMehG4D-PdujhFUJLNrhhKaX9z8B8UFGqwaYqgVdBSr5GYeoFzVZ1qRbXi1AQ_oWsqGQi1ncstugMoKl4gHPsYAf9cWwXY-i2hkA46PWNcQc7ySfBxyIYbHWq0VUER389s_oNFp8bhEQpm09cj2reL8u19cS7z7WDm-vA26lvxU91lcKgbgXe3ZWBlseV2mRtk72N3Q3ajXEUexGS56"
                      alt="Neptune Finance" style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Home Construction Loan</h3>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Lender: Neptune Finance Corp • ID: #HL-4429</p>
                  </div>
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 14px", borderRadius: 999,
                  background: "#f0fdf4", color: "#16a34a", fontSize: 11, fontWeight: 700,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>verified</span>
                  ON-TIME STREAK: 12 MONTHS
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginBottom: 32 }}>
                <div>
                  <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 4px" }}>Total Outstanding Balance</p>
                  <p style={{ fontSize: 28, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>$23,000.00</p>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Principal: $21,800 | Interest: $1,200</p>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 8px" }}>Repayment Progress</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1, height: 12, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: "65%", background: MIDNIGHT, borderRadius: 99 }} />
                    </div>
                    <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>65%</span>
                  </div>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "4px 0 0" }}>$42,000 of $65,000 paid</p>
                </div>
                <div style={{
                  background: "rgba(255,215,0,.08)", padding: 16, borderRadius: 12,
                  border: "1px solid rgba(255,215,0,.2)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>Next EMI Due</span>
                    <span style={{
                      fontSize: 9, fontWeight: 700, background: "rgba(255,255,255,.5)",
                      padding: "2px 6px", borderRadius: 4, color: "#0f172a",
                    }}>AUTO-PAY ON</span>
                  </div>
                  <p style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>$1,450.00</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#475569" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>calendar_month</span>
                    Due in 4 days (Oct 15, 2023)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 24, borderTop: "1px solid #f1f5f9" }}>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", background: GOLD, borderRadius: 8,
                  fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", color: MIDNIGHT,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>visibility</span>
                  View Full Details
                </button>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", background: "#f1f5f9", borderRadius: 8,
                  fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", color: "#475569",
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                  Download Documents
                </button>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", background: "#f1f5f9", borderRadius: 8,
                  fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", color: "#475569",
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>emergency_home</span>
                  Foreclosure Request
                </button>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", background: "#fef2f2", borderRadius: 8,
                  fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", color: "#dc2626",
                  marginLeft: "auto",
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>report_problem</span>
                  Report Issue
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24 }}>
            {/* Repayment Strategy */}
            <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>analytics</span>
                <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Repayment Strategy</h4>
              </div>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: "0 0 16px" }}>
                By maintaining your on-time streak, you've qualified for a 0.5% interest rate reduction starting next quarter. Keep up the good work!
              </p>
              <button style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 700, background: "none", border: "none",
                cursor: "pointer", color: MIDNIGHT,
              }}>
                Optimize My Payments
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </button>
            </div>

            {/* Recent Activity */}
            <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>history</span>
                <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Recent Activity</h4>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {recentActivity.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#64748b" }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: item.valueColor }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}