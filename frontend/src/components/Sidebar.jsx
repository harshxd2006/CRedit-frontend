const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const navItems = [
  { label: "Profile",                 icon: "person",          key: "accountsSettings" },
  { label: "Dashboard",               icon: "dashboard",       key: "dashboard"        },
  { label: "Apply for Loan",          icon: "currency_rupee",  key: "applyForLoan"     },
  { label: "My Applications",         icon: "description",     key: "myApplications"   },
  { label: "My Loans",                icon: "credit_card",     key: "myLoans"          },
  { label: "Credit Building Journey", icon: "route",           key: "creditBuilding"   },
  { label: "Help & Support",          icon: "help_outline",    key: "helpSupport"      },
];

const bottomItems = [
  { label: "Settings", icon: "settings",       key: "accountsSettings" },
  { label: "Arjun M.", icon: "account_circle", key: "accountsSettings" },
];

function NavBtn({ item, isActive, navigate }) {
  return (
    <button
      onClick={() => navigate?.(item.key)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "11px 14px",
        borderRadius: 8,
        border: "none",
        marginBottom: 2,
        background: isActive ? GOLD : "transparent",
        color: isActive ? MIDNIGHT : "rgba(255,255,255,.75)",
        fontWeight: isActive ? 700 : 500,
        fontSize: 14,
        cursor: "pointer",
        textAlign: "left",
        transition: "background .15s, color .15s",
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "rgba(255,255,255,.08)";
          e.currentTarget.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "rgba(255,255,255,.75)";
        }
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 20, flexShrink: 0 }}>
        {item.icon}
      </span>
      {item.label}
    </button>
  );
}

export default function Sidebar({ navigate, activePage, navbarHeight = 80 }) {
  return (
    <aside style={{
      width: 260,
      minWidth: 260,
      background: MIDNIGHT,
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
      position: "sticky",
      top: navbarHeight,
      height: `calc(100vh - ${navbarHeight}px)`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flexShrink: 0,
    }}>

      {/* Nav items */}
      <div style={{ padding: "16px 10px 8px" }}>
        {navItems.map((item) => (
          <NavBtn key={item.key + item.label} item={item} isActive={activePage === item.key} navigate={navigate} />
        ))}
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Settings + Arjun — always pinned at bottom, small gap from nav */}
      <div style={{ padding: "0 10px 24px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 8 }}>
          {bottomItems.map((item) => (
            <NavBtn key={item.key + item.label} item={item} isActive={false} navigate={navigate} />
          ))}
        </div>
      </div>

    </aside>
  );
}