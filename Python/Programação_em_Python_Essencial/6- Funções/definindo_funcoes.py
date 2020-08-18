"""
Definindo Funções

- Funções são pequenas partes de código que realizam tarefas específicas;
- Pode ou não receber entradas de dados e retornar uma saída de dados;
- Muito uteis para executar procedimentos similares por repetidas vezes;

OBS: Se você escrever uma função que realiza várias tarefas dentro dela, é
bom fazer uma verificação para que a função seja simplificada.

Já utilizamos várias funções desde que iniciamos o curso:
- print()
- len()
- max()
- min()
- count()
- E muitas outras;

"""

# Exemplo de utilização de funções:

# cores = ['verde', 'amarelo', 'azul', 'branco']

# Utilizando a função integrada (Built-in) do Python print()

# print(cores)

# curso = 'Programação em Python: Essencial'

# print(curso)

# cores.append('roxo')

# print(cores)

# curso.append('Mais dados...') # AttributeError

# print(curso)

# cores.clear()
# print(cores)

# print(help(print)) # Documentação da função print() no terminal # OBS: Serve para qualquer função. 

# DRY - Don't Repeat Yourself - Não repita você mesmo / Não repita seu código.

# Mas então, como definir funções?

"""
Em Python, a forma geral de definir uma função é:

def nome_da_funcao(parametros_de_entrada):
	bloco_da_funcao

# Explicações
nome_da_funcao -> SEMPRE, com letras minúsculas, e se for nome composto, separado por underline (Snake Case) (_);

parametros_de_entrada -> Opcionais, onde tendo mais de um, cada um separado por vírgula, podendo ser opcionais ou não;

bloco_da_funcao -> Também chamado de corpo da função ou implementação, é onde o processamento da função acontece.
Neste bloco, pode ter ou não retorno da função.

OBS: Veja que para definir uma função, utilizamos a palavra reservada "def" informando ao Python que 
estamos definindo uma função. Também abrimos o bloco de código com o já conhecido dois pontos (:) que é 
utilizado em Python para definir blocos.
"""

# Definindo a primeira função

# Definição
def diz_oi(): # diz_oi == nome_da_funcao
	print('Oi!') # bloco_da_funcao

# Definição
def hello_world(): #hello_world == nome_da_funcao
	print('Hello World!') # bloco_da_funcao


"""
OBS:

1- Veja que, dentro das nossas funções podemos utilizar outras funções;
2- Veja que nossa função só executa 1 tarefa, ou seja, a única coisa que ela faz é dizer oi;
3- Veja que esta função não recebe nenhum parâmetro de entrada;
4- Veja que esta função não retorna nada;
"""

# Utilizando funções

# Chamada de execução
# diz_oi()

# Chamada de execução
# hello_world()

"""
ATENÇÃO:

Nunca esqueça de utilizar o parênteses ao executar uma função.

Exemplo:

# Errado
diz_oi

# Certo
diz_oi()

# Errado
diz_oi ()

# Isso serve para qualquer função!

"""

# Exemplo

# Definição
def cantar_parabens():
	print('Parabéns para você')
	print('Nesta data querida')
	print('Muitas felicidades')
	print('Muitos anos de vida')
	print('Viva o aniversariante!')

# Chamada de execução
cantar_parabens()

# Chamada de execução (várias vezes (Repetindo o resultado))
#for n in range(5):
#	cantar_parabens()

# Em Python, podemos inclusive criar variáveis do tipo de uma função e executar esta função através da variável
canta = cantar_parabens

canta()
