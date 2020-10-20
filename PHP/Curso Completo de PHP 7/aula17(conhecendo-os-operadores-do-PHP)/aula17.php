<?php

/* Seção 3 - Conhecendo a Linguagem PHP
Aula 17 - Conhecendo os Operadores do PHP */

$nome = "Hcode"; //igual

echo $nome . " Cursos <br>"; // concatenando

$nome .= " Treinamentos <br>"; // igual + concatenar

echo $nome;

// -----------------------------------------------------------

$valorTotal = 0;

$valorTotal += 100;

$valorTotal += 25; 

echo $valorTotal; // 125

echo "<br>";

$valorTotal -= 10; 

echo $valorTotal; // 115

echo "<br>";

$valorTotal *= .9; // desconto em porcentagem

echo $valorTotal; // 103.5

echo "<br>";

// -----------------------------------------------------------

$a = 10;
$b = 2;

echo $a + $b; // 12

echo "<br>";

echo $a - $b; // 8

echo "<br>";

echo $a * $b; // 20

echo "<br>";

echo $a / $b; // 5

echo "<br>";

echo $a % $b; // 0 // Resto

echo "<br>";

echo $a ** $b; // 100 // Potenciação

echo "<br>";

// -----------------------------------------------------------

$c = 30;

$d = 55;

var_dump($c > $d); // c maior que d? // false

echo "<br>";

var_dump($c < $d); // c menor que d? // true

echo "<br>";

var_dump($c = $d); // um sinal de igual apenas, ele atribui valor // 55

echo "<br>";

var_dump($c == $d); // comparação // true 

echo "<br>";

var_dump($c === $d); // compara o tipo // true

echo "<br>";

var_dump($c != $d); // diferente // false

echo "<br>";

var_dump($c !== $d); // diferente/tipo // false

echo "<br>";

// -----------------------------------------------------------

$e = 50;

$f = 35;

var_dump($e <=> $f); // comparação // 1 // se o E for maior, traz 1. se os dois forem iguais, traz 0. Se o F for maior, traz -1.

echo "<br>";

// -----------------------------------------------------------

$g = NULL;

$h = NULL;

$i = 10;

echo $g ?? $h ?? $i; // comparação // mostra pra mim g, se for nulo mostra o h e se for nulo mostra o i // 10

echo "<br>";

$j = NULL;

$k = 8;

$l = 10;

echo $j ?? $k ?? $l; // comparação // mostra pra mim j, se for nulo mostra o k e se for nulo mostra o l // 8

echo "<br>";

// ---------------------------------------------------------

$m = 10;

echo $m++; // acrescenta (soma) mais 1

echo "<br>";

echo $m; // 11

echo "<br>";

echo ++$m; // mostra e acrescenta (soma) mais 1 // 12

echo "<br>";

echo --$m; // 11 // mostra e diminui (subtrai) menos 1

echo "<br>";

echo $m--; // diminui (subtrai) menos 1

echo "<br>";

echo $m; // 10

echo "<br>";

// ----------------------------------------------------------

$resultado = 10 + 3 / 2;

echo $resultado; // 11.5

echo "<br>";

$resultado = (10 + 3) / 2;

echo $resultado; // 6.5

echo "<br>";

$outroResultado = (10 + 3) / 2 > 5 && 10 + 5 < 3;

var_dump($outroResultado); // false

echo "<br>";

$outroResultado2 = (10 + 3) / 2 > 5 && 10 + 5 < 20;

var_dump($outroResultado2); // true

echo "<br>";
?>