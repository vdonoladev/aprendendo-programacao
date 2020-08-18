"""
Módulo Collections - Deque

https://docs.python.org/3/library/collections.html#collections.deque

Podemos dizer que o deque é uma lista de alta performance.
"""

# Realizando o import
from collections import deque

# Criando deques

deq = deque('geek')

print(deq)

# Adicionando elementos no deque

deq.append('y') # Adiciona no final

print(deq)

deq.appendleft('k') # Adiciona no começo

print(deq)

# Remover elementos

print(deq.pop()) # Remove e retorna o último elemento

print(deq)

print(deq.popleft()) # Remove e retorna o primeiro elemento

print(deq)
