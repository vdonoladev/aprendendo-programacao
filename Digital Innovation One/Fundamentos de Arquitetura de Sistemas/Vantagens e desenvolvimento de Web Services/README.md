
# Vantagens e Desenvolvimento de Web Services

Ministrado por [Rafael Galleani]

## Serviços Web (Web Services)

Serviços para interoperabilidade de sistemas que visa a independência de linguagem, software e hardware, com comunicação majoritariamente através do protocolo HTTP.

No primeiro momento foi amplamente utilizado o formato XML para troca de mensagens, destacando-se os serviços SOAP.

### Vantagens Apontadas na Aula

- Linguagem comum;
- Integração;
- Reutilização de implementação;
- Segurança;
- Custos.

## Simple Object Access Protocol ([SOAP][SOAP])

Serviços Web baseados em XML, definidos pela WSDL e XSD.
- Dados no formato XML;
- Padronizada pela W3C;
- Pode ser usado com outros protocolos de comunicação além do HTTP.

### SOAP Message

Toda comunicação é envelopada em uma mensagem composta pelas sessões Header e Body.

Ex.:
```XML
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:m="http://www.example.org">
  <soap:Header>
  </soap:Header>
  <soap:Body>
    <m:GetStockPrice>
      <m:StockName>T</m:StockName>
    </m:GetStockPrice>
  </soap:Body>
</soap:Envelope>
```

### Web Services Description Language ([WSDL][WSDL])

Utilizada para descrever o serviço, seus métodos, argumentos e respostas, como também informações de acesso.

Para ver o exemplo de WSDL apresentado no curso, [clique aqui](http://soapclient.com/xml/soapresponder.wsdl).

### XML Schema Definition ([XSD][XSD])

Responsável por definir a estrutura (composição de tipos) dos dados do serviço. Toda a definição também é estruturada em XML.

Funciona como a documentação de como deve-se montar a SOAP Message.

### Ferramenta

Foi apresentada a ferramenta [SoapUI](https://www.soapui.org/) como facilitadora do processo de criação/manipulação de serviços SOAP. É possível [baixar](https://www.soapui.org/downloads/soapui/) a versão gratuita da ferramenta.

No curso foi demonstrado um exemplo simples de utilização de um serviço SOAP com a biblioteca [Zeep][LibZeep] da linguagem Python. Recriei o exemplo neste repositório com um virtalenv que pode ser executado. Para executar o exemplo tenha o [Python virtualenv][virtualenv] instalado. Dentro do repositório, vá para o diretório `ExemploPythonSOAP` e inicialize um ambiente virtual para Python 3, conforme as seguintes instruções.
```bash
> cd ExemploPythonSOAP
> virtualenv .
> source ./bin/activate
> cd soapclient
> pip install -r requeriments.txt
> python client.py
```

O arquivo python com o código exemplo entá no diretório `soapclient` com o nome `client.py`, você pode editar e executá-lo para ver o serviço SOAP em funcionamento.

## Representational State Transfer ([REST][REST])

É somente um estilo de arquitetura, diferentemente do SOAP ele não é um protocolo. No REST pode-se utilizar vários formatos de serialização, como XML, JSON, entre outros. O formato predominante é o JSON. REST está intríssicamente ligado ao protocolo HTTP funcionando sobre ele.

### Vantagens Apontadas na Aula

- Permite integração entre aplicações e também entre cliente e servidor em páginas web e aplicações.
- Utiliza dos métodos HTTP para definir a operação que está sendo efetuada.
- Arquitetura de fácil compreensão.

### Funcionamento

O funcionamento de uma API REST é definido por requisições entre um cliente e um servidor. Essas requisições são feitas por meio dos métodos do HTTP (GET, POST, PUT, DELETE, OPTIONS, ...), e o servidor retora nos dados do estado do objeto serializado com algum formato estabelecido na API.

Para uma API ser considerada REST ela deve seguir o modelo da arquitetura, basicamente utilizar os métodos HTTP com as suas funções estabelecidas nesse estilo arquitetural.


Método HTTP | Funcionálidade no REST
 ---:       | :--- 
 **GET**    | Operação de consulta do estado do recurso 
 **POST**   | Operação de criação do recurso 
 **PUT**    | Operação de atualização do recurso 
 **DELETE** | Operação de exclusão do recurso

## Application Programming Interface ([API][API])

São um conjunto de operações ou rotinas disponibilizadas por uma aplicação para que outras possam utilizar suas funcionalidades ou dados, de modo a permitir uma integração entre ambas.

## JavaScript Object Notation ([JSON])

É um formato de serialização de dados, utilizado para representar objetos da linguagem de programação JavaScript. Suas principais características:

- É leve se comparado a outros modelos mais verbosos como o XML;
- Utiliza uma estrutura de chave e valor e também de listas;
- Formato popular amplamente utilizado em troca de mensagens entre sistemas;
- Legível por máquinas e humanos.


## Códigos de Estado do HTTP

Os [códigos de estado][HTTPStatusCode] do HTTP são utilizados em APIs REST para informar o estado da operação solicitada ao servidor. Os códigos seguem essas definições:

Intervalo | Função
--: | --
**1xx** | Informativo
**2xx** | Sucesso
**3xx** | Redirecionamento
**4xx** | Erro do cliente
**5xx** | Erro do servidor




[DIO]:https://web.digitalinnovation.one "Digital Innovation One"
[Rafael Galleani]:https://github.com/rafegal
[SOAP]:https://pt.wikipedia.org/wiki/SOAP
[REST]:https://pt.wikipedia.org/wiki/REST
[WSDL]:https://pt.wikipedia.org/wiki/Web_Services_Description_Language "WSDL"
[XSD]:https://pt.wikipedia.org/wiki/XML_Schema
[LibZeep]:https://docs.python-zeep.org/en/master/ "Zeep: Python SOAP client"
[virtualenv]:https://virtualenv.pypa.io/en/latest "Virtualenv"
[API]:https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es "Interface de Programação de Aplicações"
[JSON]:https://pt.wikipedia.org/wiki/JSON
[HTTPStatusCode]:https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
