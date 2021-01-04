<?php 

/* Seção 5:Arrays em PHP
Aula 27 - Constantes e Array Constantes */

// Sempre use CONSTANTES com letras MAIÚSCULAS

define("BANCO_DE_DADOS", [
	'127.0.0.1',
	'root',
	'password',
	'teste'
]);

print_r(BANCO_DE_DADOS);

?>