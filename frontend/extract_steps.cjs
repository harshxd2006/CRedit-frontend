const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/ApplyforLoan.jsx');
let code = fs.readFileSync(filePath, 'utf8');

// Looking for exact blocks: if (currentStep === <num>) return (\n ... \n    );
// The regex finds the beginning of the return block to the matching `;\n`
const stepsRegex = /if \(currentStep === (\d+)\) return \([\s\S]*?(?=\n    if \(currentStep === \d+\) return |\n  \};)/g;
const matches = [...code.matchAll(stepsRegex)];

console.log(`Found ${matches.length} steps.`);

const stepFileNames = [
  'PersonalInfoStep',
  'EmploymentStep',
  'LoanDetailsStep',
  'DocumentsStep',
  'CreditReportStep',
  'LenderSelectionStep',
  'ReviewSubmitStep',
  'ApplicationTrackerStep',
  'OfferReviewStep',
  'ConfirmSignStep',
  'DisbursementTrackerStep'
];

const componentsDir = path.join(__dirname, 'src/components/loan-steps');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

let importStmts = [];
let renderSwitch = "    switch(currentStep) {\n";

matches.forEach((match, index) => {
  const stepNum = match[1];
  const stepContent = match[0];
  const componentName = stepFileNames[parseInt(stepNum, 10)];

  console.log(`Extracting Step ${stepNum} into ${componentName}.jsx`);

  // Extract the inner JSX returned by the step
  // stepContent looks like: `if (currentStep === 0) return (\n  <div... \n  </div>\n    );`
  const jsxStart = stepContent.indexOf('return (') + 'return ('.length;
  // last ); is at the very end
  const jsxEnd = stepContent.lastIndexOf(');');
  const jsxContent = stepContent.substring(jsxStart, jsxEnd).trim();

  const fileContent = `import React from 'react';

// Common styles and components can be passed or imported.
export default function ${componentName}({ 
  form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature, 
  showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
  otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
  otpRefs, handleOtpChange, handleOtpKeyDown,
  GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
}) {
  return (
    ${jsxContent}
  );
}
`;

  fs.writeFileSync(path.join(componentsDir, `${componentName}.jsx`), fileContent, 'utf8');

  importStmts.push(`import ${componentName} from '../components/loan-steps/${componentName}';`);

  renderSwitch += `      case ${parseInt(stepNum, 10)}: return <${componentName} {...stepProps} />;\n`;
});

renderSwitch += "      default: return null;\n    }";

const renderStepStr = `
  const stepProps = {
    form, set, empType, setEmpType, salaryMode, setSalaryMode, empNature, setEmpNature,
    showOtherLenders, setShowOtherLenders, handleStepChange, navigate, currentStep,
    otp, setOtp, aadhaarLast4, setAadhaarLast4, agreed, setAgreed, signed, setSigned,
    otpRefs, handleOtpChange, handleOtpKeyDown,
    GOLD, MIDNIGHT, inputStyle, labelStyle, selectStyle, Field
  };

  const renderStep = () => {
${renderSwitch}
  };
`;

// Now replace the content of renderStep inside the code.
// Instead of simple replacement, we find the index of `const renderStep = () => {`
// and the end index where `};` closes the function (just before `return (` of the main component)
const renderStepStartIndex = code.indexOf('const renderStep = () => {');
const mainReturnIndex = code.indexOf('  return (', renderStepStartIndex);
// find the last }; before the main return
const beforeMainReturn = code.substring(0, mainReturnIndex);
const renderStepEndIndex = beforeMainReturn.lastIndexOf('  };') + 4; // up to `};`

if (renderStepStartIndex > -1 && mainReturnIndex > -1) {
  const newCode = importStmts.join('\\n') + '\\n' +
    code.substring(0, renderStepStartIndex) +
    renderStepStr + '\\n' +
    code.substring(renderStepEndIndex);
  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log("Successfully replaced renderStep in ApplyforLoan.jsx");
} else {
  console.log("Could not find renderStep boundaries");
}
