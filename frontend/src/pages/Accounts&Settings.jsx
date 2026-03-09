import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function AccountsSettings({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: "Arjun Malhotra",
    pan: "ABCDE1234F",
    address: "12th Floor, Skyview Towers, Hitech City, Hyderabad, Telangana - 500081",
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      {/* Sidebar + Content row */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="accountsSettings" />

        <div style={{ flex: 1, minWidth: 0 }}>
          <main className="page-main" style={{ padding: "28px 20px" }}>

            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Page header */}
              <div style={{ marginBottom: 4 }}>
                <h1 style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>My Profile</h1>
                <p style={{ fontSize: 15, color: "#64748b", margin: 0 }}>Manage your personal details and verification status.</p>
              </div>

              {/* Personal Details */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>person</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Personal Details</h2>
                </div>

                {/* Profile Photo Placeholder */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 32, color: "#94a3b8" }}>person</span>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Profile Photo</h3>
                    <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>Update your profile picture</p>
                  </div>
                  <button style={{ marginLeft: "auto", background: "transparent", color: MIDNIGHT, padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 14, border: `1px solid ${MIDNIGHT}`, cursor: "pointer" }}>Upload</button>
                </div>

                <div className="personal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Full Name</label>
                    <input value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 15, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>PAN Number</label>
                    <input value={formData.pan} readOnly
                      style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 15, fontFamily: "'Inter', sans-serif", background: "#f8fafc", color: "#94a3b8", outline: "none", boxSizing: "border-box", cursor: "not-allowed" }} />
                    <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Verification complete. Contact support to change.</p>
                  </div>
                  <div className="address-full" style={{ gridColumn: "span 2" }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Residential Address</label>
                    <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} rows={3}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 15, fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button style={{ background: GOLD, color: MIDNIGHT, padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}>Update Details</button>
                </div>
              </section>

              {/* KYC Status Badges */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>verified</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>KYC Status</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: "#10b981", fontSize: 28 }}>check_circle</span>
                      <div>
                        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0f172a" }}>PAN Verified</p>
                        <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>Document verified</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: "#10b981", fontSize: 28 }}>check_circle</span>
                      <div>
                        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0f172a" }}>Aadhaar Verified</p>
                        <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>Biometric verified</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: 12, border: "1px solid #fef08a", background: "#fef9c3", gridColumn: "span 2" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: 28 }}>pending_actions</span>
                      <div>
                        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0f172a" }}>Video KYC</p>
                        <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>Pending completion</p>
                      </div>
                    </div>
                    <button style={{ background: "transparent", color: MIDNIGHT, padding: "8px 16px", borderRadius: 6, fontWeight: 600, fontSize: 13, border: `1px solid ${MIDNIGHT}`, cursor: "pointer" }}>Start Video KYC</button>
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>

      {/* FAQ — full width, outside the sidebar+content flex row */}
      <FAQSection />

      {/* Footer — full width */}
      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .personal-grid { grid-template-columns: 1fr !important; }
          .address-full { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}
