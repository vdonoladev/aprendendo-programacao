// ? Verdadeiro
// : Falso
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
// 	console.log('Usuário VIP');
// } else {
// 	console.log('Usuário normal');
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

// const corUsuario = null;
const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);