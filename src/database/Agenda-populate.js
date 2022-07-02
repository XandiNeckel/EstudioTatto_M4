import sqlite3 from "sqlite3";
import { // retorna um método que está vinculado ao caminho fornecido.
  dirname // informa o caminho absoluto do diretório que contém o arquivo em execução no momento
} from "path"; // Um caminho.
import {
  UrlAPI
} from "url";
sqlite3.verbose(); // Resiliência de reconexão: as mensagens são armazenadas em buffer para retransmissão, se necessária

const filePath = dirname(UrlAPI(
  import.meta.url)) + "/database.db";
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

const ADD_AGENDA_DATA = `INSERT INTO AGENDA
(ID, Cliente_ID, Funcionario_ID, Data, Hora, Servico, Duracao) VALUES 
(2, 2, 1, "2022-02-10", "14:00:00","Novo: Tatuagem da medusa - mitologia", "120"),
(5, 2, 3, "2022-05-08", "18:30:00","Novo: Tatuagem de um Anão com cogumelo", "90"),
(9, 8, 3, "2022-06-20", "17:30:00","Novo: Tatuagem de um unicornio", "90")`

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
        "SQLITE: Failed: AGENDA.ID"
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

export default filePath;