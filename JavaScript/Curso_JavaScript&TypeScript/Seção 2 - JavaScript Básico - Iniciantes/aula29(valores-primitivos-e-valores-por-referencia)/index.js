/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados
 *
 * Referência (mutável) - array, object, function - passados por referência
 */
// PRIMITIVOS
/*          012345
let nome = 'Víctor';
console.log(nome[0], nome); */

/* let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); */

// REFERÊNCIA
/* let a = [1, 2, 3];
let b = [...a];
// let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c); */

const a = {
  nome: 'Víctor',
  sobrenome: 'Donola',
};

const b = { ...a };

// const b = a;

a.nome = 'João';
console.log(a);
console.log(b);
