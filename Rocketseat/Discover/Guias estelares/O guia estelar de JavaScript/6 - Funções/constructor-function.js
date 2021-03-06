/*

	Function() constructor

	* expressão new
	* criar um novo objeto
	* this keyword

*/

function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + " está andando"
	}
}

const victor = new Person("Víctor")
const joao = new Person("João")

console.log(joao.walk())
console.log(victor.walk())