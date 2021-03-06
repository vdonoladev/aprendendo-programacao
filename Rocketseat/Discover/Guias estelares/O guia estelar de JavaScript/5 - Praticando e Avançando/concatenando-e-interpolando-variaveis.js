// Variáveis e tipos de dados

// declaração or declaration
var name

// assignment or atribuição de valores
name = "Mayk"

// que tipo de dado foi colocado na variável
console.log(typeof name)

// ------------------------------------------

let age = 20 // number
let isHuman = true // boolean

// agrupamento de declarações
let age, isHuman

age = 20
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

// ------------------------------------------

// escrita de texto + variáveis

// concatenando valores
console.log("O " + name + " tem " + age + " anos")

// interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos`)