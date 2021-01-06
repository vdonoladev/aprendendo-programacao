<?php
// Permissões de pastas

$pasta = "arquivos";
$permissao = "0775";

// 0 até 7
// 0 - Sem permissão.
// 1 - Execução.
// 2 - Gravação.
// 3 - Execução e gravação.
// 4 - Leitura.
// 5 - Leitura e execução.
// 6 - Leitura e gravação.
// 7 - Leitura, execução e gravação.

//  0  |  7   |  7    |  5
//  ?  | DONO | GRUPO | VISITANTES 
if (!is_dir($pasta)) mkdir($pasta, $permissao);

echo "Diretório criado com sucesso.";

?>