<?php
// Estrutura de controle - If, Else e Else if

$suaIdade = 16;

$idadeCrianca = 12;
$idadeMaior = 18;
$idadeMelhor = 65;

// If e Else
if ($suaIdade < $idadeCrianca) {
	echo "Criança";
} else if ($suaIdade < $idadeMaior) {
	echo "Adolescente";
} else if ($suaIdade < $idadeMelhor) {
	echo "Já pode ser preso";
} else {
	echo "Idoso";
}

echo "<br><br><br><br>";

// Operador ternário
echo ($suaIdade < $idadeMaior) ? "Adolescente" : "Já pode ser preso";

?>