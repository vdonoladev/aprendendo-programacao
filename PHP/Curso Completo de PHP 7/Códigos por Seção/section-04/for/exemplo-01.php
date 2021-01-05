<?php
// For.

/*
Enquanto (variável de início é para iniciar um contador;
na segunda parte é a condição; na terceira parte é o valor que deverá ser acrescentado.
Neste caso é o operador de pós-incremento).
*/
for ($i = 0; $i < 10; $i++) {
	echo "$i <br>";
}

echo "<br><br><br><br>";

// Repetir até 1000, acrescentando de 5 em 5.
for ($i = 0; $i <= 1000; $i += 5) {
	echo "$i <br>";
}

echo "<br><br><br><br>";

// Continue - Pular o resto da repetição atual.
for ($i = 0; $i <= 1000; $i += 5) {
	if($i > 200 && $i < 800) continue; {
		if ($i === 900) break; {
			echo "$i <br>";
		}
	}
}

?>