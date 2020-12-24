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

// hoisting de variáveis

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

// hoisting de funções

function fn() {
	log(`Hoisting de função`);

	function log(value) {
		console.log(value);
	}
}

fn();

// function fn() {
// 	function log(value) {
// 		console.log(value);
// 	}

// 	log('Hoisting de função');
// }

// ------------------------------------------------------------------

Imutabilidade

Um conceito de linguagem funcional.

// imutabilidade

const user = {
	name: "Guilherme",
	lastName: "Cabrini da Silva"
};

function getUserWithFullName(user) {
	return {
		...user,
		fullName: `${user.name} ${user.lastName}`
	}
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

// imutabilidade 2

const students = [
	{
		name: 'Grace',
		grade: 7
	},
	{
		name: 'Jennifer',
		grade: 4
	},
	{
		name: 'Paul',
		grade: 10
	}
];

function getApprovedStudents(studentsList) {
	return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovador:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);

// ------------------------------------------------------------------

Tipos e variáveis

* var

* let

* const

// variáveis

var nameVar = 'Guilherme';
let nameLet = 'Guilherme';
const nameConst = 'Guilherme';

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

// variáveis 2

var test = 'example';

{
	() => {
		console.log(`Valor dentro da função "${test}"`);

		if (true) {
			var test = 'example';
			console.log(`Valor dentro do if "${test}"`);
		}

		console.log(`Valor após a execução do if "${test}"`);
	}
}();

// variáveis 3

{() => {
	let test = 'valor função';
	console.log(`Valor dentro da função "${test}"`);

	if (true) {
		let test = 'valor if';
		console.log(`Valor dentro do if "${test}"`);
	}

	console.log(`Valor após a eecução do if "${test}"`);
}}();

// variáveis 4

{() => {
	const test = 'valor função';
	console.log(`Valor dentro da função "${test}"`);

	if (true) {
		const test = 'valor if';
		console.log(`Valor dentro do if "${test}"`);
	}

	console.log(`Valor após a eecução do if "${test}"`);
}}();

*/