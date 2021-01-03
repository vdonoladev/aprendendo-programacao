<?php 

/* Seção 5:Arrays em PHP
Aula 25 - Array em PHP */

$pessoas = array();

array_push($pessoas, array(
	"Nome"=>"João",
	"Idade"=>20
));

array_push($pessoas, array(
	"Nome"=>"Glaucio",
	"Idade"=>25
));

print_r($pessoas);

// Resposta
/*
Array
(
    [0] => Array
        (
            [Nome] => João
            [Idade] => 20
        )

    [1] => Array
        (
            [Nome] => Glaucio
            [Idade] => 25
        )

)
*/

echo "<br>";

print_r($pessoas[0]);

// Resposta
/* 
Array
(
    [Nome] => João
    [Idade] => 20
)
*/

echo "<br>";

print_r($pessoas[0]['Nome']);

// João

?>