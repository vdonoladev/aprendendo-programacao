<?php 

/* Seção 6:Sessão no PHP 7
Aula 20 - ID de Sessão */

session_id('999f83b8a602a0ba58949171fc56080a');

require_once("aula29(3-config.php).php");

session_regenerate_id();

echo session_id();

var_dump($_SESSION);

?>