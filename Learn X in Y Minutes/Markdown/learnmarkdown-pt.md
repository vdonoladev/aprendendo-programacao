
<!-- Markdown é um superconjunto do HTML, de modo que qualquer arquivo HTML é 
um arquivo Markdown válido. Isso significa que nós podemos usar elementos HTML 
em Markdown, como o elemento de comentário, e eles não serão afetados pelo analisador
de remarcação. No entanto, se você criar um elemento HTML em seu arquivo Markdown, você
não pode usar sintaxe de remarcação dentro desse conteúdo do elemento.-->

<!--A maneira como o Markdown é analisado varia de software para software.
Este guia vai tentar esclarecer quando as características são universais, ou quando eles são específicos para um determinado interpretador -->


## Cabeçalhos

Você pode criar elementos HTML `<h1>` até `<h6>` facilmente antecedendo o texto
que deseja estar nesse elemento por um número de hashes (#)

# Isto é um cabeçalho <h1>
## Isto é um cabeçalho <h2>
### Isto é um cabeçalho <h3>
#### Isto é um cabeçalho <h4>
##### Isto é um cabeçalho <h5>
###### Isto é um cabeçalho <h6>

Isto é um cabeçalho h1
======================

Isto é um cabeçalho h2
----------------------

*Este texto está em itálico*
_E este também está._

**Este texto está em negrito**
__E este também está._

***Este texto está em negrito e itálico.***
**_E este também está_**
*--Danouse! Este também__*

~~Este texto é processado com tachado.~~

Este é um parágrafo. Eu estou digitando em um parágrafo, não é legal?

Agora, eu estou no parágrafo 2.
... Ainda continuo no parágrafo 2! :)

Eu estou no parágrafo três.

Termino com dois espaços (destacar-me para vê-los). 

Há um <br /> acima de mim!

> Este é um bloco de citação. Você pode 
> Quebrar manualmente suas linhas e colocar um `>` antes de cada linha ou você pode
> deixar suas linhas ficarem muito longas e quebrarem por conta própria. Não faz diferença, 
> desde que eles começam com um `>`.
	

> Você também pode usar mais de um nível 
>> De recuo?

* Item
* Item
* Outro item

ou

+ Item
+ Item
+ Outro item

ou

- Item
- Item
- Um último item

1. Item um
2. Item dois
3. Item três

1. Item um
1. Item dois
1. Item três

1. Item um
2. Item dois
3. Item três
    * Sub-item
    * Sub-item
4. Item quatro

As caixas abaixo sem o 'x' são checkboxes HTML desmarcadas
- [ ] Primeira tarefa a completar
- [ ] Segunda tarefa a completar
A caixa de seleção abaixo será exibida como uma checkbox HTML marcada
- [x] Essa tarefa foi completa


	Isto é código
	É assim, sacou?
	

	my_array.each do |item|
        puts item
    end	
 

Código embutido pode ser criada usando o caractere de crase `` ` ``



Em GitHub Flavored Markdown, você pode usar uma sintaxe especial para o código

=======
\`\`\`ruby <!-- exceto remover essas barras invertidas quando você faz isso, apenas 
ruby! --> 
def foobar
    puts "Hello world!"
end
\`\`\` <!-- Aqui também, não use barras invertidas, apenas  -->

O texto acima não requer recuo, além disso o GitHub vai usar a sintaxe highlight da linguagem que você especificar após a \`\`\`.

## Linha Horizontal
Linhas horizontais são facilmente adicionados com três ou mais asteriscos ou hífens,
com ou sem espaços.



## Links
Uma das melhores coisas sobre a marcação é o quão fácil é fazer ligações. Colocar 
o texto a ser exibido entre parênteses rígidos [] seguido pela url em parênteses ()



Você também pode adicionar um título link usando aspas dentro dos parênteses



Caminhos relativos funcionam também.



Markdown também suporta ligações de estilo de referência



O título também pode estar entre aspas simples ou entre parênteses, ou omitido 
inteiramente. As referências podem estar em qualquer lugar no documento e os IDs de referência 
pode ser qualquer um, desde que eles são únicos.

Existe também a "nomeação implicita", que permite que você use o texto do link como o id



Mas não são usados normalmente

## Imagens
As imagens são feitas da mesma forma que as ligações, mas com um ponto de exclamação na frente!



E estilo de referência funciona como esperado



## Miscelânea 
### Auto-links 



### Auto-links para e-mails



### Escapando caracteres

Quero digitar * Este texto entre asteriscos *, mas eu não quero que ele seja 
em itálico, então eu faço o seguinte: \*Este texto entre asteriscos \*.

### Tabelas 
Tabelas estão disponíveis apenas no GitHub Flavored Markdown e são ligeiramente 
complicadas, mas se você realmente quer:


Ou, para os mesmos resultados 


