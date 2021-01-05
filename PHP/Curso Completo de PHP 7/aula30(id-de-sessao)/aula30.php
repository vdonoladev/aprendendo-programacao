<?php 

/* Seção 6:Sessão no PHP 7
Aula 20 - ID de Sessão */

require_once("aula29(3-config.php).php"); // abra esse arquivo (aula29(3-config.php).php) e depois abra o aula30.php

echo session_id(); // mostra o seu id de sessão

// ele muda a cada sessão que você abrir (seja em guia anônima ou em outro navegador)

// valor único e nunca se repete

?>