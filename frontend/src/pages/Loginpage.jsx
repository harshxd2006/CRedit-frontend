import { useState } from "react";
import Navbar from "../components/Navbar";

const GOLD     = "#FFD700";
const PRIMARY  = "#1a355b";
const MIDNIGHT = "#11425D";
const API_BASE = "http://localhost:5000/api/auth";

function HomeFooter() {
  return (
    <footer style={{ background: MIDNIGHT, color: "#cbd5e1", paddingTop: 80, paddingBottom: 40, borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: GOLD }}>account_balance_wallet</span>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>CREDITFLOW</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 280, margin: 0 }}>
              Empowering the new-to-credit population of India with fair access to financial opportunities through data and trust.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["share", "public", "alternate_email"].map(icon => (
                <div key={icon} style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.querySelector("span").style.color = "#000"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.querySelector("span").style.color = "#fff"; }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#fff", transition: "color .15s" }}>{icon}</span>
                </div>
              ))}
            </div>
          </div>
          {[
            { title: "Company", links: ["About Us", "Career", "Partner Lenders", "Blog"] },
            { title: "Support", links: ["Help Center", "Grievance Officer", "Security", "Contact Us"] },
            { title: "Legal",   links: ["Privacy Policy", "Terms of Service", "RBI Compliance", "Cookie Policy"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 24, marginTop: 0 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => e.target.style.color = "#fff"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 40, marginBottom: 24 }}>
          <div style={{ background: "rgba(255,255,255,.04)", padding: "24px 32px", borderRadius: 16, maxWidth: 896, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#64748b", marginBottom: 12 }}>RBI Disclaimer</p>
            <p style={{ fontSize: 11, color: "#64748b", lineHeight: 1.8, margin: 0 }}>
              CreditFlow is a technology platform and not a lender. All loan products are offered by RBI-registered NBFCs and Banks.
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "#475569", margin: 0 }}>© 2024 CreditFlow India Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Loginpage({ navigate }) {
  const [mobileVal, setMobileVal] = useState("");
  const [mpin, setMpinVal]        = useState("");
  const [showPin, setShowPin]     = useState(false);
  const [errors, setErrors]       = useState({});
  const [loading, setLoading]     = useState(false);
  const [apiError, setApiError]   = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setApiError("");
    const errs = {};
    if (mobileVal.length !== 10) errs.mobile = "Enter a valid 10-digit number";
    if (mpin.length !== 4)       errs.mpin   = "Enter your 4-digit MPIN";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      const res  = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobileVal, mpin }),
      });
      const data = await res.json();
      if (!data.success) {
        setApiError(data.message);
      } else {
        // Store basic user info for dashboard
        sessionStorage.setItem("user", JSON.stringify(data.data));
        navigate("dashboard");
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onFocus = (e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; };
  const onBlur  = (e, hasErr) => { e.target.style.borderColor = hasErr ? "#ef4444" : "rgba(26,53,91,.2)"; e.target.style.boxShadow = "none"; };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar navigate={navigate} />

      <section style={{
        minHeight: "calc(100vh - 80px)",
        background: "#f6f7f8",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "48px 24px",
      }}>
        <div style={{
          width: "100%", maxWidth: 460,
          background: "#fff", borderRadius: 20,
          boxShadow: "0 20px 60px rgba(26,53,91,.12)",
          border: "1px solid rgba(26,53,91,.07)",
          padding: "36px 36px 28px",
        }}>

          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: PRIMARY, margin: "0 0 6px" }}>Welcome Back</h1>
            <p style={{ fontSize: 14, color: "rgba(26,53,91,.55)", margin: 0 }}>Login to your CreditFlow account</p>
          </div>

          {/* API Error */}
          {apiError && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 16 }}>error</span>
              <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, margin: 0 }}>{apiError}</p>
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 0 }}>

            {/* Mobile Number */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>Mobile Number</label>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(26,53,91,.35)", fontSize: 18 }}>smartphone</span>
                <input type="tel" value={mobileVal}
                  onChange={e => setMobileVal(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  style={{
                    width: "100%", height: 56, paddingLeft: 42, paddingRight: 14,
                    borderRadius: 8, outline: "none", fontSize: 14, fontWeight: 500,
                    border: `1px solid ${errors.mobile ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                    background: "#fff", color: PRIMARY, fontFamily: "'Inter', sans-serif",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                  onFocus={onFocus} onBlur={e => onBlur(e, errors.mobile)} />
              </div>
              {errors.mobile && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4, fontWeight: 600 }}>{errors.mobile}</p>}
            </div>

            {/* 4-Digit MPIN */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em" }}>4-Digit MPIN</label>
                <a href="#" style={{ fontSize: 12, fontWeight: 700, color: "rgba(26,53,91,.55)", textDecoration: "none" }}>Forgot MPIN?</a>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ position: "relative" }}>
                  <span className="material-symbols-outlined" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(26,53,91,.35)", fontSize: 18 }}>pin</span>
                  <input type={showPin ? "text" : "password"} value={mpin}
                    onChange={e => setMpinVal(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    maxLength={4} placeholder="••••"
                    style={{
                      width: "100%", height: 56, paddingLeft: 42, paddingRight: 44,
                      borderRadius: 8, outline: "none",
                      border: `1px solid ${errors.mpin ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                      background: "#fff", color: PRIMARY,
                      fontFamily: "'Inter', sans-serif", fontSize: 22, letterSpacing: "0.35em",
                      transition: "border-color .2s, box-shadow .2s",
                    }}
                    onFocus={onFocus} onBlur={e => onBlur(e, errors.mpin)} />
                  <button type="button" onClick={() => setShowPin(!showPin)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: "rgba(26,53,91,.35)", fontSize: 18 }}>{showPin ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
                <div style={{
                  height: 56, borderRadius: 8,
                  border: "1px dashed rgba(26,53,91,.12)",
                  background: "rgba(26,53,91,.02)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 11, color: "rgba(26,53,91,.3)", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>Secure &amp; Encrypted</span>
                </div>
              </div>
              {errors.mpin && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 4, fontWeight: 600 }}>{errors.mpin}</p>}
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} style={{
              width: "100%", background: loading ? "#e2e8f0" : GOLD,
              color: loading ? "#94a3b8" : "#0f172a",
              fontWeight: 800, fontSize: 16, padding: "15px", borderRadius: 12,
              border: "none", cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 6px 20px rgba(255,204,0,.4)",
              transition: "all .2s", marginBottom: 0,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              {loading ? (
                <><span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #94a3b8", borderTopColor: "#475569", display: "inline-block", animation: "spin .8s linear infinite" }} />Logging in...</>
              ) : "LOGIN"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "#64748b" }}>
            Don't have an account?{" "}
            <button onClick={() => navigate("register")}
              style={{ background: "none", border: "none", color: PRIMARY, fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: 13 }}>
              Register
            </button>
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(26,53,91,.08)" }}>
            <span className="material-symbols-outlined" style={{ color: "#16a34a", fontSize: 14 }}>shield_lock</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em" }}>Your data is encrypted and secure</span>
          </div>
        </div>
      </section>

      <HomeFooter />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}