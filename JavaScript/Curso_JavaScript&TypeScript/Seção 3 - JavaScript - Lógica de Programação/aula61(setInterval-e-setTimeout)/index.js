function mostraHora() {
	let data = new Date();

	return data.toLocaleTimeString('pt-BR', {
		hour12: false
	});
}

const timer = setInterval(function () {
	console.log(mostraHora());
}, 1000); // configura um intervalo de tempo para que alguma função seja executada
// podemos colocar dentro de uma variável

setTimeout(function() {
	clearInterval(timer);
}, 3000); // executa uma vez e para

// exemplos

setTimeout(function() {
	console.log('Olá mundo!');
}, 5000);