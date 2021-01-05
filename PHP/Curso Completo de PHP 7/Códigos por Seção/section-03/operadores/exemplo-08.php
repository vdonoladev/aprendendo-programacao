<?php
// Precedência de operadores.

$a = 10 + 3 / 2;
echo $a;

echo "<br><br><br><br>";

// (10 + 3) é preferência
$b = (10 + 3) / 2;
echo $b;

echo "<br><br><br><br>";

// && e
$c = 10 + 3 / 2 > 5 && 10 + 5 < 3;
var_dump($c);

echo "<br><br><br><br>";

// || ou
$d = 10 + 3 / 2 > 5 || 10 + 5 < 3;
var_dump($d);

?>