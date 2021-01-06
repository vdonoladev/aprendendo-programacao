<?php

/* Seção 7:Trabalhando com Funções em PHP
Aula 32 - Criando Funções de Usuário */

function ola(){
	return "Olá, Mundo!";
}

echo ola();

echo "<br>";

$frase = ola();

echo strlen($frase);

 ?>