[HTTP (*HyperText Transfer Protocol*)](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol) é um protocolo de comunicação — na camada de aplicação segundo o modelo [OSI (*Open System Interconnection*)](https://pt.wikipedia.org/wiki/Modelo_OSI) — que define as regras de comunicação entre cliente e servidor na internet.

## **Modelo cliente-servidor**

![https://miro.medium.com/max/60/1*hnMUcqzS7B4kOgZEfhFWPw.png?q=20](https://miro.medium.com/max/60/1*hnMUcqzS7B4kOgZEfhFWPw.png?q=20)

![https://miro.medium.com/max/1200/1*hnMUcqzS7B4kOgZEfhFWPw.png](https://miro.medium.com/max/1200/1*hnMUcqzS7B4kOgZEfhFWPw.png)

Ilustração do modelo cliente-servidor

Clientes e servidores se comunicam trocando mensagens individuais. As mensagens enviadas pelo cliente (navegadores web ou qualquer outra coisa) são chamadas de **requisições** (*requests*). As mensagens enviadas pelo servidor para os clientes são chamadas de **respostas** (*responses*).

Como pode-se observar, todo o trabalho pesado fica por conta do servidor. Se por um lado facilita na manutenção e alterações a respeito da aplicação, por outro pode gerar facilmente gargalos de performance.

Entre o cliente e o servidor, há diversas outras máquinas desempenhando outras funções e atuando em outras camadas como: transporte, rede ou física.

As máquinas que operam na camada de aplicação são normalmente conhecidas como ***proxies*** e desempenham várias funções:

- Cacheamento;
- Filtragem;
- Balanceamento de carga;
- Autenticação;
- Autorização;
- Registro de informação.

# **HTTPS — A versão segura do HTTP**

Quando usamos o HTTP, todos os dados enviados pelo cliente para o servidor são enviados em texto puro. Independente da sensibilidade dos dados como login, senhas, e etc.

E por que isso é perigoso? Antes da requisição chegar até o servidor, temos vários intermediários que podem interceptar nossos dados. Isso abre muitos riscos de privacidade e segurança, afinal, podem ser dados bancários trafegando na rede sem segurança alguma.

Por isso criou-se o HTTP**S**, que é basicamente o HTTP com uma camada de criptografia que antes era [SSL (*Secure Sockets Layer*)](https://www.tecmundo.com.br/seguranca/1896-o-que-e-ssl-.htm), mas posteriormente passou a ser também [TLS (*Transport Layer Security*)](https://pt.wikipedia.org/wiki/Transport_Layer_Security). É muito comum que estas duas siglas sejam encontradas juntas como SSL/TLS por se tratarem da mesma questão de segurança.

O HTTPS para garantir segurança usa criptografia baseada em chaves públicas e privadas. Para gerar essas chaves, é preciso garantir a identidade de quem as possui é isso é feito a partir de um **certificado digital**.

Apesar disso, ainda é necessário que uma **autoridade certificadora**, que nada mais é que um órgão ou entidade confiável, garanta não apenas a identidade do site mas também a validade do certificado.

## **Como tudo funciona**

Os navegadores em posse da chave pública criptografam as informações e as enviam para o servidor, que descriptografa com a chave privada. Como temos duas chaves envolvidas chamamos isso de **criptografia assimétrica**.

A desvantagem deste tipo de criptografia é a sua lentidão. Por outro lado há a **criptografia simétrica**, que é mais rápida por utilizar somente uma chave para realizar toda a tarefa de encriptar a informação. Sua desvantagem é que por ter somente uma chave envolvida tanto pelo cliente (lembre-se, podem ser milhares deles) e pelo servidor, pode ser facilmente quebrada, portanto é insegura.

Unindo velocidade à segurança, o HTTPS consegue utilizar as duas formas de criptografia. No certificado digital há a chave pública para o cliente utilizar. O servidor fica em posse da chave privada. Porém no momento que a conexão entre eles foi estabelecida, o cliente gera uma chave exclusiva e simétrica para a conexão entre cliente-servidor e então eles deixam a criptografia assimétrica para utilizar a simétrica.

# **HTTP/2 — Otimizando o HTTP**

O HTTP surgiu na década de 90, e desde lá são mais de 20 anos de mudanças na forma que usamos a internet.

Com os celulares dominando cada vez mais o uso da internet, otimizações são mais que necessárias atualmente. Em 2015, surgiu o [HTTP/2](https://http2.github.io/) — a evolução do HTTP/1 — .

Para melhorar a performance, o corpo da resposta é comprimido de forma padrão com o [GZIP](https://pt.wikipedia.org/wiki/Gzip). Os *headers* ao invés de texto puro, são transformados em binários e comprimidos com [HPACK](https://http2.github.io/http2-spec/compression.html). Além de toda essa preocupação com performance, há também o uso de TLS por padrão, encriptando as *responses* e deixando as requisições mais seguras.

## **Cabeçalhos Statefull**

Os cabeçalhos de HTTP costumam ser repetitivos e prolixos, causando tráfego de rede desnecessário. Neste nova versão, não precisamos repetir os *headers* já enviados nas requisições anteriores e enviamos somente aqueles de por algum motivo forem diferentes, dessa forma conseguimos otimizar nossas requisições. Isso é conhecido como *Headers Statefull.*

## **Server Push**

Com a versão anterior do HTTP, as requisições funcionavam de maneira sequencial, uma atrás da outra. O cliente requisitava um HTML, logo em seguida via a necessidade de requisitar outros recursos e assim ia se desenrolando. Um recurso sendo solicitado após o outro.

Na versão 2, o servidor envia os dados para o cliente antes mesmo de ser solicitado, pois ele consegue analisar o HTML e antecipar tudo o que o cliente precisa, tornando assim o tráfego de dados muito mais otimizado.

## **Multiplexação**

Para descrever os passos de uma requisição, existem diversos modelos que descrevem os protocolos por trás desse processo. Os modelos mais conhecidos são o [OSI](https://pt.wikipedia.org/wiki/Modelo_OSI) e o [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP).

Em ambos os modelos há uma camada de transporte e ela é responsável por trazer e levar as mensagens trocadas entre o servidor e o cliente.

Dentro dessa camada, há dois protocolos especiais: TCP e UDP.

O protocolo TCP é utilizado nas requisições HTTP, pois seu índice de confiabilidade é alto. Mas tem um pequeno problema… Para garantir a confiabilidade e integridade dos dados trafegados, há uma perca de velocidade.

Disto isto, se cada requisição HTTP abrir uma conexão TCP, executar e fechar em seguida, haverá com certeza um tempo maior entre a requisição e a resposta.

Então o que acontece, no HTTP/1 existe um mecanismo chamado de *keep-alive*. O *keep-alive* determina quanto tempo, por exemplo, a nossa conexão pode ficar ativa. Ou seja, não encerra essa conexão TCP. Portanto, conseguimos realizar várias requisições com a mesma conexão TCP.

O *keep-alive* no HTTP/2 traz uma novidade. Se já há uma conexão TCP aberta, poderíamos já dar prosseguimento às próximas requisições em paralelo e de maneira assíncrona. Vamos recebendo essas resposta à medida que o servidor conseguir processar.

Esse processamento em paralelo é chamado de *Multiplexing* e traz bastante performance para as aplicações.

# **Endereços URL: Definição e estrutura**

Um endereço URL (*Universal Resource Locator*) é a maneira mais simples de um usuário acessar um site, documento ou até mesmo uma imagem. No fim das contas, uma URL é transformada em endereço IP pelo DNS (*Domain Name System*).

## **Esquema ou protocolo**

![https://miro.medium.com/max/60/0*EVMUnN0NrZzVcT9S.png?q=20](https://miro.medium.com/max/60/0*EVMUnN0NrZzVcT9S.png?q=20)

![https://miro.medium.com/max/880/0*EVMUnN0NrZzVcT9S.png](https://miro.medium.com/max/880/0*EVMUnN0NrZzVcT9S.png)

Indica o protocolo que o navegador irá utilizar para a comunicação. Há outros protocolos que são suportados pelos navegadores como *mailto,* ou *ftp.*

## **Domínio**

![https://miro.medium.com/max/60/0*Wnw1s5LN5gsOe0L9.png?q=20](https://miro.medium.com/max/60/0*Wnw1s5LN5gsOe0L9.png?q=20)

![https://miro.medium.com/max/880/0*Wnw1s5LN5gsOe0L9.png](https://miro.medium.com/max/880/0*Wnw1s5LN5gsOe0L9.png)

O endereço amigável que governa o *namespace*. Pode ser substituído pelo endereço IP, mas é inconveniente.

## **Porta**

![https://miro.medium.com/max/60/0*qe-0XWzMdim-gl8h.png?q=20](https://miro.medium.com/max/60/0*qe-0XWzMdim-gl8h.png?q=20)

![https://miro.medium.com/max/880/0*qe-0XWzMdim-gl8h.png](https://miro.medium.com/max/880/0*qe-0XWzMdim-gl8h.png)

Indica em que porta está localizado os recursos do servidor. Normalmente é emitida se for utilizada a porta padrão do protocolo HTTP (80 — HTTP, 443 — HTTPS).

## **Caminho**

![https://miro.medium.com/max/60/0*S0UMG0W3ST_EczyQ.png?q=20](https://miro.medium.com/max/60/0*S0UMG0W3ST_EczyQ.png?q=20)

![https://miro.medium.com/max/880/0*S0UMG0W3ST_EczyQ.png](https://miro.medium.com/max/880/0*S0UMG0W3ST_EczyQ.png)

Representa o endereço para obter um determinado recurso.

**Parâmetros**

![https://miro.medium.com/max/60/0*UZzQJmbravNzBLpF.png?q=20](https://miro.medium.com/max/60/0*UZzQJmbravNzBLpF.png?q=20)

![https://miro.medium.com/max/880/0*UZzQJmbravNzBLpF.png](https://miro.medium.com/max/880/0*UZzQJmbravNzBLpF.png)

Lista de pares chaves/valores que podem ser obtidas pelo servidor e tratadas de alguma forma posteriormente.

## **Fragmentos**

![https://miro.medium.com/max/60/0*Mz2KA2TOe6wGVGuu.png?q=20](https://miro.medium.com/max/60/0*Mz2KA2TOe6wGVGuu.png?q=20)

![https://miro.medium.com/max/880/0*Mz2KA2TOe6wGVGuu.png](https://miro.medium.com/max/880/0*Mz2KA2TOe6wGVGuu.png)

Âncora para outra parte do próprio recurso. Uma âncora representa uma espécie de “marcador” dentro do site, dando ao navegador as instruções para mostrar o conteúdo localizado naquele ponto.

# **Estado**

Ao navegarmos na internet, percebemos que ao acessar outro site, ou mesmo em seções de um mesmo domínio temos um comportamento padrão: a página recarrega por completo!

Isso ocorre justamente por que cada requisição é única e independente, e o HTTP / 1.X não guarda nenhum tipo de informações entre as requisições. Chamamos esse comportamento de *stateless,* ou seja, sem estado.

## **Cookies**

Um *cookie* é um pequeno fragmento de dados que um servidor envia para o navegador do usuário. O navegador pode então armazenar este *cookie* e enviá-lo de volta na próxima requisição.

Os *cookies* tem basicamente 3 funções principais:

1. Gerenciamento de sessão;
2. Personalização;
3. Rastreamento.

O *cookies* eram usados para armazenamento geral do lado do cliente. Isso era aceitável quando essa era a única maneira de armazenamento. Hoje, recomenda-se o uso de APIs de armazenamento mais modernas como *session storage*, *local storage* ou *IndexedDB.*

# **Métodos HTTP**

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.

## **GET**

Solicita algum dado para o servidor.

## **HEAD**

Solicita algum dado para o servidor de maneira idêntica ao método GET, porém sem conter o corpo da resposta.

## **POST**

Submete um dado a um determinado recurso. Frequentemente utilizado para causar uma mudança no estado do recurso.

## **PUT**

Altera um recurso específico.

## **DELETE**

Remove um recurso específico.

## **CONNECT**

Estabelece um túnel para o servidor identificado pelo recurso de destino.

## **OPTIONS**

Descreve as opções de comunicação com o recurso de destino.

## **TRACE**

Executa um teste de chamada *loop-back* junto com o caminho para o recurso de destino.

## **PATCH**

Utilizado para aplicar modificações parciais em um recurso.

# **Código de status HTTP**

No cabeçalho de uma resposta, há um código que determina se a requisição HTTP foi corretamente concluída. Os códigos são separados em cinco classes:

1. Informação (1XX);
2. Sucesso (2XX);
3. Redirecionamentos (3XX);
4. Erros do cliente (4XX);
5. Erros no servidor (5XX).

Os códigos mais frequentemente utilizados são: 200 (sucesso), 400 (requisição com sintaxe inválida), 404 (recurso não encontrado), 500 (erro no servidor). Existem diversos códigos de status, por isso é bacana reservar um tempo para ler com calma o que cada um significa.