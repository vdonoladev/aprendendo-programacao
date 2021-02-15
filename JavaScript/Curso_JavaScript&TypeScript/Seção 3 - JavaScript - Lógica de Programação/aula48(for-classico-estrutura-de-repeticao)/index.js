// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index

/* for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
} */

/* for (let i = 0; i <= 50; i += 10) {
  console.log(`Linha ${i}`);
} */

/* for (let i = -50; i <= 50; i += 10) {
  console.log(`Linha ${i}`);
} */

/* for (let i = 100; i >= 0; i -= 10) {
  console.log(`Linha ${i}`);
} */

/* for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
} */

const frutas = [
  'Maçã',
  'Pêra',
  'Uva',
  'Laranja',
  'Banana',
  'Mexirica',
  'Manga',
  'Morango',
  'Maracujá',
  'Melancia',
  'Melão',
];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
