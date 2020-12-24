/*

Tipos e variáveis

* string
* number
* boolean
* null
* undefined
* Object
* Function
* Array

// STRINGS

// Retorna o tamanho de uma string
const textSize = "Texto".length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = "Texto".split("x");
console.log(
  "\nArray com as posiçòes separadas pelo delimitador: ",
  splittedText
);

// Busca por um valor e substitui por outro
const replacedText = "Texto".replace("Text", "txeT");
console.log("\nSubstituição de valor:", replacedText);

// Retorna a "fatia" de um valor
const lastChar = "Texto".slice(-1);
console.log("\nÚltima letra de uma string:", lastChar);

const allWithoutLastChar = "Texto".slice(0, -1);
console.log(
  "\nValor da string da primeira letra menos a última:",
  allWithoutLastChar
);

const secondToEnd = "Texto".slice(1);
console.log("\nValor da string da segunda letra até a última:", secondToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = "Texto".substr(0, 2);
console.log("\nAs duas primeiras letras são:", twoCharsBeforeFirstPos);

// -------------------------------------------------------------------

// NUMBER

const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log("Número transformado em string: ", typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais:", fixedTwoDecimals);

// Transforma uma string em float
console.log("\nString parseada para float: ", parseFloat("13.22"));

// Transforma uma string em int
console.log("\nString parseada para int:", parseInt("13.20"));

// -------------------------------------------------------------------

// NULL

const nullVariable = null;

console.log(typeof nullVariable);

// -------------------------------------------------------------------

// UNDEFINED

let undefinedVariable;

console.log("Tipo da variável:", typeof undefinedVariable);

// -------------------------------------------------------------------

// BOOLEAN

const isActive = true;

const isAuthenticated = false;

console.log("Tipo de variável:", typeof isActive);

// -------------------------------------------------------------------

// OBJECT

let user = {
  name: "Guilherme"
};

// Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user["name"] = "Outro nome 2";

const prop = "name";
user[prop] = "Outro nome 3";

// function getProp(prop) {
//     return user[prop];
// }

// Criando uma propriedade
user.lastName = "Cabrini da Silva";

// Deletando uma propriedade
delete user.name;

// ------------------------------------------------------------------

// OBJECT FUNÇÕES

const user = {
  name: "Guilherme",
  lastName: "Cabrini da Silva"
};

// Recupera as chaves do objeto
console.log("Propriedades do objeto user:", Object.keys(user));

// Retorna um array de arrasy contendo [ nome_propriedade, valor_propriedade ]
console.log("\nLista de propriedades e valores:", Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, { fullName: "Guilherme Cabrini da Silva" });

console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log(
  "\nRetorna um novo objeto mergeando dois ou mais objetos",
  Object.assign({}, user, { age: 26 })
);

// Previne todas as alterações em um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariável new Obj após as alterações:", newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: "Guilherme" };
Object.seal(person);

person.name = "Guilherme Cabrini";
delete person.name;
person.age = 26;

console.log("\nVariável person após as alterações:", person);

// ------------------------------------------------------------------

// SYMBOL

const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log("symbol1 é igual a symbol2", symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
  [nameSymbol1]: "Guilherme",
  [nameSymbol2]: "Outro nome",
  lastName: "Cabrini da Silva"
};

console.log(user);

// Symbols criam propriedades não enumerables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log("Propriedades do objeto user:", Object.keys(user));
console.log("Valores das propriedades do objeto user:", Object.values(user));

// Exibir symbols de um objeto
console.log(
  "Symbols registrados no objeto user:",
  Object.getOwnPropertySymbols(user)
);

// Acessando todas as propriedades do objeto
console.log("Todas propriedades do objeto user:", Reflect.ownKeys(user));

// Criar um enum
const directions = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT")
};

// ------------------------------------------------------------------

*/