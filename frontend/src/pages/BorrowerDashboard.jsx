import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const healthIndicators = [
  { label: "Salary Consistency", value: "Stable",  icon: "check_circle", iconColor: "#22c55e", barColor: "#22c55e", barWidth: "90%" },
  { label: "Savings Rate",       value: "18.5%",   icon: "warning",      iconColor: "#f59e0b", barColor: "#f59e0b", barWidth: "45%" },
  { label: "FOIR",               value: "32.0%",   icon: "check_circle", iconColor: "#22c55e", barColor: "#22c55e", barWidth: "75%" },
];

const applications = [
  { label: "Auto Loan",     sub: "IDFC First Bank", status: "Pending",  statusBg: "#fffbeb", statusColor: "#d97706", statusBorder: "#fef3c7" },
  { label: "Consumer Loan", sub: "Home Credit",     status: "Approved", statusBg: "#f0fdf4", statusColor: "#16a34a", statusBorder: "#dcfce7" },
];

const lenderMatches = [
  { amount: "₹5,00,000", bank: "ICICI Bank", apr: "10.5%", match: "98%" },
  { amount: "₹3,50,000", bank: "Axis Bank",  apr: "11.2%", match: "92%" },
];

const journeySteps = [
  { icon: "check",       label: "Onboarding",       sub: "Completed on 12 Sep",       state: "done"   },
  { icon: "trending_up", label: "Credit Foundation", sub: "Maintain EMI for 3 months", state: "active" },
  { icon: "lock",        label: "Premium Profile",   sub: "Unlock Tier 2 benefits",    state: "locked" },
];

export default function BorrowerDashboard({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f6f7f8", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="dashboard" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main className="page-main" style={{ flex: 1, padding: "24px 20px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

              {/* Welcome Banner */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h1 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 4px", letterSpacing: "-0.5px" }}>Welcome back, Alex!</h1>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                    <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500, margin: 0 }}>Reminder: Your HDFC Loan EMI is due in 3 days</p>
                  </div>
                </div>
                <button style={{ background: MIDNIGHT, color: "#fff", padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(17,66,93,.2)" }}>Pay Now</button>
              </div>

              {/* Main Grid */}
              <div className="dash-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>

                <div className="dash-left-col" style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 20 }}>

                  {/* NTC Score Card */}
                  <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", padding: 24, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 16, right: 16 }}>
                      <span style={{ background: "#f0fdf4", color: "#16a34a", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tier 1 - Low Risk</span>
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em", alignSelf: "flex-start", margin: "0 0 20px" }}>NTC Credit Score</p>
                    <div style={{ position: "relative", width: 220, height: 110, marginBottom: 12 }}>
                      <svg viewBox="0 0 100 50" style={{ width: "100%", height: "100%" }}>
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 75 22" fill="none" stroke={GOLD} strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="30" />
                        <g transform="rotate(120, 50, 50)">
                          <line x1="50" y1="50" x2="50" y2="15" stroke={MIDNIGHT} strokeWidth="2" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="3" fill={MIDNIGHT} />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ fontSize: 42, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>780</span>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 2 }}>Excellent</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
                      <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "rgba(255,215,0,.08)", borderRadius: 8, fontSize: 12, fontWeight: 700, border: "1px solid rgba(255,215,0,.2)", color: MIDNIGHT, cursor: "pointer" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>analytics</span>View Full Report
                      </button>
                      <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: GOLD, borderRadius: 8, fontSize: 12, fontWeight: 700, border: "none", color: "#000", cursor: "pointer" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>refresh</span>Refresh Score
                      </button>
                    </div>
                  </div>

                  {/* Recent Applications + Lender Matches */}
                  <div className="apps-lender-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #f1f5f9", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Recent Applications</h3>
                        <a href="#" style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", textDecoration: "none" }}>View All</a>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {applications.map((app, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", borderRadius: 14, border: "1px solid transparent", transition: "border .15s" }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = "#e2e8f0"}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }} />
                              <div>
                                <p style={{ fontSize: 13, fontWeight: 700, margin: 0, color: "#0f172a" }}>{app.label}</p>
                                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{app.sub}</p>
                              </div>
                            </div>
                            <span style={{ padding: "4px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700, background: app.statusBg, color: app.statusColor, border: `1px solid ${app.statusBorder}` }}>{app.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #f1f5f9", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Top Lender Matches</h3>
                        <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>insights</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {lenderMatches.map((l, i) => (
                          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 14, border: "1px solid #e2e8f0", transition: "box-shadow .15s" }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.08)"}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                            <div>
                              <p style={{ fontSize: 16, fontWeight: 900, margin: "0 0 2px", color: "#0f172a" }}>{l.amount}</p>
                              <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{l.bank} • {l.apr} APR</p>
                            </div>
                            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                              <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", margin: 0 }}>{l.match} Match</p>
                              <button style={{ fontSize: 11, fontWeight: 700, background: "none", border: "none", cursor: "pointer", color: "#0f172a", textDecoration: "underline" }}>{i === 0 ? "Quick Apply" : "Details"}</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Health Indicators */}
                  <div className="health-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                    {healthIndicators.map((h, i) => (
                      <div key={i} style={{ background: "#fff", padding: 18, borderRadius: 16, border: "1px solid #e2e8f0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>{h.label}</span>
                          <span className="material-symbols-outlined" style={{ color: h.iconColor, fontSize: 16 }}>{h.icon}</span>
                        </div>
                        <p style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#0f172a" }}>{h.value}</p>
                        <div style={{ width: "100%", background: "#f1f5f9", height: 5, borderRadius: 99, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: h.barWidth, background: h.barColor, borderRadius: 99 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="dash-right-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                  {/* Active Loan Card */}
                  <div style={{ background: MIDNIGHT, color: "#fff", borderRadius: 20, padding: 22, boxShadow: "0 8px 32px rgba(17,66,93,.25)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.05)", transform: "translate(40%, -40%)" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div>
                        <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 4px" }}>Active Loan</p>
                        <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>HDFC Home Loan</h4>
                      </div>
                      <div style={{ width: 36, height: 36, background: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: 5 }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC_mQDUUfzkOLVlRlDafB6YY1wEZ3B3cdGem9GP9ArNXBLCQOxvE8FSdf05kwsGkg-jH0cy6wgn94pGEdwf_5oDLJLVfeN7lszHXf19tgHbGVNIXVxePMxDraTnd2cC_SSebjvWQaE02E6Rl_QXaUkKmfLBb-TGLz2W5JblNDot9_i_KmWAQu4G5lfDLwJO8_qJd9XSTnsKrafmaej475D8NvAqrd1MRoCthu7_uMKuNdYHpNvjxTA7DhTVu5x6QCy-q_5B9iXSaS-" alt="HDFC" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14 }}>
                      <div>
                        <p style={{ fontSize: 9, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 2px" }}>Remaining</p>
                        <p style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>₹42,50,000</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 9, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 2px" }}>EMI Due</p>
                        <p style={{ fontSize: 13, fontWeight: 700, margin: 0 }}>15 Oct</p>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, marginBottom: 5 }}>
                        <span>Progress</span><span>34% Paid</span>
                      </div>
                      <div style={{ width: "100%", background: "rgba(255,255,255,.1)", height: 7, borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: "34%", background: GOLD, borderRadius: 99 }} />
                      </div>
                    </div>
                  </div>

                  {/* Credit Building Journey */}
                  <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", padding: 22 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 18 }}>route</span>Credit Building Journey
                    </h3>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 2, background: "#f1f5f9" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        {journeySteps.map((step, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", opacity: step.state === "locked" ? 0.4 : 1 }}>
                            <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, background: step.state === "done" ? "#22c55e" : step.state === "active" ? GOLD : "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: step.state === "active" ? `0 0 0 4px rgba(255,215,0,.25)` : "none" }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 14, color: step.state === "locked" ? "#94a3b8" : step.state === "active" ? "#000" : "#fff" }}>{step.icon}</span>
                            </div>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <p style={{ fontSize: 12, fontWeight: 700, margin: 0, color: "#0f172a" }}>{step.label}</p>
                                {step.state === "active" && <span style={{ padding: "2px 6px", background: GOLD, color: "#000", fontSize: 8, fontWeight: 700, borderRadius: 4, textTransform: "uppercase" }}>Active</span>}
                              </div>
                              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{step.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button style={{ width: "100%", marginTop: 20, padding: "11px 0", background: GOLD, color: "#000", fontWeight: 700, fontSize: 12, borderRadius: 10, border: "none", cursor: "pointer" }}>Continue Journey</button>
                  </div>

                  {/* Tier Badge */}
                  <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: "50%", background: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 18 }}>workspace_premium</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 700, color: MIDNIGHT, textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>Tier 1 Elite</p>
                        <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Low Risk Profile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dash-main-grid { grid-template-columns: 1fr !important; }
          .dash-left-col { grid-column: span 1 !important; }
          .dash-right-col { grid-column: span 1 !important; }
          .apps-lender-grid { grid-template-columns: 1fr !important; }
          .health-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .health-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}