<?php

/* Seção 3 - Conhecendo a Linguagem PHP
Aula 18 - Strings em PHP */

$empresa = "Hcode";

$empresa = str_replace("o", "0", $empresa); // Hc0de

echo $empresa;

echo "<br>";

$empresa = str_replace("e", "3", $empresa); // Hc0d3

echo $empresa;

?>