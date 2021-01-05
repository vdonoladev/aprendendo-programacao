<?php
// Operador Null Coalesce

$a = null;
$b = null;
$c = 10;

// Se $a for nulo, então verifique se $b é nulo. Caso $b seja nulo, então apresente $c.
echo $a ?? $b ?? $c;

?>