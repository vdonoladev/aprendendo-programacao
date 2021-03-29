# Parte 1

- **O que é um banco de dados?**
- **Motivos para usar um banco de dados**
- **Tipos de Dados**

---

# O que é banco de dados?

- **Local de armazenagem de dados**

Um sistema que armazena dados sobre um domínio específico.

- **Organização de dados**

Além de armazenar, o banco de dados é um sistema que organiza esse grupo de dados para sistemas utilizarem de forma estruturada.

# Quando começou?

- **1960 - Organização em arquivos**

Os dados eram armazenados em fitas magnéticas e a leitura era realizada por sequência.

- **1970 - Criação do SGDB**

Começou a ser usados sistemas de gerenciamentos de banco de dados.

- **1980 - Banco de dados relacional dominou**

O banco de dados relacional passou a ser utilizado em grande escala e foi criada a linguagem SQL

- **1990 - Uso massivo e interface para Web**
- **2000 - Novas linguagens**

# Por quê utilizar banco de dados?

- **Armazenagem segura dos dados**

Com um sistema centralizado especializado de armazenamento gera segurança.

- **Agilidade no processo**

Redução do tempo de armazenamento manual, além de ter agilidade na leitura e escrita de novos dados.

- **Organização dos dados**

O banco de dados proporciona uma organização no armazenamento de dados.

- **Redução de redundância e insconsistências**

O banco de dados possui controles para não deixar dados serem inseridos de forma incorreta e redundante.

**Dados**

- É o registro do atributo de um ente, objeto ou fenômeno.

**Informação**

- É a manipulação e a organização dos dados dando algum sentido.

# Tipos de dados

Características que os dados possuem para ser armazenados em memória

- **Tipos de dados primitivos**

Na programação existem somente 4 tipos de dados primitivos e as linguagens subdividem em vários tipos:

- Inteiro
- Real
- Lógico
- Texto

## Inteiro

- **O que significa?**

Representa números sem casas decimais, podendo ser negativos e positivos, ou seja, valores inteiros

- **Exemplos**
    - Ano de nascimento
    - Idade
    - Quantidade de alunos
    - Nota do desafio Devaria

## Real

- **O que significa?**

Representa números com ou sem casas decimais, podendo ser negativos e positivos.

- **Exemplos**
    - Peso de uma pessoa
    - Saldo em conta
    - Temperatura da febre
    - Preço do pão

## Lógico

- **O que significa?**

Somente aceita dois valores, sendo verdadeiro ou falso.

- **Exemplos**
    - Funcionário foi demitido?
    - Produto em validade?
    - Porta está fechada?
    - Computador foi desligado?

## Texto

- **O que significa?**

Representa um ou mais caracteres em formato de texto

- **Exemplos**
    - Descrição do desafio Devaria
    - Nome do aluno
    - Login do usuário
    - Sexo do aluno

## Variação importante: Data e Tempo

- **O que significa?**

Conhecida pela maioria das linguagens como "datetime", é um tipo de dados que só aceita dado e horário.

- **Exemplos**
    - Data e hora da aula Live Devaria - 15/03/2021 19:30:00.000
    - Data de nascimento - 15/09/1987
    - Quantidade de tempo da Live - 03:25:58.000

---

# Parte 2

- **O que é um banco de dados relacional**
- **Modelo de Entidade Relacional (MER)**
- **Entidades e Atributo**

---

# Banco de dados relacional

- **Dados estruturados em tabelas**

Os dados são armazenados em tabelas que constituem seus campos (colunas) e seus registros (linhas).

- **Relacionamento entre as tabelas**

As tabelas se relacionam através de chaves, como por exemplo uma tabela de carros cadastrados e outra tabela de cores.

**Tabelas**

Alguma entidade organizada em colunas e linhas de forma estruturada.

**Colunas / Atributos**

São campos com um formato especificado para receber dados.

**Registros**

São um conjunto de dados inseridos nas tabelas.

# MER - Modelo de Entidade Relacional

- Método para modelar um banco de dados relacional.
- Antes de elaborar um banco de dados novo geralmente é realizado o MER.
- Modelo simples e de fácil entendimento para a área de negócio e técnica.

## Entidades

- A entidade é um conjunto de informações sobre um determinado conceito.
- Todas as entidades possuem **Atributos**, que são campos que referenciam a entidade.

## Elaborar um MER

- Iremos montar um modelo de entidade relacional de acordo com as características da empresa abaixo:
    - A empresa **Candies** é uma loja de bairro que vende doces industriais de várias marcas.
    - A Candies compra seus produtos em distribuidores especializados.
    - Os clientes geralmente compram mais que um produto da loja.
    - A venda da loja para o cliente pode ser paga de diversas formas de pagamento.
    - Todo cliente pode ter um plano de fidelidade caso tenha preferência, acumulando pontos para futuros descontos.

## Elementos da entidade

**Entidade** - Representação de uma entidade

**Atributo** - Propriedades da entidade

**Atributo Multivalorado** - Atributo que pode conter mais que um valor

**Atributo chave** - Atributo único que representa a entidade

---

# Parte 3

- **O que é Relacionamento entre as Entidades**