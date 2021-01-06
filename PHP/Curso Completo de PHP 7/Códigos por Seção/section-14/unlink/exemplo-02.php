<?php
// Excluir vários arquivos.

if (!is_dir("img")) {
	mkdir("img");
}

foreach (scandir("img") as $item) {
	if (!in_array($item, array(".", ".."))) {
		unlink("img/" . $item);
	}
}

echo "Ok";

?>