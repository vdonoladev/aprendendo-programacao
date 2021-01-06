<?php
// Passagem de valor por referência de memória.

$a = 10;

function trocaValor($a) {
	$a += 50;
	return $a;
}

echo $a;

echo "<br><br><br><br>";

echo trocaValor($a);

echo "<br><br><br><br>";

echo $a;

echo "<br><br><br><br>";

$b = 10;

// & - Passagem de valor por referência de memória.
function referencia(&$b) {
	$b *= 50;
	return $b;
}

echo referencia($b);

?>