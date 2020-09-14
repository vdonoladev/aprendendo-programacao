function getDiaSemanaTexto (diaSemana) {
	let diaSemanaTexto;

	switch (diaSemana) {
	case 0:
		diaSemanaTexto = 'Domingo';
		return diaSemanaTexto;
		// break;
	case 1:
		diaSemanaTexto = 'Segunda-Feira';
		return diaSemanaTexto;
		// break;
	case 2:
		diaSemanaTexto = 'Terça-Feira';
		return diaSemanaTexto;
		// break;
	case 3:
		diaSemanaTexto = 'Quarta-Feira';
		return diaSemanaTexto;
		// break;
	case 4:
		diaSemanaTexto = 'Quinta-Feira';
		return diaSemanaTexto;
		// break;
	case 5:
		diaSemanaTexto = 'Sexta-Feira';
		return diaSemanaTexto;
		// break;
	case 6:
		diaSemanaTexto = 'Sábado';
		return diaSemanaTexto;
		// break;
	default:
		diaSemanaTexto = '';
		return diaSemanaTexto;
		// break;
	}
}

// const data = new Date();
const data = new Date('1987-04-21 00:00:00');
// const diaSemana = data.getDay();
const diaSemana = data.getDay();
// diaSemana = 7;
// let diaSemanaTexto;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// switch (diaSemana) {
// case 0:
// 	diaSemanaTexto = 'Domingo';
// 	break;
// case 1:
// 	diaSemanaTexto = 'Segunda-Feira';
// 	break;
// case 2:
// 	diaSemanaTexto = 'Terça-Feira';
// 	break;
// case 3:
// 	diaSemanaTexto = 'Quarta-Feira';
// 	break;
// case 4:
// 	diaSemanaTexto = 'Quinta-Feira';
// 	break;
// case 5:
// 	diaSemanaTexto = 'Sexta-Feira';
// 	break;
// case 6:
// 	diaSemanaTexto = 'Sábado';
// 	break;
// default:
// 	diaSemanaTexto = '';
// 	// break;
// }

// if (diaSemana === 0) {
// 	diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
// 	diaSemanaTexto = 'Segunda-Feira';
// } else if (diaSemana === 2) {
// 	diaSemanaTexto = 'Terça-Feira';
// } else if (diaSemana === 3) {
// 	diaSemanaTexto = 'Quarta-Feira';
// } else if (diaSemana === 4) {
// 	diaSemanaTexto = 'Quinta-Feira';
// } else if (diaSemana === 5) {
// 	diaSemanaTexto = 'Sexta-Feira';
// } else if (diaSemana === 6) {
// 	diaSemanaTexto = 'Sábado';
// } else {
// 	diaSemanaTexto = '';
// }

console.log(diaSemana, diaSemanaTexto);