/*

// FUNCTIONS

function fn() {
  return "Code here";
}

const arrowFn = () => "Code here";
const arrowFn2 = () => {
  // Mais de uma expressão
  return "Code here";
};

// Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
// function controlFnExec(fnParam) {
//   return function(allowed) {
//     if (allowed) {
//       fnParam();
//     }
//   };
// }

// -------------------------------------------------------------------

// FUNCTION 2

(() => {
  this.name = "arrow function";

  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: "Nome no objeto de execução",
    getNameArrowFn,
    getName
  };

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})();

// -------------------------------------------------------------------

// ARRAY

const users = ["Guilherme", "Pedro", "Jennifer"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W")
};

const persons = [
  {
    name: "Guilherme",
    age: 26,
    gender: gender.MAN
  },
  {
    name: "Pedro",
    age: 43,
    gender: gender.MAN
  },
  {
    name: "Jennifer",
    age: 18,
    gender: gender.WOMAN
  }
];

// Retornar a quantidade de itens de um array
console.log("Itens: ", persons.length);

// Verificar se é array
console.log("A variável persons é um array:", Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
  console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("\nNova lista apenas com homens:", mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = "Introdução ao Javascript";
  return person;
});

console.log("\nPessoas com a adição do course:", personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log("\nSoma de idade das pessoas", totalAge);

// Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(
  "\nSoma de idades das pessoas que possuem idade par",
  totalEvenAges
);

// ------------------------------------------------------------------

Operadores

* Aritméticos
* Atribuição
* Comparação
* Condicional
* Lógicos
* Spread

// Módulo (%)
// Operador binário. Retorna o inteiro restante da divisão dos dois operandos.

12 % 5 // retorna 2

// Incremento (++) e Decremento (--)

++x
x++

const a = ++2 // 3
const b = 2++ // 2

--x
x--

// Negação (-) e Adição (+)

-3
+ "3"     // retorna 3
+true     // retorna 1
+false    // retorna 0
-true     // retorna -1

// Operador de exponenciação (**)

2 ** 3 // retorna 8
10 ** -1 // retorna 0.1

// Operador de agrupamento ()

2 * (3 + 2)

// Operador binário

operando1 operador operando2

1 + 2

// Operador unário

operando1 operador
operador operando1

x++
++x

// ------------------------------------------------------------------

// Atribuição

x = y

// Atribuição de adição

x = x + y // ou
x += y

// Atribuição de adição

x = x - y // ou
x -= y

// Atribuição de multiplicação

x = x * y // ou
x *= y

// Atribuição de divisão

x = x / y // ou
x /= y

// Atribuição de resto

x = x % y // ou
x %= y

// ------------------------------------------------------------------

// Comparação

// Igual (==)
// Retorna verdadeiro caso os operandos sejam iguais. -3 == var1
"3" == var1
3 == '3'

// Não igual (!=)
// Retorna verdadeiro'caso'os operandos não sejam' iguais.-var1i !=4
var2 != "3"

// Estritamente igual (===)
// Retorna verdadeiro caso'os operandos sejam'iguais e do mesmo tipo. Veja também Object.is e igualdade
3 === var1

// Estritamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
var1 !== "3"
3 !== '3'

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
var2 > vari
"12" > 2

// Maior que ou igual (>=)
// Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
var2 >= var1
var1 >= 3

// Menor que (<)
// Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"

// Menor que ou igual (<=)
// Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.
var1 <= var2
var2 <= 5

// ------------------------------------------------------------------

// Condicional

// Ternário
condicao ? valor1 : valor2

true ? 'foo' :  'bar' // Retorna 'foo'
false ? 'foo' : 'bar' // Retorna 'bar'

// ------------------------------------------------------------------

// Lógico

// AND lógico (&&)
exp1 && exp2

var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

// 0U lógico (||)

exp1 || exp2

var o1 = true || true;      // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 = true || false;     // t || f retorna true
var o4 = false || (3 ==4);  // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

// NOT lógico (!)

!exp1

var n1 = !true;     // !t retorna false
var n2 = !false;    // !f retorna true
var n3 = !"Gato";   // !t retorna false

*/