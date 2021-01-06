<?php
// Criando funções para o usuário.

// Toda função deve retornar um valor.
// Caso não retorne... é uma sub-rotina.

// Sub-rotina.
function ola() {
	echo "Olá mundo!<br>";
}

// Função.
function ola2() {
	return "Olá mundo!<br>";
}

ola();
echo ola2();

echo "<br><br><br><br>";

$frase = ola();
$frase2 = ola2();

echo strlen($frase);
echo "<br>";
echo strlen($frase2);

?>