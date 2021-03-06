# -*- coding: utf-8 -*-
"""063 - Progressão Aritmética v3

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1rNN-4Lh2GNuKrrh1ipOpBL9MkyCwoh2B
"""

print("-=" * 10)
print("{:^20}".format("Gerador de PA V3.0"))
print("-=" * 10)
primeiro = int(input("Primeiro termo: "))
razao = int(input("Razao da PA: "))
termo = primeiro
cont = 1
f = 10
while cont <= f:
    print("{} → ".format(termo), end="")
    if cont == f:
        print("Pausa")
        r2 = int(input("\nDeseja adicionar mais termos? "))
        f += r2
        if r2 == 0:
            cont = f
    termo += razao
    cont += 1
print("Progressão foi finalizada com {} termos mostrados.".format(cont - 1))