<?php
// PHP Data Objects com MySQL.

$conn = new PDO("mysql:dbname=dbphp7;host=localhost", "root", "");

$stmt = $conn->prepare("SELECT * FROM tb_usuarios ORDER BY idusuario");

$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($resultado as $row) {
	foreach ($row as $key => $value) {
		echo "<strong>".$key.": </strong>".$value."<br>";
	}
	echo "<hr>";
}

?>