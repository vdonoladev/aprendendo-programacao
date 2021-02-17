// IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = 'Donola';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Víctor'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(22, 76, 1.74);
