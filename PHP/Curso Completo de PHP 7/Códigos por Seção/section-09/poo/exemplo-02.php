<?php
// Atributos e métodos.

class Carro {
	private $modelo, $motor, $ano;

	public function getModelo() {
		return $this->modelo;
	}

	public function setModelo($modelo) {
		$this->modelo = $modelo;
	}

	public function getMotor():float {
		return $this->motor;
	}

	public function setMotor($motor) {
		$this->motor = $motor;
	}

	public function getAno():int {
		return $this->ano;
	}

	public function setAno($ano) {
		$this->ano = $ano;
	}

	public function exibir() {
		return array(
			"modelo"=>$this->getModelo(),
			"motor"=>$this->getMotor(),
			"ano"=>$this->getAno()
		);
	}
}

$carro = new Carro();
$carro->setModelo("Camaro");
$carro->setAno(2022);
$carro->setMotor(2.0);
var_dump($carro->exibir());
?>