# -*- coding: utf-8 -*-
"""057 - Analisador Completo

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1fGR7loS7gK03viFCKHjLBmJgwDb1IFxr
"""

media = 0
homemvelho =  str
mulheres = 0
idadeatual = 0
for i in range (1,5):
    nome = input('Digite o {} Nome : '.format(i)).title().strip()
    idade = int(input('Digite o {} idade : '.format(i)))
    sexo = input('Digite o {} sexo [M / F]: '.format(i)).upper()
    media += idade
    if i == 1 and sexo == 'M':
        idadeatual = idade
        homemvelho = nome  
    if sexo == 'M' and idade > idadeatual:
        idadeatual = idade
        homemvelho = nome          
    if sexo == 'F' and idade < 20:
        mulheres += 1
print('A Média de idade do grupo é {:.0f} anos.'.format(media/i))
print('O {} é o homem mais velho da turma com {} anos'.format(homemvelho, idadeatual))
print('{} Mulheres tem menos de 20 anos.'.format(mulheres))