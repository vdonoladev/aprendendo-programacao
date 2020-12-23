/*

1. Declare uma variável de nome weight

2. Que tipo de dado é a variável acima?

3. Declare uma variável e atribua valores para cada um dos dados:
	* name: String
	* age: Number (integer)
	* stars: Number (float)
	* isSubscribed: Boolean

4. A variável student abaixo é de que tipo de dados?

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

4.2 Mostre no console a seguinte mensagem:
	<name> de idade <age> pesa <weight> kg.

Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

7. Coloque no console o valor da posição zero do Array acima

8. Crie um novo student e coloque na posição 1 do Array students

9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1

*/

// 1

let weight

// 2

console.log(typeof weight)

// 3

const person = {
	name: "Víctor",
	age: 22,
	stars: 10.6,
	isSubscribed: true
}

let name = "Víctor"
let age = "22"
let stars = 10.6
let isSubscribed = true

// 4

let student = {};

// 4.1

let student = {
	name: "Víctor",
	age: 22,
	stars: 10.6,
	isSubscribed: true
};

// 4.2

weight = 71

console.log(`${name} de idade ${age} pesa ${weight} kg.`)

// 5

let students = []

// 6

students = [
	student
]

console.log(students)

// 7

console.log(students[0])

// 8

const john = {
	name: "John",
	age: 23,
	weight: 74.8,
	isSubscribed: true
}

students[1] = john
console.log(students)

// 9

console.log(a)
var a = 1 // undefined