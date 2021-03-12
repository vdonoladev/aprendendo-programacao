<?php 

/*
Crie um projeto em PHP para um competição de natação, o 
sistema deverá permitir a inserção de competidores com seu 
nome e idade, e o sistema deverá identificar em qual 
categoria o nadador irá competir, por exemplo, 6 a 12 anos 
categoria infantil, de 13 a 18 categoria adolescente, 
acima de 18 categoria adulto, o sistema deverá retornar a 
categoria para cada nadador que for cadastrado.
*/

$categorias = [];
$categorias[] = 'Infantil';
$categorias[] = 'Adolescente';
$categorias[] = 'Adulto';
$categorias[] = 'Idoso';

$nome = 'Eduardo';
$idade = 25;

if($idade >= 6 && $idade <= 12) 
{
	echo "Infantil";
}
else if ($idade >= 13 && $idade <= 18)
{
	echo "Adolescente";
}
else
{
	echo "Adulto";
}

?>