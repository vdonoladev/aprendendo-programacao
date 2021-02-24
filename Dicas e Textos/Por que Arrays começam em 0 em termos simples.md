- Por que?

"Arrays começam em 0"

Essa é uma das primeiras coisas incomuns que os iniciantes veem em sua jornada de programação. E a maioria de nós apenas memoriza esse fato e depois ri de memes! Mas, falando sério, por que os índices de arrays começam em 0?

- Aviso!

Nem todas as linguagens de programação tem arrays baseados em 0.

O índices de Arrays de linguagens como Fortran, COBOL, Matlab, R, Julia e Lua começam em 1.

- Finalmente!

Por último, a escolha da indexaçao com base em 0 ou em 1 (ou em qualquer número) é puro acaso. Começa com o próprio design da linguagem. Não existe regra. Cada opção tem seus prós e contras. Mas vamos ver por que a indexação baseada em zero é mais comum!

- Herança!

Em C, um array aponta para sua localização na memória e o índice é simplesmente um deslocamento que específica a distância desde o início. O primeiro elemento está no início do array, portanto não há distância. Portanto, o deslocamento é 0. Usar 0 torna a aritmética do ponteiro fácil e conveniente.

- Falar é Fácil!
- Mostra-me o código!

Linus Torvalds