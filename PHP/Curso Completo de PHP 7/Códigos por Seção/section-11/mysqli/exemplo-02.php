<?php

$conn = new mysqli("localhost", "root", "", "dbphp7");

if ($conn->connect_error) {
	echo "Error: " . $conn->connect_error;
}

$result = $conn->query("SELECT * FROM tb_usuarios ORDER BY idusuario");

while ($row = $result->fetch_array()) {
	var_dump($row);
}

echo "<br><br><br><br>";

$result = $conn->query("SELECT * FROM tb_usuarios ORDER BY idusuario");

// Mostrar sem os índices.
while($row = $result->fetch_assoc()) {
	var_dump($row);
}

?>