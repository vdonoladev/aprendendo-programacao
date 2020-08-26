const numero = Number(prompt('Digite um número:'));
document.body.innerHTML = `Seu número é: ${numero}. <br><br>`;
document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}. <br><br>`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}. <br><br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}. <br><br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}. <br><br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}. <br><br>`;
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}. <br><br>`;