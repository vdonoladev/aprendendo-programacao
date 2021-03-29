# Parte 1

- **Instruções para aula**
- **Internalizando os conceitos de SQL**
- **Revisão dos comandos básicos**

---

# Instruções

- **Configurar o banco de dados**

Rodar o script do banco de dados de acordo com a pasta compartilhada

- **Como será a dinâmica da aula de hoje?**

Todos os comandos SQL terão:

- Explicação conceitual
- Ponto de atenção
- Explicação na prática
- Exercício em conjunto

---

# Comandos SQL

- **Para que usamos?**

São utilizados para executar instruções em um banco de dados relacional.

- **Ações mais usadas?**
    - Selecionar dados.
    - Atualizar dados.
    - Inserir dados
    - Excluir dados.

## SELECT

**Objetivo -** Selecionar dados de uma ou mais tabelas

**Quando utilizar -** Quando o sistema necessita dos dados para uso em uma determinada funcionalidade

**Ponto de atenção -** Deve ser bem estruturado para ter um bom entendimento e elaborar preocupando-se com a perfomance do banco de dados.

## UPDATE

**Objetivo -** Atualizar dados de uma tabela

**Quando utilizar -** Quando o sistema necessita atualizar os dados de um ou mais registros

**Ponto de atenção -** Esse comando é sensível e deve ser utilizado com *Begin Transaction* e com as condições corretas

## INSERT INTO

**Objetivo -** Inserir dados de uma tabela

**Quando utilizar -** Quando o sistema necessita inserir os dados de um registro

**Ponto de atenção -** Esse comando é sensível e deve ser usado com *Begin Transaction* e com as condições corretas.

## DELETE

**Objetivo -** Deletar dados de uma tabela

**Quando utilizar -** Quando o sistema necessita excluir os dados de um ou mais registros

**Ponto de atenção -** Deve se atentar nos campos obrigatórios e no formato correto de cada atributo

---

# Parte 2

- **Seleção de Mínimo e Máximo**
- **Seleções usando matemática**
- **Operadores aritméticos**

---

## MIN e MAX

**Objetivo -** Selecionar o maior ou menor registro de um determinado dado

**Quando utilizar -** Quando o sistema precisa saber quem é o dado menor ou maior de um determinado campo

**Ponto de atenção -** Se não utilizado com um agrupamento o resultado da seleção sempre será um registro apenas

## COUNT

**Objetivo -** Selecionar uma contagem de registros

**Quando utilizar -** Quando o sistema precisa saber quantos registros em uma determinada tabela podendo ou não conter condições

**Ponto de atenção -** Pode ser utilizado com qualquer campo ou até mesmo com o *

## SUM (Summary)

**Objetivo -** Selecionar a soma de um determinado campo

**Quando utilizar -** Quando o sistema precisa somar um determinado campo para realizar uma conta ou exibir na tela, podendo ou não possuir condições

**Ponto de atenção -** Esse é um operador matemático e só funciona em campos de valores

## AVG (Average)

**Objetivo -** Selecionar a média aritmética de um determinado campo

**Quando utilizar -** Quando o sistema necessita da média de um determinado campo para realizar uma conta ou exibir na tela, podendo ou não possuir condições

**Ponto de atenção -** Esse é um operador matemático e só funciona com campos de valores

## Operadores aritméticos

**Objetivo -** Selecionar dados utilizando operações matemáticas

**Quando utilizar -** Quando o sistema necessita de uma seleção de dados calculados

---

# Parte 3

- **Comandos de agrupamentos**
- **Usando CASE na seleção de dados**
- **Conceito de juntar tabelas**

---

# GROUP BY

**Objetivo -** Selecionar dados de forma agrupada

**Quando utilizar -** Quando o sistema precisa de dados agrupados de um ou mais campos determinados

**Ponto de atenção -** O agrupamento só faz sentido se é utilizado junto com um ou mais comandos como SUM, AVG, COUNT, MIN e MAX

# CASE WHEN

**Objetivo -** Manipular os dados de acordo com uma condição em uma seleção

**Quando utilizar -** Quando o sistema precisa trazer dados manipulados de acordo com uma ou mais condições específicas

**Ponto de atenção -** É ideal utilizar o CASE WHEN somente quando não é possível trazer os dados de acordo com a origem

---

# Juntar tabelas?

- **Para que usamos?**

Juntar dados de duas ou mais tabelas

- **Quando usar?**

Quando temos que utilizar dados em uma seleção que estão em mais de uma tabela