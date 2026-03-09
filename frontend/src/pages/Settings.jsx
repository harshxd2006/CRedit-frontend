import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function Settings({ navigate }) {
    const [consents, setConsents] = useState({ bankData: true, sharingReports: false, automatedProfiling: true });
    const [notifications, setNotifications] = useState({ emiReminders: true, creditScoreUpdates: true, promotionalOffers: false, whatsapp: true, sms: true });
    const [security, setSecurity] = useState({ biometric: true });
    const [danger, setDanger] = useState({ freezeAccount: false });
    const [commPrefs, setCommPrefs] = useState({ language: "English", emailDigest: "Weekly" });

    const toggleConsent = (key) => setConsents((prev) => ({ ...prev, [key]: !prev[key] }));
    const toggleNotification = (key) => setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    const toggleSecurity = (key) => setSecurity((prev) => ({ ...prev, [key]: !prev[key] }));
    const toggleDanger = (key) => setDanger((prev) => ({ ...prev, [key]: !prev[key] }));

    const copyReferralCode = () => {
        navigator.clipboard.writeText("CRFLO-ARJUN-8X92");
        alert("Referral code copied to clipboard!");
    };

    const Toggle = ({ checked, onChange }) => (
        <label style={{ position: "relative", display: "inline-flex", alignItems: "center", cursor: "pointer", flexShrink: 0 }}>
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
                <Sidebar navigate={navigate} activePage="settings" />

                <div style={{ flex: 1, minWidth: 0 }}>
                    <main className="page-main" style={{ padding: "28px 20px" }}>
                        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>

                            {/* Page header */}
                            <div style={{ marginBottom: 4 }}>
                                <h1 style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Settings</h1>
                                <p style={{ fontSize: 15, color: "#64748b", margin: 0 }}>Manage your preferences, security, and account settings.</p>
                            </div>

                            {/* Security & Login */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>security</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Security &amp; Login</h2>
                                </div>
                                <div className="security-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                                    <button style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", transition: "background .15s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>lock</span>
                                            <div style={{ textAlign: "left" }}>
                                                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#0f172a" }}>Change Password</p>
                                                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Last changed 3 months ago</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 18 }}>chevron_right</span>
                                    </button>

                                    <button style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", transition: "background .15s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>pin</span>
                                            <div style={{ textAlign: "left" }}>
                                                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#0f172a" }}>Change MPIN</p>
                                                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Used for app login</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 18 }}>chevron_right</span>
                                    </button>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px", borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>fingerprint</span>
                                            <div style={{ textAlign: "left" }}>
                                                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#0f172a" }}>Biometric Login</p>
                                                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Enabled on 1 device</p>
                                            </div>
                                        </div>
                                        <Toggle checked={security.biometric} onChange={() => toggleSecurity("biometric")} />
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px", borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>devices</span>
                                            <div style={{ textAlign: "left" }}>
                                                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#0f172a" }}>Active Sessions</p>
                                                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Logged in on iPhone 15, Web</p>
                                            </div>
                                        </div>
                                        <button style={{ background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca", padding: "6px 12px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Log out all</button>
                                    </div>
                                </div>
                            </section>

                            {/* Consent Management */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                                    <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>gavel</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Consent Management</h2>
                                </div>
                                <p style={{ fontSize: 14, color: "#64748b", marginBottom: 16 }}>In compliance with the DPDP Act, you have full control over how your data is processed.</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    {[
                                        { key: "bankData", title: "Bank Data Usage", desc: "Allow us to fetch and analyze your transaction history for better loan offers.", checked: consents.bankData },
                                        { key: "sharingReports", title: "Sharing Reports with Partners", desc: "Share your credit health reports with pre-approved lending partners.", checked: consents.sharingReports },
                                        { key: "automatedProfiling", title: "Automated Profiling", desc: "Use AI to automatically categorize your spending patterns.", checked: consents.automatedProfiling },
                                    ].map((item) => (
                                        <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px", background: "#f8fafc", borderRadius: 10 }}>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>{item.title}</p>
                                                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>{item.desc}</p>
                                            </div>
                                            <Toggle checked={item.checked} onChange={() => toggleConsent(item.key)} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Notification Preferences */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>notifications_active</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Notification Preferences</h2>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    {[
                                        { key: "emiReminders", title: "EMI Reminders", desc: "Get alerts 3 days before your payment is due.", checked: notifications.emiReminders },
                                        { key: "creditScoreUpdates", title: "Credit Score Updates", desc: "Monthly notification when your new score is generated.", checked: notifications.creditScoreUpdates },
                                        { key: "promotionalOffers", title: "Promotional Offers", desc: "Curated loan and credit card offers based on your profile.", checked: notifications.promotionalOffers },
                                        { key: "whatsapp", title: "WhatsApp Notifications", desc: "Receive important updates securely on WhatsApp.", checked: notifications.whatsapp },
                                        { key: "sms", title: "SMS Alerts", desc: "Get critical transaction and security alerts via SMS.", checked: notifications.sms },
                                    ].map((item, i, arr) => (
                                        <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>{item.title}</p>
                                                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>{item.desc}</p>
                                            </div>
                                            <Toggle checked={item.checked} onChange={() => toggleNotification(item.key)} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Communication Preferences */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>translate</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Communication Preferences</h2>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                    <div>
                                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Preferred Language</label>
                                        <select
                                            value={commPrefs.language}
                                            onChange={(e) => setCommPrefs((prev) => ({ ...prev, language: e.target.value }))}
                                            style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 15, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box", background: "#f8fafc" }}
                                        >
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Telugu">Telugu</option>
                                            <option value="Tamil">Tamil</option>
                                            <option value="Marathi">Marathi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Email Digest Frequency</label>
                                        <select
                                            value={commPrefs.emailDigest}
                                            onChange={(e) => setCommPrefs((prev) => ({ ...prev, emailDigest: e.target.value }))}
                                            style={{ width: "100%", height: 46, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 15, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box", background: "#f8fafc" }}
                                        >
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Never">Never</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Referral & Rewards */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span className="material-symbols-outlined" style={{ color: MIDNIGHT, fontSize: 22 }}>redeem</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Referral &amp; Rewards</h2>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", background: "#f8fafc", padding: 16, borderRadius: 12, border: "1px solid #e2e8f0" }}>
                                    <div>
                                        <p style={{ fontSize: 13, fontWeight: 600, color: "#64748b", margin: "0 0 6px" }}>Your Referral Code</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <input readOnly value="CRFLO-ARJUN-8X92" style={{ height: 40, padding: "0 12px", borderRadius: 8, border: "1px dashed #cbd5e1", fontSize: 15, fontWeight: 700, fontFamily: "'Inter', sans-serif", background: "#fff", color: MIDNIGHT, width: 200, outline: "none", boxSizing: "border-box" }} />
                                            <button onClick={copyReferralCode} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: MIDNIGHT, cursor: "pointer" }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>content_copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fef9c3", padding: "6px 12px", borderRadius: 99, border: "1px solid #fef08a", marginBottom: 12 }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#d97706" }}>stars</span>
                                            <span style={{ fontSize: 14, fontWeight: 700, color: "#b45309" }}>1,250 Pts</span>
                                        </div>
                                        <button style={{ background: GOLD, color: MIDNIGHT, padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>person_add</span> Invite a Friend
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* Danger Zone */}
                            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #fecaca", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 22 }}>warning</span>
                                    <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#ef4444" }}>Danger Zone</h2>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 0", borderBottom: "1px solid #f1f5f9" }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>Freeze Account Temporarily</p>
                                            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Pause all account activity and transactions. Recommended if you suspect fraud.</p>
                                        </div>
                                        <Toggle checked={danger.freezeAccount} onChange={() => toggleDanger("freezeAccount")} />
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 0", borderBottom: "1px solid #f1f5f9" }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>Withdraw All Consents</p>
                                            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Revoke all previously granted data usage and sharing permissions.</p>
                                        </div>
                                        <button style={{ border: "1px solid #fecaca", background: "#fef2f2", color: "#ef4444", padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Withdraw</button>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 0", borderBottom: "1px solid #f1f5f9" }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px", color: "#0f172a" }}>Report Unauthorized Access</p>
                                            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>If you believe your account was compromised, report it immediately.</p>
                                        </div>
                                        <button style={{ border: "1px solid #fecaca", background: "#fef2f2", color: "#ef4444", padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Report Issue</button>
                                    </div>
                                </div>

                                <div className="data-rights-grid" style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                                    <button style={{ flex: 1, minWidth: 140, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", fontWeight: 700, fontSize: 14, color: "#0f172a", cursor: "pointer" }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>Download My Data
                                    </button>
                                    <button style={{ flex: 1, minWidth: 140, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "#ef4444", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 14, color: "#fff", cursor: "pointer" }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>delete_forever</span>Delete My Account
                                    </button>
                                </div>
                                <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", fontStyle: "italic", marginTop: 16 }}>Processing a data deletion request can take up to 30 days as per regulatory guidelines.</p>
                            </section>

                        </div>
                    </main>
                </div>
            </div>

            <FAQSection />

            <Footer />

            <style>{`
        @media (max-width: 600px) {
          .security-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
