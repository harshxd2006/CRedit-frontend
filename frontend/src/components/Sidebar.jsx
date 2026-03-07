const GOLD = "#FFD700";
const MIDNIGHT = "#11425D";

const navItems = [
  { label: "Profile",                 icon: "person",          key: "accountsSettings"  },
  { label: "Dashboard",               icon: "dashboard",       key: "dashboard"         },
  { label: "Apply for Loan",          icon: "currency_rupee",  key: "applyForLoan"      },
  { label: "My Applications",         icon: "description",     key: "myApplications"    },
  { label: "My Loans",                icon: "credit_card",     key: "myLoans"           },
  { label: "Credit Building Journey", icon: "route",           key: "creditBuilding"    },
  { label: "Help & Support",          icon: "help_outline",    key: "helpSupport"       },
];

export default function Sidebar({ navigate, activePage }) {
  return (
    <aside
      style={{
        width: 260,
        minWidth: 260,
        background: MIDNIGHT,
        color: "#fff",
        padding: "16px 10px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {navItems.map((item) => {
        const isActive = activePage === item.key;
        return (
          <button
            key={item.key}
            onClick={() => navigate?.(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "12px 14px",
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
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20, flexShrink: 0 }}
            >
              {item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </aside>
  );
}