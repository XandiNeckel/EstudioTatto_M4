import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();

const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const AGENDA_SCHEMA = `CREATE TABLE IF NOT EXISTS "AGENDA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Cliente_ID" integer,
    "Funcionario_ID" integer,
    "Data" text,
    "Hora" datetime,
    "Servico" text,
    "Duracao" text
)`;

const ADD_AGENDA_DATA = `INSERT INTO AGENDA (ID, Cliente_ID, Funcionario_ID, Data, Hora, Servico, Duracao)
VALUES (1, 1, 3, "2022-03-09", "09:30:00", "Portifolio_ID 5", "60"),
(2, 2, 1, "2022-02-10", "14:00:00", "Novo: Tatuagem da medusa - mitologia", "120"),
(3, 3, 4, "2022-03-15", "10:45:00", "Portifolio_ID 15", "30"),
(4, 4, 2, "2022-04-20", "16:50:00","Portifolio_ID 7", "180"),
(5, 2, 3, "2022-05-08", "18:30:00","Novo: Tatuagem de um Anão com cogumelo", "90"),
(9, 8, 3, "2022-06-20", "17:30:00","Novo: Tatuagem de um unicornio", "90"),
(10, 9, 4, "2022-07-21", "18:15:00","Portifolio_ID 31", "60")`;

function criarTabelaAgenda() {
  db.run(AGENDA_SCHEMA, (error) => {
    if (error)
      console.log("Erro ao criar tabela AGENDA\n" + error.message + "\n");
  });
}

function popularTabelaAgenda() {
  db.run(ADD_AGENDA_DATA, (error) => {
    if (error) {
      if (
        error.message ===
        "SQLITE: failed: AGENDA.ID"
      ) {
        console.log("A tabela já foi preenchida\n");
      } else {
        console.log(`Erro ao preencher tabela AGENDA\n${error.message}\n`);
      }
    }
  });
}

db.serialize(() => {
  criarTabelaAgenda();
  popularTabelaAgenda();
});