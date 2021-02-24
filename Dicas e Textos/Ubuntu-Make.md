Instalando plataformas de desenvolvimento com o Ubuntu Make

Para obter informações sobre o ubuntu make, executar umake --help (existem dois sinais de menos antes do parâmetro help).

- Para instalar Eclipse JEE, use o comando:

sudo umake ide eclipse-jee

- Para instalar IntelliJ IDEA EAP, use o comando:

sudo umake ide idea --eap

- Para instalar o compilador de linguagem Kotlin, use o comando:

sudo umake kotlin kotlin-lang

- Para instalar Unity 3D, use o comando:

sudo umake games unity3d

- Para instalar IDE Arduino, use o comando:

sudo umake ide arduino

- Para instalar Webstorm, use o comando:

sudo umake ide webstorm

- Para instalar GO, use o comando:

sudo umake go go-lang

- Para instalar dartlang, use o comando:

sudo umake dart editor

- Para instalar PyCharm, use o comando:

sudo umake ide pycharm

- Para instalar PyCharm Professional, use o comando:

sudo umake ide pycharm-professional

- Para instalar PyCharm Educational, use o comando:

sudo umake ide pycharm-educational

- Para instalar o Phpstorm, use o comando:

sudo umake ide phpstorm

- Para instalar o Rubymine, use o comando:

sudo umake ide rubymine

- Para instalar o eclipse, use o comando:

sudo umake ide eclipse

- Para instalar o IntelliJ IDEA, use o comando:

sudo umake ide idea-ultimate

- Para instalar o IntelliJ IDEA Community Edition, use o comando:

sudo umake ide idea

- Para instalar Stencyl, use o comando:

sudo umake games stencyl

- Para instalar o Android NDK, use o comando:

sudo umake android android-ndk

- Para instalar o Android Studio, use o comando:

sudo umake android android-studio

- Para instalar o Firefox Dev use o comando:

sudo umake web firefox-dev

- Instalando plataformas de desenvolvimento com o Ubuntu Make e aceitando a licença de uso
- Para instalar qualquer destas ferramentas e aceitar a licença de uso automaticamente, basta escrever --accept-license no final do comando de instalação, como no exemplo abaixo:

umake android --accept-license

- Desinstalando plataformas de desenvolvimento com o Ubuntu Make
- Para remover qualquer destas ferramentas, basta escrever --remove no final do comando de instalação, como no exemplo abaixo:

sudo umake web firefox-dev --remove

Pronto! Instale a sua ferramenta favorita e comece a programar.