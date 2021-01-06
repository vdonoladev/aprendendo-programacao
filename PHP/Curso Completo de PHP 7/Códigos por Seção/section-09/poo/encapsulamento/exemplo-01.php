<?php
// Encapsulamento.

class Pessoa {
	// Acesso - Público.
	public $nome = "Richard";

	// Acesso - Dentro da própria classe ou uma classe filho.
	protected $idade = 16;

	// Acesso - A própria classe.
	private $senha = "123456";

	public function exibirDados() {
		echo $this->nome . "<br>";
		echo $this->idade . "<br>";
		echo $this->senha . "<br>";
	}
}

$teste = new Pessoa();
// echo $teste->nome . "<br>";
// echo $teste->idade . "<br>";
// echo $teste->senha . "<br>";

echo "<br><br><br><br>";

class Programador extends Pessoa {

	public function exibirDados() {
		echo get_class($this) . "<br>";
		echo $this->nome . "<br>";
		echo $this->idade . "<br>";
		echo $this->senha . "<br>";
	}

}

$p1 = new Programador();
$p1->exibirDados();

?>