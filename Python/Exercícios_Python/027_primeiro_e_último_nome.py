# -*- coding: utf-8 -*-
"""027 - Primeiro e último nome

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Lia4lUOZ6Mlk1KvDAoMFCE8hPh0ierkD
"""

n=str(input('Digite seu nome completo: ')).strip()
nome=n.split()
print('Muito prazer em te conhecer!')
print('Seu primeiro nome é {}'.format(nome[0]))
print('Seu último nome é {}'.format(nome[-1]))