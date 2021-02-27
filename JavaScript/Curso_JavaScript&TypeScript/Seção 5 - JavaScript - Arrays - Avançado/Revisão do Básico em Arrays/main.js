// Valor por referência
// const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"]; // Array literal
// const removido = nomes.pop(); // Retorna o elemento removido
// const removido = nomes.shift(); // Deslocar os outros índices do Array e remove do começo
// const novo = [...nomes]; // novo foi alterado, mas o nomes permanece intacto
// nomes.push("João"); // Adiciona qualquer coisa no final do Array
// nomes.unshift("João"); // Adicionar elemetos no ínicio do Array
// nomes.unshift("Wallace"); // Adiciona elementos no início do Array
// const nomes = new Array("Eduardo", "Maria", "Joana"); // Construtor do Array
// delete nomes[2]; // Remover o elemento do array sem alterar o índice
// novo.pop(); Remove o último elemento do array e é capaz de retornar
// console.log(nomes);
// console.log(nomes.length);
// console.log(removido);
// console.log(novo);
// nomes.pop(); // Remove o último elemento do array
// const novo = nomes.slice(1, 3); // Fatiar o meu Array
// console.log(novo); // ["Maria", "Joana"]
// const novo = nomes.slice(1, -1);
// console.log(novo); // ["Maria", "Joana", "Wallace"]
// console.log(nomes);
// const nome = "Víctor Donola Ferreira";
// const nomes = nome.split(" "); // Separar String em um Array
// console.log(nomes); // ["Víctor", "Donola", "Ferreira"]

const nomes = ["Víctor", "Donola", "Ferreira"];
const nome = nomes.join(" "); // Fazer o Array se transformar em uma String
console.log(nome); // Víctor Donola Ferreira