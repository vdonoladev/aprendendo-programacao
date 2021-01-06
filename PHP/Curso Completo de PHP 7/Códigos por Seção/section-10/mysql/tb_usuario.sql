use dbphp7;

create table tb_usuarios (
idusuario int not null auto_increment primary key,
dslogin varchar(64) not null,
dssenha varchar(256) not null,
dtcadastro timestamp not null default current_timestamp()
);

insert into tb_usuarios (dslogin, dssenha) values ('root','!@#$');

select * from tb_usuarios;

update tb_usuarios set dssenha = '1234' where idusuario = 1;

delete from tb_usuarios where idusuario = 1;

-- Zerar a tabela => truncate table tb_usuarios;