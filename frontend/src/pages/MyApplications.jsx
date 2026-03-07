import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px" }}>

        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.5px" }}>My Applications</h1>
        <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 28px" }}>Track and manage all your loan applications in one place.</p>

        {/* Filters */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                border: `2px solid ${activeFilter === f ? MIDNIGHT : "#e2e8f0"}`,
                background: activeFilter === f ? MIDNIGHT : "#fff",
                color: activeFilter === f ? "#fff" : "#475569",
                cursor: "pointer", transition: "all .15s",
              }}
            >{f}</button>
          ))}
        </div>

        {/* Application Cards */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "64px 32px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: "#e2e8f0", display: "block", marginBottom: 16 }}>description</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#64748b", margin: "0 0 8px" }}>No applications found</h3>
            <p style={{ fontSize: 14, color: "#94a3b8", margin: "0 0 20px" }}>Start your loan journey today.</p>
            <button style={{
              padding: "12px 28px", background: GOLD, color: MIDNIGHT,
              borderRadius: 10, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
            }}>Apply Now</button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filtered.map((app, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                border: "1px solid #e2e8f0", transition: "transform .15s, box-shadow .15s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.05)"; }}
              >
                {/* Card Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid #f1f5f9", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(17,66,93,.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22, color: MIDNIGHT }}>description</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: MIDNIGHT, margin: 0 }}>{app.type}</h3>
                  </div>
                  <span style={{
                    padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: app.statusBg, color: app.statusColor, border: `1px solid ${app.statusBorder}`,
                  }}>{app.status}</span>
                </div>

                {/* Card Details */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 16 }}>
                  {[
                    { label: "Amount Requested", value: app.amount },
                    { label: "Loan Term", value: app.term },
                    { label: "Interest Rate", value: app.rate },
                    { label: "Applied On", value: app.applied },
                  ].map((d) => (
                    <div key={d.label}>
                      <p style={{ fontSize: 11, color: "#94a3b8", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{d.label}</p>
                      <p style={{ fontSize: 14, color: "#0f172a", fontWeight: 600, margin: 0 }}>{d.value}</p>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{app.daysAgo}</span>
                  <button style={{
                    padding: "8px 20px", background: MIDNIGHT, color: "#fff",
                    borderRadius: 8, fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer",
                    transition: "opacity .15s",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}