<?php
// Método mágico.

class Endereco {
	private $logradouro, $numero, $cidade;

	public function __construct($logradouro, $numero, $cidade) {
		$this->logradouro = $logradouro;
		$this->numero = $numero;
		$this->cidade = $cidade;
	}

	// Destruir o objeto.
	public function __destruct() {
		var_dump("Destruir");
	}

	// Retornar o objeto em string.
	public function __toString() {
		return $this->logradouro.", ".$this->numero.", ".$this->cidade;
	}
}

$end = new Endereco("Rua Manga","123","São Paulo");
echo $end;

echo "<br><br><br><br>";

// Destruir o objeto.
unset($end);

var_dump($end);

?>