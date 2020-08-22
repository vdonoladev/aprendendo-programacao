/*
Víctor tem 22 anos, pesa 63 kg
tem 1.74 de altura e seu IMC é de 25.925925925925924
Víctor nasceu em 1998;
*/

const nome = 'Víctor';
const sobrenome = 'Donola Ferreira';
const idade = 22;
const peso = 63;
const alturaEmM = 1.74;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
