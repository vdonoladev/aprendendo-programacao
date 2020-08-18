// Curso JavaScript - Aula 3 - Utilizando Axios
axios.get('https://api.github.com/users/vdonoladev')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});