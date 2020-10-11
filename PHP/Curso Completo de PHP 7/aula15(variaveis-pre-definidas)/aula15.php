<?php

/* Seção 3 - Conhecendo a Linguagem PHP

Aula 15 - Variáveis Pré-definidas */

$nome = (int)$_GET["a"];

// var_dump($nome);

// $ip = $_SERVER["REMOTE_ADDR"];

$ip = $_SERVER["SCRIPT_NAME"];

echo $ip;

?>