/*
Datas contadas a partir de 01/01/1970 - Marco Zero 
const data = new Date(); // Hora atual
const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix -3horas
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(0 + tresHoras + umDia); // 02/01/1970
const data = new Date(0 + tresHoras - umDia); // 31/12/1969
*/
/*
a = ano
m = mês
d = dia
h = hora
mn = minutos
sg = segundos
ms = milésimos de segundos
0 = Janeiro
11 - Dezembro
 */

/*
//                        a    m  d   h   mn  sg   ms
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // a, m, d, h, mn, sg, ms
//                      a   m  d  h  mn sg  ms
const data = new Date('2019-04-20 20:15:59.100'); // a, m, d, h, mn, sg, ms
// const data = new Date('2019-04-20T20:20:59.100');
// const data = new Date('1998-03-31');
console.log('Dia', data.getDate()); // Dia
console.log('Mês', data.getMonth()); // Mẽs // Mês começa do zero (0)
console.log('Ano', data.getFullYear()); // Ano
console.log('Hora', data.getHours()); // Hora
console.log('Min', data.getMinutes()); // Minutos
console.log('Seg', data.getSeconds()); // Segundos
console.log('ms', data.getMilliseconds()); // Milésimos de Segundos
console.log('Dia semana', data.getDay()); // Dia da Semana // 0 = Domingo, 6 = Sábado
console.log(data.toString());
// const data = new Date(1599782614401);
console.log(Date.now()); // Contado em milésimos de segundos, desde o marco zero
*/

function zeroAEsquerda (num) {
	return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
	// console.log(data);
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const minuto = zeroAEsquerda(data.getMinutes());
	const segundo = zeroAEsquerda(data.getSeconds());

	return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);