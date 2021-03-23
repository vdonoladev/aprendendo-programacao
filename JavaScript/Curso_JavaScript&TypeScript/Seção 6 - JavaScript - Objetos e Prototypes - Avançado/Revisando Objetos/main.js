const pessoa = {
	nome: 'Víctor',
	sobrenome: 'Donola Ferreira'
};

// Existem duas formas de acessar

// Notação de Ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Notação de Colchete
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

const chave = 'nome';
const chave1 = 'sobrenome';
console.log(pessoa[chave]);
console.log(pessoa[chave1]);

// --------------------------------------------------------

const pessoa1 = new Object();
pessoa1.nome = 'Víctor';
pessoa1.sobrenome = 'Donola Ferreira';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

// delete pessoa1.nome; // Apaga o nome

pessoa1.idade = 23;
pessoa1.falarNome = function() {
	return (`${this.nome} está falando seu nome.`)
};

// pessoa1.falarNome();

pessoa1.getDataNascimento = function() {
	const dataAtual = new Date();
	return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
	// console.log(chave);
	console.log(pessoa1[chave]);
}

// ---------------------------------------------------------

// Factory functions / Constructor functions / Classes

// Factory functions
function criaPessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		}
	};
}

const p1 = criaPessoa('Víctor', 'Donola Ferreira');
console.log(p1.nomeCompleto);

// Constructor functions
