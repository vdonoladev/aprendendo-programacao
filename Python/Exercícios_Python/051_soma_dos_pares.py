# -*- coding: utf-8 -*-
"""051 - Soma dos Pares

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1B9RqJFSrSckciZOsXsuylXrD2waWCTrz
"""

Soma = 0
for Contador in range(6):
   Número = int(input('Digite um número: '))
   if Número %2 == 0: 
     Soma +=  Número
print ('A soma dos números pares: {}'.format(Soma))