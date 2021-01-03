<?php 

/* Seção 5:Arrays em PHP
Aula 26 - JSON */

$pessoas = array();

array_push($pessoas, array(
	"Nome"=>"João",
	"Idade"=>20
));

array_push($pessoas, array(
	"Nome"=>"Glaucio",
	"Idade"=>25
));

echo json_encode($pessoas);

// json_encode = transforma o array em JSON

?>