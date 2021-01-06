<?php

require_once("config.php");

use Cliente\Cadastro;

$cad = new Cadastro();
$cad->setNome("Richard de Oliveira Lopes");
$cad->setEmail("richard@cursotop.com");
$cad->setSenha("dadada");
$cad->registrarVenda();

?>