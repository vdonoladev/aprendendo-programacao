# -*- coding: utf-8 -*-
"""012 - Calculando Descontos

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1dRPsYpJ1DAKPlmia8UwDqklzL5vwr6Vr
"""

p = float(input('Qual é o preço do produto? R$ '))
d = int(input('Quantos % de deconto? '))
pd = p*(100-d)/100
print('O produto que custava R$ {}, com {}% de desconto, está custando agora R$ {:.2f}.'.format(p, d, pd))