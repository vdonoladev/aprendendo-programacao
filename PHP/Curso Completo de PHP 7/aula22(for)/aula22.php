<?php

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 22 - For */

for ($i = 0; $i <= 1000; $i+=5) {

	if ($i >= 200 && $i <= 800) continue;

	if ($i === 900) break;

	echo $i . "<br>";
}

// $i = 0; = valor inicial (contador)
// $i <= 10; = condição final (até)
// $i++ = incremento



?>