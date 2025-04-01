create database Lavaminio;
use Lavaminio;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    bloco VARCHAR(255),
    apartamento INT,
    telefone VARCHAR(255),
    email VARCHAR(255),
    status ENUM('Residente','Proprietario','Visitante'),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);


create table car(
	id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(255) NOT NULL,
    modelo VARCHAR(255),
    cor VARCHAR(255),
    morador_id INT NOT NULL,
    box VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key(morador_id) references users(id)
);