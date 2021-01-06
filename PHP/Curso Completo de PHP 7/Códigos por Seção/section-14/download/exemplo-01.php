<?php
// Download de arquivos.

$link = "https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg";

$content = file_get_contents($link);

$parse = parse_url($link);

$basename = basename($parse["path"]);

$file = fopen($basename, "w+");

fwrite($file, $content);

fclose($file);

?>

<img src="<?=$basename?>">