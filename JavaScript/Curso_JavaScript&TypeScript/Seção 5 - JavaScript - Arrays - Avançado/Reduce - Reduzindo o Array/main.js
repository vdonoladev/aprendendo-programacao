const pessoas = [
	{ nome: "Luiz", idade: 62 },
	{ nome: "Maria", idade: 23 },
	{ nome: "Eduardo", idade: 55 },
	{ nome: "Letícia", idade: 10 },
	{ nome: "Rosana", idade: 64 },
	{ nome: "Wallace", idade: 63 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
	if(acumulador.idade > valor.idade) return acumulador;
	return valor;
});
console.log(maisVelha);