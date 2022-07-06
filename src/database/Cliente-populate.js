import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./src/database/database.db');


// Clientes
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "SENHA" varchar(100)
);`;

const ADD_CLIENTES = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, SENHA)
VALUES
(1, 'Alexandre Cezar', '.xxxxx@xx.com.br', '5432'),
(2, 'Alexandre Neckel', 'xxxxx.xxxx@gmail.com.br', '1234'),
(3, 'Danielis', '.xxxxx@xx.com.br', '5432'),
(4, 'Isadora', 'xxxxx.xxxx@gmail.com.br', '1234'),
(5, 'Thaynara', 'xxxxx.xxxx@gmail.com.br', '1234')
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
        if (error)console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaClientes() {
    db.run(ADD_CLIENTES, (error)=> {
        if (error)console.log("Erro ao popular tabela de usuários")
    });
}


    db.serialize( ()=> {
        criaTabelaClientes();
        populaTabelaClientes();
    });