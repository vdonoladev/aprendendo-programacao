# -*- coding: utf-8 -*-
"""036 - Analisando Triângulo

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1oQmCX-HLeaqxWxaz9zsjj-5Na35XtNXM
"""

print('*' * 54)
print('------- Condição de existência de um triângulo -------'.upper())
print('*' * 54)

r1 = float(input('Informe o comprimento da 1ª reta: '))
r2 = float(input('Informe o comprimento da 2ª reta: '))
r3 = float(input('Informe o comprimento da 3ª reta: '))

sit_1 = ((r2 - r3) < r1 < (r2 + r3))
sit_2 = ((r1 - r3) < r2 < (r1 + r3))
sit_3 = ((r1 - r2) < r3 < (r1 + r2))

if (sit_1 and sit_2 and sit_3):
    print('PARABÉNS! É possível formar um triângulo com essas retas!')
else:
    print('DESCULPA. Não é possível formar um triângulo com essas retas.')