Caso você fosse um médico e seu paciente (apressado) pedisse para que você não lavasse as mãos para que a cirurgia fosse mais rápida, você iria obedecer?

Obviamente o cliente é quem manda, mas mesmo assim, é você médico ou programador quem realmente conhece as implicações de não seguir as boas práticas.

Esta parte o livro incita que você está lendo ele pois, em primeiro lugar, você é um programador e em segundo lugar você quer se transformar em um programador melhor. Nós precisamos de programadores melhores, profissionais melhores, ou até apenas, profissionais.

Código sujo

Você já foi impedido de programar bem por conta de um código ruim?

Se você já tem certa experiência com programação, vai perceber na hora a diferença entre um código bom e um código ruim. No código ruim parece que você está andando em uma mata fechada, pois tem pouquíssima previsibilidade do que está por vir, além de andar em cima de uma areia movediça onde qualquer movimento brusco, você afunda ainda mais em diversos detalhes de implementação confusos e desnecessários.

É basicamente como construir uma cidade em uma região com topografia ruim, onde você acaba adaptando a infraestrutura da cidade aos morros e acidentes geográficos, e não o contrário. Um código ruim, assim como uma cidade assim, não tem como se encontrar apenas andando por ai, você precisa de um mapa. Já código limpo é como em Manhattan, todos os quarteirões muito bem organizados, quase a mesma coisa que acaba até ficando sem graça, porém super previsível.

Mas porque acabamos fazendo um código sujo? Alguns dos motivos mais comuns:

1- Você estava tentando entregar resultados muito rápidos.

2- Você percebeu que não daria tempo de entregar um bom trabalho, então entregou qualquer coisa.

3- Você já estava de saco cheio desta tarefa e concluiu de qualquer forma somente para pegar uma próxima tarefa mais interessante.

4- As requisições mudaram ao longo do caminho.

5- Seu chefe não entende o que você faz, o cliente muito menos e só reclamam do seu trabalho.

Mas sabe de quem é a culpa no final das contas? Sua. Mas como assim a culpa minha você se pergunta? Lembra da história do médico? Você vai realizar um trabalho de profissional ou amador? Claro, em certos ambientes como, por exemplo, uma agência equisofrênica, nenhuma postura profissional por parte da tecnologia será relevante. Neste caso a única solução é você procurar um lugar normal para trabalhar.

Efeitos de um código sujo

Novamente, se você já tem certo tempo na área, deve ter ouvido a história de um projeto que começou pequeno, evoluiu e hoje está com sérios problemas para realizar ajustes ou adicionar novas features. Nestes casos, é muito comum ouvir o seguinte:

“Caramba, no começo tinha um só desenvolvedor e ele fazia tudo rápido, muito mais rápido que os 5 desenvolvedores juntos que temos agora.”

A expectativa de que algo pronto é mais rápido de se trabalhar (uma vez que tem várias coisas feitas) contra a velocidade de construir algo do zero é extremamente popular. O livro neste ponto chega a ser assustador do quão casado é com a realidade, pois descreve a seguinte série de eventos para o caso acima:

1- Projeto começa com alta “produtividade”.

2- Depois de um tempo esta velocidade começa a cair.

3- Cai até chegar em um ponto realmente desconfortável para todo mundo: desenvolvedor, gerência, cliente, etc.

4- A gerência faz a única coisa que pode fazer: contratar mais desenvolvedores para acelerar o desenvolvimento.

5- O problema é que este novo time desconhece o design da aplicação, que neste ponto já está super complexo, e cada nova implementação não é possível dizer se ela se aproxima ou se afasta da intenção do design inicial.

6- É claro, com mais pessoas no time, maior a pressão por resultados e maior a bagunça.

7- O time se revolta e demanda que o código seja reescrito do zero. Gerencia fica maluca com esta idéia, mas não pode negar que a produtividade está ruim, então acaba cedendo.

8- Todo mundo quer participar deste novo projeto e, quem ficou no projeto antigo, fica extremamente desanimado.

9- Só que antes, a empresa tinha um problema que era o código anterior, mas agora tem dois, uma vez que o sistema antigo não pode ser descontinuado e irá receber novas atualizações e que devem ser refletidas no novo sistema.

10- Para que o novo sistema não fique para trás, decidem acelerar ao máximo o desenvolvimento e que, no final das contas, vai fazer a história voltar ao ponto 1 novamente.

Muito importante ressaltar novamente a questão do quão profissional são as pessoas destes times pois, sair desta espiral negativa não é fácil e vai exigir muito esforço e engajamento com o problema. Você pode ter quantas mentes brilhantes quiser no time, nada vai sair enquanto não houver um esforço acima do normal para consertar a situação… e isto envolve muito trabalho sujo e chato obviamente.

Código limpo

Reconhecer que um código é sujo não significa que você saberá escrever um código limpo, mas fique tranquilo, pois este é um dos principais objetivos do livro e também dos próximos artigos.

Um consenso geral sobre o que é um código limpo é quando parece que ele foi escrito por alguém que realmente se importa. Você sabe que um código é limpo quando a lógica que você está lendo basicamente entrega como resultado o que você espera, antes mesmo de você ler os detalhes de implementação, um resultado que faz sentido e não apenas uma informação temporária em um estado estranho.

Fora isto, quando um código é bem escrito você não se esforça para desencriptar a informação que está contida nele, não possui truques e magias, é como se fosse um filme ruim onde nas primeiras cenas você já deduz o final.

Link:

[https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a](https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a)