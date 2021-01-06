<form method="POST" enctype="multipart/form-data">
	<input type="file" name="upload">
	<br>
	<br>
	<button type="submit">Enviar</button>
</form>

<?php
// Upload de arquivos.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
	$file = $_FILES["upload"];

	if ($file["error"]) {
		throw new Exception("Error: " . $file["error"]);
	}

	$dirUploads = "uploads";
	if (!is_dir($dirUploads)) {
		mkdir($dirUploads);
	}

	if (move_uploaded_file($file["tmp_name"], $dirUploads . DIRECTORY_SEPARATOR . $file["name"])) {
		echo "Upload realizado com sucesso.";
	} else {
		throw new Exception("Não foi possível realizar o upload.");
	}

}

?>