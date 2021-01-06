<?php
// Verificar se o cookie existe.

if (isset($_COOKIE["NOME_DO_COOKIE"])) {
	var_dump(json_decode($_COOKIE["NOME_DO_COOKIE"], true));
}

?>