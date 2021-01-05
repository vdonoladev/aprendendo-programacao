<?php
// Manipulação de arrays.

$pessoas = array();

array_push($pessoas, array(
	"nome"=>"Richard",
	"idade"=>16
));

array_push($pessoas, array(
	"nome"=>"Outro",
	"idade"=>17
));

print_r($pessoas[0]);

echo "<br><br><br><br>";

print_r($pessoas[1]["nome"]);

?>