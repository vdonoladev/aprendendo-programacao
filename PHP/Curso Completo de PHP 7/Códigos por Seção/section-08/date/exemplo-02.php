<?php
// strtotime.

// Transformar o timestamp em uma data.
echo date("d/m/Y", 1000159200);

echo "<br><br><br><br>";

// Transformar a data em timestamp.
echo strtotime("2001-09-11");

echo "<br><br><br><br>";

$tempo = strtotime("now");

echo date("l, d/m/Y", $tempo);

echo "<br><br><br><br>";

$tempo2 = strtotime("+1 day");

echo date("l, d/m/Y", $tempo2);

echo "<br><br><br><br>";

$tempo3 = strtotime("+1 week");

echo date("l, d/m/Y", $tempo3);

?>