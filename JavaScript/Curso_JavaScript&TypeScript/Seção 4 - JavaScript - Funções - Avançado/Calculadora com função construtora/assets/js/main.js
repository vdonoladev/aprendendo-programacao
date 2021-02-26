function Calculadora() {
	this.display = document.querySelector('.display');

	this.capturaCliques = () => {
		document.addEventListener('click', event => {
			const el = event.target;
			if (el.classList.contains('btn-num')) this.addNumDisplay(el);
			if (el.classList.contains('btn-clear')) this.clear();
			if (el.classList.contains('btn-del')) this.del();
			if (el.classList.contains('btn-eq')) this.realizaConta();
		});
	};

	this.realizaConta = () => {
		try {
			const conta = eval(this.display.value);

			if(!conta) {
				alert("Conta inválida!");
				return;
			}

			this.display.value = conta;
		} catch(e) {
			alert("Conta inválida!");
			return;
		}
	};

	this.addNumDisplay = el => {
		this.display.value += el.innerText;
	};

	this.clear = () => {
		this.display.value = "";
	}

	this.inicia = () => {
		this.capturaCliques();
		this.capturaEnter();
	};

	this.capturaEnter = () => {
		this.display.addEventListener("keypress", e => {
			if (e.keyCode !== 13) return;
			this.realizaConta();
		})
	}

	this.del = () => {
		this.display.value = this.display.value.slice(0, -1);
	}
}

const calculadora = new Calculadora();
calculadora.inicia();