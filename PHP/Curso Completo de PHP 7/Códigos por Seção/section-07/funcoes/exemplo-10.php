<?php
// Função anônima.

function teste($callback) {
	$callback();
}

teste(function() {
	echo "Terminou!";
});

?>