# Desenvolvimento Avançado Python - Flask e REST API

## O que é API ?

* É um conjunto de rotinas para acesso a um aplicativo/software/plataforma baseada na web.
* Acrônimo de Application Programming Interface - Interface de Programação de Aplicativos.
* APIs são importntes quando se tem a intenção de realizar integrações com outros serviços.
* Com as APIs, a comunicação de software fica transparente ao usuário.
* APIs podem ser locais, baseada em web e baseada em programas.

## O que é REST ?

* É um modelo a ser utilizado para projetar arquiteturas de software baseado em comunicação via rede.
* Acrônimo de Representational State Transfer - Transferência de Estado Representacional.
* Foi definido por Roy Fielding em sua tese de doutorado (PhD) na UCIsvine no ano 2000.
* REST projeta a idéia de que todo recurso deveria responder aos mesmos métodos.

## O que é REST API ?

* É uma API desenvolvida utilizando os princípios da arquitetura REST.
* Um REST API é utilizada na comunicação/integração entre software através de serviços web.
* Um REST API é consumido através de requisições HTTP.
* REST APIs são geralmente representadas em seus formatos por JSON e XML. Também são usadas páginas HTML, PDF e arquivos de imagens.
* Ao implementar um REST API, cada método deve ser responsável por um tipo diferente de ação. Exemplo: Consulta, Alteração, Inclusão e Exclusão.

## Métodos de Protocolo HTTP

* GET - Método que solicita algum recurso ou objeto do servidor por meio da URI.
* POST - Método usado para envio de arquivos/dados ou formulários HTML para o servidor.
* PUT - Aceitar criar ou modificar um objeto do servidor.
* DELETE - Informa por meio da URI o objeto a ser deletado.

## URL vs URN vs URI ?

* URL: Uniform Resource Locator - Localizador de Recursos Universal
	* Host que será acessado. Exemplo: globallabs.academy
* URN: Uniform Resource Name - Nome do Recurso Universal
	* É o recurso que será identificado. Exemplo: /category/blog
* URI: Uniform Resource Identifier - Identificador de Recursos Universal
	* É o identificador do recurso, podendo ser uma imagem, um arquivo ou uma página. Exemplo: https://globallabs.academy/category/blog
* URI/URL/URN 
	* URI une protocolo (https://)
	* URL (globallabs.academy)
	* URN (/category/blog)

## XML - Extensible Markup Language

* É uma linguagem de marcação.
* Utilizada para compartilhamento de informações através de requisições HTTP.

## JSON - JavaScript Object Notation

* É um formato de troca de dados entre sistemas independente da linguagem utilizada derivada do JavaScript.
* Muitas linguagem possuem suporte nativo ao JSON.

## Flask

* É um microframework para Python, utilizado para desenvolvimento de aplicações web.
* É chamado de microframework porque mantém um núcleo simples, mas é estendível.
* Flask não possui camadas de abstração para bancos de dados, validação de formulários, entre outros, mas é possível estender com outras bibliotecas.
* Por ser leve e simples de usar, Flask é um dos frameworks mais utilizados para desenvolvimento de APIs.

## PIP

* Sistema de gerenciamento de pacotes.
* Utilizado para gerenciar e instalar pacotes/bibliotecas em Python.
* Já vem empacotado com Python desde a versão 3.4
	* pip install Flask

## Virtualenv

* Ferramenta para criar ambientes Python isolados.
* Vem integrado com Python desde a versão 3.3
* Extremamente útil para se trabalhar com projetos que utilizam bibliotecas com versões diferentes.

## Postman

* Ferramenta utilizada para realizar requisições HTTP.
* COm ela é possível chamar qualquer método e também enviar parâmetros.

## REST vs REST ful

* REST é um estilo arquitetônico, um modelo para se seguir ao desenvolver APIs.
* REST ful é um serviço web que utiliza desse paradigma. É utilizado para definir aplicações que implementam webservices que utilizam a arquitetura REST.
* Podemos dizer que uma aplicação web que segue a arquitetura REST, ela é REST ful, ou seja, tem a capacidade de seguir a arquitetura REST.

## Flask - REST ful

* É uma extensão de Flask que adiciona suporte para construção rápida de REST APIs.
* O uso do Flask-REST ful acaba incentivando as práticas recomendadas para a arquitetura REST com uma configuração leve.

## SQLAlchemy

* É um ORM para Python
* Um ORM (Object-Relation Mapping) em português Mapeamento Objeto-Relacional, ajuda na abstração das tabelas de bancos de dados na orientação à objetos.
* Em ORMs tabelas viram classes e o desenvolvedor não precisa ter conhecimentos em SQL.
* SQLAlchemy fornece um conjunto completo de padrões de persistência, projetados para acessar o banco de dados eficiente e de alto desempenho, adaptado em uma linguagem do domínio Pythonica simples.

## SQLite

* É uma biblioteca de linguagem C que implementa um mecanismo de banco de dados pequeno, rápido e autônomo.
* É o mecanismo de banco de dados mais acessado no mundo.
* Ele é incorporado em smartphones, por exemplo.
* Com o SQLite é possível montar uma instância de banco de dados sem precisar realizar uma instalação de um banco.
* É muito prático para ambientes de desenvolvimento.

## Flask - httpauth

* É uma extensão para o framework Flask que simplifica o uso de autenticação.
* Com Flask - httpauth além da implementação da autenticação ser mais simples, também é possível realizar diferentes tipos de autenticação, do tipo básico com usuário e senha até com token.