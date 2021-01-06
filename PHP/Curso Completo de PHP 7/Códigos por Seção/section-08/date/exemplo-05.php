<?php
// Somar dias.

$dt = new DateTime();

// Intervalo de 15 dias.
$periodo = new DateInterval("P15D");

echo $dt->format("d/m/Y H:i:s");

echo "<br><br><br><br>";

// add - Adicionar intervalo.
$dt->add($periodo);

echo $dt->format("d/m/Y H:i:s");

?>