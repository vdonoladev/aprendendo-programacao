<?php
// Mostrar dados do usuário pelo ID.

require_once("config.php");

$usuario = new User();
$usuario->loadById(1);

echo $usuario;

?>