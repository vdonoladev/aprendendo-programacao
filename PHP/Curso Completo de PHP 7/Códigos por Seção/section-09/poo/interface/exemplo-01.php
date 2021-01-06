<?php
// Interface.

interface Veiculo {
	public function acelerar($velocidade);
	public function frear($velocidade);
	public function trocarMarcha($marcha);
}

class Civic implements Veiculo {
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

$carro = new Civic();
$carro->trocarMarcha(1);

?>