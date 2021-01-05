<?php
// Manipulação de Strings.

$nome = "richard de oliveira lopes";
echo "$nome<br><br>";

// Tudo maiúsculo.
echo strtoupper($nome)."<br><br>";

// Tudo minúsculo.
echo strtolower($nome)."<br><br>";

// Primeiras letras em maiúsculo.
echo ucwords($nome)."<br><br>";

// Primeira letra em maiúsculo.
echo ucfirst($nome)."<br><br>";

echo "<br><br><br><br>";

// Substituir carácter.
$play = "Hcode";

// 1 = Carácter que deseja substituir.
// 2 = Qual deseja colocar no lugar.
// 3 = Qual texto ou variável que deseja fazer a substituição.
//--------------------1----2----3
$play = str_replace("o", "0", $play);
echo $play;

echo "<br><br><br><br>";

// Procurar uma frase ou letra.
$frase = "A repetição é mãe da retenção";
$palavra = "mãe";

// 1 = String.
// 2 = Palavra.
//-------------1--------2
$q = strpos($frase, $palavra);
var_dump($q);

echo "<br><br><br><br>";

// Retorna uma parte do texto.
// 1 = Frase para procurar.
// 2 = De onde começar.
// 3 = Procurar até qual posição.
// ----------------1----2---3
$texto = substr($frase, 0, $q);
var_dump($texto);

echo "<br>";

$texto2 = substr($frase, $q + strlen($palavra), strlen($frase));
var_dump($texto2);

?>