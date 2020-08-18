"""
Módulo Collections - Named Tuple

https://docs.python.org/3/library/collections.html#collections.namedtuple

# Recap Tupla
tupla = (1, 2, 3)

print(tupla[1])

Named Tuple -> São tuplas, diferenciadas, onde, específicamos um nome para a mesma e também parâmetros.

"""

# Realizando import
from collections import namedtuple

# Precisamos definir o nome e parâmetros

# Forma1 - Declaração Named Tuple

cachorro = namedtuple('cachorro', 'idade raca nome')

# Forma2 - Declaração Named Tuple

cachorro = namedtuple('cachorro', 'idade, raca, nome')

# Forma3 - Declaração Named Tuple -- Recomendável

cachorro = namedtuple('cachorro', ['idade', 'raca', 'nome'])

# Usando

ray = cachorro(idade=2, raca='Chow-Chow', nome='Ray')

print(ray)

# Acessando os dados

# Forma1

print(ray[0]) # idade
print(ray[1]) # raça
print(ray[2]) # nome

# Forma2

print(ray.idade) # idade
print(ray.raca)  # raça
print(ray.nome)  # nome

print(ray.index('Chow-Chow'))

print(ray.count('Chow-Chow'))
