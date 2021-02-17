// A função conhece o local onde ela foi declarada e o que está nos vizinhos (bolha)

const nome = 'Víctor';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}

usaFalaNome();