<?php
// Modificar imagem já existente.

$img = imagecreatefromjpeg("certificado.jpg");

$titleColor = imagecolorallocate($img, 0, 0, 0);
$gray = imagecolorallocate($img, 100, 100, 100);

imagestring($img, 5, 450, 150, "CERTIFICADO", $titleColor);
imagestring($img, 5, 440, 350, "Richard Lopes", $titleColor);
imagestring($img, 3, 440, 370, utf8_decode("Concluído em: ") . date("d/m/Y"), $titleColor);

header("Content-Type: image/jpeg");

// imagejpeg(a, a, E) 
// E - Qualidade da imagem de 1 a 100.
imagejpeg($img, "certificado-".date("Y-m-d").".jpg", 100);

imagedestroy($img);

?>