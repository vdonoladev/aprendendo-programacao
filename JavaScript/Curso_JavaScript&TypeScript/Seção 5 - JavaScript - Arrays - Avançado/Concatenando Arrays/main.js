const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2); // Concatena a1 com a2

// ... rest -> ... spread
const a3 = [...a1, ...a2, ...[7, 8, 9]]; // Concatena a1 com a2
console.log(a3);