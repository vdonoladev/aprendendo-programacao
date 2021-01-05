<?php
// Mostrando que a variável $_SESSION é global.

require_once("config.php");
echo $_SESSION["nome"];

// Deixar a variável do session vazia.
session_unset($_SESSION["nome"]);

// Destruir sessão.
session_destroy();

// Confirmando a destruição da sessão.
echo $_SESSION["nome"];

?>