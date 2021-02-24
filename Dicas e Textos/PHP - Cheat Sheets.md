## TIPOS DE DADOS

### Variáveis podem armazenar tipos diferentes de dados, cada tipo pode fazer coisas diferentes.

**String**, é uma sequência de caracteres 

```php
$x = "Olá mundo!";
```

**Int**, é um número não decimal 

```php
$x = 123;
```

**Flout/Double**, é um número decimal 

```php
$x = 27.666;
```

**Boolean**, representação de um estado binário (TRUE or FALSE) 

```php
$x = FALSE;
```

**Array (vetores)**, armazenam múltiplos valores 

```php
$x = [1, 2, 3];
```

**Object (objeto)**, armazena informações e como processá-las 

```php
$x = new Classe;
```

**NULL**, representa apenas o valor NULL 

```php
$x = NULL;
```

## OPERADORES ARITMÉTICOS

+     Soma - $x + $y

-      Subtração - $x - $y

*      Multiplicação - $x * $y

/      Divisão - $x / $y

%    Módulo (Resto da divisão de $x / $y) - $x % $y

**    Exponenciação (Resultado de elevar $x até a sua $y potência) - $x ** $y

## SISTEMA DE ARQUIVOS

Lê o conteúdo de um arquivo em uma String

```php
file_get_contents()
```

Escreve uma String em um arquivo

```php
file_put_contents()
```

Copia um arquivo

```php
copy()
```

Deleta um arquivo

```php
unlink()
```

Cria um diretório

```php
mkdir()
```

Remove um diretório

```php
rmdir()
```

## ARRAYS / VETORES

Verifica se a variável é um array

```php
is_array($var);
```

Procura se um valor existe no array

```php
in_array($valor, $array);
```

Retorna um array resultante da combinação

```php
array_merge($array1, $array2, ...)
```

Retorna um array com as chaves do array parâmetro

```php
array_keys($array);
```

Verifica se a chave existe em um array

```php
array_key_exists($chave, $array)
```

Retira e retorna o primeiro valor de um array

```php
array_shift($array);
```

Adiciona um ou mais elementos no final de um array

```php
array_push($array, $val, ...);
```

Retira e retorna o último elemento do array

```php
array_pop($array);
```

Retorna todos os valores de um array

```php
array_values($array);
```

Aplica uma função nos elementos do array

```php
array_map($callback, $array);
```

Retorna um array sem valores duplicados

```php
array_unique($array);
```

Retorna uma parte do array

```php
array_slice($array, $offset, $length);
```

Verifica as diferenças entre arrays

```php
array_diff($array1, $array2, ...);
```

Retorna um array na ordem inversa

```php
array_reverse($array);
```

Adiciona um elemento no inicio do array

```php
array_unshift($array, $var);
```

Chaves e valores trocam de posição

```php
array_flip($array);
```

## DATAS

Classe que representa data e hora

```php
new DateTime('now');

// 2019-06-04 15:04:53.774795
```

Retorna um objeto DateInterval

```php
$datetime1 -> diff($datetime2);
```

Adiciona um dia ao Datetime

```php
$datetime -> modify('+1 day');
```

Adiciona um ou mais elementos em um array

```php
date('d/m/Y H:i:s');

// 12/10/2019 14:48:00
```

Int representando Unix timestamp

```php
time();

// 1559670578
```

Interpreta strings de data/hora em texto em inglês em timestamp Unix

```php
strotime('now');

// 1559671161

date('d/m/y', strotime('last sunday'));

// 02/06/19
```

## STRINGS

Retorna o tamanho de uma string

```php
strlen('minha string');

// 12
```

Posição da primeira ocorrência de uma palavra

```php
strpos('minha string', 'string');

// 6
```

Retorna a parte de uma string

```php
substr('minha string', 0, 5);

// minha
```

Substitui ocorrências em um array

```php
str_replace('minha', 'sua', 'minha string');

// sua string
```

Retira espaços do início e fim de uma string

```php
trim(' minha string ');

// minha string
```

Converte caracteres para minúsculo

```php
strtolower('Minha StrinG');

// minha string
```

Converte caracteres para maiúsculo

```php
strtoupper('Minha StrinG');

// MINHA STRING
```

## SUPERGLOBAIS

Variáveis disponíveis em todos os escopos

Variáveis definidas neste escopo, nome da variável é chave do vetor

```php
$GLOBALS -> echo $GLOBALS["foo"];
```

Informações do servidor e do ambiente de execução

```php
$_SERVER -> echo $_SERVER["REMOTE_ADDR"];

// ip
```

Vetor associativo da requisição atual via HTTP GET

```php
$_GET -> echo $_GET["param"];
```

Vetor associativo da requisição atual via HTTP POST

```php
$_POST -> echo $_POST["param"];
```

Variáveis de um upload de arquivo via HTTP File

```php
$_FILES -> echo $FILES["name"]["size"];
```

Vetor associativo com variáveis passadas via HTTP Cookies

```php
$_COOKIE -> echo $_COOKIE["PHPSESSID"];
```

Vetor associativo com as variáveis da sessão

```php
$_SESSION -> echo $_SESSION["value"];
```

Vetor associativo com as variáveis da requisição HTTP

```php
$_REQUEST -> echo $_REQUEST["class"];
```

Vetor associativo com as variáveis de ambiente

```php
$_ENV -> echo $_ENV["USER"];
```