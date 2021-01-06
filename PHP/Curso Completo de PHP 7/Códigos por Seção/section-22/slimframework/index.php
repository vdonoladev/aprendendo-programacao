<?php


require_once("vendor/autoload.php");

$app = new \Slim\Slim();

$app->get('/', function () {
	echo "Pagina nao encontrada";
});

$app->get('/hello/:name', function ($name) {
	echo "Hello, ".$name;
	// section-22/slimframework/hello/hcode
});

$app->run();

?>