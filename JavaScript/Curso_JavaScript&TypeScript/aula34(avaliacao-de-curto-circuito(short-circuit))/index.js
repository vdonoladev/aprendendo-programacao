/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> true "vai retornar o valor verdadeiro"

FALSY 
false -> literal 
0
'' "" ``
null / undefined
NaN
*/
// console.log('Víctor Donola' && 0 && 'Rebeca'); // 0
// console.log('Víctor Donola' && true && 'Rebeca'); // Rebeca
// console.log('Víctor Donola' && true && NaN); // NaN
// console.log('Víctor' && 'Rebeca'); // Rebeca
// console.log('Víctor' && '' && 'Rebeca'); // string vazia
// console.log('Víctor' && undefined && 'Rebeca'); // undefined
// console.log('Víctor' && NaN && 'Rebeca'); // NaN

// function falaOi() {
// 	return 'Oi';
// }

// const vaiExecutar = false;
// let vaiExecutar;
// const vaiExecutar = 'Joãozinho';

// vaiExecutar && falaOi();
// console.log(vaiExecutar && falaOi()); // false
// console.log(vaiExecutar && falaOi()); // undefined
// console.log(vaiExecutar && falaOi()); // Oi

// console.log(00 || false || null || 'Víctor Donola' || true); // Víctor Donola

// const corUsuario = null;
// const corUsuario = 'vermelho'
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao); // preto
// console.log(corPadrao); // vermelho

const a = 0;
const b = null;
// const c = 'false'; // AQUI
const c = false;
const d = false;
const e = NaN;

// console.log(a || b || c || d || e); // false
// console.log(a || b || c || d || e); // NaN
console.log(a || b || 'Joãozinho' || c || d || e); // Joãozinho