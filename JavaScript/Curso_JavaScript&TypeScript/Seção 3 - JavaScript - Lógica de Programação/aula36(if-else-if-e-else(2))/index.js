const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código} // if
// Se não faça isso {código} // else

/*
if (numero >= 0 && numero <= 5) {
	console.log('O número está entre 0 e 5.');
} else {
	console.log('O número NÃO está entre 0 e 5.');
}
*/

// console.log('O número NÃO está entre 0 e 5.'); // Independente. Vai rodar independente do if

/*
if (1 === 1) {
	console.log('LITERAL'); // Verdadeiro
}
*/

if (numero <= 10) {
	console.log('O número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
	console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
	console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
	console.log('O número está entre 9 e 11.');
} else {
	console.log('O número não está entre 0 e 11.');
}

/*
if (numero >= 0 && numero <= 5) {
	console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
	console.log('O número está entre 6 e 8.');
} else if (1 === 1) {
	console.log('LITERAL'); // Verdadeiro // Vai desestruturar todo o código
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
	console.log('O número está entre 9 e 11.');
} else {
	console.log('O número não está entre 0 e 11.');
}
*/

console.log('...Aqui vai o resto do código.'); // Independente. Vai rodar independente do if