## 🧱 Classes — o tijolo da casa

**Classe** é o molde de onde nascem os objetos.
É como a planta de uma casa: define como a casa _será_, mas a casa em si só existe quando você cria uma instância.

```csharp
public class Pessoa
{
    public string Nome { get; set; }
    public void Falar() => Console.WriteLine("Olá!");
}
```

👉 A classe é o “conceito”.
👉 O objeto é o “bicho vivo”.

---

## 🗂️ Namespaces — gavetas pra não virar bagunça

Lembra como antigamente a gente guardava documentos em pastas, com etiquetas bonitinhas?
Namespace é exatamente isso: **organização**.

Ele separa o código em grupos lógicos pra não virar um samba doido quando o projeto cresce.

```csharp
namespace MinhaEmpresa.Projeto.API.Controllers
{
    public class ClientesController { }
}
```

👉 Sem namespace, tudo fica solto.
👉 Com namespace, você evita conflitos e deixa claro onde cada coisa pertence.

---

## 📎 Using — o atalho que evita dor de cabeça

O `using` serve pra **importar namespaces** e evitar digitar caminhos gigantes toda vez.

Sem `using`:

```csharp
var pessoa = new MinhaEmpresa.Projeto.Modelos.Pessoa();
```

Com `using`:

```csharp
using MinhaEmpresa.Projeto.Modelos;

var pessoa = new Pessoa();
```

👉 É como ter uma agenda: você não precisa falar o nome completo da pessoa toda hora.

---

## 🎯 Resumão sem frescura:

| Conceito      | Pra que serve                         | Analogia           |
| ------------- | ------------------------------------- | ------------------ |
| **Classe**    | Define como algo é e o que faz        | Planta de uma casa |
| **Namespace** | Organiza o código em grupos           | Gavetas/pastas     |
| **Using**     | Importa namespaces pra escrever menos | Atalho na agenda   |
