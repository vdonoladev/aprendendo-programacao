<?php

/* Seção 3 - Conhecendo a Linguagem PHP

Aula 14 - Conhecendo os Tipos de Dados em PHP */
// Tipos Básicos

$nome = "Hcode"; // string
$site = 'www.hcode.com.br'; // string

$ano = 1990; // number
$salario = 5500.99; // float
$bloqueado = false; // boolean

///////////////////////////////////////////////

// Tipos Compostos

$frutas = array("abacaxi", "laranja", "manga"); // array

// echo $frutas[2];

$nascimento = new DateTime(); // objeto

// var_dump($nascimento);

///////////////////////////////////////////////

// Tipos Especiais

$arquivo = fopen("aula14(2).php", "r"); // resource

// var_dump($arquivo);

$nulo = NULL; // null

$nulo1 = ""; // Vazia

// Nulo é a ausência de valor.
// Vazio foi iniciado, ou seja, já tem um espaço reservado na memória para ele.

?>