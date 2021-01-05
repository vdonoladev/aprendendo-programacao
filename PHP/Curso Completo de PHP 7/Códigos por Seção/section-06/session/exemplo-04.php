<?php
// Gerar um novo ID.

require_once("config.php");

// Gera um novo ID de sessão.
session_regenerate_id();

echo session_id();

echo "<br><br><br><br>";

var_dump($_SESSION);

?>