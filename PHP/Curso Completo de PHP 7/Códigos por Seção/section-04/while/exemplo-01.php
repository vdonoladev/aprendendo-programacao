<?php
// While

$condicao = true;

// Enquanto a condição é verdadeira ele continua executando.
while ($condicao) {
	// rand - gerar número randomicamente.
	$numero = rand(1, 10);

	if ($numero === 3) {
		echo "Fim: ";
		$condicao = false;
	}

	echo "$numero <br>";
}

?>