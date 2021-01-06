<?php
// Criar um cookie.

$data = array(
	"empresa"=>"hcode treinamentos"
);

setcookie("NOME_DO_COOKIE", json_encode($data), time() + 3600);

echo "OK.";

?>