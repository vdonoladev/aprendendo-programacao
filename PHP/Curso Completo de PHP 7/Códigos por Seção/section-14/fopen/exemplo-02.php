<?php
// Criar arquivo CSV.

require_once("config.php");

$sql = new Connect();
$users = $sql->select("SELECT * FROM tb_usuarios ORDER BY idusuario");

$headers = array();

foreach ($users[0] as $key => $value) {
	array_push($headers, ucfirst($key));
}

$file = fopen("usuarios.csv", "w+");

fwrite($file, implode(",", $headers) . "\r\n");

foreach ($users as $row) {
	$data = array();

	foreach ($row as $key => $value) {
		array_push($data, $value);
	} // Coluna

	fwrite($file, implode(",", $data) . "\r\n");

} // Linha

fclose($file);

?>