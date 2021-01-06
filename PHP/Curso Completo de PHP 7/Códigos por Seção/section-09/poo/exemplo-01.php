<?php
// Classe.

class Pessoa {

	// Atributo.
	public $nome;

	// Método.
	public function falar() {
		return "O meu nome é $this->nome";
	}
}

$pessoa1 = new Pessoa();
$pessoa1->nome = "Richard de Oliveira Lopes";
echo $pessoa1->falar();

?>