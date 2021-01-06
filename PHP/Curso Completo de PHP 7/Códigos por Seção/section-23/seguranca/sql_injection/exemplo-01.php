<?php
// SQL Injection

$id = isset($_GET["id"]) ? $_GET["id"] : 1;

// +-------
if (!is_numeric($id) || strlen($id) > 5) {
	exit("Uhhh!");
}

$conn = mysqli_connect("localhost", "root", "", "dbphp7");

$sql = "SELECT * FROM tb_usuarios WHERE idusuario = $id";

$exec = mysqli_query($conn, $sql);

while($res = mysqli_fetch_object($exec)) {
	echo $res->dslogin . "<br>";
}

?>