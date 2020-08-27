/* const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra' // Error
console.log(array); */

// [] = Array
// {} = Object (Objeto)

/* const pessoa1 = {
  nome: 'Víctor',
  sobrenome: 'Donola',
  idade: 22,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 55,
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade); */

/* const nome1 = 'Víctor';
const sobrenome1 = 'Donola';
const idade1 = 22;

const nome2 = 'Luiz';
const sobrenome2 = 'Miranda';
const idade2 = 55; */

/* function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criaPessoa('Víctor', 'Donola', 22);
console.log(pessoa1); 
console.log(pessoa1.nome); */

/* function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Víctor', 'Donola Ferreira', 22);
console.log(pessoa1); */

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  // fala() {
  //   console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  // },

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
