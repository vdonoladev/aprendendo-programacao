// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	let estoquePrivado = estoque;
	Object.defineProperty(this, "estoque", {
		enumerable: true,
		configurable: true,
		get: function () {
			return estoquePrivado;
		},
		set: function (valor) {
			if (typeof valor !== "number") {
				throw new TypeError("Mensagem");
			}

			estoquePrivado = valor;
		},
	});
}

function criaProduto(nome) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			valor = valor.replace("coisa.", "");
		},
	};
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(p1.estoque);
const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa.";
console.log(p2.nome);
