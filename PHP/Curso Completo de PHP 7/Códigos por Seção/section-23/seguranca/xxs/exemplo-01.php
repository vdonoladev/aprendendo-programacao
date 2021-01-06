<form method="POST">
	<input type="text" name="busca">
	<button type="submit">Enviar</button>
</form>

<?php

if (isset($_POST["busca"])) {
	// Retira as tags.
	echo strip_tags($_POST["busca"], "<strong>");

	// Transforma as tags. Ex: <strong> ---> &lt;strong&gt;
	echo htmlentities($_POST["busca"]);
}


?>