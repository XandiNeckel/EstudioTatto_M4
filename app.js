import express from "express";
import cors from "cors";
import database from "./src/database/sqlite-db.js";
import AgendaController from "./src/controllers/agendaController.js";

const app = express();
app.use(express.json());
app.use(cors());

IndexController(app);
AgendaController(app, database);

export default app;