# -*- coding: utf-8 -*-
"""009 - Tabuada

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1m90lR0zrCjL4lEzcCx53t2Y7qOxjuuPE
"""

valor = int(input('Digite um número: '))
for contar in range(1,11):
    print('{} x {} = {}'.format(valor, contar, valor*contar))