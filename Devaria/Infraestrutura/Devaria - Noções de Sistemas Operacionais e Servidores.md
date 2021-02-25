# Parte 1

- O que é um servidor
- Os tipos de servidores
- Servidor de aplicação

---

## Servidor

- Fornecimento de serviços

Responsável por prover serviços diversos para outros computadores.

- Computadores mais robustos conectadas em redes

Máquinas conectadas na LAN, MAN e WAN prontos para receber chamadas de serviços específicos.

---

### Tipos de Servidor

- Servidor de Aplicação
- Servidor de Banco de Dados
- Servidor de Arquivos
- Servidor de Impressão
- Servidor de E-mail
- Servidor de Proxy
- Servidor de Mídia

---

### Datacenters

- Conjunto de servidores

Ambiente com vários servidores e com uma infraestrutura que gera segurança e disponibilidade.

- Em empresas corporativas

Chamamos datacenters de empresas corporativas de On-Premisse.

- Empresas que vendem serviços

Datacenters especialistas em vender serviços de tecnologia através de datacenters.

---

### Datacenters provedores

- Infraestrutura elétrica

A parte de eletricidade é um ponto chave em um datacenter, pois além da energia da concessionária, elas possuem geradores

- Infraestrutura de redes

Tanto a rede local do Datacenter quanto a conexão de internet são cruciais.

- Infraestrutura de servidores

Datacenters contam com uma estrutura de servidores de altíssimo nível de performance e tecnologia utilizando o conceito de Virtualização.

---

### Virtualização de servidores

É uma técnica utilizada para transformar um servidor físico em servidores virtuais.

---

### Servidor de Aplicação

- Responsável pelo processamento

Com servidores de aplicações os computadores podem acessar sistemas simultaneamente através da rede.

---

### Como funciona o servidor de aplicação?

- Cliente / Servidor

O acesso ao sistema com servidor utiliza o conceito de cliente / servidor, e na maioria das vezes utiliza o protocolo HTTP.

- FrontEnd vs BackEnd

O Frontend é utilizado pelo cliente e o Backend é de responsabilidade do servidor.

---

### FrontEnd vs BackEnd

- O Frontend é executado no cliente.
- A execução do código em frontend é processado pelo cliente (computador, notebook, celular).
- Todo o visual do sistema é de responsabilidade do FrontEnd.

- O Backend é executado e instalado no servidor.
- Todos os processamentos dos dados são realizados no Backend do lado do servidor.
- É o servidor que salva e consulta dados no banco de dados.

- Frontend chama o Backend para pegar e enviar as informações.

---

### Alguns exemplos de servidores de Aplicações

- Games
- ERPs
- Banklines
- Redes Sociais

---

# Parte 2

### Servidor de E-mails

- Responsável por centralizar E-mails

Todos os e-mails provenientes de um domínio são direcionados para um servidor que é responsável por controlar os e-mails.

- Receber e Enviar e-mails

Os serviços do servidor de e-mail possibilitam o envio (SMTP) e o recebimento de e-mails (POP ou IMAP).

- Anti-Spam são essenciais

Responsável por filtrar os e-mails e evitar que os usuários estejam totalmente expostos a códigos maliciosos e conteúdos indesejados.

---

### Servidor de Arquivos

- Responsável por armazenar arquivos

Centralizador de arquivos em um servidor, que pode ser em formato de Storage.

- Segurança e alta disponibilidade

Os servidores de arquivos demandam que estejam sempre disponíveis e com segurança para não ter o risco de pessoas sem privilégios acessarem.

---

### Servidor de Arquivos

- **RAID**

Redundant Array of Inexpensive Disks

**RAID 0** - Junção de vários HDs em um

**RAID 1** - Redundância completa

**RAID 5** - Junção de vários HDs com redundância pariada

**RAID 0 + 1** - Junção de vários HDs com redundância e junção

---

### Servidor de Banco de Dados

- Responsável por armazenar dados

Todos os dados que são salvos pelos sistemas são armazenadas pelo servidor de banco de dados.

- Existem dois tipos de banco de dados
    - Banco de dados relacionais
    - Banco de dados não relacionais
- Exemplos de Bancos de Dados
    - Microsoft SQL Server
    - MySQL
    - MongoDB
    - Oracle
    - PostgreSQL
    - ...

---

### Servidor de Impressão

- Controla todas as impressões de uma rede

Todos os sistemas que disparam impressões passam por um servidor para gerenciamento.

- Empresas outsourcing

Em uma empresa que aluga impressoras, o servidor de impressão é extremamente essencial, pois a empresa cobra pela quantidade de impressões e o servidor controla esses dados.

---

### Servidor de Proxy

- Funciona como intermediador

O acesso da internet através de computadores podem passar por servidores Proxy para aumentar a segurança e performance de uma empresa no acesso da internet.

- Serviços que o Proxy oferece
    - Filtros de conteúdo
    - Caching
- Open Proxy

São servidores públicos que oferecem os serviços de proxy e vários robôs utilizam para mascarar a identidade do requisitante.

---

### Servidor de Mídia

- Centraliza e controla arquivos de mídia

Com um servidor de Mídia todos os dispositivos acessam pela conectividade DLNA (Digital Living Network Alliance).

- Compartilhamento de mídias entre dispositivos

Todos os usuários compartilham um armazenamento centralizado dos arquivos de mídia sem sobrecarregar seus discos.

- Storage NAS da Qnap

---

### Formatos de servidores

- Torres
- Racks
    - Switch KVM - Controla vários servidores

---

# Parte 3

## Sistemas Operacionais

Sistema responsável pela comunicação com as peças do computador. É o SO que executa comandos para os periféricos.

- Intermediador entre as Aplicações e os Hardwares
- Gerencia todos os recursos de hardware

---

### Importância do Sistema Operacional

- Menos complexidade para programar
- Maior portabilidade entre os dispositivos

---

### Tipos de interfaces

- Interface de Janelas
- Linha de comando
    - É uma linguagem de comunicação com o sistema operacional

---

# Parte 4

### Formas de processamento do Sistema Operacional

- Monoprogramação

Os recursos de hardware são utilizados a um único programa

- Multiprogramação

Capaz de rodar vários programas ao mesmo tempo

---

### Kernel

- Coração do computador, sendo a parte mais importante de um sistema operacional
- É o Kernel que é responsável pela comunicação e os comandos para as peças do computador
- Ele decide as prioridades de execução dos programas, bem como decide qual tarefa o processador vai executar.
- Responsável também pelo gerenciamento de todas as peças do computador e quando serão utilizadas

---

### Estruturas de Sistemas Operacionais

- Monolítica - Único módulo para executar um conjunto de programas
- Microkernel - São estruturas enxutas para comunicação com os hardwares
- Camadas - O sistema operacional é dividido em módulos de forma hierárquica

---

### UNIX

- Primeiro sistema operacional, foi criado em 1960, e é considerado o pai dos SO.
- O Unix foi o primeiro sistema a trabalhar com multitarefas e isso lhe tornou bem popular.
- O Mac e o Linux utilizam uma arquitetura baseada em Unix.
- Um sistema Uni é orientado a arquivos, quase tudo nele é arquivo.

---

### LINUX

- O Linux é um sistema de código aberto, por se tratar de uma marca sem fins comerciais
- Por ser aberto, não significa que ele é fácil de ser customizado e cada um usa o seu
- Muito utilizado em servidores de diversos tipos, mas possui versões desktops bem amigáveis
- Como não é um sistema comum utilizado para as pessoas, o Linux não sofre com uma quantidade de vírus como o Windows

---

### WINDOWS

- A Microsoft é a dona do sistema operacional Windows que foi introduzido pelo Bill Gates em 1985
- O Windows possui versões Desktops e Servers e é o sistema operacional mais utilizado no mundo
- Linguagem base é o C e tem algumas partes em C++ e Assembly
- Versão atual para Desktop é a 10 e para servidores é a 2019

---

### MAC OS

- Seu lançamento foi em 2001 na base mais atual e em 1984 que foi constituído como MacOS Classic
- A sua arquitetura é baseada em Unix e atualmente com um núcleo chamado Darwin
- O MacOS está na versão MacOS Big Sur e é distribuído apenas para computadores pessoais da Apple

---

### IOS

- Sistema operacional para os celulares da Apple e foi criado em 2007 e foi usado no primeiro celular da Apple
- O Kernel utilizado também é o Darwin utilizando a base do Unix
- Siri é a assistente pessoal do iOS que, por comandos de voz, realiza os comandos para o hardware
- Utiliza apps com linguagem de programação nativa Swift / Object-C, bem como pode ser programado em linguagens híbridas

---

### ANDROID

- Esse sistema operacional é utilizado em celulares de diversos fabricantes e é mantido pela Google
- O Kernel utilizado pelo Android é o Linux que também tem como base o Unix
- Também é utilizado para relógios, carros, TVs, consoles de games entre outros dispositivos
- Utiliza apps com linguagem de programação nativa Java / Kotlin, bem como pode ser programado em linguagens híbridas