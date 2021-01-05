<?php
// Sessões.

// As sessões não são iniciadas automaticamente.
// Portanto devemos iniciá-las com este comando:
session_start(); // Ou require_once("config.php");

$_SESSION["nome"] = "Hcode";

?>