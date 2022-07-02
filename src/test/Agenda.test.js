import request from "supertest";
import app from "../app.js";

describe("GET /Agenda", () => {
  it("Retornar todos os agendamentos", async () => { // retorna todos os agendamentos
    const resp = await request(app).get("/Agenda");
    expect(resp.statusCode).toEqual(200);
  });
});

describe("GET /Agenda/cliente/:Cliente_ID", () => { //retorna os agendamentos do cliente solicitado
  it("Retornar o agendamento do cliente solicitado", async () => {
    const resp = await request(app).get("/Agenda/cliente/2");
    expect(resp.statusCode).toEqual(200);
  });
});

describe("GET /Agenda/funcionario/:Funcionario_ID", () => {
  it("Retornar o agendamento do funcionario solicitado", async () => {
    const resp = await request(app).get("/Agenda/funcionario/2");
    expect(resp.statusCode).toEqual(200);
  });
});

describe("GET /Agenda/data/:Data", () => {
  it("Retornar o agendamento na data solicitada", async () => {
    const resp = await request(app).get("/Agenda/data/2022-02-10");
    expect(resp.statusCode).toEqual(200);
  });
});

describe("POST /Agenda", () => {
  it("Inserir um novo agendamento", async () => {
    const resp = await request(app).post("/Agenda").send({
      Cliente_ID: 2,
      Funcionario_ID: 1,
      Data: "2022-02-10",
      Hora: "14:00",
      Servico: "Tatuagem da medusa - mitologia",
      Duracao: "120",
    });
    expect(resp.statusCode).toEqual(201);
  });
});

describe("PUT /Agenda/id/:ID", () => {
  it("atualizar um agendamento", async () => {
    const resp = await request(app).put("/Agenda/id/2").send({
      Cliente_ID: 2,
      Funcionario_ID: 3,
      Data: "2022-05-08",
      Hora: "18:30",
      Servico: "Tatuagem de um Anão com cogumelo",
      Duracao: "90",
    });
    expect(resp.statusCode).toEqual(201);
  });
});

describe("DELETE /Agenda/id/:ID", () => {
  it("Deletar um agendamento", async () => {
    const resp = await request(app).delete("/Agenda/id/2");
    expect(resp.statusCode).toEqual(200);
  });
});