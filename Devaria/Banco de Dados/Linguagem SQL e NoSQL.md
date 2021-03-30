# Parte 1

- **Revisando o conceito de Join**
- **Juntando tabelas (Inner Join)**

---

# Juntar tabelas?

- **Para que usamos?**

Juntar dados de duas ou mais tabelas

- **Quando usar?**

Quando temos que utilizar dados em uma seleção que estão em mais de uma tabela

# INNER JOIN

**Objetivo -** Selecionar os dados que se relacionam de duas ou mais tabelas

**Quando utilizar -** Quando o sistema necessita selecionar dados específicos em comum de duas ou mais tabelas

**Ponto de atenção -** Só é possível se há relação entre as tabelas

# LEFT JOIN

**Objetivo -** Selecionar os dados que se relacionam de duas ou mais tabelas com exceção da tabela da esquerda

**Quando utilizar -** Quando o sistema necessita selecionar dados em comum específicos de duas ou mais tabelas incluindo os dados que não se relacionam de uma determinada entidade

**Ponto de atenção -** Só é possível se há relação entre as tabelas

# LEFT OUTER JOIN

**Objetivo -** Selecionar os dados que não se relacionam de duas ou mais tabelas

**Quando utilizar -** Quando o sistema necessita selecionar dados específicos que nunca se relacionaram

**Ponto de atenção -** Só é possível se há relação entre as tabelas

---

# Banco de dados não relacional

- **É um repositório de dados assim como o relacional**

O objetivo principal é o armazenamento de dados de forma organizada, porém em estruturas diferentes.

- **Não utiliza Tabela, Colunas e Linhas**

Os dados são armazenados orientados a colunas, chave-valor, documentos ou grafos.

- **Geralmente utilizado para um alto volume com grande escala**

Quando você sabe que o Sistema vai receber uma carga muito alta de dados e tem característica de aumentar em grande escala

- **Os dados gerenciados tendem a ser menos críticos**

Geralmente utilizado em sistemas em que os dados não são de alta criticidade

# NoSQL - Orientado a Grafos

- Os dados são dispostos em grafos
- Utilizado em cenários como geração de rotas e sistemas orientados a interconexão entre os dados

# NoSQL - Armazenamento de chave-valor

- Um dos tipos mais simples
- Os dados são armazenados por um índice representado por uma chave

# NoSQL - Armazenamento colunar

- Os dados são armazenados em colunas apartadas seguidas pela chave primária

# NoSQL - Orientado à documentos

- O mais usado assim como chave-valor
- O armazenamento é de documentos sendo o mais utilizado o JSON

---

# NoSQL X Relacional

## Considere usar NoSQL quando:

- Alto volume de dados com grande escala
- Suas cargas de trabalho não exigem garantias ACID
- Seus dados são dinâmicos e frequentemente alterados
- Os dados podem ser expressos sem relações
- Você precisa de gravações rápidas e a segurança de gravação não é crítica
- A seleção de dados é simples e tende a ser simples
- Seus dados exisgem uma ampla distribuição geográfica

## Considere usar BD relacional quando:

- Voluma de dados consistente e requer escala média para grande
- Garantias de ACID são necessárias
- Seus dados são previsíveis e altamente estruturados
- Os dados são expressos de maneira relacional
- A segurança de gravação é um requisito
- Você trabalha com consultas e relatórios complexos
- Os usuários são mais centralizados

---

# Parte 3

- **Business Intelligence**
- **Papéis de profissionais de dados**

---

# Business Intelligence

- **É um sistema voltado para entregar visões de negócio**

O resultado esperado do BI são várias ferramentas representando informações relevantes ao negócio

- **Com o BI os gestores tomam decisões**

As visões que o BI oferece para os gestores são voltadas para que os mesmos tomem decisões sobre o negócio

- **Combinação e consolidação de dados**

O BI utiliza dados de um ou mais sistemas, onde ele combinando essas informações transforma em uma base de dados própria para extração das visões