# -*- coding: utf-8 -*-
"""010 - Conversor de Moedas

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1XYiLFl8hTK_N5V3IKcUq0pqrPSzIko2N
"""

print('Olá, Sou o conversor de moedas!')
Br = float(input('Me diga quantos R$ você tem? '))
Us = 3.27
Co = Br / Us
print('Com {} reais e o custo de {} por dólar, você pode comprar {:.2f} dólares!'.format(Br, Us, Co))