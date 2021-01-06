<?php
// Ler conteúdo de um arquivo.

$filename = "ajpg.jpg";

$base64 = base64_encode(file_get_contents($filename));

$fileinfo = new finfo(FILEINFO_MIME_TYPE);

$mimetype = $fileinfo->file($filename);

$url = "data:" . $mimetype . ";base64," . $base64;

?>

<a href="<?=$url?>" target="_blank">Imagem</a>
<br>
<br>
<img src="<?=$url?>">