//const nome = 'Luiz Otávio';

/* for (let i = 0; i < nome.length; i++) {
	console.log(nome[i]);
} */

/* for (let i in nome) {
	console.log(nome[i]);
} */

/* for (let valor of nome) {
	console.log(valor);
} */

// ----------------------------------------------------------

// const nomes = ['Luiz', 'Otávio', 'Henrique'];

/* for (let valor of nomes) {
	console.log(valor);
} */

/* nomes.forEach(function(valor, indice, array) {
	console.log(valor, indice, array);
}); */

// ------------------------------------------------------------

const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Otávio'
};

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (strings, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
