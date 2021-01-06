<?php

$img = imagecreatefromjpeg("certificado.jpg");

$titleColor = imagecolorallocate($img, 0, 0, 0);
$gray = imagecolorallocate($img, 100, 100, 100);

imagettftext($img, 32, 0, 320, 250, $titleColor, "fonts".DIRECTORY_SEPARATOR."Bevan".DIRECTORY_SEPARATOR."Bevan-Regular.ttf", "CERTIFICADO");
imagettftext($img, 32, 0, 375, 350, $titleColor, "fonts".DIRECTORY_SEPARATOR."Playball".DIRECTORY_SEPARATOR."Playball-Regular.ttf", "Richard Lopes");
imagestring($img, 3, 440, 370, utf8_decode("Concluído em: ") . date("d/m/Y"), $titleColor);

header("Content-Type: image/jpeg");

imagejpeg($img);

imagedestroy($img);

?>