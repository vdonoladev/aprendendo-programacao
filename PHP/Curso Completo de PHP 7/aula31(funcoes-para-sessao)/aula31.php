<?php 

/* Seção 6:Sessão no PHP 7
Aula 31 - Funções para Sessão */

require_once("aula29(3-config.php).php");

echo session_save_path(); // mostra o local onde está salvo o id de sessão

echo "<br>";

var_dump(session_status());

echo "<br>";

switch (session_status()) {
	case PHP_SESSION_DISABLED:
		echo "Se as sessões estiverem desabilitadas.";
		break;
	case PHP_SESSION_NONE:
		echo "Se as sessões estiverem habilitadas, mas nenhuma existir.";
		break;
	case PHP_SESSION_ACTIVE:
		echo "Se as sessões estiverem habilitadas, e uma existir.";
		break;
}

?>