import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function AccountsSettings({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: "Arjun Malhotra",
    pan: "ABCDE1234F",
    address: "12th Floor, Skyview Towers, Hitech City, Hyderabad, Telangana - 500081",
  });
  const [consents, setConsents] = useState({ bankData: true, sharingReports: false, automatedProfiling: true });
  const [notifications, setNotifications] = useState({ emiReminders: true, creditScoreUpdates: true, promotionalOffers: false });

  const toggleConsent = (key) => setConsents((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleNotification = (key) => setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  const Toggle = ({ checked, onChange }) => (
    <label style={{ position: "relative", display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <div style={{ width: 44, height: 24, borderRadius: 99, background: checked ? MIDNIGHT : "#cbd5e1", transition: "background .2s", position: "relative" }}>
        <div style={{ position: "absolute", top: 2, left: checked ? 22 : 2, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 3px rgba(0,0,0,.2)" }} />
      </div>
    </label>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="accountsSettings" />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main style={{ flex: 1, padding: "40px 48px" }}>

            {/* ── Constrained content area ── */}
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Page header */}
              <div style={{ marginBottom: 8 }}>
                <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Profile &amp; Settings</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Manage your financial identity, privacy consents, and account security.</p>
              </div>

              {/* Personal Details */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>person</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Personal Details</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Full Name</label>
                    <input value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: "100%", height: 44, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>PAN Number</label>
                    <input value={formData.pan} readOnly
                      style={{ width: "100%", height: 44, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", background: "#f8fafc", color: "#94a3b8", outline: "none", boxSizing: "border-box", cursor: "not-allowed" }} />
                    <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>Verification complete. Contact support to change.</p>
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Residential Address</label>
                    <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} rows={3}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button style={{ background: GOLD, color: MIDNIGHT, padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Update Details</button>
                </div>
              </section>

              {/* Consent Management */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>gavel</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Consent Management</h2>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20 }}>In compliance with the DPDP Act, you have full control over how your data is processed.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { key: "bankData", title: "Bank Data Usage", desc: "Allow us to fetch and analyze your transaction history for better loan offers.", checked: consents.bankData },
                    { key: "sharingReports", title: "Sharing Reports with Partners", desc: "Share your credit health reports with pre-approved lending partners.", checked: consents.sharingReports },
                    { key: "automatedProfiling", title: "Automated Profiling", desc: "Use AI to automatically categorize your spending patterns.", checked: consents.automatedProfiling },
                  ].map((item) => (
                    <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", background: "#f8fafc", borderRadius: 10 }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>{item.title}</p>
                        <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{item.desc}</p>
                      </div>
                      <Toggle checked={item.checked} onChange={() => toggleConsent(item.key)} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Notification Preferences */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>notifications_active</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Notification Preferences</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    { key: "emiReminders", title: "EMI Reminders", desc: "Get alerts 3 days before your payment is due.", checked: notifications.emiReminders },
                    { key: "creditScoreUpdates", title: "Credit Score Updates", desc: "Monthly notification when your new score is generated.", checked: notifications.creditScoreUpdates },
                    { key: "promotionalOffers", title: "Promotional Offers", desc: "Curated loan and credit card offers based on your profile.", checked: notifications.promotionalOffers },
                  ].map((item, i, arr) => (
                    <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>{item.title}</p>
                        <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{item.desc}</p>
                      </div>
                      <Toggle checked={item.checked} onChange={() => toggleNotification(item.key)} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Security */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>security</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Security &amp; Login</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { icon: "lock", title: "Change Password", sub: "Last changed 3 months ago" },
                    { icon: "fingerprint", title: "Biometric Login", sub: "Enabled on 1 device" },
                  ].map((item) => (
                    <button key={item.title} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", transition: "background .15s" }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>{item.icon}</span>
                        <div style={{ textAlign: "left" }}>
                          <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: "#0f172a" }}>{item.title}</p>
                          <p style={{ fontSize: 10, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.sub}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 18 }}>chevron_right</span>
                    </button>
                  ))}
                  <button style={{ gridColumn: "span 2", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", transition: "background .15s" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>devices</span>
                      <div style={{ textAlign: "left" }}>
                        <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: "#0f172a" }}>Active Sessions</p>
                        <p style={{ fontSize: 10, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Currently logged in on iPhone 15, Web (Chrome)</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 18 }}>chevron_right</span>
                  </button>
                </div>
              </section>

              {/* Data Rights */}
              <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #fee2e2", padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 22 }}>privacy_tip</span>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Data Rights &amp; Account</h2>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                  <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>Download My Data
                  </button>
                  <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "#fff", borderRadius: 10, border: "1px solid #fecaca", fontWeight: 700, fontSize: 13, color: "#dc2626", cursor: "pointer" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>delete_forever</span>Delete My Account
                  </button>
                </div>
                <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", fontStyle: "italic" }}>Processing a data deletion request can take up to 30 days as per regulatory guidelines.</p>
              </section>

            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}