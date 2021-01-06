# A Arquitetura de Aplicações Móveis e Internet das Coisas

Anotações da terceira parte do curso de **Fundamentos de Arquitetura de Sistemas** da [Digital Innovation One][DIO], ministrado pelo professor [Oswaldo Mauricio Neto][PROFESSOR].

O professor atribuiu os seguintes requisitos básicos para o entendimento do curso:

- Cloud computing
- Protocolo de comunicação de rede
- Processamento e armazenamento de dados



## Introdução a Internet das Coisas

É apresentado um histórico da rede internet, começando pela [ARPANET][ARPANET] e seu desenvolvimento até se tornar a hoje conhecida como a Internet ou rede mundial de computadores.
Após a expansão da rede surgem os primeiros aplicativos de uso amplo pelas pessoas, como o e-mail, os navegadores, chats, etc. Percebe-se que a utilização da rede serviu para ligar grupos de pessoas, o próximo passo é, não só ligar as pessoas através da rede, como também ligar as coisas (o que não é uma pessoa).
O primeiro passo é implantar sensores em todas as coisas, como dispositivos de uso no dia a dia e também no ambiente, objetivando a coleta de dados. Esses dados são analisados e utilizados para na tomada de decisões e na criação e aprimoramento das coisas e atividades do dia-a-dia.

Nesse contexto são apresentados os principais conceitos de Internet das Coisas (IOT), sendo eles:

- **Coisas**: objeto da conexão e coleta de dados;
- **Nuvem**: o ambiente de armazenamento e processamento dos dados coletados;
- **Inteligência**: o processo de utilizar os dados e a rede para inferir conhecimento e utilizá-lo como vantagem competitiva.

Nos são apresentadas as *Smart Building* (edificações inteligentes) como exemplo de coisas que podem utilizar a IoT. Essas construções têm vários sistemas e componentes que ao serem monitorados por sensores geram dados que podem ser utilizados para o aperfeiçoamento de questões como: a segurança da edificação; prevenção de incêndios; autorização de acesso à áreas restritas; dentre outras.

 Outro exemplo apresentado é a *smart home* (casa inteligente), análoga às *smarts buidngs*, ela pode através de seus sensores reagir aos seus ocupantes de forma inteligente e oferecer serviços que facilitem os seus dia-a-dias.

 Mais outros exemplos são: os *Wearables*; na Agricultura; *Smart trasnportation*; *RFID Supply Chain* (cadeia de suprimento utilizando radio frequência); e *Energy Efficiency* (redes de energia que utilizam informações para obter mais eficiência).

 O atual momento está chegando na computações ubíqua, quando a tecnologia passa a integrar as nossas vidas de forma comum e transparente, conforme [Mark Weiser][MARK_WEISER].

 Os principais desafios da Internet das Coisas são questões como:

 - Privacidade e Segurança;
 - Quantidade exponencial de dispositivos conectados na rede;
 - Desafio na armazenagem e processamento da massa de dados gerados;
 - Gerar valor a partir dos dados coletados.

## Arquitetura da Internet das Coisas

O primeiro passo é saber como conectar as coisas. Nesse quesito existem muitas soluções, desde soluções mais simples até soluções mais industriais e produtos mais completos que encapsulam as questões mais técnicas e oferecem transparência aos usuários. Exemplos desses últimos são *home assistents*, *Google Assistent* e Amazon Alexa, que funcionam através de comandos de voz.

No processo de escolha dos produtos deve-se levar em consideração atributos como:

- Baixo consumo de energia;
- Rede de dados limitado;
- Resiliencia;
- Segurança;
- Customização;
- Baixo custo.

Um exemplo de plataforma é o Arduino, que tem como princípio ser uma plataforma de prototipagem. Ele é modular e pode ser utilizado para fazer muitas coisas. é programado na maioria das vezes utilizando-se as linguagens C/C++.

Para embarcados que precisam de maior confiabilidade e controle mais avançado de dados utilizam-se os MCUs (microcomputador de chipo único), eles possuem um sistema operacional de tempo real, onde o tempo de resposta é respeitado conforme definição.

Outras soluções são os minicoputadores, como exemplo o Raspberry Pi, que é um computador completo com sistema operacional linux, permitindo o uso de muitas linguagens e ferramentas de desenvolvimento desse sistema.

O caso de exemplo apresentado é um sistema de rastreamento de veículos. Nesse exemplo é indicado o uso de GPS Trackers ou smartphones para a coleta da geolocalização. No cenário de utilização de ambos os dispositivos para a coleta, surge a necessidade de definir um protocolo único de comunicação. O [**MQTT**][MQTT] (MQ Telemetry Transport or Message Queuing Telemetry Transport) é um protocolo indicado, é o principal protocolo de comunicação para IoT. O MQTT foi desenvolvido pela IBM, está na base do TCP/IP, é um protocolo de mensagem assíncrona (M2M, máquina para máquina), e que foi padronizado pela OASIS.

Diferentemente do modelo de arquitetura cliente/servidor,o uso do MQTT apresenta a arquitetura de pub/sub. Utiliza-se um message brocker que recebe as publicações dos dispositivos com os dados coletados e as envia para as aplicações inscritas para aquela mensagem.

[DIO]:https://web.digitalinnovation.one "Digital Innovation One"
[PROFESSOR]:https://linkedin.com/in/omneto "Oswaldo Mauricio Neto"
[ARPANET]:https://pt.wikipedia.org/wiki/ARPANET "ARPANET"
[MARK_WEISER]:https://pt.wikipedia.org/wiki/Mark_Weiser "Mark Weiser"
[MQTT]:https://pt.wikipedia.org/wiki/MQTT "MQ Telemetry Transport or Message Queuing Telemetry Transport"
