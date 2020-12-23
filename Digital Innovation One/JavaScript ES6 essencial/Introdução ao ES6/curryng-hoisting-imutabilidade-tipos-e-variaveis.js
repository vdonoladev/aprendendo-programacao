/*

Currying

É bem comum em linguagens funcionais.

É a técnica de transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro vamos retornar uma nova função.

// currying

// função normal

function soma(a, b) {
	return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

// função utilizando o currying

function soma(a) {
	return function(b) {
		return a + b;
	}
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma3(5)); 

// -------------------------------------------------------------------

Hoisting

As declarações tanto de variáveis ou funções são elevadas ao escopo que ela está. 

Hoisting de variáveis e funções

Hositing de variável só eleva a criação da variável e não a sua atribuição

Já o hoisting de função é elevada ao topo como um todo

// hoisting

function fn() {
	console.log(text);

	var text = 'Exemplo';

	console.log(text);
}

fn();

// function fn() {
// 	var text;
// 	console.log(text);

// 	text = 'Exemplo';

// 	console.log(text);
// }



*/