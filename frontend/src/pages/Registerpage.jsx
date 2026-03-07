import { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const GOLD     = "#FFD700";
const PRIMARY  = "#1a355b";
const MIDNIGHT = "#11425D";
const API_BASE = "http://localhost:5000/api/auth";

function HomeFooter() {
  return (
    <footer style={{ background: MIDNIGHT, color: "#cbd5e1", paddingTop: 80, paddingBottom: 40, borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div className="reg-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
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
          <div style={{ background: "rgba(255,255,255,.04)", padding: "24px 20px", borderRadius: 16, maxWidth: 896, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#64748b", marginBottom: 12 }}>RBI Disclaimer</p>
            <p style={{ fontSize: 11, color: "#64748b", lineHeight: 1.8, margin: 0 }}>
              CreditFlow is a technology platform and not a lender. All loan products are offered by RBI-registered NBFCs and Banks. Approval is subject to lender terms and conditions. We never ask for payments to get a loan approved. Report any suspicious calls to our Grievance Officer.
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "#475569", margin: 0 }}>© 2024 CreditFlow India Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Registerpage({ navigate }) {
  const [mobile, setMobile]           = useState("");
  const [otp, setOtp]                 = useState(["", "", "", "", "", ""]);
  const [mpin, setMpin]               = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [errors, setErrors]           = useState({});
  const [loading, setLoading]         = useState(false);
  const [apiError, setApiError]       = useState("");
  const otpRefs                       = useRef([]);

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[idx] = val; setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) otpRefs.current[idx - 1]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    const otpStr = otp.join("");
    const errs = {};
    if (mobile.length !== 10)  errs.mobile      = "Enter a valid 10-digit number";
    if (otpStr.length !== 6)   errs.otp         = "Enter the complete 6-digit OTP";
    if (mpin.length !== 4)     errs.mpin        = "MPIN must be exactly 4 digits";
    if (mpin !== confirmMpin)  errs.confirmMpin = "MPINs do not match";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setLoading(true);
    try {
      const sendRes  = await fetch(`${API_BASE}/send-otp`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });
      const sendData = await sendRes.json();
      if (!sendData.success) { setApiError(sendData.message); setLoading(false); return; }

      const verifyRes  = await fetch(`${API_BASE}/verify-otp`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp: otpStr }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) { setApiError(verifyData.message); setLoading(false); return; }

      const mpinRes  = await fetch(`${API_BASE}/set-mpin`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, mpin, confirmMpin }),
      });
      const mpinData = await mpinRes.json();
      if (!mpinData.success) { setApiError(mpinData.message); setLoading(false); return; }

      navigate("dashboard");
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ label, error, children, right }) => (
    <div style={{ marginBottom: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
        <label style={{ fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.09em" }}>{label}</label>
        {right}
      </div>
      {children}
      <p style={{ fontSize: 11, fontWeight: 600, color: "#ef4444", margin: "4px 0 0", height: 14, lineHeight: "14px", opacity: error ? 1 : 0, transition: "opacity 0.15s ease", userSelect: "none" }}>{error || "‎"}</p>
    </div>
  );

  const inputBase = {
    width: "100%", borderRadius: 8, outline: "none",
    border: "1px solid rgba(26,53,91,.2)",
    background: "#fff", color: PRIMARY,
    fontFamily: "'Inter', sans-serif",
    transition: "border-color .2s, box-shadow .2s",
    boxSizing: "border-box",
  };

  const onFocus = (e) => { e.target.style.borderColor = MIDNIGHT; e.target.style.boxShadow = "0 0 0 3px rgba(17,66,93,.1)"; };
  const onBlur  = (e) => { e.target.style.borderColor = "rgba(26,53,91,.2)"; e.target.style.boxShadow = "none"; };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar navigate={navigate} />

      <section style={{ background: "#f6f7f8", padding: "32px 16px", boxSizing: "border-box", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 460, background: "#fff", borderRadius: 20, boxShadow: "0 20px 60px rgba(26,53,91,.12)", border: "1px solid rgba(26,53,91,.07)", padding: "28px 24px", margin: "auto 0" }}>

          <div style={{ marginBottom: 18 }}>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: PRIMARY, margin: "0 0 6px" }}>Create Your Account</h1>
            <p style={{ fontSize: 14, color: "rgba(26,53,91,.55)", margin: 0 }}>Join CreditFlow for secure financial management</p>
          </div>

          {apiError && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 16 }}>error</span>
              <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, margin: 0 }}>{apiError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>

            {/* Mobile */}
            <Field label="Mobile Number" error={errors.mobile}>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(26,53,91,.35)", fontSize: 18 }}>smartphone</span>
                <input type="tel" value={mobile}
                  onChange={e => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  style={{ ...inputBase, height: 48, paddingLeft: 42, paddingRight: 14, fontSize: 14, fontWeight: 500, border: `1px solid ${errors.mobile ? "#ef4444" : "rgba(26,53,91,.2)"}` }}
                  onFocus={onFocus} onBlur={onBlur} />
              </div>
            </Field>

            {/* OTP */}
            <Field label="6-Digit OTP" error={errors.otp} right={
              <button type="button" style={{ fontSize: 12, fontWeight: 700, color: "rgba(26,53,91,.55)", background: "none", border: "none", cursor: "pointer" }}>Resend OTP?</button>
            }>
              <div style={{ display: "flex", gap: 6, justifyContent: "space-between" }}>
                {otp.map((v, i) => (
                  <input key={i} ref={el => (otpRefs.current[i] = el)}
                    type="text" inputMode="numeric" maxLength={1} value={v}
                    onChange={e => handleOtpChange(e.target.value, i)}
                    onKeyDown={e => handleOtpKeyDown(e, i)}
                    style={{ width: 0, flex: 1, height: 50, textAlign: "center", fontSize: 20, fontWeight: 800, border: `1px solid ${errors.otp ? "#ef4444" : "rgba(26,53,91,.2)"}`, borderRadius: 10, background: "#fff", color: PRIMARY, fontFamily: "'Inter', sans-serif", outline: "none", transition: "border-color .2s, box-shadow .2s" }}
                    onFocus={onFocus} onBlur={onBlur} />
                ))}
              </div>
            </Field>

            {/* MPIN */}
            <div className="reg-mpin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="Set MPIN" error={errors.mpin}>
                <input type="password" value={mpin}
                  onChange={e => setMpin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  maxLength={4} placeholder="••••"
                  style={{ ...inputBase, height: 48, textAlign: "center", fontSize: 22, letterSpacing: "0.35em", border: `1px solid ${errors.mpin ? "#ef4444" : "rgba(26,53,91,.2)"}` }}
                  onFocus={onFocus} onBlur={onBlur} />
              </Field>
              <Field label="Confirm MPIN" error={errors.confirmMpin}>
                <input type="password" value={confirmMpin}
                  onChange={e => setConfirmMpin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  maxLength={4} placeholder="••••"
                  style={{ ...inputBase, height: 48, textAlign: "center", fontSize: 22, letterSpacing: "0.35em", border: `1px solid ${errors.confirmMpin ? "#ef4444" : "rgba(26,53,91,.2)"}` }}
                  onFocus={onFocus} onBlur={onBlur} />
              </Field>
            </div>

            <button type="submit" disabled={loading} style={{ width: "100%", background: loading ? "#e2e8f0" : GOLD, color: loading ? "#94a3b8" : "#0f172a", fontWeight: 800, fontSize: 16, padding: "15px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 6px 20px rgba(255,204,0,.4)", transition: "all .2s", marginTop: 6, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              {loading
                ? <><span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #94a3b8", borderTopColor: "#475569", display: "inline-block", animation: "spin .8s linear infinite" }} />Verifying...</>
                : <>REGISTER <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span></>
              }
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 18, fontSize: 13, color: "#64748b" }}>
            Already have an account?{" "}
            <button onClick={() => navigate("login")} style={{ background: "none", border: "none", color: PRIMARY, fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: 13 }}>
              Login
            </button>
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 18, paddingTop: 18, borderTop: "1px solid rgba(26,53,91,.08)" }}>
            <span className="material-symbols-outlined" style={{ color: "#16a34a", fontSize: 14 }}>verified_user</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em" }}>Your data is encrypted and secure</span>
          </div>
        </div>
      </section>

      <HomeFooter />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 480px) {
          .reg-mpin-grid { grid-template-columns: 1fr !important; }
          .reg-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .reg-footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </div>
  );
}