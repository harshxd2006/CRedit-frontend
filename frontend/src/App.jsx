import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import Loginpage from "./pages/Loginpage";
import PartnerB2B from "./pages/PartnerB2B";
import BorrowerDashboard from "./pages/BorrowerDashboard";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":      return <Homepage navigate={navigate} />;
      case "register":  return <RegisterPage navigate={navigate} />;
      case "login":     return <Loginpage navigate={navigate} />;
      case "partner":   return <PartnerB2B navigate={navigate} />;
      case "dashboard": return <BorrowerDashboard navigate={navigate} />;
      default:          return <Homepage navigate={navigate} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      {renderPage()}
    </div>
  );
}