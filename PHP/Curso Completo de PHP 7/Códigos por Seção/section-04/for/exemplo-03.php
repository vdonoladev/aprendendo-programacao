<?php
// Criar um select de cem anos atrás.

echo "<select>";
for ($i = date("Y"); $i >= date("Y")-100; $i--) {
	echo '<option value="'.$i.'">'.$i.'</option>';
}
echo "</select>";

?>