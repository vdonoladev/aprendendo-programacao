// Curso JavaScript - Aula 2 - Promises
var minhaPrimise = function() {
    return new Promise(function(resolve,reject) {
    	var xhr = new XMLHttpRequest();
    	xhr.open('GET', 'https://api.github.com/users/vdonoladev');
    	xhr.send(null);

    	xhr.onreadystatechange = function() {
    		if (xhr.readyState === 4) {
    			if (xhr.status === 200) {
    				resolve(JSON.parse(xhr.responseText));
    			} else {
    				reject('Erro na requisição');
    			}
    		}
    	}
    });
}

minhaPrimise()
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});