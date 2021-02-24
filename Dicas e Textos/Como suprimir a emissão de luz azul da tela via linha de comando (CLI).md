Pois bem, nesta dica vou apresentar uma solução via linha de comando para os felizes usuários do sistema operacional GNU/Linux! Trata-se de um simples programa de 80 linhas escrito em C. Para instalá-lo em Debian ou derivados, digite:

```bash
sudo apt install sct
```

Você também pode baixar o source via GitHub com:

```bash
git clone https://github.com/mgudemann/sct.git
```

Leia o README.md caso queira compilar o código.

O programa é usado para ajustar a temperatura de cor da tela no X. A temperatura padrão do sistema operacional é de 6500k, você pode usar o sct para ajustar a temperatura em qualquer valor entre 1000k e 10000k. Temperaturas abaixo de 6500k reduzem a emissão de luz azul e acima aumentam.

Seu uso é extremamente simples:

```bash
sct 2500
```

No meu caso, fiquei bastante confortável com a temperatura em 2500k.

E pra finalizar, você ainda pode agendar a ativação do filtro de luz azul no crontab. Por exemplo, ativar todos os dias às 21h e desativar às 6h:

```bash
crontab -e
```

```bash
0 21 * * * /usr/bin/sct 4500
0 6 * * * /usr/bin/sct
```

E bons sonos!