<?php
// Mostrar dados do usuário usando login e senha.

require_once("config.php");

$usuario = new User();
$usuario->desLogin("root", "!@#$");

echo $usuario;

?>