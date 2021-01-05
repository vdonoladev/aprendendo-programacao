<?php
// JSON Decode.

$json = '[{"nome":"Richard","idade":16},{"nome":"Outro","idade":17}]';
$data = json_decode($json, true); // Se não colocar o 'true', a variável vira um objeto.

var_dump($data);

?>