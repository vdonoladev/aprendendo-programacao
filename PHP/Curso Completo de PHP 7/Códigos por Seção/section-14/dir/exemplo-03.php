<?php
// Manipulação de arquivos.

$images = scandir("img");
$data = array();

foreach ($images as $img) {
	if (!in_array($img, array(".", ".."))) {
		$filename = "img" . DIRECTORY_SEPARATOR . $img;

		$info = pathinfo($filename);

		$info["size"] = filesize($filename);
		$info["modified"] = date("d/m/Y H:i:s", filemtime($filename));
		$info["url"] = "http://localhost/hcode-php7/section-14/dir/" . str_replace("\\", "/", $filename);

		array_push($data, $info);
	}
}

echo json_encode($data);

?>