# Conceito de Arquitetura em Aplicações para Internet

Segunda parte do curso de Fundamentos de Arquitetura de Sistemas da [Digital Innovation One][DIO]. Aulas ministradas pelo professor [Jefferson Stachelki][PROFESSOR].

Alguns conhecimentos básicos são importantes para o entendimento do conteúdo apresentado. Seguem links de leituras rápidas cobrindo alguns desses tópicos levantados pelo professor.

- [HTTP][HTTP] (Vídeo explicativo [aqui][VIDEO_HTTP]);
- [Proxy][PROXY] (Vídeo explicativo [aqui][VIDEO_PROXY]);
- [REST API](./VantagensDesenvolvimentoWebServices.md) (Vídeo explicativo [aqui][VIDEO_REST]);
- [Docker][DOCKER] (Vídeo explicativo [aqui][VIDEO_DOCKER]);
- [Kubernets][KUBERNETES] (Vídeo explicativo [aqui][VIDEO_KUBERNETES]);

## Tipos de Arquitetura

Os pricipais tipos de arquiteturas são **monolito** e **micro serviços**.

### Monolito

O primeiro tipo é quando existe uma única aplicação que cobre as os requisitos possuindo uma única base de códigos. Geralmente as aplicações iniciam seguindo essa arquitetura no primeiro momento. Esse tipo de aplicação é escalada com redundância de instâncias. Um proxy serve para redirecionar as requisições paras as instâncias ativas, de modo a balancear a carga dessa demanda. Conforme a figura a seguir:

![Modelo da arquitetura monolito apresentado pelo professor [Jefferson Stachelki][PROFESSOR]](https://raw.githubusercontent.com/jeffhsta/fundamentos_arquitetura/master/monolito.png) Fonte: professor [Jefferson Stachelki][PROFESSOR], repositório de suporte ao curso.

### Micro serviços

Esse modelo de arquitetura pode ser implementado de diversas maneiras. Diferente do monolito onde existe somente uma aplicação, nesse modelo têm-se várias aplicações cada qual responsável por uma parte da operação total.

São apresentados três tipos de micro serviços que foram identificados no curso como tipos 1, 2, e 3.

#### Tipo 1

Cada serviço pode ser escalado individualmente para atender a variações da demanda, de modo análogo ao monolito, porém cada serviço desse possue sua própria base de código e tem de se comunicar com os demais para que realize as operações da aplicação. Devido a o aumento da troca de mensagens entre os serviços há uma tendência ao caos conforme a aplicação vai crescendo e o número de serviços vai aumentando, o que torna mais difícil a manutenção da aplicação. A seguir, a imagem da arquitetura micro serviço do tipo 1:

![Arquitetura de micro serviço, template 1](https://raw.githubusercontent.com/jeffhsta/fundamentos_arquitetura/master/microservicos1.png) Fonte: professor [Jefferson Stachelki][PROFESSOR], repositório de suporte ao curso.

#### Tipo 2

É uma arquitetura que ainda possue vários serviços porém os serviços não possuem comunicação direta entre eles, para isso eles se comunicam através de **Message Broker**. A vantagem desse modelo é o desacoplamento de cada serviço com os demais em relação a comunicação direta. Esse modelo fica com sua integridade submetida à integridade do message broker, de modo que se esse falhar toda a aplicação pode ser comprometida. Como exemplos de message brockers, segundo o professor, temos o [AWS SQS][AWS_SQS], [AWS Kinesis][AWS_KINESIS], [RabbitMQ][RABBITMQ], [Apache Kafka][APACHE_KAFKA], entre outros. A seguir, a imagem da arquitetura micro serviço do tipo 2:

![Arquitetura de micro serviço, template 2](https://raw.githubusercontent.com/jeffhsta/fundamentos_arquitetura/master/microservicos2.png) Fonte: professor [Jefferson Stachelki][PROFESSOR], repositório de suporte ao curso.

#### Tipo 3

Esse estilo de arquitetura de micro serviço segue um **modelo de pipeline**, esse último gerencia cada requisição recebida do proxy, estruturando cada funcionalidade como uma série de passos que são realizados pelos serviços, em ordem estabelecida conforme a programação, e que no fim resultam na realização dessa funcionalidade. É importante escolher a melhor tecnologia conforme a necessidade do domínio da aplicação, e manter os serviços simples para proporcionar uma fácil manutenção do sistema. Exemplos citados de gerenciadores de pipeline são [Camunda](https://camunda.com/) e os ofertados pelos serviços de nuvem como os da Amazon.
É importante que o serviço de pipeline saiba reverter os passos efetuados em caso de um passo falhar no meio do processamento, buscando manter a integridade da aplicação. Segue a imagem da arquitetura de micro serviço do tipo 3:

![Arquitetura de micro serviço, template 3](https://raw.githubusercontent.com/jeffhsta/fundamentos_arquitetura/master/microservicos3.png) Fonte: professor [Jefferson Stachelki][PROFESSOR], repositório de suporte ao curso.

## Comparativo Entre as Arquiteturas

Arquitetura | Pros | Contra
-- |:-- | --
Monolito | Baixa complexidade<br>Monitoramento simplificado| Stack única<br>Compartilhamento de recursos<br>Acoplamento<br>Escalabilidade mais complexa
 Micro serviço (Tipo 1) | Stack dinâmica<br>Simples escalabilidade | Acoplamento<br>Monitoramento mais complexo<br>Provisionamento mais complexo
 Micro serviço (Tipo 2) | Stack dinâmica<br>Simples escalabilidade<br>Desacoplamento | Monitoramento mais complexo<br>Provisionamento mais complexo
 Micro serviço (Tipo 3) | Stack dinâmica<br>Simples escalabilidade<br>Desacoplamento<br>Menor complexidade | Provisionamento mais complexo<br>Plataforma inteira dependente do gerenciador de pipeline

O **monolito** tem como pros a baixa complexidade do sistema, que por possuir uma única base de código torna fácil a sua manutenção, como o logging e monitoramento, uma vez que turdo é feito em um só lugar. Esse tipo de arquitetura tem como pontos fracos: utilização de uma única stack, pois ao ser desenvolvido em uma determinada linguagem de programação ficará dependendo da mesma para as suas funcionalidades; o compartilhamento de recursos fica discrepante entre as demandas uma vez que não se pode escalar uma única funcionalidade, mas sim todo o sistema; o forte acoplamento entre as suas funcionalidades, dado que todo o sistema está na mesma base de código; e torna a escalabilidade mais complexa devido ao fato de para cada réplica todos os recursos são duplicados gerando mais demanda de recursos.

O **micro serviço do tipo 1** oferece como benefícios a possibilidade de uma stack dinâmica, pois como as funcionalidades são desacopladas podem ser desenvolvidas em diferentes linguagens de programação e tecnologias; também são simples de escalar por permitir a replicação sob demanda dos serviços sobrecarregados de modo independente, e como são pequenos demandam poucos recursos nesse processo. Como contra, têm-se: a presença de forte acoplamento entre os serviços, pois eles estão atrelados entre sí pelas suas comunicações uns com os outros; o aumento da complexidade de monitoramento devido a quantidade de serviços e suas bases de código, independentes e variadas em stacks, para serem integrados de modo a permitir esse monitoramento; e provisionamento mais complexos pois deve-se provisionar muitos serviços, geralmente utiliza-se kubernetes e docker para facilitar esse processo.

O **micro serviço do tipo 2** ganha o desacoplamento como vantagem em relação ao de tipo 1, uma vez que ao ter-se o message brocker que oferece um contrato entre os serviços, eles deixam de depender de uma sincronização direta e passam a ser mais reativos em relação à comunicação entre sí. Como contra: o monitoramento torna-se mais complexo, até mesmo em relação ao de tipo 1, pois nesse modo as mensagens tornam-se assíncronas e surge mais um canal de comunicação entre dois serviços que é o message brocker; maior risco de provisionamento pois acrescenta-se o message brocker nesse processo e devido à necessidade de integridade do mesmo, uma vez que esse sofra falhas compromete o funcionamento da aplicação como um todo.

O **micro serviço do tipo 3** tem menor complexidade que o de tipo 2 ao tratar a comunicação como um pipeline que tem um fluxo bem definido. Dessa forma, proporciona maior clareza na visualização do fluxo como um todo; Têm como pontos fracos: o provisionamento, que aqui possa a trocar o message brocker pelo gerenciador de pipeline; e fica totalmente dependente do gerenciador de pipeline para seu funcionamento, esse que, em caso de problema, tem que reverter todo o fluxo para não deixar inconsistências, podendo dessa forma tornar-se um gargalo para a aplicação.

## Gerenciamento de Erros e Volume de Acessos

Todas as arquiteturas devem ter isso em comum. Pois precisam gerenciar error e o volume de acesso. O gerenciamento de erros é mais complexos em comunicações assíncronas, comum nos micro serviços do tipo 2, e também no pipeline.

Nas comunicações assíncronas pode ser adotado o **dead letter queue** como mecanismo de correção de erros. Que é uma fila que armazena as comunicações que sofreram erros para que essas sejam executadas mais uma vez na intenção de não ocorram novamente. Nesse caso é fácil observar o surgimento de erros através da fila, atentando para a quantidade (tamanho da fila) e as causas desses erros (mensagens).

No caso de erros de pipeline, são utilizadas filas de re-tentativas para pipelines assíncronos e mecanismos de rollback para pipelines síncronos.


[DIO]:https://web.digitalinnovation.one "Digital Innovation One"
[PROFESSOR]:https://github.com/jeffhsta "Jefferson Stachelki"

<!-- Conteúdo para estudo -->

[HTTP]:https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"
[PROXY]:https://pt.wikipedia.org/wiki/Proxy "Proxy"
[DOCKER]:https://docs.docker.com/get-started/ "Docker"
[KUBERNETES]:https://kubernetes.io/pt/ "Kubernetes"

<!-- Links de vídeos úteis -->

[VIDEO_HTTP]: https://youtu.be/fhAXgcD21iE "YouTube - Space Rails - Como funciona uma requisição HTTP?"
[VIDEO_PROXY]: https://youtu.be/Xl_X1dYN_sk "YouTube - Marcelo Franco - O que é um proxy reverso?"
[VIDEO_REST]: https://youtu.be/cRHF4trs318 "YouTube - Canal TI - REST em 6 minutos"
[VIDEO_DOCKER]: https://youtu.be/Noi4MOHrZAc "YouTube - LINUXtips - O que é Docker? Tutorial rápido  Descomplicando o Docker V1 - Parte 2"
[VIDEO_KUBERNETES]: https://youtu.be/a-2OBHlM5gU "YouTube - School of Net - Você sabe o que é o Kubernetes? | Wesley Willians"

<!-- links para referências -->

[AWS_SQS]:https://aws.amazon.com/pt/sqs/ "Amazon Simple Queque Service"
[AWS_KINESIS]:https://aws.amazon.com/pt/kinesis/ "Amazon Kinesis"
[RABBITMQ]:https://www.rabbitmq.com/ "RabbitMQ"
[APACHE_KAFKA]:https://kafka.apache.org/ "Apache Kafka"
