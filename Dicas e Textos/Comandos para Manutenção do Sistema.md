Segue alguns comandos importantes para manutenção do sistema, principalmente para usuários iniciantes:

- Atualizar a lista de pacotes:

$ sudo apt-get update

- Atualizar toda a distro:

$ sudo apt-get -f dist-upgrade ou update-manager -d -c

- Instalar pacotes:

$ sudo apt-get install [nome do pacote]

- Procurar arquivos corrompidos:

$ sudo apt-get check

- Corrigir problemas de dependências, concluir instalação de pacotes pendentes e outros erros:

$ sudo apt-get -f install

- Se o comando sudo apt-get -f install não resolver use: sudo dpkg -i --force-all para forçar a instalação ou sudo dpkg -r [nome do pacote] para desistir da instalação.
- Solucionar problemas causados por interrupção na instalação, e pendências na configuração do pacote:

$ sudo dpkg --configure -a

- Remover arquivos inúteis do cache, onde são registradas as cópias das atualizações que são instaladas pelo gerenciador de pacotes:

$ sudo apt-get clean

- Remover pacotes instalados automaticamente e que não tem mais nenhuma utilidade para o sistema e que consome recursos da máquina:

$ sudo apt-get autoremove

- Remover pacotes antigos ou duplicados:

$ sudo apt-get autoclean

- Remover pacotes com problemas:

$ sudo apt-get -f remove

- Remover pacotes instalados:

$ sudo apt-get remove [nome do pacote]

- Remover restos de compilações anteriores e módulos desnecessários:

# make clean

- Para ver os pacotes órfãos: instalar o pacote deborphan e para verificar no sistema:

$ sudo deborphan

- Remover pacotes órfãos:

sudo deborphan | xargs sudo apt-get -y remove --purge

- Remover pacotes órfãos por interface gráfica, instalar o pacote:

gtkorphan

Depois, acessar: Sistema > Administração > Remove orphaned

- Listar pacotes:

$ sudo apt-get -l [nome do pacote]

- Verificar a versão do kernel:

$ uname -a

- Checar se tem vírus no sistema:

# chkrootkit (antes de checar instalar o pacote chkrootkit)

- Verificar as mensagens de erro geradas durante a compilação e instalar os componentes necessários:

$ sudo apt-get install auto-apt

Depois execute os comandos nessa ordem: auto-apt update, auto-apt updatedb, auto-apt update-local

- Verificar o estado e temperatura do hd:

# smartctl -H /dev/sda1 (diagnóstico rápido) , # smartctl -A /dev/sda1 (verificação com mais detalhes)

- Corrigir erros do hd:

# fsck /dev/sda1

- Verificar a temperatura do hd:

# hddtemp /dev/sda1

- Formatar partição:

# mkfs.ext3 /dev/sda1 (cuidado ao utilizar este comando! se formatar a raiz perderá o sistema, se formatar a partição home perderá seus arquivos pessoais)

- Recuperar partições do hd danificado:

# fsck.ext3 /dev/sda1 e fsck.ext3 -f /dev/sda1 para forçar a verificação da partição

- Exibir informações dos usuários do sistema. Se um usuário não for passado ao comando o mesmo apresentará informações de todos usuários atualmente logados:

# finger

”finger fulano” para exibir informações, como login, diretório pessoal, shell entre outras do usuário “fulano”.

- passwd

Alterar a senha de um usuário exibindo um prompt para que a nova senha seja fornecida, e logo depois repetida para confirmação.

O usuário logado pode alterar a própria senha digitando apenas ”passwd”.

$ sudo passwd fulano (para alterar a senha do usuário “fulano”).

$ sudo passwd -l fulano (para bloquear a conta do usuário “fulano”).

$ sudo passwd -u fulano (para desbloquear a conta do usuário “fulano”).

$ sudo passwd -d fulano (para desativar a senha do usuário “fulano” deixando-o sem uma senha de acesso).

- ifconfig

Permite configurar as interfaces de rede, sendo o comando utilizado na inicialização do sistema para configuração destas interfaces. Caso nenhum argumento seja passado junto ao comando, o mesmo apenas irá exibir o estado das interfaces atualmente definidas.

- uname

Este comando exibe várias informações sobre o sistema, incluindo o nome da maquina, nome e versão do Kernel e alguns outros detalhes. É muito útil para verificar qual é o Kernel usado por você.

- top

Este comando exibe em tempo real informações sobre seu sistema Linux, processos em andamento e recursos do sistema, incluídos CPU, memória RAM e uso do swap, além do número total de tarefas sendo executadas.

- free

Este comando exibe a quantidade de memória livre e usada no sistema. "free -m" fornece a informação usando megabytes, que é provavelmente mais útil para computadores atuais.

- df

Mostra o espaço em disco do sistema de arquivos usado por todas as partições. "df -h" é provavelmente o mais útil - usa megabytes (M) e gigabytes (G) em vez de blocos para relatar o tamanhos. (-h significa "human-readable").

- badblocks

Procura por blocos ruins em um dispositivo, geralmente uma partição de disco.

$ sudo badblocks /dev/hda3 para verificar se o dispositivo /dev/hda3 se encontra com blocos ruins.

- halt, reboot, shutdown

Respectivamente encerra, reinicializa e encerra ou reinicializa o sistema.

$ sudo halt (para encerrar o sistema).

$ sudo reboot (para reiniciar imediatamente o sistema. Este comando equivale aos comandos $ sudo init 6 e $ sudo shutdown -r now).

$ sudo shutdown -h now (para encerrar o sistema imediatamente).

$ sudo shutdown -h +15 (para encerrar o sistema daqui a 15 minutos).

$ ls -lh /etc/shadow (para saber a data de instalação):

- apt-cache polícy [nome do pacote] (para saber se pacote esta disponível para instalação nos repositórios).