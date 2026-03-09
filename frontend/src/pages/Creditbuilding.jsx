import { useState } from "react";
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

const faqData = [
  { id: 1,  question: "Who can apply for a loan on CreditFlow?",             answer: "Anyone who is an Indian citizen above 18 years of age with a valid PAN card, Aadhaar card, and a bank account with at least 3 months of salary history can apply. We specifically help people who are applying for a loan for the first time and have no prior credit history." },
  { id: 2,  question: "I have never taken a loan before. Can I still apply?", answer: "Yes. CreditFlow is built specifically for people with no credit history. Our NTC scoring model evaluates your application based on your income, employment stability, and banking behaviour rather than your credit score." },
  { id: 4,  question: "What documents do I need to apply?",                  answer: "You only need your PAN card number and Aadhaar card number for identity verification, and your last 6 months bank statement in PDF format. No physical documents or branch visits required." },
  { id: 5,  question: "How long does the application process take?",         answer: "The entire application form takes about 10 minutes to complete. Once submitted, you will typically receive a decision from a lender within 24 to 48 hours." },
  { id: 9,  question: "How much loan can I get?",                            answer: "Loan amounts depend on your income, employment stability, and banking behaviour as assessed by our model. You can apply for amounts ranging from 10,000 rupees to 5 lakh rupees." },
  { id: 10, question: "What is the interest rate?",                          answer: "Interest rates vary depending on the lender and your credit profile. Rates typically range from 12 percent to 36 percent per annum. You will see the exact rate offered to you in your loan report before you select a lender." },
  { id: 13, question: "Is my data safe with CreditFlow?",                    answer: "Yes. We follow RBI Digital Lending guidelines and the Digital Personal Data Protection Act 2023. Your data is encrypted, never sold to third parties, and used only for loan processing purposes. You can request deletion of your data at any time." },
  { id: 19, question: "Does CreditFlow itself give the loan?",               answer: "No. CreditFlow is a loan service provider platform. We assess your profile and connect you with the most suitable lender from our partner network. The loan is disbursed directly by the lender to your bank account." },
  { id: 20, question: "Are there any charges for using CreditFlow?",         answer: "CreditFlow is completely free for borrowers. We do not charge any fees for using our platform or applying for a loan. Lenders may charge processing fees which will be clearly disclosed to you before you accept any offer." },
  { id: 15, question: "How do I reset my MPIN if I forget it?",              answer: "You can reset your MPIN from the login screen by clicking Forgot MPIN. We will send an OTP to your registered mobile number. After verifying the OTP you can set a new MPIN." },
];

function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "56px 40px 64px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: "#0f172a", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
            Got questions? We've got answers.
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Everything you need to know about CreditFlow, loan applications, and your data security.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} style={{ border: isOpen ? `1.5px solid ${MIDNIGHT}` : "1px solid #e2e8f0", borderRadius: 14, background: isOpen ? "rgba(17,66,93,.03)" : "#fff", transition: "all .2s", overflow: "hidden" }}>
                <button onClick={() => toggle(faq.id)} style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'Inter', sans-serif" }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: isOpen ? MIDNIGHT : "#0f172a", margin: 0, lineHeight: 1.5, flex: 1 }}>{faq.question}</p>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: MIDNIGHT, flexShrink: 0, marginTop: 2, transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>expand_more</span>
                </button>
                <div style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height .3s ease, opacity .25s ease" }}>
                  <div style={{ padding: "0 20px 18px", fontSize: 14, color: "#475569", lineHeight: 1.8 }}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function CreditBuilding({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9ff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} activePage="creditBuilding" />

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <main style={{ flex: 1, padding: "24px 16px" }} className="page-main">
            <div style={{ maxWidth: 900, margin: "0 auto" }}>

              {/* Page Header */}
              <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", letterSpacing: "-0.5px" }}>Credit Building Journey</h1>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Step-by-step progress towards your financial goals.</p>
              </div>

              {/* Current Stage Banner */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div className="stage-banner-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: MIDNIGHT, fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 6 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>bolt</span>
                      Current Status
                    </div>
                    <h2 style={{ fontSize: 28, fontWeight: 900, color: MIDNIGHT, margin: "0 0 8px" }}>Growing Stage</h2>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 480, margin: "0 0 16px" }}>
                      You've successfully built a foundation. Now focusing on consistency and depth in your credit profile.
                    </p>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                        <span>Progress to Established</span>
                        <span style={{ color: MIDNIGHT }}>65%</span>
                      </div>
                      <div style={{ width: "100%", height: 8, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ width: "65%", height: "100%", background: GOLD, borderRadius: 99 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,215,0,.08)", border: "1px solid rgba(255,215,0,.15)", borderRadius: 14, padding: "20px 24px", textAlign: "center", flexShrink: 0 }}>
                    <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 4px" }}>Current Score</p>
                    <p style={{ fontSize: 44, fontWeight: 900, color: MIDNIGHT, margin: "0 0 6px", lineHeight: 1 }}>684</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#16a34a", fontSize: 13, fontWeight: 700, justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>trending_up</span>
                      +12 pts this month
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Roadmap */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 24, marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 20px" }}>Journey Roadmap</h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", padding: "0 12px", overflowX: "auto" }}>
                  <div style={{ position: "absolute", top: "42%", left: 0, right: 0, height: 2, background: "#e2e8f0", transform: "translateY(-50%)", zIndex: 0 }} />
                  {[
                    { icon: "check",       label: "Starter",     sub: "Completed",    bg: MIDNIGHT,  color: "#fff"    },
                    { icon: "trending_up", label: "Growing",     sub: "Active Phase", bg: GOLD,      color: MIDNIGHT, large: true },
                    { icon: "lock",        label: "Established", sub: "Locked",       bg: "#e2e8f0", color: "#94a3b8" },
                    { icon: "stars",       label: "Expert",      sub: "Locked",       bg: "#e2e8f0", color: "#94a3b8" },
                  ].map((stage) => (
                    <div key={stage.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "#fff", padding: "0 8px", zIndex: 1, opacity: stage.sub === "Locked" ? 0.5 : 1, flexShrink: 0 }}>
                      <div style={{ width: stage.large ? 52 : 40, height: stage.large ? 52 : 40, borderRadius: "50%", background: stage.bg, display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #fff", boxShadow: stage.large ? `0 0 0 4px rgba(255,215,0,.3)` : "none" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: stage.large ? 24 : 18, color: stage.color }}>{stage.icon}</span>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: stage.sub === "Locked" ? "#94a3b8" : "#0f172a", margin: 0 }}>{stage.label}</p>
                        <p style={{ fontSize: 10, color: stage.sub === "Active Phase" ? GOLD : "#94a3b8", margin: 0, fontWeight: stage.sub === "Active Phase" ? 700 : 400 }}>{stage.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score History & Key Factors */}
              <div className="score-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginBottom: 20 }}>
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 22, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 }}>NTC Score History</h3>
                    <select style={{ fontSize: 12, border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px", outline: "none" }}>
                      <option>Last 6 Months</option>
                      <option>Last Year</option>
                    </select>
                  </div>
                  <div style={{ height: 180, display: "flex", alignItems: "flex-end", gap: 6, padding: "0 4px" }}>
                    {[
                      { month: "Jan", pct: 40 }, { month: "Feb", pct: 45 }, { month: "Mar", pct: 55 },
                      { month: "Apr", pct: 65 }, { month: "May", pct: 72 }, { month: "Jun", pct: 85, active: true },
                    ].map((bar) => (
                      <div key={bar.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%" }}>
                        <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                          <div style={{ width: "100%", height: `${bar.pct}%`, background: bar.active ? GOLD : `rgba(255,215,0,${bar.pct / 120})`, borderRadius: "5px 5px 0 0", transition: "height .3s" }} />
                        </div>
                        <span style={{ fontSize: 9, fontWeight: 700, color: bar.active ? GOLD : "#94a3b8", textTransform: "uppercase" }}>{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 22, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 16px" }}>Key Factors</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {keyFactors.map((f) => (
                      <div key={f.label}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 5 }}>
                          <span style={{ color: "#64748b" }}>{f.label}</span>
                          <span>{f.pct}%</span>
                        </div>
                        <div style={{ width: "100%", height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                          <div style={{ width: `${f.pct}%`, height: "100%", background: f.color || GOLD, borderRadius: 99 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button style={{ width: "100%", marginTop: 16, padding: "9px 0", fontSize: 12, fontWeight: 700, color: MIDNIGHT, background: "rgba(17,66,93,.05)", borderRadius: 8, border: "none", cursor: "pointer" }}>
                    View All Factors
                  </button>
                </div>
              </div>

              {/* Action Plan */}
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 14px" }}>Action Plan: Score Boosters</h3>
                <div className="action-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                  {actionCards.map((card) => (
                    <div key={card.title} style={{ background: "#fff", padding: 18, borderRadius: 14, border: "1px solid #e2e8f0", cursor: "pointer", transition: "border-color .15s, box-shadow .15s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,215,0,.15)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(17,66,93,.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 18, color: MIDNIGHT }}>{card.icon}</span>
                        </div>
                        <span style={{ padding: "3px 8px", background: card.impactBg, color: card.impactColor, fontSize: 10, fontWeight: 700, borderRadius: 999, textTransform: "uppercase" }}>{card.impact}</span>
                      </div>
                      <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>{card.title}</h4>
                      <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: "0 0 12px" }}>{card.desc}</p>
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
        </div>
      </div>

      {/* FAQ — full width, outside the sidebar+content flex row */}
      <FAQSection />

      {/* Footer — full width */}
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .score-grid { grid-template-columns: 1fr !important; }
          .action-grid { grid-template-columns: 1fr 1fr !important; }
          .stage-banner-inner { flex-direction: column !important; }
        }
        @media (max-width: 480px) {
          .action-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}