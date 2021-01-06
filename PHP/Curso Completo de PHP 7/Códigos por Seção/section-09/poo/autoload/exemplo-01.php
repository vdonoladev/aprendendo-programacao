<?php
// Autoload.

// A função __autoload foi descontinuada no PHP 7.2
function __autoload($nomeClasse) {
	require_once("$nomeClasse.php");
}

$carro = new Teste();
$carro->funcaoTop();

?>