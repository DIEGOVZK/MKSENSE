-- Inicializa um banco de dados projeto
drop database if exists DiegoAC;
create database DiegoAC;
use DiegoAC;

-- cria uma tabela Sensor com ID (chave), dado, tipo, id_usuario (estrangeira, relacionamento 1:N com Cliente)
drop table if exists Sensor;
create table Sensor (
    id int not null auto_increment,
    dado float not null,
    tipo varchar(5) not null,
    id_usuario int,
    primary key (id)
);

-- cria uma tabela Cliente com nome, login (chave), senha, contato e Sensor_id_cliente (chave estrangeira para tabeka de rekalçai N:M)
drop table if exists Cliente;
create table Cliente (
    nome varchar(50) not null,
    login varchar(50) not null,
    senha varchar(50) not null,
    contato varchar(50) not null,
    Sensor_id_cliente int,
    primary key (login)
);

-- Cria uma tabela Instalador com ID (chave), nome, CPF, salário
drop table if exists Instalador;
create table Instalador (
    id int not null auto_increment,
    nome varchar(50) not null,
    CPF varchar(14) not null,
    salario float not null,
    primary key (id)
);

-- Cria uma tabela de relacionamento N:M entre Instalador e Cliente
drop table if exists Instalador_Cliente;
create table Instalador_Cliente (
    id_instalador int not null,
    id_cliente int not null,
    primary key (id_instalador, id_cliente),
    foreign key (id_instalador) references Instalador(id),
    foreign key (id_cliente) references Cliente(login)
);

-- Cria uma stored proceadure para inserir um novo dado de sensor
use `DiegoAC`;
drop procedure if exists inserir_dado_sensor;

DELIMITER $$ 
USE `DiegoAC`$$
create procedure inserir_dado_sensor(
    in dado float,
    in tipo varchar(5),
    in id_usuario int
) begin
    insert into Sensor (dado, tipo, id_usuario) values (dado, tipo, id_usuario);
END $$ 
DELIMITER ;

-- Popula a tabela Sensor com dados aleatórios
use `DiegoAC`;
call inserir_dado_sensor(1, 'temp', 1);
call inserir_dado_sensor(2, 'temp', 1);
call inserir_dado_sensor(3, 'temp', 1);
call inserir_dado_sensor(4, 'temp', 1);
call inserir_dado_sensor(5, 'temp', 2);
call inserir_dado_sensor(6, 'temp', 2);
call inserir_dado_sensor(7, 'temp', 2);
call inserir_dado_sensor(8, 'temp', 2);
call inserir_dado_sensor(9, 'temp', 2);

-- Seleciona apenas as empresas cujos sensores indicam temperatura maior que 5
select * from Cliente where Sensor_id_cliente in (select id from Sensor where dado > 5);