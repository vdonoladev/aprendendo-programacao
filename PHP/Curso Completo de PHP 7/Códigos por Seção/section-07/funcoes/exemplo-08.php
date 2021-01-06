<?php
// Definir tipo de retorno da função.

function soma(int ...$valores):string {
	return array_sum($valores);
}

var_dump(soma(2, 2));

echo "<br><br><br><br>";

var_dump(soma(10, 25));

?>