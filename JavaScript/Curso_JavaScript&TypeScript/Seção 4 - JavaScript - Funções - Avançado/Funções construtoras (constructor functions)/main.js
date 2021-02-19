// Função construtora -> Retorna objetos
// Função fabrica -> Fabrica objetos

// Construtora -> Pessoa (Começa com letra maiúscula)

function Pessoa(nome, sobrenome) {
	// Atributos ou métodos privados
	const ID = 123456;
	const metodoInterno = function() {};

	// Atributos ou métodos públicos
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.metodo = function() {
		console.log(this.nome + ': sou um método');
	};
}

const p1 = new Pessoa('Víctor', 'Donola');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(typeof p1);
p1.metodo();