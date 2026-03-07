import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import Loginpage from "./pages/Loginpage";
import PartnerB2B from "./pages/PartnerB2B";
import BorrowerDashboard from "./pages/BorrowerDashboard";
import AccountsSettings from "./pages/Accounts&Settings";
import ApplicationSubmitted from "./pages/ApplicationSubmitted";
import ApplyforLoan from "./pages/ApplyforLoan";
import CreditReport from "./pages/CreditReport";
import Creditbuilding from "./pages/Creditbuilding";
import HelpSupport from "./pages/Help&Support";
import ReviewSign from "./pages/Review&Sign";
import LoanDetails from "./pages/LoanDetails";
import MyApplications from "./pages/MyApplications";
import MyLoans from "./pages/MyLoans";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    console.log("[Navigate] →", target);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":                return <Homepage navigate={navigate} />;
      case "register":            return <RegisterPage navigate={navigate} />;
      case "login":               return <Loginpage navigate={navigate} />;
      case "partner":             return <PartnerB2B navigate={navigate} />;
      case "dashboard":           return <BorrowerDashboard navigate={navigate} />;
      case "accountsSettings":    return <AccountsSettings navigate={navigate} />;
      case "applicationSubmitted":return <ApplicationSubmitted navigate={navigate} />;
      case "applyForLoan":        return <ApplyforLoan navigate={navigate} />;
      case "creditReport":        return <CreditReport navigate={navigate} />;
      case "creditBuilding":      return <Creditbuilding navigate={navigate} />;
      case "helpSupport":         return <HelpSupport navigate={navigate} />;
      case "loanDetails":         return <LoanDetails navigate={navigate} />;
      case "myApplications":      return <MyApplications navigate={navigate} />;
      case "myLoans":             return <MyLoans navigate={navigate} />;
      case "reviewSign":          return <ReviewSign navigate={navigate} />;
      default:                    return <Homepage navigate={navigate} />;
    }
  };

  const allPages = [
    { label: "Home",          key: "home" },
    { label: "Register",      key: "register" },
    { label: "Login",         key: "login" },
    { label: "Partner B2B",   key: "partner" },
    { label: "Dashboard",     key: "dashboard" },
    { label: "Profile",       key: "accountsSettings" },
    { label: "App Submitted", key: "applicationSubmitted" },
    { label: "Apply Loan",    key: "applyForLoan" },
    { label: "Credit Report", key: "creditReport" },
    { label: "Credit Build",  key: "creditBuilding" },
    { label: "Help",          key: "helpSupport" },
    { label: "Loan Details",  key: "loanDetails" },
    { label: "My Apps",       key: "myApplications" },
    { label: "My Loans",      key: "myLoans" },
    { label: "Review Sign",   key: "reviewSign" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* ===== DEV ONLY — Remove before production ===== */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
        background: "#0f172a", padding: "8px 12px",
        display: "flex", gap: 6, flexWrap: "wrap", borderTop: "2px solid #FFD700",
      }}>
        {allPages.map((p) => (
          <button
            key={p.key}
            onClick={() => navigate(p.key)}
            style={{
              padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600,
              border: "none", cursor: "pointer",
              background: page === p.key ? "#FFD700" : "rgba(255,255,255,.1)",
              color: page === p.key ? "#0f172a" : "#fff",
            }}
          >
            {p.label}
          </button>
        ))}
        <span style={{
          marginLeft: "auto", fontSize: 11,
          color: "rgba(255,255,255,.4)", alignSelf: "center",
        }}>
          DEV NAV — remove before launch
        </span>
      </div>
      {/* ===== END DEV ===== */}

      {renderPage()}
    </div>
  );
}