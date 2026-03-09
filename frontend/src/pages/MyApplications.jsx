import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const allApplications = [
  { type: "Personal Loan", amount: "₹2,50,000", term: "36 Months", rate: "12.5% APR", applied: "March 3, 2026", daysAgo: "Submitted 2 days ago", status: "Pending", statusBg: "#fffbeb", statusColor: "#d97706", statusBorder: "#fef3c7" },
  { type: "Home Improvement Loan", amount: "₹1,50,000", term: "24 Months", rate: "10.9% APR", applied: "February 28, 2026", daysAgo: "Submitted 5 days ago", status: "Under Review", statusBg: "#eff6ff", statusColor: "#1d4ed8", statusBorder: "#bfdbfe" },
  { type: "Business Loan", amount: "₹5,00,000", term: "48 Months", rate: "9.5% APR", applied: "February 15, 2026", daysAgo: "Approved on Feb 20, 2026", status: "Approved", statusBg: "#f0fdf4", statusColor: "#16a34a", statusBorder: "#bbf7d0" },
];

const filters = ["All", "Pending", "Approved", "Rejected", "Under Review"];



export default function MyApplications({ navigate }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allApplications
    : allApplications.filter((a) => a.status === activeFilter);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="myApplications" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main className="page-main" style={{ flex: 1, padding: "24px 16px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>

              <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>My Applications</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Track and manage all your loan applications in one place.</p>
              </div>

              {/* Filters */}
              <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                {filters.map((f) => (
                  <button key={f} onClick={() => setActiveFilter(f)}
                    style={{ padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: `2px solid ${activeFilter === f ? MIDNIGHT : "#e2e8f0"}`, background: activeFilter === f ? MIDNIGHT : "#fff", color: activeFilter === f ? "#fff" : "#475569", cursor: "pointer", transition: "all .15s" }}>{f}</button>
                ))}
              </div>

              {/* Application Cards */}
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "48px 24px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: "#e2e8f0", display: "block", marginBottom: 14 }}>description</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#64748b", margin: "0 0 8px" }}>No applications found</h3>
                  <p style={{ fontSize: 13, color: "#94a3b8", margin: "0 0 18px" }}>Start your loan journey today.</p>
                  <button style={{ padding: "12px 28px", background: GOLD, color: MIDNIGHT, borderRadius: 10, fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer" }}>Apply Now</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {filtered.map((app, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "20px 16px", boxShadow: "0 2px 8px rgba(0,0,0,.05)", border: "1px solid #e2e8f0", transition: "transform .15s, box-shadow .15s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.08)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.05)"; }}>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: "1px solid #f1f5f9", marginBottom: 14 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(17,66,93,.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 20, color: MIDNIGHT }}>description</span>
                          </div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: MIDNIGHT, margin: 0 }}>{app.type}</h3>
                        </div>
                        <span style={{ padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: app.statusBg, color: app.statusColor, border: `1px solid ${app.statusBorder}`, flexShrink: 0 }}>{app.status}</span>
                      </div>

                      <div className="app-details-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 14 }}>
                        {[
                          { label: "Amount Requested", value: app.amount },
                          { label: "Loan Term",         value: app.term   },
                          { label: "Interest Rate",     value: app.rate   },
                          { label: "Applied On",        value: app.applied },
                        ].map((d) => (
                          <div key={d.label}>
                            <p style={{ fontSize: 10, color: "#94a3b8", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{d.label}</p>
                            <p style={{ fontSize: 13, color: "#0f172a", fontWeight: 600, margin: 0 }}>{d.value}</p>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #f1f5f9" }}>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{app.daysAgo}</span>
                        <button style={{ padding: "8px 18px", background: MIDNIGHT, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer", transition: "opacity .15s" }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </main>
        </div>
      </div>

      {/* FAQ — full width, outside the sidebar+content flex row */}
      <FAQSection />

      {/* Footer — full width */}
      <Footer />
    </div>
  );
}