<?php
// JSON Enconde.

/*
 JSON - JavaScript Object Notation.
 Todas as linguagens de programação geram arquivos no formato JSON.

 É um formato de comunicação que facilita a interoperabilidade de sistemas.
*/

$pessoas = array();

array_push($pessoas, array(
	"nome"=>"Richard",
	"idade"=>16
));

array_push($pessoas, array(
	"nome"=>"Outro",
	"idade"=>17
));

echo json_encode($pessoas);

?>