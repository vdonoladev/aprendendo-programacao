// Relacionado ao escopo léxico

// Global
function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Víctor');
const funcao2 = retornaFuncao('João');
console.dir(funcao); // essa funcão (funcao) tem acesso a 3 escopos
console.dir(funcao2);

// Closure = quando a gente declara a função e não vai mais mudar

console.log(funcao(), funcao2());

// Closure é a habilidade que a função tem em acessar o seu escopo léxico