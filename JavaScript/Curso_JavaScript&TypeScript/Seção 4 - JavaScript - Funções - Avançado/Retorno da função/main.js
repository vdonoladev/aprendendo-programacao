// return 
// Retorna um valor
// Termina a função

/*
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 5));
*/

/*
document.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
}); // Não retorna valor, mas faz alguma coisa
*/

/*
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
  nome: 'Víctor',
  sobrenome: 'Donola'
};

console.log(typeof p1);
console.log(typeof p2);
*/

/*
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));
*/

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// Podemos retornar qualquer coisa em uma função
