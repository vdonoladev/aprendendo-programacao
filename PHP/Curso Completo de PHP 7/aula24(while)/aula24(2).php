<?php 

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 24 - While */

$total = 150;
$desconto = 0.9;

do {
	$total *= $desconto;
} while ($total > 100);

echo $total;

?>