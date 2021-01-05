<?php
// Tipo de dados primitivos.

// Variáveis do tipo básico:
// String.
$nome = "HCode";

// String.
$site = 'www.hcode.com.br';

// Inteiro.
$ano = 2001;

// Real - Float.
$salario = 0.99;

// Booleano - Verdadeiro ou falso.
$bloqueado = false;

// Variáveis compostas:
// Array.
$frutas = array("Abacaxi", "Laranja", "Manga");
// -----------------0----------1---------2
echo "$frutas[2] <br>";

// Objeto.
$nascimento = new DateTime();

/*
Imprimi o conteúdo de forma explanativa.
Como nossa variável é um objeto, ele imprimirá todos seus atributos.
*/
var_dump($nascimento);

echo "<br><br><br><br>";

// Variáveis especiais
// Resource
$arquivo = fopen("exemplo-03.php", "r");

var_dump($arquivo);

echo "<br><br><br><br>";

// Nulo
$nulo = null;

?>