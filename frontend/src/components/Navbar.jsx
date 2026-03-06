const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
        fill={GOLD}
      />
    </svg>
  );
}

function NavBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: 14, fontWeight: 600, color: "#475569",
        background: "none", border: "none", cursor: "pointer",
        padding: "8px 14px", borderRadius: 8, transition: "color .15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = MIDNIGHT)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
    >
      {children}
    </button>
  );
}

export default function Navbar({ navigate }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, width: "100%",
      borderBottom: "1px solid #e2e8f0",
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 24px", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}
        >
          <Logo />
          <span style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.4px" }}>
            CreditFlow
          </span>
        </button>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavBtn onClick={() => navigate("partner")}>How It Works</NavBtn>
          <NavBtn onClick={() => navigate("partner")}>Compliance</NavBtn>
          <NavBtn onClick={() => navigate("partner")}>Partnership</NavBtn>

          <button
            onClick={() => navigate("login")}
            style={{
              fontSize: 14, fontWeight: 600, color: "#475569",
              background: "none", border: "none", cursor: "pointer",
              padding: "8px 14px", borderRadius: 8, transition: "all .15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9"; e.currentTarget.style.color = MIDNIGHT; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("partner")}
            style={{
              fontSize: 14, fontWeight: 600, color: "#475569",
              background: "none", border: "none", cursor: "pointer",
              padding: "8px 14px", borderRadius: 8, transition: "all .15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9"; e.currentTarget.style.color = MIDNIGHT; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
          >
            Partner With Us
          </button>

          <button
            onClick={() => navigate("register")}
            style={{
              background: GOLD, color: "#0f172a", fontWeight: 700, fontSize: 14,
              padding: "10px 22px", borderRadius: 8, border: "none", cursor: "pointer",
              transition: "transform .15s, box-shadow .15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,215,0,.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Check Eligibility
          </button>
        </nav>
      </div>
    </header>
  );
}