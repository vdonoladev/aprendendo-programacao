<?php
// Ataque por sessões.

session_start();

// Depois de verificar login e senha, gerar um novo ID.
session_destroy();

session_start();

session_regenerate_id();

echo session_id();

?>