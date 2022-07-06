import express from "express";
import cors from "cors";
import database from "./database/sqlite-db.js";
import AgendaController from "./controllers/agendaController.js";

import {cliente} from "./controllers/ClienteController.js"


const app = express();
app.use(express.json());
app.use(cors());

AgendaController(app, database);

cliente(app, database);
export default app;