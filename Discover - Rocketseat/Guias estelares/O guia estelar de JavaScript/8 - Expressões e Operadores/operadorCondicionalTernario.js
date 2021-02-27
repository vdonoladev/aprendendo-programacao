// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top

let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? "Café TOP" : "Café RUIM";

console.log(niceBreakfast);

// Maior de 18

let age = 16;
const canDrive = age >= 18 ? "can drive" : "cannot drive";
console.log(canDrive);