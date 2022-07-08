import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./src/database/database.db');

const Funcionarios_Schema=`
CREATE TABLE IF NOT EXISTS "Funcionarios"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "EMAIL" varchar(100),
    "SENHA" varchar(100),
    "CPF" varchar(14),
    "TELEFONE" varchar(17)
);`
;

const ADD_Funcionarios = `
INSERT INTO Funcionarios(ID,CPF, NOME, EMAIL, SENHA,TELEFONE)
VALUES
(1, 'Cezar','+55(41)99999-9999','000.000.000-00', '.xxxxx@xx.com.br', '5432'),
(2, 'Kleber','+55(41)99999-9999','000.000.000-00', 'xxxxx.xxxx@gmail.com.br', '4390'),
(3, 'Fabiane','+55(41)99999-9999','000.000.000-00', '.xxxxx@gmail.com.br', '9834'),
(4, 'Isabel','+55(41)99999-9999','000.000.000-00', 'xxxxx.xxxx@gmail.com.br', '1468'),
(5, 'Thania','+55(41)99999-9999','000.000.000-00', 'xxxxx.xxxx@gmail.com.br', '1234')
`
;

function criaTabelaDeFuncionarios(){
    db.run(Funcionarios_Schema, (error)=> {
        if (error)console.log("Erro ao criar tabela funcionário")
    });
}

function  populaTabelaDeFuncionarios(params) {
    db.run(ADD_Funcionarios, (error)=> {
        if (error)console.log("Erro ao adicionar funcionário");
    });
}

db.serialize( ()=>
 {
    criaTabelaDeFuncionarios();
    populaTabelaDeFuncionarios();
}
)