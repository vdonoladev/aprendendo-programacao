## INICIAR PROJETO

A partir de um projeto existente

```bash
cd ./meu-diretorio/
git init
```

Clonando um projeto

```bash
git clone link-repositorio ./destino/
```

Conectar seu projeto a um repositório

```bash
git remote add origin link-repositorio
```

## APRESENTAÇÃO

Mostrar os arquivos modificados

```bash
git status
```

Mostras as modificações realizadas

```bash
git diff
```

Mostrar as modificações de um arquivo

```bash
git diff nome-do-arquivo
```

Histórico de mudanças

```bash
git log
```

Auditoria de alterações

```bash
git blame nome-do-arquivo
```

Lista de branches locais

```bash
git branch
```

## MODIFICAR PROJETO

Adicionar tudo, pronto para commit

```bash
git add -A
```

Adicionar um arquivo

```bash
git add nome-do-arquivo
```

Remover arquivo adicionado para commit 

```bash
# mantém as modificações
git reset nome-do-arquivo
```

Reverter tudo para o último commit

```bash
git reset --hard
```

## BAÚ / STASH

Armazenar modificações no stash

```bash
git stash
```

Listar modificações no stash

```bash
git stash list
```

Aplicar modificações do stash

```bash
git stash apply
```

## PUBLICAR

Commitar alterações

```bash
git commit -m "mensagem do commit"
```

Enviar modificações para origem

```bash
git push
git push origin master
```

Criar tag

```bash
git tag v1.0
```

## SINCRONIZAR

Obter mudanças da origem

```bash
# Não realiza merge
git fetch
```

Obter mudanças da origem e realizar merge

```bash
git pull
git pull origem master
```

## TRABALHAR COM BRANCHES

Visualizar branch atual

```bash
# Exibe todos e em destaque o atual
git branch
```

Listar branches locais e remotos

```bash
git branch -av
```

Criar branch

```bash
git branch nome-do-branch
```

Criar e alterar repositório para branch

```bash
git checkout -b nome-do-branch
```

Trocar de branch

```bash
git checkout nome-do-branch
```

Deletar branch

```bash
git branch -d nome-do-branch
```

Realizar merge entre branches

```bash
# Acessar branch_a
git checkout branch_a

# Obter mudanças do branch_b
git merge branch_d
```