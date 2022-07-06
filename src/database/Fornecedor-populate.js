import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./src/database/database.db');

const fornecedor_schema = `
    CREATE TABLE IF NOT EXISTS "FORNECEDOR" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NOME" VARCHAR(64),
        "CNPJ" VARCHAR(64),
        "ENDERECO" VARCHAR(64),
        "EMAIL" VARCHAR(64),
        "TELEFONE" VARCHAR(64)
    ); `;

const add_fornecedor_data = `
    INSERT INTO FORNECEDOR (ID, NOME, CNPJ, ENDERECO, EMAIL, TELEFONE) VALUES 
        (1, 'Tony Piercing & tattoo supply', "00.000.000/0001-00",'Rua XV de Novembro', 'TonyPiercing&tattoosupply@gmail.com', '(41) 3324-8645'),
        (2, 'A Magia', "00.000.000/0001-00",'Rua. Eng. Costa Barros, 1407', 'amagia@gmail.com', '(41) 3369-4619'),
        (3, 'Chileno Piercing Supply', "00.000.000/0001-00",'Ed. Farid Surugi - R.Pres. Faria, 51', 'chilenopiercing@gmail.com', '(41) 99925-4578'),
        (4, 'Decorpelly Tatto Supply' , "00.000.000/0001-00",'Av. Rep. Argentina, 3396', 'decorpellytatto@gmail.com', '(41) 3079-6773')
`;

function criaTabelaFornecedor(){
    db.run(fornecedor_schema, (error) => {
        if(error) console.log("[ERROR] Error ao criar a tabela fornecedor!");
    }); 
}

function populaTabelaFornecedor(){
    db.run(add_fornecedor_data, (error) => {
        if(error) console.log("[ERROR] Error ao popular a tabela de pessoas!");
    })
}

db.serialize(() => {
    criaTabelaFornecedor();
    populaTabelaFornecedor();
})