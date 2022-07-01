import sqlite3 from "sqlite3";
import {
  dirname
} from "path";
import {
  UrlAPI
} from "url";

sqlite3.verbose();

const urlAPI = dirname(urlAPI(
  import.meta.url)) + "./database.db";
const db = new sqlite3.Database(urlAPI);

process.on("SIGINT", () =>
  db.close(() => {
    console.log(" BD finalizado!");
    process.exit(0);
  })
);

export default urlAPI;