# História e conceitos

Lançado em setembro de 1995: O JavaScript não foi criado pelo W3C, como muitos pensam. Na verdade ele foi criado por um cara chamado **Brendan Eich** na Netscape (um dos precursores dos navegadores web). Ele se chamava LiveScript, mas logo seu nome foi mudado para JavaScript. Mesmo assim o nome original é ECMAScript, por que o JavaScript é mantido pela European Computer Manufacturer's Association. Ou seja, chame de JavaScript mesmo, que é como todo mundo chama.

## ECMAScript

padronização do JS, especificação da linguagem de programação que é padronizada pelo ECMA 262

## TC39

Comitê Técnico 39 (TC39). Este comitê é composto por especialistas de grandes empresas como Microsoft, Mozilla e Google. Entre os integrantes do comitê está, claro, Brendan Eich. As discussões são abertas através de listas de email e as reuniões físicas sempre tem convites para experts interessados em manter a normativa

### **O processo do TC-39**

Quaisquer alterações na linguagem seguem um processo de maturidade de 5 estágios, vamos a eles:

- Estágio zero, **rascunho(strawman)**: Simplesmente o envio de propostas, estas devem ser feitas por algum membro do TC-39, ou algum contribuidor. Em seguida devem ser discutidas em alguma reunião, e então adicionadas a essa página:
- Estágio um, **proposta (proposal)**: Nessa etapa um membro do TC-39 é escolhido como responsável por essa proposta (***champion***). O problema que será resolvido por essa proposta deve ser descrito, há tambem a necessidade de mostrar uma API, ilustração de exemplos e discutir sobre os aspectos principais do algoritmo dessa proposta.
- Estágio dois, **esboço (draft)**: Nessa etapa a especificação da proposta deve estar completa e um exemplo deve ser formalmente descrito usando Javascript. Duas implementações da propostas são necessarias, porém uma delas pode usar transpiladores (ex.: Babel).
- Estágio três, **candidata (candidate)**: A especifição da proposta é revisada por dois membros do TC-39 e então assinada por estes dois revisores mais o campeão responsável. Nessa etapa é entendido que todo o trabalho possível foi feito e que será necessário feedbacks dos usuários. Ao menos dois navegadores devem conter alguma implementação (não ativada por padrão) compatível com a especificação.
- Estágio quatro, **finalizada (finished)**: A proposta está pronta para entrar formalmente como uma especificação do Javascript. Nessa etapa todos os requisitos foram atendidos e os testes de aceitação devem ser mergeados com o repositório de testes de aceitação do Javascript.

## Linguagem interpretada

Você pode ouvir os termos interpretado e compilado no contexto da programação. JavaScript é uma linguagem interpretada — o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar o código em algo diferente antes do navegador executa-lo.

## Linguagem de tipagem fraca e dinâmica

Tipagem fraca está ligada a característica da linguagem de realizar conversões automaticamente entre tipos diferentes de dados. Veja o exemplo abaixo abaixo em Javascript:

```jsx
var nome = "Elton Fonseca"; //string
var idade = 28; //number

console.log(nome + " " + idade); //Elton Fonseca 28
```

**Tipagem dinâmica** é uma característica de determinadas linguagens de programação, que não exigem declarações de tipos de dados, pois são capazes de escolher que tipo utilizar dinamicamente para cada variável, podendo alterá-lo durante a compilação ou a execução do programa.

```jsx
var minhaVariavel = 30;
minhaVariavel = 'Texto';

console.log(minhaVariavel);
```

## Typescript

TypeScript é uma linguagem criada pela Microsoft e nada mais é que um superset do ECMAScript 6 que, por sua vez, é um superset do ECMAScript 5, que usamos mais frequentemente como base para nosso clássico JavaScript. Isso significa que praticamente qualquer código JavaScript é também um código TypeScript

![./note1/Untitled.png](https://github.com/vdonoladev/aprendendo-programacao/blob/master/Digital%20Innovation%20One/JavaScript%20ES6%20essencial/Recursos/note1/Untitled.png)

## Funções de primeira classe e ordem maior

```jsx
function getName() {
    return 'Rafael Agusuto Oliveira Santos';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
```

## Clousure

Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico.

## **Sobre o escopo léxico**

Para ficar claro o entendimento de *closure*, é importante saber alguns aspectos do escopo léxico. Claro, se você já sabe do que se trata, pode pular esta parte.

O escopo léxico é baseado nas variáveis e blocos de escopo definidos, por você, em tempo de escrita do código. Logo, ele é **definido em** **tempo de compilação**… pelo menos na maioria das vezes. Aqui, eu digo na maioria das vezes pois existem formas de 'burlar' esse escopo, como por exemplo, injetando código com declarações de variáveis de forma dinâmica*.

Closure é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes.

```jsx
function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function() {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();
```
