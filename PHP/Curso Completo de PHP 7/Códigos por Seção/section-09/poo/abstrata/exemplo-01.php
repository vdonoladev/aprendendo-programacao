<?php
// Classe abstrata.

interface Veiculo {
	public function acelerar($velocidade);
	public function frear($velocidade);
	public function trocarMarcha($marcha);
}

abstract class Automovel implements Veiculo {
	public function acelerar($velocidade) {
		echo "Acelerando até " . $velocidade . "km/h";
	}

	public function frear($velocidade) {
		echo "Freando até " . $velocidade . "hm/h";
	}

	public function trocarMarcha($marcha) {
		echo "Marcha: " . $marcha;
	}
}

class DelRey extends Automovel {
	public function empurrar() {
		echo "Empurrando.";
	}
}

// Classes abstratas não podem ser instanciadas,
// elas servem apenas para que outras classes usem-a como modelo
// $teste = new Automovel();

$carro = new DelRey();
$carro->acelerar(200);
echo "<br>";
$carro->empurrar();

?>