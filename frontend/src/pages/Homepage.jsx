import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage({ navigate }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: "#0f172a" }}>

      {/* ── NAVBAR ── */}
      <Navbar navigate={navigate} variant="home" />

      {/* ── HERO ── */}
      <section style={{ padding: "48px 20px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 999,
                background: "rgba(17,66,93,.10)", color: "#11425D",
                fontSize: 13, fontWeight: 600, width: "fit-content",
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>verified</span>
                Partnered with RBI-Registered Lenders
              </div>

              <h1 className="hero-h1" style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-2px", margin: 0, color: "#0f172a" }}>
                Never Taken a Loan Before?{" "}
                <span>That Shouldn't Stop You.</span>
              </h1>

              <p style={{ fontSize: 16, color: "#475569", maxWidth: 520, lineHeight: 1.75, margin: 0 }}>
                India's first credit platform built exclusively for NTC borrowers. We look at your potential, not just your history.
              </p>

              <div>
                <button
                  onClick={() => navigate("register")}
                  style={{
                    padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 16,
                    background: "#FFD700", color: "#000", border: "none", cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(255,215,0,.30)",
                    transition: "opacity .15s", width: "fit-content",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Check My Eligibility Free
                </button>
              </div>

              {/* Stats row */}
              <div className="hero-stats" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                paddingTop: 20, borderTop: "1px solid #e2e8f0",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontWeight: 700, color: "#FFD700", fontSize: 14 }}>100% Free</span>
                  <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Check</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", paddingLeft: 16 }}>
                  <span style={{ fontWeight: 700, color: "#FFD700", fontSize: 14 }}>Bank-Level</span>
                  <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Security</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 16 }}>
                  <span style={{ fontWeight: 700, color: "#FFD700", fontSize: 14 }}>3 Minutes</span>
                  <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Process</span>
                </div>
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="hero-phone" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "120%", height: "120%",
                background: "rgba(255,215,0,.05)", borderRadius: "50%",
                filter: "blur(48px)", pointerEvents: "none",
              }} />
              <div style={{
                background: "#fff", padding: 14, borderRadius: 36,
                boxShadow: "0 32px 80px rgba(0,0,0,.18)",
                border: "8px solid #f1f5f9", maxWidth: 240, width: "100%",
                position: "relative", zIndex: 1,
              }}>
                <div style={{
                  aspectRatio: "9/19", background: "#f8fafc", borderRadius: 24,
                  overflow: "hidden", padding: 20,
                  display: "flex", flexDirection: "column", gap: 20,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>menu</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,215,0,.2)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>Your Credit Potential</p>
                    <h3 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>782</h3>
                    <div style={{ height: 7, background: "#e2e8f0", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: "85%", background: "#FFD700", borderRadius: 99 }} />
                    </div>
                    <p style={{ fontSize: 8, fontWeight: 700, color: "#FFD700", margin: 0, letterSpacing: "0.1em" }}>EXCELLENT BEHAVIOR</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { icon: "payments", bg: "#eff6ff", iconColor: "#3b82f6", title: "Rent Payment", sub: "Consistent & On-time" },
                      { icon: "bolt", bg: "#f0fdf4", iconColor: "#22c55e", title: "Utility Bills", sub: "Zero Delays" },
                    ].map(item => (
                      <div key={item.title} style={{
                        padding: "9px 10px", background: "#fff", borderRadius: 10,
                        boxShadow: "0 2px 8px rgba(0,0,0,.06)", border: "1px solid #f1f5f9",
                        display: "flex", alignItems: "center", gap: 8,
                      }}>
                        <div style={{ width: 28, height: 28, borderRadius: 7, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14, color: item.iconColor }}>{item.icon}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 9, fontWeight: 700, margin: 0 }}>{item.title}</p>
                          <p style={{ fontSize: 7, color: "#94a3b8", margin: 0 }}>{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.5px", margin: "0 0 14px" }}>The Struggle is Real</h2>
            <p style={{ fontSize: 15, color: "#475569", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Traditional credit systems ignore millions of responsible people just because they haven't borrowed before.
            </p>
          </div>
          <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { icon: "cancel",      bg: "#fef2f2", color: "#ef4444", title: "Rejected Instantly",  desc: "Applied to multiple apps only to be rejected in seconds by automated bots." },
              { icon: "trending_up", bg: "#fff7ed", color: "#f97316", title: "Staggering Interest", desc: "Finally got approved? But the interest rate is a soul-crushing 28% or more." },
              { icon: "history",     bg: "#f8fafc", color: "#64748b", title: "No History, No Hope", desc: "Big banks tell you: \"No credit history means no chance\". How do you even start?" },
            ].map(c => (
              <div key={c.title} style={{
                background: "#fff", padding: "28px 24px", borderRadius: 20,
                boxShadow: "0 8px 32px rgba(0,0,0,.08)", border: "1px solid #f1f5f9",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14,
              }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: c.color }}>{c.icon}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="hiw-grid" style={{ display: "flex", gap: 56, alignItems: "center" }}>
            <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 24 }}>
              <h2 className="hiw-h2" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1px", margin: 0 }}>
                Here's How <span>CreditFlow</span> Fixes This
              </h2>
              <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.75, margin: 0 }}>
                We use alternative data points to build your financial identity from scratch.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { n: 1, title: "Analyze Transactions", desc: "Securely sync your bank statements. We analyze spending habits and consistent income patterns." },
                  { n: 2, title: "Generate NTC Report",  desc: "We create a unique credit profile that highlights your reliability and financial discipline." },
                  { n: 3, title: "Match with Lender",    desc: "Connect instantly with RBI-registered lenders who specialize in first-time borrowers." },
                ].map(s => (
                  <div key={s.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                      background: "#FFD700", display: "flex", alignItems: "center",
                      justifyContent: "center", fontWeight: 700, fontSize: 16, color: "#11425D",
                    }}>{s.n}</div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 6px" }}>{s.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hiw-img" style={{ flex: "1 1 400px" }}>
              <div style={{ background: "rgba(255,215,0,.05)", padding: 28, borderRadius: 24, border: "1px solid rgba(255,215,0,.10)" }}>
                <div style={{
                  width: "100%", height: 340, background: "#fff", borderRadius: 16,
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,.06)",
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcXY8I9NJu3EQvpTtE8ImmK1p1ebrXgFsQh5OSheRxto9A1ztFYBe8QbmWjoOb9oaKecBu1aKtMOtLZINUGwBqlMbn7-nbbi32Bwrt-y8ZAcHzz80uNYdwZQXQjnAimDET8LABEcGDMOCITdupfLEyGUkfiLWBIIUFAczAtWzmwcO0xqq9_bj69mea85G4nCSjunC2aEGHtRGAyvI8-riWUd50DDnxtsM6nU8PAqSPLGQkWe5GE_sfNjAyWllJ9IMAu2asqlrAT4o')",
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "72px 20px", background: "#11425D", color: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.5px" }}>
            Why thousands choose CreditFlow
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: 360 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,.20)" }}>
                  <th style={{ padding: "20px 14px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.7 }}>Feature</th>
                  <th style={{ padding: "20px 14px", textAlign: "center", background: "rgba(255,255,255,.10)", borderRadius: "8px 8px 0 0", fontSize: 14, fontWeight: 700 }}>CreditFlow</th>
                  <th style={{ padding: "20px 14px", textAlign: "center", fontSize: 14, fontWeight: 700 }}>Traditional Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Underwriting Model",   cf: "NTC-Specific AI",   trad: "Standard CIBIL Focus" },
                  { feature: "Pricing Transparency", cf: "Zero Hidden Fees",  trad: "Hidden Charges" },
                  { feature: "Improvement Roadmap",  cf: "Included",          trad: "None" },
                  { feature: "Credit Building",      cf: "Guided Journey",    trad: "Manual" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,.10)" }}>
                    <td style={{ padding: "20px 14px", fontWeight: 500, fontSize: 13 }}>{row.feature}</td>
                    <td style={{ padding: "20px 14px", textAlign: "center", background: "rgba(255,255,255,.10)", fontWeight: 700, fontSize: 13 }}>{row.cf}</td>
                    <td style={{ padding: "20px 14px", textAlign: "center", opacity: 0.6, fontSize: 13 }}>{row.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── INNOVATION CARDS ── */}
      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>Built for the Next Generation</h2>
          </div>
          <div className="innovation-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
            {[
              { icon: "psychology",    title: "NTC Specific Model",    desc: "Custom algorithms designed for zero credit history." },
              { icon: "analytics",     title: "Statement Intelligence", desc: "Auto-categorization of your income and spending." },
              { icon: "description",   title: "Transparent Report",     desc: "See exactly why you were approved or declined." },
              { icon: "layers",        title: "Risk Tiering",           desc: "Fair interest rates based on your specific risk profile." },
              { icon: "rocket_launch", title: "Building Journey",       desc: "Roadmap to your first high-limit credit card." },
            ].map(card => (
              <div key={card.title} style={{
                background: "#fff", padding: "20px 16px", borderRadius: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,.07)", border: "1px solid #f1f5f9",
                transition: "transform .2s ease", cursor: "default",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 26, color: "#11425D", display: "block", marginBottom: 14 }}>{card.icon}</span>
                <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, margin: "0 0 6px" }}>{card.title}</h3>
                <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section id="security" style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="security-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { icon: "lock",           title: "AES-256 Encryption" },
                { icon: "security",       title: "RBI Compliant" },
                { icon: "no_accounts",    title: "No Contact Access" },
                { icon: "delete_forever", title: "Data Deletion Policy" },
              ].map(s => (
                <div key={s.title} style={{
                  padding: "24px 16px", background: "#f8fafc", borderRadius: 16,
                  border: "1px solid #f1f5f9", textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#FFD700" }}>{s.icon}</span>
                  <h4 style={{ fontSize: 12, fontWeight: 700, margin: 0 }}>{s.title}</h4>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, margin: 0, letterSpacing: "-0.5px" }}>
                Your Data Is Safe. <span style={{ color: "#FFD700" }}>Period.</span>
              </h2>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: 0 }}>
                We take privacy seriously. We are not a collection agency. We are a technology bridge to fair credit.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Bank-Level Security Standards",
                  "We never sell your data to 3rd parties",
                  "Zero access to your contacts or photos",
                  "Request data deletion anytime",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500 }}>
                    <span className="material-symbols-outlined" style={{ color: "#FFD700", fontSize: 20 }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partners" style={{ padding: "56px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#94a3b8", marginBottom: 36 }}>
            Trusted by RBI Registered Lenders
          </p>
          <div className="partners-row" style={{
            display: "flex", justifyContent: "center", alignItems: "center", gap: 36, flexWrap: "wrap",
            opacity: 0.4, filter: "grayscale(1)", transition: "all .3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "grayscale(0)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "0.4"; e.currentTarget.style.filter = "grayscale(1)"; }}
          >
            {[
              { icon: "account_balance", name: "BharatLend" },
              { icon: "shield",          name: "PrimeCapital" },
              { icon: "token",           name: "ZenithFinance" },
            ].map(p => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{p.icon}</span>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "72px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.5px" }}>
            Stories of New Beginnings
          </h2>
          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              {
                quote: "I was rejected by 4 apps because I'm a fresh graduate. CreditFlow looked at my internship income and approved me in 10 minutes.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA0vd_yNlCZeSMHM8mNHPabeIX_wobH_ZVTaQA3ziKzDKxcRDf-mvLqnxn0-WHZbGfwAxYl0UDr8Qn1zG9MOW9DWNkNEDmL3c5OTGiFALEgTR4VIsv3tP-AnrpmlT51EjRLtKIFLHArYnB-vmTsgCROs5NYLNEu9l0G5l687rqjTEY9DC5DZQF9GjE3QKQf5L8VmTs_PLn_yVW_TsfJO23Wr5wZkPnmyCimfCwyzat42hz0TG58IfawfVZYvDUh7Vio_iL7po2aaY",
                name: "Aditya Verma",  sub: "Pune • ₹50,000 Loan @ 16%",
              },
              {
                quote: "Transparent and fast. I didn't even have a CIBIL score. Now I have a score of 720 thanks to their credit building roadmap.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9dq3FuGQI242OqmAYjMeI-N_AlvfvTK3OC46r777s8BvUxDKknXAKMGmZF6SYEoC35Lz3QP6A8L9kMIvNs5wFUE4lJnqXmamNU-583aGVSR31cZa3QO3oBlzIg2cIoDK_tmwDzi3BTkjAtt_ffE1FZEzC6CFki86lu-W2z8f3ojUP9l-7xHmDFrXi0poyW_acg3CSzoV9-ZUNaTjVh9whNHxsgGrUuEKMvGa-kqyfRKjjpN76tWt6QMhuPo-rX3Y0NMnbjQ8rBc",
                name: "Priya Sharma",  sub: "Bangalore • ₹1,20,000 Loan @ 14%",
              },
              {
                quote: "The team actually cares. They helped me understand my bank statement and how to improve it before I applied. Excellent service.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHNFU_r-9gn_wSuxzxp5ri9vBUWkOsbAblclQJQU9ArTlkQaL-SC_YToeW2wr2HVRuJCr8gqAC1iwiG0xIiEo-nE3o4OkrcL2u0Y6EKNhmtl1fZCDQ4wHK8hmbk1odVywmnrrt9WFOkot_oTP-UYgrW_FvN0-Tfm8NgEessJtKYMheete5YB8VjJq-Ndo93OO1lJ9O0rgW-DqqOWKtE4unna3uMyn8sua5Wl_CUQ7Hrmq4nFto2ZZguF66BJUL8jdgxM8KAB55v0",
                name: "Rajesh Kumar", sub: "Delhi • ₹80,000 Loan @ 18%",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#fff", padding: "28px 24px", borderRadius: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,.08)", border: "1px solid #f1f5f9",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: -14, left: -12,
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, fontWeight: 900, color: "#11425D", fontFamily: "Georgia, serif", lineHeight: 1,
                }}>"</div>
                <p style={{ fontSize: 13, color: "#475569", fontStyle: "italic", lineHeight: 1.8, marginBottom: 20 }}>"{t.quote}"</p>
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", background: "#e2e8f0",
                    backgroundImage: `url('${t.img}')`, backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0,
                  }} />
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{t.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 6px", letterSpacing: "-0.5px" }}>Knowledge Hub</h2>
              <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Learn how to master your credit journey.</p>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: 4, fontWeight: 700, fontSize: 14, background: "none", border: "none", cursor: "pointer", color: "#0f172a", flexShrink: 0 }}>
              View All
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH2_IB8J7vH_7ltZu9dgrdX5qAuBzE8zAGRfq3pjRZx4cy9NahAB7CMm0RPrVvQxQD39vOpYUHj_9r9heZNY6tCq007dnLEaj0D-TK2E5-0dfQN6aVQhqxuetyJY7c-spueddPqbgLvJIQlRUOvpRSScsWK618HZUz8oTc0dYenT9UDb0y8hekJyeED0O93eIA5tRZ8d9e2R4o6Ljopf6IDqlKFwGyVF_n0_Wm3sGlk97FCN2QA_raBs4JioHmN3AUZQJgFz5jGkc",
                title: "What is CIBIL Score?",
                desc: "A complete guide for beginners on how credit bureaus calculate your worthiness in India.",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQkKvX9ymbvOjKviCACu6v4OXfaX4Xu7uj-n2NSuGloGxvBPOZw5NnojrlJhINPgn2gblnIH1WtQNwBjizo7b2Aj4axvqEnsdSvPCw6JNZeIRx8RvUGGfDCCvHmqPUklhdZZdwlIsAsun-PffzrsdFWT-7kherx-bVcsQbkptmQG15Ma1OKz0ErjgNjyDlTBKgYa38iQJoxvNoLb4ixHGrHvvQ0fnHh8N2YdCnCUaQTqca7vEwCDvAD6OnHBLAmqIoFwZMxY0buc",
                title: "How to Improve Your Statement Score",
                desc: "Small changes in your spending habits that can lead to massive credit approvals.",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKb7vkgX-h6UOdMfDe1M8sBVgBjejRABte7UIiiJkFNz71tGzzIOvXJ-SI6JjqAWTtG9mkHp1XlYcQ6d2_w7TQcqDaTyoVsZI9UK6NmMp2I687A_6twjosd1kHI4aEgFMlVd1vla6p153cgfJ9BqWF0wIsc4t44EZK9ME5OodqHd7RIIhLEKim6vBrZzUjUhOCEp5B6YeMi-P2umVibTwNT9gkvQnIj5q0nxJBjzHa5hi2e2IXFHcXqeB6j-1GdTJujOg4eybsLX8",
                title: "How to Get Your First Loan in India",
                desc: "Step-by-step checklist for first-time borrowers to ensure 99% approval rates.",
              },
            ].map((b, i) => (
              <div key={i} style={{ cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.querySelector("h3").style.color = "#FFD700"}
                onMouseLeave={e => e.currentTarget.querySelector("h3").style.color = "#0f172a"}
              >
                <div style={{
                  aspectRatio: "16/9", borderRadius: 14, background: "#e2e8f0",
                  marginBottom: 20, overflow: "hidden",
                  backgroundImage: `url('${b.img}')`, backgroundSize: "cover", backgroundPosition: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,.08)",
                }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, transition: "color .15s", color: "#0f172a" }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-h1 { font-size: 36px !important; letter-spacing: -1px !important; }
          .hero-phone { display: none !important; }
          .problem-grid { grid-template-columns: 1fr !important; }
          .hiw-grid { flex-direction: column !important; gap: 32px !important; }
          .hiw-h2 { font-size: 30px !important; }
          .hiw-img { display: none !important; }
          .innovation-grid { grid-template-columns: 1fr 1fr !important; }
          .security-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .partners-row { gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .innovation-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats { gap: 0 !important; }
        }
      `}</style>
    </div>
  );
}