<?php
// Deletar diretórios.

$name = "img";

if (!is_dir($name)) {
	mkdir($name);
	echo "Diretório <strong>'$name'</strong> criado com sucesso.";
} else {
	rmdir($name);
	echo "Diretório removido <strong>'$name'</strong>";
}


?>