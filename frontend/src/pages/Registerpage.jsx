import { useState, useRef } from "react";

const GOLD    = "#FFD700";
const PRIMARY = "#1a355b";

function ErrMsg({ children }) {
  return <p style={{ color: "#ef4444", fontSize: 11, marginTop: 5, fontWeight: 600 }}>{children}</p>;
}

export default function Registerpage({ navigate }) {
  const [mobile, setMobile]           = useState("");
  const [otp, setOtp]                 = useState(["", "", "", "", "", ""]);
  const [mpin, setMpin]               = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [errors, setErrors]           = useState({});
  const [loading, setLoading]         = useState(false);
  const otpRefs                       = useRef([]);

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      otpRefs.current[idx - 1]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (mobile.length !== 10)      errs.mobile      = "Enter a valid 10-digit number";
    if (otp.join("").length !== 6) errs.otp         = "Enter the complete 6-digit OTP";
    if (mpin.length !== 6)         errs.mpin        = "MPIN must be exactly 6 digits";
    if (mpin !== confirmMpin)      errs.confirmMpin = "MPINs do not match";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("login"); }, 1600);
  };

  const onFocus = (e) => {
    e.target.style.borderColor = PRIMARY;
    e.target.style.boxShadow = `0 0 0 3px rgba(26,53,91,.12)`;
  };
  const onBlur = (e) => {
    e.target.style.borderColor = "rgba(26,53,91,.2)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f6f7f8", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>

      {/* Header */}
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(26,53,91,.1)", padding: "16px 24px", background: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: PRIMARY, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="material-symbols-outlined" style={{ color: GOLD, fontSize: 20 }}>account_balance_wallet</span>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: PRIMARY }}>CreditFlow</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="material-symbols-outlined" style={{ color: "rgba(26,53,91,.5)", cursor: "pointer" }}>help_outline</span>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(26,53,91,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="material-symbols-outlined" style={{ color: PRIMARY, fontSize: 20 }}>person</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{
          width: "100%", maxWidth: 480, background: "#fff",
          borderRadius: 16, boxShadow: "0 20px 60px rgba(26,53,91,.12)",
          border: "1px solid rgba(26,53,91,.05)", padding: "40px 36px",
        }}>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 36 }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: "rgba(26,53,91,.06)",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
            }}>
              <span className="material-symbols-outlined" style={{ color: PRIMARY, fontSize: 38 }}>lock_open</span>
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: PRIMARY }}>Create Your Account</h1>
            <p style={{ fontSize: 14, color: "rgba(26,53,91,.55)", marginTop: 6 }}>
              Join CreditFlow for secure financial management
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Mobile Number */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>
                Mobile Number
              </label>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{
                  position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                  color: "rgba(26,53,91,.35)", fontSize: 20,
                }}>smartphone</span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  style={{
                    width: "100%", borderRadius: 8,
                    border: `1px solid ${errors.mobile ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                    background: "#fff", color: PRIMARY,
                    fontFamily: "'Inter', sans-serif",
                    height: 56, paddingLeft: 48, paddingRight: 16,
                    fontSize: 15, fontWeight: 500,
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              {errors.mobile && <ErrMsg>{errors.mobile}</ErrMsg>}
            </div>

            {/* OTP — fixed size boxes */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em" }}>
                  6-Digit OTP
                </label>
                <button type="button" style={{ fontSize: 12, fontWeight: 700, color: "rgba(26,53,91,.55)", background: "none", border: "none", cursor: "pointer" }}>
                  Resend OTP?
                </button>
              </div>

              {/* ✅ KEY FIX: fixed width boxes, not flex:1 */}
              <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
                {otp.map((v, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={v}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    style={{
                      width: 56,          /* ✅ fixed width */
                      height: 56,         /* ✅ fixed height */
                      textAlign: "center",
                      fontSize: 22,
                      fontWeight: 800,
                      border: `1px solid ${errors.otp ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                      borderRadius: 8,
                      background: "#fff",
                      color: PRIMARY,
                      fontFamily: "'Inter', sans-serif",
                      transition: "border-color .2s, box-shadow .2s",
                      flexShrink: 0,      /* ✅ don't stretch */
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                ))}
              </div>
              {errors.otp && <ErrMsg>{errors.otp}</ErrMsg>}
            </div>

            {/* MPIN */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>
                  Set MPIN
                </label>
                <input
                  type="password"
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  placeholder="••••••"
                  style={{
                    width: "100%", height: 48, textAlign: "center",
                    fontSize: 20, letterSpacing: "0.35em",
                    border: `1px solid ${errors.mpin ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                    borderRadius: 8, background: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
                {errors.mpin && <ErrMsg>{errors.mpin}</ErrMsg>}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>
                  Confirm MPIN
                </label>
                <input
                  type="password"
                  value={confirmMpin}
                  onChange={(e) => setConfirmMpin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  placeholder="••••••"
                  style={{
                    width: "100%", height: 48, textAlign: "center",
                    fontSize: 20, letterSpacing: "0.35em",
                    border: `1px solid ${errors.confirmMpin ? "#ef4444" : "rgba(26,53,91,.2)"}`,
                    borderRadius: 8, background: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
                {errors.confirmMpin && <ErrMsg>{errors.confirmMpin}</ErrMsg>}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", background: loading ? "#e2e8f0" : GOLD,
                color: loading ? "#94a3b8" : "#0f172a",
                fontWeight: 800, fontSize: 16, padding: "16px", borderRadius: 10,
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 8px 24px rgba(255,204,0,.35)",
                transition: "all .2s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                marginTop: 8,
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    border: "3px solid #94a3b8", borderTopColor: "#475569",
                    display: "inline-block", animation: "spin .8s linear infinite",
                  }} />
                  Verifying...
                </>
              ) : (
                <>
                  REGISTER
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#64748b" }}>
            Already have an account?{" "}
            <button
              onClick={() => navigate("login")}
              style={{ background: "none", border: "none", color: PRIMARY, fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: 13 }}
            >
              Login
            </button>
          </p>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(26,53,91,.08)",
          }}>
            <span className="material-symbols-outlined" style={{ color: "#16a34a", fontSize: 16 }}>verified_user</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Your data is encrypted and secure
            </span>
          </div>
        </div>
      </main>

      <footer style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: "rgba(26,53,91,.3)" }}>© 2024 CreditFlow Fintech Solutions. All rights reserved.</p>
      </footer>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}