<?php
// Definir o tipo do paramêtro da função.

function soma(int ...$valores) {
	return array_sum($valores);
}

echo soma(2, 2);

echo "<br><br><br><br>";

echo soma(10, 25);

?>