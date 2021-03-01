Browser—————Request—————>Servidor

Browser←————-Response—————Servidor

# Message

- Message
    - Pedido (request)
        - Methods
            - Definição do tipo de pedido
            - Qual ação eu quero fazer no servidor
            - Exemplo
                - GET
                    - Pegar um recurso
                        - Recurso
                            - Local que irei enviar o pedido
                            - Usarei uma URL para acessar o recurso
                            - Exemplo
                                - https://google.com/
                                - http://localhost:3000/posts?q=oracle
                - POST
                    - Criar um recurso
            - Headers
            - Body
        - Resposta (response)
            - Status Code
                - Resposta do servidor sobre o estado do pedido / resposta
                - Exemplo
                    - 200
                    - 301
                    - 404
                    - 500
            - Headers
            - Body
        - Request / Response
            - Headers
                - Campos informativos
                - Propriedade: Valor
                - Exemplo
                    - Content-Type: application/json
                    - User-Agent: Chrome
                    - Request URL: www.google.com
            - Body
                - HTML
                - Conteúdo
                - JSON