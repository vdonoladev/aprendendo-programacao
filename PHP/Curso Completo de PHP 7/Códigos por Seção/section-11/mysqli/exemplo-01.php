<?php
// Classe MySQLi.
// Inserir no BD.

$conn = new mysqli("localhost", "root", "", "dbphp7");

// Verificar conexão.
if ($conn->connect_error) {
	echo "Error: " . $conn->connect_error;
}

$stmt = $conn->prepare("INSERT INTO tb_usuarios (dslogin, dssenha) VALUES (?, ?)");
$stmt->bind_param("ss", $login, $senha);

$login = "user";
$senha = "12345";

$stmt->execute();

$login = "root";
$senha = "!@#$";

$stmt->execute();

?>