<?php
// Mostrar todos os usuários.

require_once("config.php");

$sql = new Connect();
$users = $sql->select("SELECT * FROM tb_usuarios");
echo json_encode($users);

?>