// Curso JavaScript - Aula 1 - Requisições AJAX
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/vdonoladev');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}