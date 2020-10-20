// ... rest | ... spread
/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);

console.log(resto); */

/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, , tres, , cinco, , sete, , nove] = numeros;

console.log(um, tres, cinco, sete, nove); */

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numeros[1][2]);

const [lista1, lista2, lista3] = numeros;

console.log(lista3);

const [, [, , seis]] = numeros;

console.log(seis);
