<?php
// Update.

require_once("config.php");

$usuario = new User();
$usuario->loadById(29);

$usuario->update("professor", "qwerty");

echo $usuario;

?>