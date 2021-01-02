<?php

/* Seção 3 - Conhecendo a Linguagem PHP
Aula 18 - Strings em PHP */

$nome = "Joao Rangel";

echo strtoupper($nome); // Tudo em MAIÚSCULO = JOÃO RANGEL

echo "<br>";

echo strtolower($nome); // Tudo em MINÚSCULO = joão rangel

echo "<br>";

echo ucwords($nome); // A primeira letra de cada palavra se converte para MAIÚSCULO = João Rangel

echo "<br>";

echo ucfirst($nome); // Só a primeira letra da primeira palavra se converte para MAIÚSCULO = João rangel

?>