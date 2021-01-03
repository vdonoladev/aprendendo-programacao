<?php 

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 24 - While */

$condicao = true;

while ($condicao) {
	$numero = rand(1, 10);

	if ($numero === 3) {
		echo "TRÊS!!!";
		$condicao = false;
		echo "<br>";
	}
	echo $numero . " ";
} 

?>