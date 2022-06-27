import AgendaDAO from "../DAO/AgendaDAO.js";
import AgendaModel from "../models/AgendaModel.js";

const AgendaController = (app, bd) => {
  const agendaDAO = new AgendaDAO(bd);

  app.get("/agenda", async (req, res) => {
    try {
      const pegarTodosAgendamentos = await agendaDAO.pegarTodosAgendamentos();
      res.status(200).json(pegarTodosAgendamentos);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
      });
    }
  })}