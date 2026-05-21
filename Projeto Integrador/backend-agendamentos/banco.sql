CREATE DATABASE agendamento_db;

USE agendamento_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeCliente VARCHAR(100),
    nomeBarbeiro VARCHAR(100),
    horario VARCHAR(20),
    data VARCHAR(20)
);