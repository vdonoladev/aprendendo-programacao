<?php
// Mostrar dados do usuário pelo nome.

require_once("config.php");

$usuario = User::searchUser("ro");
echo json_encode($usuario);

?>