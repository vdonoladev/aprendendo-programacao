// Podemos redeclarar variáveis quando utilizamos var
var nome = 'Víctor';
console.log(nome);
var nome = 'Rebeca';
console.log(nome);

// Podemos utilizar só o nome da variável para declará-la
nome = 'Víctor'; // NÃO FAÇA ISSO
console.log(nome);

// Não crie variáveis sem const ou let - REGRA

// Não podemos redeclarar variáveis quando utilizamos let - SyntaxError
let nome = 'Débora';
let nome = 'Davi;';

// Esqueça o var, não use-o!
