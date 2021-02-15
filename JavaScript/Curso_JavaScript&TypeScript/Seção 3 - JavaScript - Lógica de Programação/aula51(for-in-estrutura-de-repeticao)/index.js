// For in -> Lê os índices ou chaves do objeto

const pessoa = {
	nome: "Luiz",
	sobrenome: "Otávio",
	idade: 30
};

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

/* const chave = "nome"; */
/* console.log(pessoa[chave]); */

/* console.log(pessoa.nome); */
/* console.log(pessoa["nome"]); */

/* for (let i in pessoa) {
	console.log(i);
} */

///////////////////////////////////////////////////

/* const frutas = ["Pêra", "Maçã", "Uva"]; */

/* for (let indice in frutas) {
	console.log(frutas[indice]);
} */

/* for (let i in frutas) {
	console.log(i);
} */

/* for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
} */
