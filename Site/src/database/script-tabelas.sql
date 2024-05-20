-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database SaoPaulo;
use SaoPaulo;

create table usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
idade int,
senha varchar(45)
);


create table quiz(
idQuiz int primary key auto_increment,
qtdPerguntas int
);

create table registro(
idRegistro int,
fkUsuario int,
fkQuiz int,
primary key(idRegistro, fkUsuario, fkQuiz),
qtdPontos int,
dtAtual datetime,
foreign key (fkUsuario) references usuario(id),
foreign key (fkQuiz) references quiz(idQuiz)
);