from random import randint
from time import sleep

jogo = list()
totJogos = list()

progRunning = True
while progRunning:
    while True:
        try:
            numJogos = int(input('Deseja gerar quantos jogos? '))
            break
        except:
            print('Favor utilizar somente numeros inteiros.\n')

    while len(totJogos) != numJogos:
        while len(jogo) < 6:
            num = randint(1, 60)
            if num not in jogo:
                jogo.append(num)
        jogo.sort()
        totJogos.append(jogo[:])
        jogo.clear()

    print('¯' * 40)
    print(f'{"RESULTADOS":^40}\n')
    for i, j in enumerate(totJogos):
        sleep(1)
        print(f'{i + 1}o Jogo = > {j}')
    print('_' * 40)

    cont = True
    while cont:
        continuar = str(input('Gerar outros jogos? [S/N]: ')).strip().upper()
        if continuar == 'S':
            print('-' * 30)
            cont = False
        elif continuar == 'N':
            progRunning = cont = False
        else:
            print('Favor utilizar S para SIM e N para NAO.')
print('¯' * 40)
print(f'{"BOA SORTE!":^40}')
print('_' * 40)