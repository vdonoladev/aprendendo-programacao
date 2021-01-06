<?php
// Herança.

class Documento {
	private $numero;

	public function getNumero() {
		return $this->numero;
	}

	public function setNumero($numero) {
		$this->numero = $numero;
	}
}

class CPF extends Documento {
	public function validar():bool {

		$numeroCPF = $this->getNumero();
		// Validação CPF.
		return true;
	}
}

$doc = new CPF();
$doc->setNumero("6151851-5");
echo $doc->getNumero();
echo "<br>";
var_dump($doc->validar());

echo "<br><br><br><br>";

?>