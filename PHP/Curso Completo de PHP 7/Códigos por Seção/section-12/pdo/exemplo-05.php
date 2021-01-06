<?php
// Delete com PDO.

$conn = new PDO("sqlsrv:Database=dbphp7;server=localhost;ConnectionPooling=0", "sa", "root");

$stmt = $conn->prepare("DELETE FROM tb_usuarios WHERE idusuario = :ID");

$id = 1;

$stmt->bindParam(":ID", $id);

$stmt->execute();

echo "Deletado.";

?>