# -*- coding: utf-8 -*-
"""011 - Pintando parede

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1KC8GS6at3kDF3m_NS4JP_xhOsH6XFHeQ
"""

larg = float(input('Qual a largura da sua parede?'))
alt = float(input('Qual a altura da sua parede?'))

area = larg * alt

t = area/2
lata = t/18
precolata = 160.00
if lata < 1:
    lata = 1
    print('Você pode comprar só uma lata de tinta que será suficiente para pintar sua parede')
else:
    lata = lata
    print('você vai precisar de {:.0f} latas de tinta para pintar sua parede'.format(lata))


print('Sua parede tem {:.2f} metros quadrados'.format(area), end=' e ')
print('voçê irá precisar de {:.0f} litros de tinta para pintar toda a sua parede.'.format(t))
print('O preço da lata de tinta é R${:.2f}'.format(precolata))
res = str(input('O senhor vai levar a tinta ?'))
if res == 'sim':
     total_pagar = lata * precolata
     print('O seu orçamento vai ficar em R${:.2f}'.format(total_pagar))
else:
    print('Obrigado, volte sempre!')