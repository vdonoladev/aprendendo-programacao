// Exercício 2
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories){
    for(repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
      renderRepositories(response.data);
    })
}