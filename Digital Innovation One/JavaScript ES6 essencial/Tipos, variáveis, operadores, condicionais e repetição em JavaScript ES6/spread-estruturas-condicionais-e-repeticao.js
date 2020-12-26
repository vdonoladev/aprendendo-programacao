/*

// Spread ...

var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];

function fn(x, y, z){}
var args = [0, 1, 2];
fn(...args);

// -------------------------------------------------------------------

// Outros unários

// Deletar algo
delete something;

// Determinar tipo
typeof something;

// -------------------------------------------------------------------

// Outros binários

// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;                // retorna true
3 in arvores;                // retorna true
6 in arvores;                // retorna false
"cedro" in arvores;          //  retorna false (você deve especificar o número do índice, não o valor naquele índice)
"length" in arvores;         // retorna true (length' é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;                // retorna true
var minhaString = new String("coral");
"length" in minhaString;     // retorna true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;         // retorna true
"modelo" in meucarro;        // retorna'true

// instaceof
objeto instanceof tipoobjeto

var dia = new Date(2018, 12, 17);
if (dia instanceof Date) {
// code here
}

// -------------------------------------------------------------------

Estruturas condicionais e repetição

// If, else


// if (condition){
    // code
// }


const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é par.`);
    }else{
        console.log(`O número ${item} é ímpar.`);
    }
});

// -- OUTPUT --

// O número 0 é par.
// O número 1 é ímpar.
// O número 2 é par.
// O número 3 é ímpar.
// O número 4 é par.
// O número 5 é ímpar.

// -------------------------------------------------------------------

Else if

// if (condition){
    // code
// } else if(condition){
    // code
// }

const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }else if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }else if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nif');
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisível por 2.`);
    }
    if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }
    if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});


// -- OUTPUT --

// else if
// O número 2 é divisível por 2.
// O número 3 é divisível por 3.
// O número 4 é divisível por 2.
// O número 5 é divisível por 5.
// O número 6 é divisível por 2.
// O número 8 é divisível por 2.
// O número 10 é divisível por 2.
// O número 15 é divisível por 3.

// if
// O número 2 é divisível por 2.
// O número 3 é divisível por 3.
// O número 4 é divisível por 2.
// O número 5 é divisível por 5.
// O número 6 é divisível por 2.
// O número 6 é divisível por 3.
// O número 8 é divisível por 2.
// O número 10 é divisível por 2.
// O número 10 é divisível por 5.
// O número 15 é divisível por 3.
// O número 15 é divisível por 5.

// ------------------------------------------------------------------

Switch

switch (expressao){
    case valor1:
        [break;]
    case valor2:
        [break;]
    default:
        [break;]
}

const fruit = 'banana';

switch(fruit){
    case 'banana':
        console.log('R$3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$2,00 / kg');
        break;  
    default:
        console.log('Produto não existe no estoque');
        break;     
}


-- OUTPUT --

R$3,00 / kg

// -------------------------------------------------------------------------------------------------

*/
