<?php
// Polimorfismo.

abstract class Animal {
	public function emitirSom() {
		return "Som";
	}

	public function locomover() {
		return "Andando";
	}
}

class Cachorro extends Animal {
	public function emitirSom() {
		return "Latindo";
	}
}

class Gato extends Animal {
	public function emitirSom() {
		return "Miando";
	}
}

class Passaro extends Animal {
	public function emitirSom() {
		return "Cantando";
	}

	public function locomover() {
		// parent:: - retorna da classe pai.
		return "Voando e " . parent::locomover();
	}
}

$pluto = new Cachorro();
echo $pluto->emitirSom() . "<br>";
echo $pluto->locomover() . "<br>";

echo "<hr>";

$garfield = new Gato();
echo $garfield->emitirSom() . "<br>";
echo $garfield->locomover() . "<br>";

echo "<hr>";

$garfield = new Passaro();
echo $garfield->emitirSom() . "<br>";
echo $garfield->locomover() . "<br>";

?>