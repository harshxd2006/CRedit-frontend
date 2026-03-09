import { useState } from "react";

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

function NavBtn({ item, isActive, navigate, onClick }) {
  return (
    <button
      onClick={() => { navigate?.(item.key); onClick?.(); }}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        width: "100%", padding: "11px 14px", borderRadius: 8,
        border: "none", marginBottom: 2,
        background: isActive ? GOLD : "transparent",
        color: isActive ? MIDNIGHT : "rgba(255,255,255,.75)",
        fontWeight: isActive ? 700 : 500, fontSize: 14,
        cursor: "pointer", textAlign: "left",
        transition: "background .15s, color .15s",
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "#fff"; } }}
      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,.75)"; } }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
      {item.label}
    </button>
  );
}

function SidebarContent({ navigate, activePage, onClose }) {
  return (
    <div style={{
      width: 270, background: MIDNIGHT, color: "#fff",
      fontFamily: "'Inter', sans-serif",
      display: "flex", flexDirection: "column",
      height: "100%", overflow: "hidden",
    }}>
      {onClose && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 14px 10px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: GOLD }}>account_balance_wallet</span>
            <span style={{ fontSize: 15, fontWeight: 900, color: "#fff", letterSpacing: "0.06em" }}>CREDITFLOW</span>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,.08)", border: "none", cursor: "pointer", borderRadius: 6, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "rgba(255,255,255,.7)" }}>close</span>
          </button>
        </div>
      )}

      <div style={{ padding: "12px 10px 8px", flex: 1, overflowY: "auto" }}>
        {navItems.map((item) => (
          <NavBtn key={item.key + item.label} item={item}
            isActive={activePage === item.key}
            navigate={navigate} onClick={onClose} />
        ))}
      </div>

      <div style={{ padding: "0 10px 24px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 8 }}>
          {bottomItems.map((item) => (
            <NavBtn key={item.key + item.label} item={item}
              isActive={false} navigate={navigate} onClick={onClose} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ navigate, activePage, navbarHeight = 64 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* DESKTOP: sticky sidebar — sticks while scrolling content,
          but scrolls away naturally when footer comes into view */}
      <div className="sb-desktop" style={{
        width: 270,
        minWidth: 270,
        flexShrink: 0,
        alignSelf: "flex-start",
        position: "sticky",
        top: navbarHeight,
        height: `calc(100vh - ${navbarHeight}px)`,
        zIndex: 40,
        overflowY: "auto",
      }}>
        <SidebarContent navigate={navigate} activePage={activePage} />
      </div>

      {/* MOBILE: hamburger button */}
      <button
        className="sb-hamburger"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        style={{
          display: "none",
          position: "fixed",
          top: 14,
          right: 16,
          zIndex: 51,
          background: MIDNIGHT,
          border: "none",
          cursor: "pointer",
          borderRadius: 8,
          width: 38,
          height: 38,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#fff" }}>menu</span>
      </button>

      {/* MOBILE: slide-in drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex" }}>
          <div onClick={() => setMobileOpen(false)}
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />
          <div style={{ position: "relative", width: 270, height: "100%", zIndex: 61, flexShrink: 0 }}>
            <SidebarContent navigate={navigate} activePage={activePage} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .sb-desktop   { display: none !important; width: 0 !important; min-width: 0 !important; }
          .sb-hamburger { display: flex !important; }
          .page-main    { padding: 20px 16px 40px !important; }
        }
      `}</style>
    </>
  );
}