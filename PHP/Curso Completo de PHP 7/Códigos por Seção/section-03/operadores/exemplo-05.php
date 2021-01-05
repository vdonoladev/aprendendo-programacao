<?php
// Operador spaceship.

$a = 50;
$b = 35;

// Se $a for maior que $b, retorna 1.
var_dump($a <=> $b);

echo "<br><br><br><br>";

$a = 35;
$b = 35;

// Se $a for igual a $b, retorna 0.
var_dump($a <=> $b);

echo "<br><br><br><br>";

$a = 35;
$b = 50;

// Se $a for menor que $b, retorna -1.
var_dump($a <=> $b);

?>