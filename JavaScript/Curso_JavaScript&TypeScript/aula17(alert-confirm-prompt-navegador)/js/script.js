/* alert('Mensagem'); // Não existe no Node, só no console do navegador. Atalho para o window.alert();

window.alert('Mensagem'); // Não existe no Node, só no console do navegador.

confirm('Deseja realmente apagar?'); // Cancel ou Ok. Caso o usuário clique em Cancel, vai retornar um valor boolean false. Caso o usuário clique em Ok, vai retornar um valor boolean true. Não existe no Node, só no console do navegador. Atalho para window.confirm();

window.confirm('Deseja realmente apagar?'); // Cancel ou Ok. Caso o usuário clique em Cancel, vai retornar um valor boolean false. Caso o usuário clique em Ok, vai retornar um valor boolean true. Não existe no Node, só no console do navegador.

prompt('Digite o seu nome: '); // O usuário pode digitar alguma coisa e retorna o que o usuário digitou. Não existe no Node, só no console do navegador. Atalho para window.prompt();

window.prompt('Digite o seu nome: '); // O usuário pode digitar alguma coisa e retorna o que o usuário digitou. Não existe no Node, só no console do navegador.

const confirma = confirm('Realmente deseja apagar?'); // undefined
console.log(confirma);
confirma; // atalho no navegador

let confirmar = confirm('Qualquer mensagem');
console.log(confirmar);
confirmar; // atalho no navegador

let num1 = prompt('Digite um número:'); // "500"
console.log(num1);
num1; // atalho no navegador

let num2 = prompt('Digite outro número'); // "10"
console.log(num2);
num2; // atalho no navegador

num1 + num2; // 50010 // junta os dois valores, não faz a soma (no console do navegador)
// O que o usuário digitou é retornado na forma de string

typeof num1; // "string"
typeof num2; // "string"
// Tudo o que é retornado pela função prompt é uma string.

num1 = parseFloat(num1); // 500
num2 = parseFloat(num2); // 10

typeof num1; // "number"
typeof num2; // "number"

num1 + num2; // 510 */

// EXERCÍCIO
let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

const resultado = parseFloat(num1) + parseFloat(num2);

alert('O resultado da sua conta foi ' + resultado);
