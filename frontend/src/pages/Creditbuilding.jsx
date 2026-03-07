import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const keyFactors = [
  { label: "Savings Consistency", pct: 88 },
  { label: "Bill Payment Streak", pct: 100 },
  { label: "Account Age",         pct: 42, color: MIDNIGHT },
  { label: "Identity Health",     pct: 95 },
];

const actionCards = [
  { icon: "payments",      title: "Maintain Salary Streak",  desc: "Keep your main salary account linked for 90 more days to prove income stability.",              impact: "High Impact",   impactColor: "#16a34a", impactBg: "#f0fdf4", points: "+25 points" },
  { icon: "savings",       title: "Increase Savings Rate",   desc: "Aim for 15% monthly savings to demonstrate improved financial buffers.",                         impact: "Medium Impact", impactColor: "#1d4ed8", impactBg: "#eff6ff", points: "+15 points" },
  { icon: "verified_user", title: "Verify Address History",  desc: "Update your last 3 years of residential history to improve identity verification.",              impact: "Info Update",   impactColor: "#64748b", impactBg: "#f8fafc", points: "+5 points"  },
];

export default function CreditBuilding({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1, alignItems: "flex-start" }}>

        {/* Universal Sidebar — sticky, scrolls with page */}
        <div style={{ flexShrink: 0, position: "sticky", top: 80, alignSelf: "flex-start" }}>
          <Sidebar navigate={navigate} activePage="creditBuilding" />
        </div>

        {/* Right column: content + footer */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>

          <main style={{ flex: 1, padding: "32px 40px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

              {/* Page Header */}
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 4px", letterSpacing: "-0.5px" }}>Credit Building Journey</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Step-by-step progress towards your financial goals.</p>
              </div>

              {/* Current Stage Banner */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: MIDNIGHT, fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>bolt</span>
                      Current Status
                    </div>
                    <h2 style={{ fontSize: 36, fontWeight: 900, color: MIDNIGHT, margin: "0 0 8px" }}>Growing Stage</h2>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, maxWidth: 480, margin: "0 0 20px" }}>
                      You've successfully built a foundation. Now we're focusing on consistency and depth in your credit profile.
                    </p>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
                        <span>Progress to Established</span>
                        <span style={{ color: MIDNIGHT }}>65%</span>
                      </div>
                      <div style={{ width: "100%", height: 10, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ width: "65%", height: "100%", background: GOLD, borderRadius: 99 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,215,0,.08)", border: "1px solid rgba(255,215,0,.15)", borderRadius: 16, padding: "24px 32px", textAlign: "center", flexShrink: 0 }}>
                    <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 4px" }}>Current Score</p>
                    <p style={{ fontSize: 48, fontWeight: 900, color: MIDNIGHT, margin: "0 0 8px", lineHeight: 1 }}>684</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#16a34a", fontSize: 13, fontWeight: 700, justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>trending_up</span>
                      +12 pts this month
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Roadmap */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: "0 0 24px" }}>Journey Roadmap</h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", padding: "0 16px" }}>
                  <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, background: "#e2e8f0", transform: "translateY(-50%)", zIndex: 0 }} />
                  {[
                    { icon: "check",       label: "Starter",     sub: "Completed",   bg: MIDNIGHT, color: "#fff" },
                    { icon: "trending_up", label: "Growing",     sub: "Active Phase", bg: GOLD,    color: MIDNIGHT, large: true },
                    { icon: "lock",        label: "Established", sub: "Locked",      bg: "#e2e8f0", color: "#94a3b8" },
                    { icon: "stars",       label: "Expert",      sub: "Locked",      bg: "#e2e8f0", color: "#94a3b8" },
                  ].map((stage) => (
                    <div key={stage.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, background: "#fff", padding: "0 8px", zIndex: 1, opacity: stage.sub === "Locked" ? 0.5 : 1 }}>
                      <div style={{
                        width: stage.large ? 56 : 44, height: stage.large ? 56 : 44, borderRadius: "50%",
                        background: stage.bg, display: "flex", alignItems: "center", justifyContent: "center",
                        border: "4px solid #fff",
                        boxShadow: stage.large ? `0 0 0 4px rgba(255,215,0,.3)` : "none",
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: stage.large ? 26 : 20, color: stage.color }}>{stage.icon}</span>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: stage.sub === "Locked" ? "#94a3b8" : "#0f172a", margin: 0 }}>{stage.label}</p>
                        <p style={{ fontSize: 11, color: stage.sub === "Active Phase" ? GOLD : "#94a3b8", margin: 0, fontWeight: stage.sub === "Active Phase" ? 700 : 400 }}>{stage.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score History & Key Factors */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 24 }}>

                {/* Mock Graph */}
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 }}>NTC Score History</h3>
                    <select style={{ fontSize: 13, border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px", outline: "none" }}>
                      <option>Last 6 Months</option>
                      <option>Last Year</option>
                    </select>
                  </div>
                  <div style={{ height: 200, display: "flex", alignItems: "flex-end", gap: 8, padding: "0 8px" }}>
                    {[
                      { month: "Jan", pct: 40 }, { month: "Feb", pct: 45 }, { month: "Mar", pct: 55 },
                      { month: "Apr", pct: 65 }, { month: "May", pct: 72 }, { month: "Jun", pct: 85, active: true },
                    ].map((bar) => (
                      <div key={bar.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
                        <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                          <div style={{ width: "100%", height: `${bar.pct}%`, background: bar.active ? GOLD : `rgba(255,215,0,${bar.pct / 120})`, borderRadius: "6px 6px 0 0", transition: "height .3s" }} />
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: bar.active ? GOLD : "#94a3b8", textTransform: "uppercase" }}>{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Factors */}
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 20px" }}>Key Factors</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {keyFactors.map((f) => (
                      <div key={f.label}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                          <span style={{ color: "#64748b" }}>{f.label}</span>
                          <span>{f.pct}%</span>
                        </div>
                        <div style={{ width: "100%", height: 6, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                          <div style={{ width: `${f.pct}%`, height: "100%", background: f.color || GOLD, borderRadius: 99 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button style={{
                    width: "100%", marginTop: 20, padding: "10px 0", fontSize: 13, fontWeight: 700,
                    color: MIDNIGHT, background: "rgba(17,66,93,.05)", borderRadius: 8,
                    border: "none", cursor: "pointer",
                  }}>View All Factors</button>
                </div>
              </div>

              {/* Action Plan */}
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: "0 0 16px" }}>Action Plan: Score Boosters</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {actionCards.map((card) => (
                    <div key={card.title} style={{
                      background: "#fff", padding: 20, borderRadius: 14, border: "1px solid #e2e8f0",
                      cursor: "pointer", transition: "border-color .15s, box-shadow .15s",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,215,0,.15)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(17,66,93,.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 20, color: MIDNIGHT }}>{card.icon}</span>
                        </div>
                        <span style={{ padding: "3px 8px", background: card.impactBg, color: card.impactColor, fontSize: 9, fontWeight: 700, borderRadius: 999, textTransform: "uppercase" }}>{card.impact}</span>
                      </div>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>{card.title}</h4>
                      <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: "0 0 14px" }}>{card.desc}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add_circle</span>
                        Up to {card.points}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </main>

          {/* ── FOOTER ── */}
          <Footer />
        </div>
      </div>
    </div>
  );
}