"""
Mapas - Conhecidos em Python como Dicionários

Dicionários em Python são representados por chaves {}

# Iterar sobre dicionários
for chave in receita:
	print(chave)


for chave in receita:
	print(receita[chave])


for chave in receita:
	print(f'Em {chave} recebi R$ {receita[chave]}')
  # print(f'{chave} : {receita[chave]}') # Opção


# Acessando as chaves

print(receita.keys())


for chave in receita.keys(): # Recomendável
	print(receita[chave])    # Usar

# Acessando os valores

print(receita.values())


for valor in receita.values(): # Recomendável
	print(valor)               # Usar

print(receita)

# Desempacotamento de dicionários

print(receita.items())


for chave, valor in receita.items():
	print(f'chave={chave} e valor={valor}')

"""

receita = {'jan': 100, 'fev': 250, 'mar': 400}


# Soma*, Valor Máximo*, Valor Mínimo*, Tamanho

# * Se os valores forem todos inteiros ou reais

print(sum(receita.values())) # Soma
print(max(receita.values())) # Valor Máximo
print(min(receita.values())) # Valor Mínimo
print(len(receita))          # Tamanho
