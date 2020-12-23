/*

História e Conceitos

* JavaScript foi lançado em setembro de 1995
* Criado por Brendan Eich

ECMAScript

* É uma especificação da linguagem de programação que é padronizada pelo ECMA262 da ECMA International. Servindo como base para futuras implementações de outras linguagens script como, JavaScript, JScript e ActionScript.

TC39

* É o comitê responsável pela evoluçao do JavaScript. Seus colaboradores, em sua maioria, são integrantes dos browsers atuais, ou seja, Mozilla, Edge e Google Chrome. 
* Ele vem para manter e atualizar os padrões do ECMAScript. Identifica, desenvolve e mantém padrões para as bibliotecas que extendem as features do ECMAScript (ECMA402).
* Desenvolve testes para que as propostas possam ser testadas (ECMATR104).

Fluxo de proposta

* Stage 0: strawman
	Vai submeter um formulário com a idéia para evoluir o ECMAScript. Essas submissões devem ser feitas por um membro ou contribuidor registrado no TC39.
* Stage 1: proposal
	É nessa etapa que surge a proposta formal da funcionalidade. Terá um campeão e ele precisa ser membro do TC39.
* Stage 2: draft
	A primeira versão que vai entrar na especificação. Precisa ter uma descrição formal da sintaxe e semântica da funcionalidade.
* Stage 3: candidate
	Quase finalizada. Vai precisar de feedback de usuários para progredir.
* Stage 4: finished
	Pronta para ser incluída na especificação.

ES2018

* Operadores rest/spread
* Iteração assíncrona
* Promise.prototype.finally()

ES.Next

É uma especificação que possui futuras implementações. Não está disponível, mas se quiser testar, podemos usar o Babel

Babel

É um transpilador do JavaScript. Ele transforma determinada versão do JavaScript. Ele transforma uma determinada versão em uma especificação antiga.

Conceitos da Linguagem

* Linguagem interpretada

O código é executado de cima para baixo, e o resultado da execução é imediatamente retornado.

* Linguagem de tipagem fraca e dinâmica

Não há verificação em todas as operações do JavaScript.

// tipagem fraca

var meuNumero = 20;
var meuTexto = 'Exemplo';

console.log(meuNumero + meuTexto);

// tipagem dinâmica

var minhaVariavel = 30; // number

minhaVariavel = 'Texto'; // string

console.log(minhaVariavel); // Texto

// -------------------------------------------------------------------

TypeScript

É um superset do JavaScript.

Além dele conseguir adicionar tipos em tempo de desenvolvimento no JavaScript, ele adiciona funcionalidades que o JavaScript não tem por padrão.

Flow

É semelhante ao TypeScript em relação a checagem de tipos.

// -------------------------------------------------------------------

Conceitos da Linguagem

* Funções de primeira classe e de ordem maior

A função pode ser atribuída a uma variável, atribuída a uma estrutura de dados e pode ser passada por agumentos e retornada por outras funções

// funções

funtion getName() {
	return 'Guilherme Cabrini da Silva';
}

function logFn(fn) {
	console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);

// ------------------------------------------------------------------

Closure

É a capacidade de uma função lembrar do ambiente onde ela foi criada.

// closure

function init() {
	const exemplo = 'Essa variável';

	return function() {
		console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

		return function() {
			console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

			return function() {
				console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
			}
		}
	}
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

*/