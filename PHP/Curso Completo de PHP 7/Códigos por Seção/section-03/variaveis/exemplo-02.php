<?php
// Comentários, concatenção e limpar variável.

$anoNascimento = 2001;

$nomeCompleto = "Richard de Oliveira Lopes";

$nome1 = "richardolopes";

// Comentário de uma linha.

/*

   Comentário de várias linhas.

*/

echo "$nome1<br>";

// Excluir a variável.
unset($nome1);

// Verificar se a váriavel $nome1 existe.
if (isset($nome1)) {
	// Caso ela exista:
	echo "$nome1<br>";
}

unset($nomeCompleto, $anoNascimento);

$nome1 = "Richard";
$sobrenome = "Lopes";

// Concatenação.
$nomeCompleto = $nome1 . " " . $sobrenome;

echo $nomeCompleto;

exit;

echo "UAI";

?>