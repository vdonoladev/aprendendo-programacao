<?php

/* Seção 3 - Conhecendo a Linguagem PHP

Aula 16 - Escopo de Variável */

$nome = "Glaucio";

function teste() {
	global $nome;
	echo $nome;
	echo "<br>";
}

function teste2() {
	$nome = "João";
	echo $nome." agora no teste2";
}

teste();
teste2();

// A função tem que estar no mesmo escopo para funcionar. Ou use o global para transformar a variável em global.

?>