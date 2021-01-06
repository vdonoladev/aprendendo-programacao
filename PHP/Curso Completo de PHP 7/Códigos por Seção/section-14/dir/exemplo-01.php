<?php
// Criar diretórios.

$name = "img";

if (!is_dir($name)) {
	mkdir($name);
	echo "Diretório <strong>'$name'</strong> criado com sucesso.";
} else {
	echo "Diretório já existente <strong>'$name'</strong>";
}

?>