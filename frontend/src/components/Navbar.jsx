import { useState } from "react";

const GOLD     = "#FFD700";
const MIDNIGHT = "#11425D";

export default function Navbar({ navigate, variant }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e2e8f0",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "0 20px", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: GOLD }}>account_balance_wallet</span>
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.5px", textTransform: "uppercase", color: "#1a2744" }}>CreditFlow</span>
          </button>

          {/* Desktop Nav links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 24 }}>
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
            <button
              onClick={() => variant === "partner" ? navigate("home") : navigate("partner")}
              style={{
                padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14,
                background: GOLD, color: "#000", border: "none", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(255,215,0,.25)", transition: "opacity .15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              {variant === "partner" ? "Looking for Loan" : "Partner With Us"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: MIDNIGHT }}>
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile-menu" style={{
            background: "#fff", borderTop: "1px solid #e2e8f0",
            padding: "16px 20px 24px",
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {["How it Works", "Security", "Partners"].map((item, i) => (
              <a key={item} href={["#how-it-works","#security","#partners"][i]}
                onClick={() => setMenuOpen(false)}
                style={{ padding: "12px 0", fontSize: 15, fontWeight: 500, color: "#334155", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>
                {item}
              </a>
            ))}
            <button
              onClick={() => { variant === "partner" ? navigate("home") : navigate("partner"); setMenuOpen(false); }}
              style={{
                marginTop: 12, padding: "14px 0", borderRadius: 10, fontWeight: 700, fontSize: 15,
                background: GOLD, color: "#000", border: "none", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(255,215,0,.25)",
              }}
            >
              {variant === "partner" ? "Looking for Loan" : "Partner With Us"}
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}