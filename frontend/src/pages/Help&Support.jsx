import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const faqs = [
  { q: "How is my credit score calculated?" },
  { q: "Can I apply for multiple loans simultaneously?" },
  { q: "How long does it take for loan approval?", open: true, a: "Typically, most applications are processed within 24-48 hours. However, depending on the documentation provided and third-party verification, it may take up to 5 business days." },
];

export default function HelpSupport({ navigate }) {
  const [complaint, setComplaint] = useState({ category: "", description: "" });
  const [openFaq, setOpenFaq] = useState(2);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex" }}>
        <Sidebar navigate={navigate} activePage="helpSupport" />

        {/* Main Content */}
        <main style={{ flex: 1, padding: "32px 48px", maxWidth: "900px" }}>

          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Help &amp; Support</h1>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Find answers, learn how to use CreditFlow, or get in touch with our support team.</p>
          </div>

          {/* Grievance Officer */}
          <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 22 }}>gavel</span>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Grievance Redressal Officer</h2>
            </div>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20 }}>If your query is not resolved within 30 days, you may contact our Grievance Officer.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {[
                { label: "Name", value: "Mr. Arvind Kumar" },
                { label: "Contact Number", value: "+91 800-123-4567" },
                { label: "Email Address", value: "grievance@creditflow.com" },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>{item.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Complaint Form & Tutorials */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>

            {/* Complaint Form */}
            <section style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 22 }}>edit_note</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Submit a Complaint</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>Complaint Category</label>
                  <select
                    value={complaint.category}
                    onChange={(e) => setComplaint({ ...complaint, category: e.target.value })}
                    style={{ width: "100%", height: 44, padding: "0 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none" }}
                  >
                    <option value="">Select a category</option>
                    <option>Credit Score Issue</option>
                    <option>Loan Application Delay</option>
                    <option>Payment Failure</option>
                    <option>Account Access</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>Description</label>
                  <textarea
                    value={complaint.description}
                    onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
                    placeholder="Tell us more about the issue..."
                    rows={4}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <button style={{
                  width: "100%", padding: "12px 0", background: GOLD, color: MIDNIGHT,
                  fontWeight: 700, fontSize: 14, borderRadius: 10, border: "none", cursor: "pointer",
                }}>
                  Submit Complaint
                </button>
              </div>
            </section>

            {/* Video Tutorials */}
            <section>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 22 }}>play_circle</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Video Tutorials</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { title: "How to apply for a Personal Loan", duration: "2:30 mins • CreditFlow Basics" },
                  { title: "Reading your Credit Report", duration: "4:15 mins • Knowledge Base" },
                ].map((vid) => (
                  <div key={vid.title} style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => e.currentTarget.querySelector("h4").style.color = GOLD}
                    onMouseLeave={(e) => e.currentTarget.querySelector("h4").style.color = "#0f172a"}
                  >
                    <div style={{
                      aspectRatio: "16/9", background: "#e2e8f0", borderRadius: 10,
                      marginBottom: 10, overflow: "hidden", position: "relative",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(17,66,93,.1), rgba(255,215,0,.1))" }} />
                      <span className="material-symbols-outlined" style={{ fontSize: 40, color: "rgba(255,255,255,.8)", zIndex: 1 }}>play_circle</span>
                    </div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, margin: "0 0 4px", color: "#0f172a", transition: "color .15s" }}>{vid.title}</h4>
                    <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{vid.duration}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FAQ */}
          <section style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 22 }}>quiz</span>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#0f172a" }}>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: 16, background: openFaq === i ? "#f8fafc" : "#fff",
                      border: "none", cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: openFaq === i ? MIDNIGHT : "#0f172a" }}>{faq.q}</span>
                    <span className="material-symbols-outlined" style={{ color: openFaq === i ? GOLD : "#94a3b8", fontSize: 20 }}>
                      {openFaq === i ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {openFaq === i && faq.a && (
                    <div style={{ padding: "0 16px 16px", background: "#f8fafc", fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* RBI Escalation */}
          <section style={{
            background: "rgba(17,66,93,.04)", border: "2px dashed rgba(17,66,93,.15)",
            borderRadius: 20, padding: 40, textAlign: "center", marginBottom: 32,
          }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 4px 12px rgba(0,0,0,.06)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: GOLD }}>verified_user</span>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>Escalation to Banking Ombudsman</h3>
            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 24px" }}>
              If your grievance is not resolved to your satisfaction by the company within 30 days, you may approach the Integrated Ombudsman Scheme, RBI.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <a href="#" style={{
                padding: "10px 24px", background: GOLD, color: MIDNIGHT,
                fontWeight: 700, fontSize: 13, borderRadius: 8, textDecoration: "none",
              }}>Visit RBI CMS Portal</a>
              <div style={{
                padding: "10px 24px", background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 8, fontSize: 13, color: "#334155",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>phone</span>
                14448 (Toll Free)
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}