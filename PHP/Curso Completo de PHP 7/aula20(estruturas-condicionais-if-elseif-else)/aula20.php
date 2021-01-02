<?php

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 20 - Estruturas Condicionais - If, ElseIf, Else */

$qualASuaIdade = 30;

$idadeCrianca = 12;

$idadeMaior = 18;

$idadeMelhor = 65;

if ($qualASuaIdade < $idadeCrianca) {
	echo "É criança!";
} else if ($qualASuaIdade < $idadeMaior) {
	echo "Adolescente";
} else if ($qualASuaIdade < $idadeMaior) {
	echo "Adulto";
} else {
	echo "Idoso";
}

echo "<br>";

echo ($qualASuaIdade < $idadeMaior)?"Menor de idade":"Maior de idade";

?>