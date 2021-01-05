<?php
// Foreach - Para cada... é utilizado para percorrer arrays e/ou coleções.
// Para cada item dentro dessa variável, repita uma determinada instrução.

$meses = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

foreach ($meses as $index => $mes) {
	echo "Índice: $index<br>";
	echo "O mês é: $mes<br>";
}

?>