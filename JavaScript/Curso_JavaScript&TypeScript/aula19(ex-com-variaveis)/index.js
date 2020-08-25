let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varD = 'A'; // A

console.log(varA, varB, varC); // A B C

varA = varB;
console.log(varA); // B

varB = varC;
console.log(varB); // C

varC = varD;
console.log(varC); // A

console.log(varA, varB, varC); // B C A
