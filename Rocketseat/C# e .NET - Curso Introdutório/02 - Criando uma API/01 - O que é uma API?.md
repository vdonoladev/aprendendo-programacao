**API** significa **Application Programming Interface** — em português, **Interface de Programação de Aplicações**.

Mas esquece o nome complicado — na prática, é **um meio de comunicação entre sistemas**.

---

### 🧩 Explicando de forma simples:

Uma **API** é como um **garçom num restaurante**.

- Você (o cliente) faz o pedido → a API recebe.
- A API leva seu pedido pra cozinha (o servidor).
- A cozinha prepara (processa) e devolve o prato (a resposta).
- A API traz o resultado pra você, sem você precisar entrar na cozinha.

Ou seja: **a API é o intermediário entre quem pede e quem fornece os dados ou serviços**.

---

### 💻 Exemplo prático:

Digamos que você tem um **app de clima** no celular.

Ele mostra a temperatura, mas não coleta os dados meteorológicos.

O app manda uma requisição pra uma **API de clima**, tipo:

```
GET https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=chave_aqui
```

A API responde algo assim:

```json
{
  "temp": 19.5,
  "description": "Céu limpo"
}
```

O app só exibe o resultado bonito na tela.

---

### ⚙️ Tipos mais comuns:

- **REST API** — o padrão mais usado hoje, baseado em HTTP e retornando dados em **JSON**.
- **SOAP API** — mais antiga, usa **XML**, bem formal e verbosa.
- **GraphQL API** — permite buscar **exatamente** os dados que você quer, sem trazer coisa extra.

---

### 📬 Estrutura básica de uma API REST:

- **Endpoint:** o endereço (ex: `/clientes`, `/produtos`, `/pedidos`).
- **Métodos HTTP:**
  - `GET` → buscar dados
  - `POST` → criar
  - `PUT/PATCH` → atualizar
  - `DELETE` → remover
- **Status codes:**
  - `200` → sucesso
  - `404` → não encontrado
  - `500` → erro no servidor

---

### 🏗️ Exemplo de API em C# (.NET)

Um endpoint básico:

```csharp
[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase
{
    [HttpGet]
    public IActionResult Listar()
    {
        var produtos = new[] { "Mouse", "Teclado", "Monitor" };
        return Ok(produtos);
    }
}
```

👉 Se você acessar `GET /api/produtos`, ele responde:

```json
["Mouse", "Teclado", "Monitor"]
```

---

Resumindo:

> API é o jeito padronizado de um sistema conversar com outro, trocando dados de forma segura e organizada.
