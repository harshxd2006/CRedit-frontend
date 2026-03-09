import { useState } from "react";

const MIDNIGHT = "#11425D";

const faqData = [
  { id: 1,  question: "Who can apply for a loan on CreditFlow?",             answer: "Anyone who is an Indian citizen above 18 years of age with a valid PAN card, Aadhaar card, and a bank account with at least 3 months of salary history can apply. We specifically help people who are applying for a loan for the first time and have no prior credit history." },
  { id: 2,  question: "I have never taken a loan before. Can I still apply?", answer: "Yes. CreditFlow is built specifically for people with no credit history. Our NTC scoring model evaluates your application based on your income, employment stability, and banking behaviour rather than your credit score." },
  { id: 4,  question: "What documents do I need to apply?",                  answer: "You only need your PAN card number and Aadhaar card number for identity verification, and your last 6 months bank statement in PDF format. No physical documents or branch visits required." },
  { id: 5,  question: "How long does the application process take?",         answer: "The entire application form takes about 10 minutes to complete. Once submitted, you will typically receive a decision from a lender within 24 to 48 hours." },
  { id: 9,  question: "How much loan can I get?",                            answer: "Loan amounts depend on your income, employment stability, and banking behaviour as assessed by our model. You can apply for amounts ranging from 10,000 rupees to 5 lakh rupees." },
  { id: 10, question: "What is the interest rate?",                          answer: "Interest rates vary depending on the lender and your credit profile. Rates typically range from 12 percent to 36 percent per annum. You will see the exact rate offered to you in your loan report before you select a lender." },
  { id: 13, question: "Is my data safe with CreditFlow?",                    answer: "Yes. We follow RBI Digital Lending guidelines and the Digital Personal Data Protection Act 2023. Your data is encrypted, never sold to third parties, and used only for loan processing purposes. You can request deletion of your data at any time." },
  { id: 19, question: "Does CreditFlow itself give the loan?",               answer: "No. CreditFlow is a loan service provider platform. We assess your profile and connect you with the most suitable lender from our partner network. The loan is disbursed directly by the lender to your bank account." },
  { id: 20, question: "Are there any charges for using CreditFlow?",         answer: "CreditFlow is completely free for borrowers. We do not charge any fees for using our platform or applying for a loan. Lenders may charge processing fees which will be clearly disclosed to you before you accept any offer." },
  { id: 15, question: "How do I reset my MPIN if I forget it?",              answer: "You can reset your MPIN from the login screen by clicking Forgot MPIN. We will send an OTP to your registered mobile number. After verifying the OTP you can set a new MPIN." },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "56px 40px 64px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: "#0f172a", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
            Got questions? We've got answers.
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Everything you need to know about CreditFlow, loan applications, and your data security.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} style={{ border: isOpen ? `1.5px solid ${MIDNIGHT}` : "1px solid #e2e8f0", borderRadius: 14, background: isOpen ? "rgba(17,66,93,.03)" : "#fff", transition: "all .2s", overflow: "hidden" }}>
                <button onClick={() => toggle(faq.id)} style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'Inter', sans-serif" }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: isOpen ? MIDNIGHT : "#0f172a", margin: 0, lineHeight: 1.5, flex: 1 }}>{faq.question}</p>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: MIDNIGHT, flexShrink: 0, marginTop: 2, transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>expand_more</span>
                </button>
                <div style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height .3s ease, opacity .25s ease" }}>
                  <div style={{ padding: "0 20px 18px", fontSize: 14, color: "#475569", lineHeight: 1.8 }}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

