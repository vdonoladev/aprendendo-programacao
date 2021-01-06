<?php
// Update com PDO.

$conn = new PDO("sqlsrv:Database=dbphp7;server=localhost;ConnectionPooling=0", "sa", "root");

$stmt = $conn->prepare("UPDATE tb_usuarios SET dslogin = :LOGIN, dssenha = :SENHA WHERE idusuario = :ID");

$id = 3;
$login = "Richard";
$senha = "bpoierjgiorjn";

$stmt->bindParam(":LOGIN", $login);
$stmt->bindParam(":SENHA", $senha);
$stmt->bindParam(":ID", $id);

$stmt->execute();

echo "Alterado.";

?>