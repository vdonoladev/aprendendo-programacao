<?php
// Insert com PDO.

$conn = new PDO("sqlsrv:Database=dbphp7;server=localhost;ConnectionPooling=0", "sa", "root");

$stmt = $conn->prepare("INSERT INTO tb_usuarios (dslogin, dssenha) VALUES (:LOGIN,:SENHA)");

$login = "usuario";
$senha = "123789";

$stmt->bindParam(":LOGIN", $login);
$stmt->bindParam(":SENHA", $senha);

$stmt->execute();

echo "Sucesso.";

?>