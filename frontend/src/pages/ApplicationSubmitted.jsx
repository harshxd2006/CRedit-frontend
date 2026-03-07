import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function ApplicationSubmitted({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "#f8f9ff", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="applicationSubmitted" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>

          {/* Page Header */}
          <header style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 20px", height: 56, background: "#fff", borderBottom: "1px solid #e2e8f0",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 20 }}>check_circle</span>
              <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#0f172a" }}>Application Confirmation</h2>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["notifications", "account_circle"].map((icon) => (
                <button key={icon} style={{
                  width: 36, height: 36, borderRadius: 8, background: "#f1f5f9",
                  border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#64748b" }}>{icon}</span>
                </button>
              ))}
            </div>
          </header>

          {/* Main Content */}
          <main className="page-main" style={{ flex: 1, padding: "24px 16px", background: "#f8f9ff" }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,.06)" }}>

                {/* Success Hero */}
                <div style={{
                  background: MIDNIGHT, padding: "48px 24px",
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%", background: GOLD,
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20,
                    boxShadow: "0 8px 32px rgba(255,215,0,.3)",
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 40, color: "#000", fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 10px" }}>Application Submitted!</h1>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", maxWidth: 380, lineHeight: 1.7, margin: 0 }}>
                    Your application for the <strong style={{ color: GOLD }}>Gold Tier Credit Line</strong> has been successfully received and is currently in the final review stage.
                  </p>
                </div>

                <div style={{ padding: "24px 20px" }}>

                  {/* Key Info */}
                  <div className="appsubmit-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
                    {[
                      { label: "Application Reference", value: "#CF-98234-LX", color: MIDNIGHT },
                      { label: "Expected Disbursement", value: "Oct 24, 2023",  color: "#0f172a" },
                    ].map((item) => (
                      <div key={item.label} style={{ padding: 20, background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                        <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 6px" }}>{item.label}</p>
                        <p style={{ fontSize: 20, fontWeight: 900, color: item.color, margin: 0 }}>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "0 0 20px" }}>Next Steps</h3>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: 15, top: 8, bottom: 8, width: 2, background: "#e2e8f0" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                        {[
                          {
                            icon: "check", bg: "#22c55e", color: "#fff",
                            title: "Application Received",
                            desc: "System has verified all uploaded documents and identity information.",
                            status: "Completed", statusColor: "#16a34a",
                          },
                          {
                            icon: "verified_user", bg: GOLD, color: "#000",
                            title: "Lender Review",
                            desc: "A specialized credit officer is reviewing your credit limit and terms. This usually takes 12-24 hours.",
                            status: "In Progress", statusColor: MIDNIGHT,
                          },
                          {
                            icon: "account_balance_wallet", bg: "#e2e8f0", color: "#94a3b8",
                            title: "Fund Disbursement",
                            desc: "Once approved, funds will be instantly transferred to your linked bank account ending in **4902.",
                            status: "Upcoming", statusColor: "#94a3b8",
                          },
                        ].map((step, i) => (
                          <div key={i} style={{ display: "flex", gap: 20, position: "relative", opacity: step.status === "Upcoming" ? 0.6 : 1 }}>
                            <div style={{
                              width: 32, height: 32, borderRadius: "50%", background: step.bg,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              flexShrink: 0, zIndex: 1,
                            }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 16, color: step.color }}>{step.icon}</span>
                            </div>
                            <div>
                              <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>{step.title}</p>
                              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: "0 0 6px" }}>{step.desc}</p>
                              <span style={{ fontSize: 10, fontWeight: 700, color: step.statusColor, textTransform: "uppercase", letterSpacing: "0.08em" }}>{step.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="appsubmit-btns" style={{ display: "flex", gap: 10, paddingTop: 20, borderTop: "1px solid #f1f5f9", flexWrap: "wrap" }}>
                    <button style={{
                      flex: 1, minWidth: 120, background: GOLD, color: "#000", height: 46, borderRadius: 12,
                      fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>analytics</span>
                      Track Status
                    </button>
                    <button
                      onClick={() => navigate?.("dashboard")}
                      style={{
                        flex: 1, minWidth: 120, background: "#f1f5f9", color: "#0f172a", height: 46, borderRadius: 12,
                        fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>home</span>
                      Back to Dashboard
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .appsubmit-grid { grid-template-columns: 1fr !important; }
          .appsubmit-btns { flex-direction: column !important; }
          .appsubmit-btns button { flex: none !important; width: 100% !important; }
        }
      `}</style>
    </div>
  );
}