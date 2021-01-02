<?php

/* Seção 3 - Conhecendo a Linguagem PHP
Aula 19 - Incluindo arquivos com Include e Require */

// include 'aula19.php';

require 'aula19.php';

// Require = obriga que o arquivo exista (o que você está incluindo) e que o arquivo esteja funcionando corretamente

// Include = tenta funcionar (mesmo que o arquivo não exista) 

$resultado = somar(10, 20);

echo $resultado; // 30

?>