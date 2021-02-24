# Parte 1

- O que é Infraestrutura
- O que é Hardware
- Como funciona um computador

---

## O que é Infraestrutura?

Sistema básico que corresponde aos serviços públicos de um município; a coleta de lixo diz respeito á infraestrutura de uma cidade.

Suporte invisível que sustenta uma construção: a infraestrutura do prédio.

- A base para o funcionamento da tecnologia

A infraestrutura de tecnologia da informação é composta de recursos físicos e virtuais que suportam o fluxo, armazenamento, processamento e análise de dados.

> Infraestrutura não é o fim e sim o meio

---

### Exemplos de infraestrutura de TI

Alguns tipos de aplicação de infraestrutura de Tecnologia da Informação

- Câmeras

Conjunto de equipamentos e softwares que configurados proporcionam um gerenciamento de câmeras.

- Nuvem

Ativos tecnológicos que disponibilizam serviços pela internet para uso de vários fins.

- Impressão

Conjunto de impressoras e softwares para gerenciar e permitir impressões de diversos formatos.

- Redes de computadores

Conjuntos de equipamentos e softwares para sustentar uma rede de computadores.

- Servidores

Conjuntos de equipamentos e softwares que sustentam o funcionamento de servidores.

- Segurança

Conjunto de equipamentos e softwares que garantem a segurança da informação.

---

### Enraizando o conceito das principais camadas

Usuário → Software → Sistema Operacional → Hardware

---

### Principais exemplos de Hardware

- Impressoras
- Servidores
- Celulares
- Computadores
- Notebook
- Monitores

---

### Principais Componentes de um computador

- Processador
    - Também conhecido como CPU - Unidade Central de Processamento
    - Calcular e realizar tarefas determinadas pelo usuário e é considerado o cérebro do computador
    - Os núcleos de processamento são capazes de processar multitarefas
    - Partes mais importantes do processador: ULA (Aritmética) - Clock (Velocidade) - Cache (Guardar) - Registradores (Regras - ULA)
- Memória RAM
    - É a memória temporária de um computador
    - Utilizada para o processar acessar os dados mais rápidos para fazer cálculos
    - É utilizada sempre quando os programas e serviços estão sendo executados
    - Dois tipos de memória: SDR e DDR, sendo que a versão 4 é a mais potente
- Hard Disk (HD)
    - O Hard Disk Drive é, ainda hoje, a principal forma de armazenar dados em um computador. Mesmo com a existência do SSD, o atual substituto do HD, eles reinam na maioria dos PCs de mesa e notebooks
    - Solid Slate Drive
        - Um SSD é o substituto e concorrente do HDD, a peça traz uma série de melhorias, principalmente de velocidade, para a máquina, seja um desktop ou um notebook
- Placa de Rede
    - Responsável pela conexão com a rede de computadores
    - Todos os dados que saem e entram no computador passam pela placa de rede, seja ela um placa de rede sem ou com fio
    - As placas de redes podem transmitir em velocidades que variam de 100Mbps até 10Gbps, e isso determina a performance que o computador tem na transmissão de dados com a internet por exemplo
- Fonte
    - Equipamento que alimenta a energia de um computador, notebook e servidores. É responsável por distribuir a energia necessária para cada peça dentro da máquina, fazendo com que todos tenham o mesmo funcionamento.
    - Existem diversas potências de fonte e tudo depende de qual equipamento ela vai alimentar, pois quanto mais potente seja o equipamento mais capacidade de energia a fonte tem que prover
    - Eficiência: Na hora de comprar é muito importante escolher uma bem avaliada pelo 80plus
- Placa mãe
    - É a peça do computador que interliga todas as outras mencionadas anteriormente, ou seja, ela é responsável pela conexão entre o processador, memória RAM, Fonte, placa de rede, placa de vídeo, HD, driver de CD, entradas USB e outros componentes
    - Além de interligar as peças a placa mãe trafega com todos os dados entre as peças, então ela desenvolve um papel extremamente importante
    - Os modelos diferenciam pois cada placa tem suporte para peças com características diferentes e com as evoluções das peças as placas mães vão se adaptando
- Placa de Vídeo
    - É o componente responsável por disponibilizar o vídeo no monitor, controlando e processando todos os gráficos para que o usuário possa visualizar em formato de imagem e vídeos
    - A GPU (Unidade de Processamento Gráfico) é a parte mais importante da placa de vídeo. É o processador responsável pela execução dos cálculos e rotinas que resultam nas imagens exibidas no monitor.

# Parte 2

- O que é redes de computadores
- Protocolos de redes

---

## O que é redes?

É a conexão de equipamentos (computadores, notebooks, celulares ...) para permitir a troca de informações entre eles, possibilitando assim a utilização dos sistemas.

### Classificação das redes

- LAN

Mais conhecida como rede local, que é a interligação de equipamentos em um mesmo ambiente.

- MAN

Rede metropolitana, ou seja, é uma interligação de equipamentos em uma distância regional.

- WAN

Interliga equipamentos em longas distâncias levando os dados para diversos países e regiões.

---

## Como é distribuído os dados?

- Redes móveis
- Redes residenciais
- Redes corporativos

---

## Mas os dados trafegam como?

Através de pacotes (0, 1)

---

## Modelo OSI

1. Física - São os próprios equipamentos de rede (Bit puro)
2. Ligação de dados - Transmissão física dos dados
3. Rede - Endereçamento dos dispositivos de rede
4. Transporte - Controle do fluxo dos pacotes de origem e destino
5. Sessão - Responsável por iniciar, gerenciar e terminar as conexões
6. Apresentação - Preparar e traduzir os dados dos pacotes recebidos
7. Aplicação - Interação com o usuário (Próprias aplicações como o Browser)

---

## Protocolo de redes

É uma bagunça a rede de computadores?

Como que as máquinas se entendem?

- Protocolo são regras e normas utilizadas para a comunicação entre máquinas e equipamentos

Vamos falar de IP, TCP, HTTP, FTP, SMTP, SSH e DNS

---

## Protocolo HTTP e HTTPs

- Protocolo utilizado para a comunicação entre cliente e servidor.
- Toda comunicação HTTP funciona com uma requisição e uma resposta.
- A aplicação mais comum do HTTP é a navegação de sites no Browsers, troca de dados entre sistemas e Mobile.

---

## Protocolo HTTP e HTTPs

- Campo da Mensagem
    - Indica o tipo da mensagem e informações adicionais para a requisição
- Corpo da Mensagem
    - Contém o conteúdo da mensagem para o servidor
    - Alguns tipos de conteúdo:
        - application/json
        - image/jpeg
        - text/plain
        - text/html

---

## Protocolo HTTP e HTTPs

- Método de Requisição - **GET**
    - Requisição do cliente para o servidor para **obter** alguma informação.
- Método de Requisição - **POST**
    - Requisição do cliente para o servidor para **enviar** alguma informação para gravação.
- Método de Requisição - **PUT**
    - Requisição do cliente para o servidor para **atualizar** alguma informação.
- Método de Requisição - **DELETE**
    - Requisição do cliente para o servidor para **deleção** de alguma informação.

---

## Protocolo HTTP e HTTPs

- **1xx: Informational (Informação)** - Informa que a requisição foi atendida e está em processo.
- **2xx: Success (Sucesso)** - Requisição do cliente foi bem sucedida.
- **3xx: Redirection (Redirecionamento)** - Ação adicional que deve ser tomada.
- **4xx: Client Error (Erro no cliente)** - Avisa que o cliente fez uma requisição que não pode ser atendida.
- **5xx: Server Error (Erro no servidor)** - Erro no servidor ao cumprir uma requisição válida.

---

## Segurança HTTP/HTTPs

- Uso do SSL/TLS

Essa prática faz com que o HTTP vire HTTPS, sendo configurado um certificado para gerar autenticidade e criptografia.

- Uso de autenticação nas requisições

É uma forma de garantir que quem requisite tem autorização dos dados. 

**Alguns protocolos mais utilizados:** 

No Auth

Basic Authentication

oAuth2 (ex com Bearer token)

---

# Parte 3

- Mais alguns protocolos importantes
    - SMTP, FTP, DNS, SSH, IP e TCP
- Equipamentos e periféricos de rede

Quais são os principais equipamentos e periféricos de redes e para que servem

---

## Camada de rede: Protocolo IP

IPv4 (Internet Protocol version 4): é um protocolo de comunicação usado entre duas ou mais máquinas em rede para encaminhamento dos dados.

**Exemplos:** 192.168.0.1 ou 201.154.88.6 (Acesse www.meuip.com.br)

IPv6 (Internet Protocol version 6): é a versão mais atual do protocolo IP. Sua criação é fruto do esforço do IETF para criar a nova geração do IP.

**Exemplos:** 2001:0DB8:AD1F:25E2:CADE:CAFE:FOCA:84C1

**Diferença**

4 bilhões (4x109) de endereços IP versus 340 undecilhões (1036) endereços do IPv6

---

## Protocolo TCP/IP

- Transmission Control Protocol
- Responsável pelas regras de transmissão dos dados para toda a internet
- Possui quatro camadas base: Aplicação → Transporte → Internet → Acesso a Rede

- De baixo desse protocolo tão importante existem diversos outros como:
    - HTTP
    - SMTP
    - FTP
    - DNS
    - ...

---

## FTP

É um protocolo de transferência de dados, que em português significa **Protocolo de Transferência de Arquivos.**

- Utilizado muito para enviar arquivos para servidores
- O SFTP ou FTPS é uma forma mais segura

Um utiliza SSH para autenticação e criptografia e a outra forma utiliza SSL/TLS (certificado digital)

- Programar utilizados para conectar via FTP

O mais famoso deles é o FileZilla, mas você pode utilizar até mesmo o Windows Explorer

---

## SMTP - POP3 - IMAP

SMTP - **Protocolo de Transferência de Correio Simples**

- Responsável pelo envio de e-mails

POP3 - **Protocolo dos Correios**

- Responsável pelo recebimento de e-mails
    - O e-mail que é transferido desse protocolo é baixado para o ambiente local, retirando esse e-mail do servidor

IMAP - **Protocolo de acesso a mensagens da internet**

- Responsável pelo recebimento de e-mails
    - Todo o e-mail baixado por esse protocolo é preservado no servidor mantendo o sincronismo das mensagens

---

## SSH

**Protocolo de rede criptográfico**

- Canal seguro para conexão com servidores

Método comum utilizado para conexão remota com servidores, através de uma autenticação.

- Envio de linhas de comando

Servidores de aplicações podem receber comandos via SSH de um administrador, como por exemplo inicial, pausar ou desligar um serviço.

---

## DNS

**Sistema de Nomes de Domínio**

- Responsável pela gestão de nomes para computadores

Com o DNS você não precisa chamar um site, um serviço ou um computador pelo IP.

- O DNS não é uma gestão centralizada

A hierarquia de Gestão do DNS é essencial para ter alta disponibilidade e perfomance.

São somente 13 servidores raízes no mundo, sendo 10 nos USA, um no Japão, um na Suécia e outro na Holanda.

---

## Como funciona uma rede LAN?

### Modem

- A junção do **Mod**ulador-**Dem**ulador
- Transforma os sinais digitais em analógicos e vice-versa
- Responsável por pegar os pacotes e transformá-los em analógicos
- Geralmente são as operadoras que instalam e se responsabilizam pelos Modems

### Roteador

- Responsável pela distribuição dos pacotes
- Verifica as melhores rotas para envio e recebimento
- Residências costumam utilizar roteadores com antenas Wireless
- Empresas maiores não tem o costume de utilizar Wireless junto com roteadores

### Firewall

- Monitora todo o tráfego de saída e entrada de uma rede
- O firewall pode permitir/bloquear qualquer pacote de acordo com alguma característica
- Responsável por segurar/proteger ataques de hackers
- Firewalls podem estar em formato de software ou hardware embarcado com um software

### Switch

- São os responsáveis por conectar todos os equipamentos de uma rede
- Existem os switches gerenciáveis e os não gerenciáveis
- São compostos de portas cabeadas

### Access Point

- Dispositivo que permite equipamentos se conectarem sem fio a rede
- Uma forma prática e segura para escalar a rede sem necessidade de aumentar a infraestrutura
- Possuem controles como separação de redes de convidados até mesmo limitação de banda

---

# Parte 4

- Infraestrutura em Cloud

Cloud tem haver com infraestrutura? Como posso entender melhor esse conceito?

---

## Computação na nuvem

É  disponibilização de recursos tecnológicos pela internet com uma cobrança dos clientes através do uso do recurso

- IaaS - **Infraestrutura como Serviço**
- PaaS - **Plataforma como Serviço**
- SaaS - **Software como Serviço**

O Gartner prevê que, em 2025, 80% das organizações migrarão totalmente dos data centers locais para a hospedagem em nuvem

---

### Benefícios de utilizar Cloud

- Agilidade

Você tem um leque gigante de serviços e recursos disponíveis em poucos cliques.

- Elasticidade (Escalabilidade)

Se seu negócio crescer e precisar de mais recursos tecnológicos no Cloud é possível escalar.

- Economia

Se bem escolhido e configurado. Os recursos que são utilizados serão de menor custo.

- Geolocalizaçao

A nuvem te permite ampliar o uso em diversas regiões.

---

### Alguns serviços em IaaS

- Servidores de armazenamento

Possibilidade de configurar servidores de arquivos de acordo com a demanda.

- Segurança

É possível configurar Firewalls para ambientes empresariais e outras ferramentas de segurança.

- Servidores de usuários

Configurar todos os acessos de rede pelo Cloud como por exemplo o Active Directory.

- Backups

Todas as aplicações, banco de dados e arquivos podem ser armazenados como Backup nos servidores Cloud.

---

### Os principais provedores

- AWS - Amazon Web Service
- Microsoft Azure
- Google Cloud