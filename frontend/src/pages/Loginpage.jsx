import { useState } from "react";

const GOLD    = "#FFD700";
const PRIMARY = "#001f3f";

export default function Loginpage({ navigate }) {
  const [mobile, setMobile]   = useState("");
  const [mpin, setMpin]       = useState("");
  const [showPin, setShowPin] = useState(false);
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const errs = {};
    if (mobile.length !== 10) errs.mobile = "Enter a valid 10-digit number";
    if (mpin.length !== 6)    errs.mpin   = "Enter your 6-digit MPIN";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); alert("Login Successful! 🎉"); }, 1500);
  };

  const inputStyle = (errKey) => ({
    width: "100%", borderRadius: 8,
    border: `1px solid ${errors[errKey] ? "#ef4444" : "#e2e8f0"}`,
    background: "#f8fafc", color: PRIMARY,
    fontFamily: "'Inter', sans-serif", fontSize: 15,
    height: 52, paddingLeft: 48, paddingRight: 16,
    transition: "border-color .2s, box-shadow .2s",
  });

  const onFocus = (e) => {
    e.target.style.borderColor = PRIMARY;
    e.target.style.boxShadow = `0 0 0 3px rgba(0,31,63,.1)`;
  };
  const onBlur = (e, errKey) => {
    e.target.style.borderColor = errors[errKey] ? "#ef4444" : "#e2e8f0";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f6f7f8", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>

      {/* Header */}
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid #e2e8f0", padding: "12px 24px", background: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 28, color: PRIMARY }}>account_balance_wallet</span>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: PRIMARY }}>CreditFlow</h2>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {["help", "account_circle"].map((icon) => (
            <button key={icon} style={{
              width: 40, height: 40, borderRadius: 8, background: "#f1f5f9",
              border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span className="material-symbols-outlined" style={{ color: PRIMARY, fontSize: 22 }}>{icon}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", paddingTop: 80 }}>
        <div style={{
          width: "100%", maxWidth: 440, background: "#fff",
          borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,.1)",
          border: "1px solid #f1f5f9", padding: "36px 32px",
        }}>
          {/* Lock icon */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <div style={{ background: "rgba(0,31,63,.08)", borderRadius: "50%", padding: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="material-symbols-outlined" style={{ color: PRIMARY, fontSize: 40 }}>lock</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: PRIMARY }}>Welcome Back</h1>
            <p style={{ fontSize: 14, color: "#64748b", marginTop: 8 }}>Login to your CreditFlow account</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Mobile */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: PRIMARY, marginBottom: 8 }}>
                Mobile Number
              </label>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 20 }}>
                  call
                </span>
                <input
                  type="tel" value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit number"
                  style={inputStyle("mobile")}
                  onFocus={onFocus}
                  onBlur={(e) => onBlur(e, "mobile")}
                />
              </div>
              {errors.mobile && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 5, fontWeight: 600 }}>{errors.mobile}</p>}
            </div>

            {/* MPIN */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>6-digit MPIN</label>
                <a href="#" style={{ fontSize: 11, fontWeight: 800, color: "#000" }}>FORGOT MPIN?</a>
              </div>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 20 }}>
                  pin
                </span>
                <input
                  type={showPin ? "text" : "password"}
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6} placeholder="••••••"
                  style={{ ...inputStyle("mpin"), paddingRight: 48, fontSize: 22, letterSpacing: "0.35em" }}
                  onFocus={onFocus}
                  onBlur={(e) => onBlur(e, "mpin")}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#94a3b8", fontSize: 20 }}>
                    {showPin ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.mpin && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 5, fontWeight: 600 }}>{errors.mpin}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "16px",
                background: loading ? "#e2e8f0" : GOLD,
                color: loading ? "#94a3b8" : "#0f172a",
                fontWeight: 800, fontSize: 17, borderRadius: 10,
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 6px 20px rgba(255,215,0,.45)",
                transition: "all .2s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}
            >
              {loading ? (
                <>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", border: "3px solid #94a3b8", borderTopColor: "#475569", display: "inline-block", animation: "spin .8s linear infinite" }} />
                  Logging in...
                </>
              ) : "LOGIN"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "#64748b" }}>
            Don't have an account?{" "}
            <button
              onClick={() => navigate("register")}
              style={{ background: "none", border: "none", color: PRIMARY, fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: 13 }}
            >
              Register
            </button>
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 28, paddingTop: 24, borderTop: "1px solid #f1f5f9" }}>
            <span className="material-symbols-outlined" style={{ color: "#16a34a", fontSize: 16 }}>shield_lock</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              Your data is encrypted and secure
            </span>
          </div>
        </div>
      </main>

      <footer style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: "#94a3b8" }}>© 2024 CreditFlow Fintech Solutions. All rights reserved.</p>
      </footer>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}