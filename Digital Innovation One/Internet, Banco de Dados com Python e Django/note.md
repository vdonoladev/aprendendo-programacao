# Internet, Banco de Dados com Python e Django

## Sistemas Web

* São softwares/aplicações hospedadas na internet/intranet onde o usuário pode acessar através de requisições http por um navegador.
* Sistemas web permitem ser acessados sem a necessidade de download e instalação da aplicação.
* Outra definição de aplicação web é onde tudo é processado em algum servidor.

## PIP

* Sistema de gerenciamento de pacotes.
* Utilizado para instalar e gerenciar pacotes/bibliotecas em Python.
* Já vem empacotado com Python desde a versão 3.4

## Virtualenv

* Ferramenta para criar ambientes Python isolados.
* Vem integrado com Python desde a versão 3.3
* Extremamente útil para se trabalhar com projetos que utilizam bibliotecas com versões diferentes.

## Django-admin.py

* É o utilitário de linha de comando do Django para tarefas administrativas.

## Manage.py

* É um wrapper em volta do django-admin.py
* Ele delega tarefas para o django-admin.py
* Responsável por colocar o pacote do projeto no sys.path
* Ele define a variável de ambiente DJANGO_SETTINGS_MODULE que então aponta para o arquivo settings.py
* Por isso, o manage.py é gerado automaticamente junto ao projeto para facilitar o uso de comandos django-admin.py (comandos administrativos).

## WSGI

* Web Server Gateway Interface - Interface de Porta de Entrada do Servidor Web.
* Plataforma padrão para aplicações web em Python
* Serve de interface do Servidor Web e Aplicação Web
* O Django com o comando startproject inicia uma configuração WSGI padrão para que se possa executar sua aplicação web.
* Quando se inicia a aplicação Django com o comando runserver é iniciado um servidor de aplicação web leve. Esse servidor é especificado pela configuração WSGI_APPLICATION

## SETTINGS

* É o responsável pelas configurações do Django
* Nele é possível configurar por exemplo apps, conexão com banco de dados, templates, timezone, cache, segurança, arquivos estáticos, etc.

## URLS

* É um Schema de URL
* Responsável por gerenciar as Rotas da URLs, onde é possível configurar para onde cada rota será executada.
* É uma forma limpa e elegante para gerenciar URLs

## VIEWS

* Responsável por processar e retornar uma resposta para o Cliente que fez a requisição.

## MODELS

* Define o modelo de dados inteiramente em Python
* Faz a abstração dos objetos de banco para o Python, transformando todas as tabelas em classes e os acessos são feitos utilizando linguagem Python, onde o Django realiza a transformação para SQL.

## ADMIN

* Interface administrativa gerada automaticamente pelo Django
* Ele lê os metadados que estão nos models e fornece uma interface poderosa e pronta para manipulação de dados

# STATIC

* Responsável por armazenar os arquivos estáticos
* CSS, JavaScript, Imagens

## TEMPLATES

* Responsável por armazenar os arquivos HTML
* O diretório templates é diretório padrão para armazenarmos todo o conteúdo HTML da nossa aplicação

## Tabelas Padrões do Django

* O Django já possui tabelas padrões que são utilizadas principalmente para parte de segurança e autenticação
* É possível criar tabelas padrões do Django com o comando migrate
* Ao criar tabelas padrões do Django, é necessário criar um primeiro usuário para conseguir acessar o painel Django Administration
* Para criar um primeiro usuário administrador é necessário utilizar o comando createsuperuser
* As tabelas padrões consistem em auxiliar e agilizar toda parte de autenticação e também de perfis de acesso
* Entre as tabelas padrões estão as tabelas de Usuário, Grupo e Perfil
* Com as tabelas padrões, é possível criar usuários, grupos de usuários e definir perfis de qual usuário pode acessar determinado conteúdo

## Migração de Dados no Django

* Para migração de dados no Django, é necessário que tenha classes criadas
* Com as classes criadas, para migração é utilizado o comando migrate
* Também pode-se utilizar o comando migrations para criação de um arquivo de migração, sem a necessidade de migrar "as cegas"
* Também pode-se utilizar o comando sqlmigrate, que ao invés de aplicar a migração, é gerado todo comando para que essa migração possa ser efetuada manualmente no banco de dados.

## Templates

* O Django oferece no seu modelo de templates a capacidade de se utilizar expressões Python no HTML
* Com isso é possível mostrar informações e realizar comandos como IF e FOR

## Pacote de autenticação do Django

* O Django já possui um pacote de autenticação que é empacotado em django.contrib.auth
* Esse pacote cria tabelas de usuários e permissões, onde fica mais fácil controlar as autenticações e permissões
* Para se utilizar da autenticação padrão do Django é necessário que o pacote esteja entre os apps instalados no settings do projeto (essa configuração já vem pronta por default)

## Authenticate

* A função authenticate do pacote django.contrib.auth é responsável por autenticar o usuário
* Importação: from django.contrib.auth import authenticate
* Utilização: user = authenticate(username = username, password = password)

## Login

* A função login do pacote django.contrib.auth é responsável por criar uma sessão para o usuário autenticado
* Importação: from django.contrib.auth import login
* Utilização: login(request, user)

## Logout

* A função logout do pacote django.contrib.auth é responsável por limpar os dados do usuário da sessão
* Importação: from django.contrib.auth import authenticate, login, logout
* Utilização: user = logout(request)

## Login_required

* A função login_required do pacote django.contrib.auth é responsável por autenticar o usuário
* Ela é um decorador que é utilizado em todas as funções/views que necessitam de um usuário logado/autenticado para serem acessados
* Importação: from django.contrib.auth.decorators import login_required
* Utilização: @login_required(login_url='/login/')
	* def lista_eventos(request)

## Decoradores

* São funções que são usados sobre outras funções
* Os decoradores são usados para extrair um código comum que deve ser aplicado para diversas funções
* A função login_required do pacote django.contrib.auth por exemplo, usado como decorador, faz com que seja realizada uma validação comum (usuário logado) para que em caso de usuário não logado, impeça a execução da função a qual ela está decorando.