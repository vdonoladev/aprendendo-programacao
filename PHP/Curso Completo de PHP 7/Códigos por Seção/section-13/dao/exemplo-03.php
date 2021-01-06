<?php
// Mostrar todos os usuários.

require_once("config.php");

$usuario = User::listUsers();
echo json_encode($usuario);

?>