### 🧱 1. **Encapsulamento**

É sobre **proteger os dados** dentro de um objeto, controlando o acesso a eles.

Você não deixa qualquer um mexer direto nas suas variáveis internas — usa **métodos (getters/setters)** pra controlar o que entra e sai.

💬 **Analogia:**

Pensa num **cofre** — só dá pra acessar o que tem dentro usando a **chave certa**.

O cofre esconde o mecanismo interno, mas te dá uma interface (a fechadura).

💻 **Exemplo em C#:**

```csharp
public class ContaBancaria
{
    private decimal saldo;

    public void Depositar(decimal valor)
    {
        saldo += valor;
    }

    public decimal ConsultarSaldo()
    {
        return saldo;
    }
}

```

👉 O campo `saldo` é privado, ninguém altera direto. Só os métodos `Depositar` e `ConsultarSaldo` controlam o acesso.

---

### 👨‍👩‍👧‍👦 2. **Herança**

Permite **reaproveitar código** criando uma **classe base (pai)** e **classes derivadas (filhas)** que herdam suas características e comportamentos.

💬 **Analogia:**

Pensa numa **família**: o filho herda traços e comportamentos dos pais, mas também tem suas particularidades.

💻 **Exemplo em C#:**

```csharp
public class Veiculo
{
    public void Mover() => Console.WriteLine("O veículo está se movendo");
}

public class Carro : Veiculo
{
    public void Buzinar() => Console.WriteLine("Buzina: bip bip!");
}

```

👉 `Carro` herdou o método `Mover()` de `Veiculo` — não precisou reescrever.

---

### 🎭 3. **Polimorfismo**

Significa “muitas formas”.

Permite que **um mesmo método tenha comportamentos diferentes** dependendo do contexto (ou da classe que o usa).

💬 **Analogia:**

Pensa na palavra **“correr”** — um atleta corre diferente de um cachorro, mas a ação é a mesma: correr.

💻 **Exemplo em C#:**

```csharp
public class Animal
{
    public virtual void Falar() => Console.WriteLine("Som genérico");
}

public class Cachorro : Animal
{
    public override void Falar() => Console.WriteLine("Au au!");
}

public class Gato : Animal
{
    public override void Falar() => Console.WriteLine("Miau!");
}

```

👉 Chamando `Falar()` em uma lista de `Animal`, cada objeto responde de um jeito:

```csharp
List<Animal> animais = new() { new Cachorro(), new Gato() };
animais.ForEach(a => a.Falar());

```

---

### 🧠 4. **Abstração**

É **simplificar o complexo**, mostrando **só o que importa** e escondendo os detalhes de implementação.

Você foca **no “o que faz”**, não no “como faz”.

💬 **Analogia:**

Um **carro** — você só precisa saber dirigir; não precisa entender o funcionamento interno do motor pra usar.

💻 **Exemplo em C#:**

```csharp
public abstract class Pagamento
{
    public abstract void Processar();
}

public class CartaoCredito : Pagamento
{
    public override void Processar() => Console.WriteLine("Processando pagamento com cartão...");
}

```

👉 A classe `Pagamento` define **a ideia geral**, e as subclasses implementam os **detalhes concretos**.

---

### 📌 Resumão rápido:

| Pilar              | O que faz                                     | Palavra-chave                        |
| ------------------ | --------------------------------------------- | ------------------------------------ |
| **Encapsulamento** | Protege os dados                              | `private`, `public`, getters/setters |
| **Herança**        | Reaproveita código                            | `:`, `base`                          |
| **Polimorfismo**   | Comportamentos diferentes com mesma interface | `virtual`, `override`                |
| **Abstração**      | Foca no essencial, esconde o resto            | `abstract`, `interface`              |
