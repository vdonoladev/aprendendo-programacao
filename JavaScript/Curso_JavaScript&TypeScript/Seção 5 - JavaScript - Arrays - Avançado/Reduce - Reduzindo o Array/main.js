// 1 - Some todos os números (Reduce)
// 2 - Retorne um array com os pares (Filter)
// 3 - Retorna um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
	console.log(acumulador);
}, 0);