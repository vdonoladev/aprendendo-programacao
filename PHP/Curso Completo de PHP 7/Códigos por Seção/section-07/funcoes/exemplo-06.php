<?php
// Difereça entre a passagem de paramêtros por referência de memória e passagem de paramêtros por valor.

$pessoa = array(
	'nome'=>'Richard',
	'idade'=>16
);

foreach ($pessoa as &$value) {
	if (gettype($value) === 'integer') $value += 10;
	echo "$value <br>";
}

print_r($pessoa);

echo "<br><br><br><br>";

$pessoa2 = array(
	'nome'=>'Richard',
	'idade'=>16
);

foreach ($pessoa2 as $value) {
	if (gettype($value) === 'integer') $value += 20;
	echo "$value <br>";
}

print_r($pessoa2);

?>