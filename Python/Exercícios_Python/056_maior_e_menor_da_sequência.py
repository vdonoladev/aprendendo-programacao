# -*- coding: utf-8 -*-
"""056 - Maior e Menor da Sequência

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1-RmYLOW85mV31Tpi2dQ285vIwO3wR3tL
"""

pesos = [ ]
for p in range(0,5):
    peso = float(input('Digite o peso: '))
    pesos.append(peso)
print('O maior peso é {}Kg' .format(max(pesos)))
print('O menor peso é {}Kg' .format(min(pesos)))