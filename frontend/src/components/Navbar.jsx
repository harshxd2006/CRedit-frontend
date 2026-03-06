const GOLD     = "#FFD700";
const MIDNIGHT = "#11425D";

export default function Navbar({ navigate, variant }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.80)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e2e8f0",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 32px", height: 80,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 32, color: GOLD }}>account_balance_wallet</span>
          <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.5px", textTransform: "uppercase", color: "#1a2744" }}>CreditFlow</span>
        </button>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#how-it-works" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = MIDNIGHT}
            onMouseLeave={e => e.target.style.color = "#475569"}
          >How it Works</a>
          <a href="#security" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = MIDNIGHT}
            onMouseLeave={e => e.target.style.color = "#475569"}
          >Security</a>
          <a href="#partners" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = MIDNIGHT}
            onMouseLeave={e => e.target.style.color = "#475569"}
          >Partners</a>

          {/* Fixed-width wrapper so button never causes layout shift */}
          <div style={{ width: 160, display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => variant === "partner" ? navigate("home") : navigate("partner")}
              style={{
                width: "100%", padding: "10px 0", borderRadius: 8, fontWeight: 700, fontSize: 14,
                background: GOLD, color: "#000", border: "none", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(255,215,0,.25)", transition: "opacity .15s",
                textAlign: "center",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              {variant === "partner" ? "Looking for Loan" : "Partner With Us"}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}