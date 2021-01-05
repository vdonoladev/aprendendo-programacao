<?php
// Constante com array.

define("BANCO_DE_DADOS",[
	'127.0.0.1',
	'root',
	'password',
	'nome_banco'
]);

print_r(BANCO_DE_DADOS);

echo "<br><br><br><br>";

// Deixar sem case sensitive----------------------------------------------v
define("CONSTANTE", "2022 => 2 + 0 + 2 + 2 = 6 => Hexa já é realidade.", true);

print_r(constante);

?>