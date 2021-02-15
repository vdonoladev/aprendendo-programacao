// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'Víctor'; // Não posso declarar uma constante sem inicializá-la
console.log(nome);
// nome = 'José'; // TypeError (Não podemos modificar o valor de uma const)

// + Soma
// - Subtração
// * Multiplicação
// / Divisão
// % Resto

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof primeiroNumero);

// Constantes não podem ser alteradas ao longo do código
