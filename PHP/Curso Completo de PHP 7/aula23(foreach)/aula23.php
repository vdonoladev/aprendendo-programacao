<?php

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 23 - Foreach */

/*

$meses = array(
	"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
);

foreach ($meses as $mes) {
	echo "O mês é: ".$mes."<br>";
}

*/

$meses = array(
	"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
);

foreach ($meses as $index => $mes) {
	echo "Índice: ".$index."<br>";
	echo "O mês é: ".$mes."<br><br>";
}

?>