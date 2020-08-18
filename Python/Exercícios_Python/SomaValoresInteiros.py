# Função que soma os três números inteiros digitados
def sum(num1, num2, num3):
    return num1 + num2 + num3

# Atribui valores nas variáveis
print("\tSoma de três números\n")
num1 = int(input('Digite o primeiro valor: '))
num2 = int(input('Digite o segundo valor: '))
num3 = int(input('Digite o terceiro valor: '))

#Imprime resultados na tela
print(" ")
print("O resultado da soma é %d" %sum(num1, num2, num3))
