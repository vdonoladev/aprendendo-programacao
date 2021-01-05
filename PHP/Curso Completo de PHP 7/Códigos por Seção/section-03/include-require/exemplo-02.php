<?php
// Include e Require

/*
include "exemplo-01.php";
include "exemplo-01.php";
Assim = Fatal error.
------------------------------
include_once "exemplo-01.php";
include_once "exemplo-01.php";
Assim = Tudo certo, já que o PHP ignora o segundo include
*/

include_once "exemplo-01.php";

$resultado = somar(10, 20);
echo $resultado;

?>