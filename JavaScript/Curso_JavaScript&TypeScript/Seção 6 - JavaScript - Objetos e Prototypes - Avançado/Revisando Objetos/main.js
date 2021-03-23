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