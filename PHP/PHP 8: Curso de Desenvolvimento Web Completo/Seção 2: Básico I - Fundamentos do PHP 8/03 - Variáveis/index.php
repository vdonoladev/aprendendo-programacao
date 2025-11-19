<?php

$name = "Víctor";

$head = "<!DOCTYPE html>
<html>

<head>
  <title>Site PHP de $name</title>
</head>";

$body = "
  <body>
    <h1>Meu nome é $name!</h1>
  </body>
</html>";

$html = $head . $body;
echo $html;