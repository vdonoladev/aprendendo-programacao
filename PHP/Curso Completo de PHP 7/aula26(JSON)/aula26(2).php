<?php 

/* Seção 5:Arrays em PHP
Aula 26 - JSON */

$json = '[{"Nome":"João","Idade":20},{"Nome":"Glaucio","Idade":25}]';

$data = json_decode($json, true);

// echo "<br>";

var_dump($data);

// json_decode = transforma o json em array (coloca o true, senão vira objeto)

?>