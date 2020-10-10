<?php

/* Seção 3 - Conhecendo a Linguagem PHP

Aula 14 - Conhecendo os Tipos de Dados em PHP */

$anoNascimento = 1998;

// $nomeCompleto = "Víctor Donola Ferreira";

$nome1 = "Víctor"; // Certo (Não é recomendável)

$sobrenome = "Donola";

$nomeCompleto = $nome1 . " " . $sobrenome;

// Usar o ponto (.) para concatenar strings (textos)

// echo $nomeCompleto; // Víctor Donola Ferreira

// $1nome = "Víctor"; // Errado

// O único carácter especial que é aceito é o underline (_)

$nome_completo = "Víctor Donola Ferreira";

// echo $nome1;

// echo "<br>";

unset($nome1); // Limpa a variável (Foi tirada da memória, ela não existe mais)

if (isset($nome1)) {
	echo $nome1;
}

// isset verifica se a variável foi definida ou não (existe ou não)

// echo $nome1;

?>