<?php 

/* Seção 6:Sessão no PHP 7
Aula 29 - Criando e Entendendo Sessões */

require_once("aula29(3-config.php)");

session_unset($_SESSION['nome']);

echo $_SESSION['nome'];

session_destroy();

// session_unset = limpa variáveis de sessão
// session_destroy = destrói a sessão (limpa e remove o usuário)

?>