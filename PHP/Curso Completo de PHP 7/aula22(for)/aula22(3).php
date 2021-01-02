<?php

/* Seção 4:Estruturas de Controle e
Laços de repetição
Aula 22 - For */

echo "<select>";

	for ($i=date("Y"); $i >= date("Y")-100; $i--) { 
		echo '<option value="'.$i'">'.$i.'</option>';
	}

echo "</select>";

?>