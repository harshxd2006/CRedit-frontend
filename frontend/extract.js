const fs = require('fs');

const code = fs.readFileSync('src/pages/ApplyforLoan.jsx', 'utf8');

// The pattern to match `if (currentStep === X) return ( ... );`
// Since JSX can contain `);`, we need to find the next `if (currentStep ===` or the end of the `renderStep` function.
const splits = code.split(/if \((?:currentStep === \d+|currentStep \s*===\s* \d+)\) return \(/);

console.log(`Found ${splits.length} parts`);

// Just check the sizes of these parts.
for (let i = 0; i < splits.length; i++) {
    console.log(`Part ${i}: ${splits[i].length} chars`);
}
