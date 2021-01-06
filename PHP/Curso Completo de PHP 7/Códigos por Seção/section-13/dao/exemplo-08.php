<?php
// Delete

require_once("config.php");

$usuario = new User();
$usuario->loadById(27);
$usuario->delete();

echo $usuario;

?>