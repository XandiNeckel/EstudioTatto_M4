import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/database/database.db');

const COLABORADORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "COLABORADORES" (
    "ID_COLABORADOR" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "NOME" varchar(64),
    "FUNCAO" varchar(64),
    "CNPJ" varchar(64),
    "TELEFONE" varchar(64), 
    "EMAIL" varchar(64),
    "ENDEREÇO" varchar(64)
  );`;

const ADD_COLABORADORES_DATA = `
INSERT INTO COLABORADORES (ID_COLABORADOR, NOME, CNPJ, FUNCAO, TELEFONE, EMAIL, ENDEREÇO)
VALUES 

    (1, 'EBANX', '12345678000100', 'pagamentos', '41943238790', 'contato@ebanx.com', 'Curitiba'),
    (2, 'RESILIA', '12345938000100', 'educação', '21948738790', 'contato@resilia.com', 'Rio de Janeiro'),
    (3, 'BBN', '12374678000100', 'business', '41943098790', 'contato@blackbusinessesnetwork.com', 'Curitiba'),
    (4, 'TAROTHAY', '12345768000100', 'tarologia', '41943226790', 'contato@thaysawebertarologa.com', 'Curitiba'),
    (5, 'SENTINELPROMESA', '12345188000100', 'iventimentos','44943240790', 'contato@inventimentos.com', 'Maringa')
    `

function criaTabelaColaboradores() {
    db.run(COLABORADORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de colaboradores", error);
    });
}
function populaTabelaColaboradores() {
    db.run(ADD_COLABORADORES_DATA, (error) => {
        if (error) console.log("Erro ao criar tabela de colaboradores", error);
    });
}

db.serialize(() => {
    criaTabelaColaboradores();
    populaTabelaColaboradores();
});

