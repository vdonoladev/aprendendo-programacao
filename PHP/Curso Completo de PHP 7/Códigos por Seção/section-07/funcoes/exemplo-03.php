<?php
// Paramêtros de uma função.

function ola($texto) {
	return "Olá $texto!<br>";
}

echo ola("mundo");
echo ola("Richard");

echo "<br><br><br><br>";

// Caso a variável não seja definida.
function ola2($texto = "mundo") {
	return "Olá $texto!<br>";
}

echo ola2();
echo ola2("Ricahrd");

echo "<br><br><br><br>";

// A variável que tiver valor definido deve SEMPRE ficar na esquerda!
function ola3($teste, $texto = "mundo") {
	return "$teste | $texto <br>";
}
// Motivo:
echo ola3("VARIÁVEL TESTE");

function ola4($texto = "mundo", $teste) {
	return "$texto | $teste <br>";
}

// echo ola4("VARIÁVEL TESTE"); => Warning: Missing argument 2 for ola4()
echo ola4("mundo","VARIÁVEL TESTE");

?>