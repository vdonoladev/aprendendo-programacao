<?php
// Escopo de variáveis.

// Aqui é um escopo global.

$nome = "Richard";

function teste() {
	// Aqui é um escopo.
	// Usar a variável que está fora desse escopo.
	global $nome;
	echo $nome;
}

function teste2() {
	// Aqui é outro escopo.
	$nome = "outro";
	echo $nome . ", agora no teste 2.";
}

teste();

echo "<br><br><br><br>";

teste2();

?>