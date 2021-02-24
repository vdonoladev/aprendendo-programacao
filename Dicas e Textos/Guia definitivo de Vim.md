### Movimentos Básicos

A primeira coisa que eu recomendo que seja feita é a execução do comando `vimtutor pt` (caso queira a versão em inglês digite apenas `vimtutor`) em seu terminal.

Será aberta uma tela com um tutorial de aproximadamente 30 minutos ensinando os movimentos básicos do Vim. Antes de prosseguir com o artigo recomendo que leia atentamente todas as instruções do tutorial, após o seu termino você conhecerá o básico do Vim.

---

### Conceitos Essenciais

### Buffers

Buffers no Vim são nada mais que arquivos editáveis que estão disponíveis na memória. Após abrir um arquivo com o Vim você estará criando e consequentemente trabalhando em um buffer.

Explicar buffers fica mais fácil na prática, então vamos lá:

Crie uma pasta qualquer:

`$ mkdir brincando_com_buffers && cd brincando_com_buffers`

Agora crie dois arquivos:

`$ echo 'Vim Rocks!' > vimrocks.txt`

`$ echo 'In Love With Buffers!' > inlove.txt`

Agora abra o primeiro arquivo utilizando o Vim:

`$ vim vimrocks.txt`

Nesse momento você já está utilizando o buffer do Vim \o/

Agora vamos abrir outro arquivo de dentro do Vim utilizando o comando `:badd` ou `: bad`:

`:badd inlove.txt`

Neste momento você terá dois buffers no Vim, para listar os buffers utilize o comando `:ls`:

![https://adrianolisboa.com/content/images/2018/12/figura2-vim-buffers.png](https://adrianolisboa.com/content/images/2018/12/figura2-vim-buffers.png)

*Figura 2: Vim Buffers*

O comando `:ls` retorna informações sobre cada buffer, como: o identificador único de cada buffer, indicadores de buffer (descritos abaixo), o nome do arquivo e o número da linha da sua posição atual do buffer atual.

**Indicadores:**

```
%: buffer na janela atual
#: buffer alternativo, pode ser acessado através das teclas CTRL-6
a: buffer ativo, carregado e visível
h: buffer escondido, carregado, mas não visível
-: buffer que não pode ser modificado
=: buffer somente leitura
+: buffer que foi modificado com sucesso
x: buffer com problemas de leitura
: se não tiver indicador no buffer isso significa que ele ainda não foi carregado

```

**Alguns comandos de Buffer:**

```
:bp - Muda para o buffer anterior
:b2 - Muda para o buffer de número 2
:bn - Muda para o próximo buffer
:ball - Abre todos os buffers em uma janela 
:brew - Abre o primeiro buffer da lista
:bd - Deleta o buffer atual
:bd 2 3 - Deleta os buffers de número 2 e 3

```

**Nota**: Todos esses comandos podem ser remapeados para comandos de sua escolha (explicarei mais para frente).

---

### Customizando seu Vim (o arquivo .vimrc e suas configurações)

O Vim é um editor flexível e que pode ser customizado para seu estilo de edição de texto. Uma das primeiras coisas que você deve aprender é criar e manter um arquivo `~/.vimrc` que vai conter todas as suas configurações favoritas, atalhos de teclado, comandos customizados e até extensões de plug-ins (falaremos mais na frente).

O `.vimrc` é um arquivo escrito utilizando uma linguagem de programação chamada **vimscript**. Sendo assim, seu `.vimrc` pode conter variáveis, condicionais, definições de funções e por aí.

Caso ainda não possua esse arquivo ele deverá ser criado na raiz de seu usuário. No meu caso ele está em `/Users/adrianolisboa/.vimrc`.

Vamos utilizar o site [VimConfig](https://vimconfig.com/) para gerar uma configuração básica. Abra o site, desmarque ou marque as opções que não queira. Caso ainda não entenda oque essas opções significam, simplesmente abra seu `.vimrc` recém criado e cole as configurações que aparecem no input do lado direito do site.

Exemplo de configuração que foi gerada pelo site:

![https://adrianolisboa.com/content/images/2018/12/figura3-vimrc.png](https://adrianolisboa.com/content/images/2018/12/figura3-vimrc.png)

*Figura 3: Exemplo de configuração do .vimrc*

Caso queira aprender um pouco mais sobre **vimscript**, existe o livro [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/) (em inglês), que pode ser lido pelo site ou comprado em formatos digitais por $8 dolares no [Leanpub](https://leanpub.com/learnvimscriptthehardway).

### Configurações de outras pessoas

Um erro que muitas pessoas desenvolvedoras cometem ao começar a usar o Vim como editor padrão é baixar as configurações de outra pessoa desenvolvedora. No final de contas você vai acabar com um Vim cheio de plug-ins e configurações que provavelmente nunca vai chegar a usar (isso aconteceu comigo).

Se você realmente quer aprender Vim do básico ao avançado comece criando seu próprio **.vimrc** e a medida que for sentindo falta de configurações que seu antigo editor possui vá adicionando-as.

No tópico anterior geramos um arquivo `.vimrc` utilizando o site VimConfig com configurações básicas, recomendo que você gaste um tempo lendo as configurações que foram geradas e tentando entender oque significam (a maioria possui um comentário em inglês na frente). Vale a pena também ir removendo e vendo quais comportamentos são removidos do editor.

Para que sirva como referência aqui está o meu [vimrc](https://github.com/adrianolisboa/vim/blob/master/vimrc) :-)

---

### Plug-ins

Uma das coisas que faz com que o Vim seja extensível da maneira que ele é, é através da instalação de plug-ins, que são customizações que adicionam novas funcionalidades ao seu Vim, um exemplo de plug-in famoso é o [Nerdtree](https://github.com/scrooloose/nerdtree), que adiciona um [file tree](https://en.wikipedia.org/wiki/Directory_structure) para seu Vim:

![https://adrianolisboa.com/content/images/2018/12/figura4-nerdtree.png](https://adrianolisboa.com/content/images/2018/12/figura4-nerdtree.png)

*Figura 4: Nerdtree plug-in instalado e aberto*

---

### Gerenciadores de plug-ins

Antes de listarmos alguns plug-ins, precisamos falar de como instala-los. Para isso existem diversos gerenciadores de plug-ins criados por usuários de Vim e que no final levam a mesma função: **Instalar plug-ins :P**

Abaixo uma lista dos mais conhecidos, fique à vontade para escolher entre eles.O passo a passo de com adicionar cada um deles está em seu link.

- [Vundle.vim](https://github.com/VundleVim/Vundle.vim)
- [pathogen.vim](https://github.com/tpope/vim-pathogen)
- [vim-plug](https://github.com/junegunn/vim-plug)
- [minpac](https://github.com/k-takata/minpac)

Eu particularmente já utilizo o [minpac](https://github.com/k-takata/minpac) a um tempo, e o escolhi por ter uma filosofia minimalista e utilizar de recursos do Vim 8.

Com o tempo talvez você comece a sentir falta de features que seu editor de texto padrão possuía e que não encontra no Vim, essa é a hora de dar uma pesquisada no Google por plug-ins. Na maioria dos casos já vai existir algum que supra a sua necessidade e que foi criada por algum usuário.

---

### Plug-ins recomendados

Vou listar alguns dos plug-ins que senti falta quando fiz a migração completa do meu antigo editor de texto [Atom](https://atom.io/), a ideia é que essa lista sirva apenas como referência e que você vá adicionando plug-ins à medida que sentir falta.

- [nerdtree](https://github.com/scrooloose/nerdtree) - Adiciona um file tree que facilita a navegação pela estrutura dos projetos.
- [ctrlp.vim](https://github.com/kien/ctrlp.vim) - Buscador de arquivos (basta apertar o botão Ctrl + P e digitar oque está procurando).
- [syntastic](https://github.com/vim-syntastic/syntastic) - Checa por problemas de syntax no código.
- [vim-arline](https://github.com/vim-airline/vim-airline) - Adiciona uma barra de status com várias informações úteis de sua sessão atual.
- [vim-buffergator](https://github.com/jeetsukumaran/vim-buffergator) - Plug-in utilizado para listar, navegar entre e selecionar buffers para edição.
- [vim-fugitive](https://github.com/tpope/vim-fugitive) - Git wrapper para Vim (adiciona funções do git ao seu Vim).
- [identLine](https://github.com/Yggdroot/indentLine) - Adiciona linhas verticais para melhor visualização da identação de seu código.
- [vim-hardtime](https://github.com/takac/vim-hardtime) - Ajuda a formar bons hábitos de edição com o vim;

Para que sirva de referência, [esse](https://github.com/adrianolisboa/vim/blob/master/packages.vim) é o arquivo onde mantenho todos os plug-ins que estou utilizando no momento.

O site [VimAwesome](https://vimawesome.com/) possui uma lista de plug-ins ordenada por quantidade de usuários que o utilizam, vale a pena dar uma conferida.

---

### Conclusão

Com as informações acima você já tem todo o essencial para começar a utilizar alguns dos recursos do Vim, por ser um editor bastante customizavél e dinamico, você sempre aprenderá novos comandos, como automatizar outros e até mesmo conhecer novos plug-ins que forem surgindo. Caso tenha ficado com alguma dúvida não deixe de colocar um comentário abaixo :)

---

### Aprendendo mais (do iniciante ao avançado)

### Tutoriais (do básico ao avançado)

- O [Vim Golf](http://www.vimgolf.com/) possuí uma serie de desafios que você pode usar para aprender e praticar Vim.
- [vimcasts](http://vimcasts.org/) esse site possui uma lista grande de screencasts curtos que vão te ajudar a aprender algo novo.
- [Vim Vídeos by Derek Wyatt](http://derekwyatt.org/vim/tutorials/) - vídeos do básico ao avançado.
- [Upcase](https://thoughtbot.com/upcase/vim) - possui alguns cursos gratuitos sobre vim.

### Recursos extras

- [Artigo](https://www.moolenaar.net/habits.html) do [criador](https://en.wikipedia.org/wiki/Bram_Moolenaar) do Vim explicando sete hábitos para uma edição efetiva de textos.
- [Threads](https://coderwall.com/t/vim/popular/1) no CoderWall sobre Vim.
- [Wikipedia do VIM](http://vim.wikia.com/wiki/Vim_Tips_Wiki)