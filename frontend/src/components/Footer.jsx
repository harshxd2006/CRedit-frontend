const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill={GOLD}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
      />
    </svg>
  );
}

export default function Footer() {
  const cols = [
    { title: "Company", links: ["About Us", "Career", "Partner Lenders", "Blog"] },
    { title: "Support", links: ["Help Center", "Grievance Officer", "Security", "Contact Us"] },
    { title: "Legal",   links: ["Privacy Policy", "Terms of Service", "RBI Compliance", "Cookie Policy"] },
  ];

  return (
    <footer style={{ background: MIDNIGHT, color: "#fff", paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Upper grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 80,
        }}>
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <Logo />
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                CreditFlow
              </span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.8, maxWidth: 280, marginBottom: 32 }}>
              Empowering the new-to-credit population of India with fair access to
              financial opportunities through data and trust.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["share", "public", "alternate_email"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: 40, height: 40, borderRadius: 6,
                    background: "rgba(255,255,255,.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.14)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.07)")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: "rgba(255,255,255,.55)" }}>
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#fff", marginBottom: 24,
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{ fontSize: 13, color: "rgba(255,255,255,.45)", fontWeight: 500, transition: "color .15s" }}
                      onMouseEnter={(e) => (e.target.style.color = GOLD)}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,.45)")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RBI Disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 48, marginBottom: 32 }}>
          <div style={{
            background: "rgba(0,0,0,.2)", borderRadius: 12, padding: "28px 40px",
            maxWidth: 896, margin: "0 auto", textAlign: "center",
          }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 12,
            }}>
              RBI Disclaimer
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.4)", lineHeight: 1.8, fontWeight: 500 }}>
              CreditFlow is a technology platform and not a lender. All loan products are offered
              by RBI-registered NBFCs and Banks. Approval is subject to lender terms and conditions.
              We never ask for payments to get a loan approved. Report any suspicious calls to our
              Grievance Officer.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p style={{
          textAlign: "center", fontSize: 10, fontWeight: 500,
          textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,.25)",
        }}>
          © 2024 CreditFlow India Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}