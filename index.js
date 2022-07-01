import express from "express";
import cors from "cors";
import database from "./src/models/sqlite-db.js";
import AgendaController from "./src/controllers/AgendaController.js";

const app = express();
app.use(express.json());
app.use(cors());

IndexController(app);
AgendaController(app, database);


app.listen(3001, ()=> {                             //arrow function -  ligando o servidor
  const newLocal = `Express started at http://localhost:3001`;
  console.log(newLocal);
});

export default app;
