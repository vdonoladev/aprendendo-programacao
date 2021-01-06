<?php
// Insert com Procedures.

require_once("config.php");

$aluno = new User("aluno", "aluno");

$aluno->insert();

echo $aluno;

?>