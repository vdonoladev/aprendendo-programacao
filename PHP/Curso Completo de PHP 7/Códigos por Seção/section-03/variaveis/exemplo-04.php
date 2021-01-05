<?php
// Variáveis pré-definidas ou arrays superglobais.

// Array superglobal que terá todas as variáveis através da URL com id "a".
$nome = $_GET["a"];
var_dump($nome);

echo "<br><br><br><br>";

// Converter para int.
$nome = (int)$_GET["a"];
var_dump($nome);

echo "<br><br><br><br>";

// Pega o IP.
$ip = $_SERVER["REMOTE_ADDR"];
var_dump($ip);

echo "<br><br><br><br>";

// Pega o local acessado. Ex: seciton-3/variaveis/exemplo-04.php
$ip2 = $_SERVER["SCRIPT_NAME"];
var_dump($ip2);

?>