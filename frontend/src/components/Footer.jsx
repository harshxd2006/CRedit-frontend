const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

export default function Footer() {
  const cols = [
    { title: "Company", links: ["About Us", "Career", "Partner Lenders", "Blog"] },
    { title: "Support", links: ["Help Center", "Grievance Officer", "Security", "Contact Us"] },
    { title: "Legal",   links: ["Privacy Policy", "Terms of Service", "RBI Compliance", "Cookie Policy"] },
  ];

  return (
    <footer style={{ background: MIDNIGHT, color: "#fff", paddingTop: 48, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>

        {/* Upper grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: GOLD }}>
                account_balance_wallet
              </span>
              <span style={{ fontSize: 17, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
                CREDITFLOW
              </span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.8, maxWidth: 280, marginBottom: 20 }}>
              Empowering the new-to-credit population of India with fair access to
              financial opportunities through data and trust.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["share", "public", "alternate_email"].map((icon) => (
                <a key={icon} href="#" style={{
                  width: 36, height: 36, borderRadius: 6,
                  background: "rgba(255,255,255,.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background .15s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.14)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.07)")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 17, color: "rgba(255,255,255,.55)" }}>
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 16, marginTop: 0 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,.45)", fontWeight: 500, textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={(e) => (e.target.style.color = GOLD)}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,.45)")}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RBI Disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 32, marginBottom: 24 }}>
          <div style={{ background: "rgba(0,0,0,.2)", borderRadius: 12, padding: "20px 24px", maxWidth: 896, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", margin: "0 0 10px" }}>
              RBI Disclaimer
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
              CreditFlow is a technology platform and not a lender. All loan products are offered
              by RBI-registered NBFCs and Banks. Approval is subject to lender terms and conditions.
              We never ask for payments to get a loan approved. Report any suspicious calls to our
              Grievance Officer.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p style={{ textAlign: "center", fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,.25)", margin: 0 }}>
          © 2024 CreditFlow India Pvt. Ltd. All Rights Reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}