<?php

/*

O PHP suporta dez tipos primitivos de dados:

Quatro tipos escalares:
- boolean (bool)
- integer (int)
- float (float) (também conhecido como double ou real)
- string (string)

Quatro tipos compostos:
- array (array)
- object (object)
- callable (callable)
- iterable (iterable)

E finalmente dois tipos especiais:
- resource (resource)
- null (null)

*/

// Escalares

$a = true; // boolean
$b = 123; // integer
$c = 12.34; // float
$d = "Olá, Mundo!"; // string

// Compostos

$e = [1, 2, 3]; // array
class Pessoa {
    public $nome;
    public function __construct($nome) {
        $this->nome = $nome;
    }
}
$f = new Pessoa("Víctor"); // object
$g = function() { return "Chamado!"; }; // callable
$h = [1, 2, 3]; // iterable

// Especiais

$i = fopen("arquivo.txt", "r"); // resource
$j = null; // null