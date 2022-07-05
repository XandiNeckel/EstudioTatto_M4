import Colaboradores from '../models/ColaboradoresModel.js';
import bd from '../database/sqlite-db.js';
import ColaboradoresDAO from "../DAO/ColaboradoresDAO.js";

const colaboradores = (app) => {
    //DAO
    const DadosDAO = new ColaboradoresDAO(bd) 

    //Rota POST
    app.post('/colaboradores', (req, res) => {
        const body = req.body;
        const novoColaborador = new Colaboradores(body.nome, body.cnpj, body.funcao, body.telefone, body.email, body.endereco)
        DadosDAO.inserirColaborador(novoColaborador)
        .then((result) => {
            res.send("Colaborador cadastrado com sucesso");
        }).catch((err) => { res.send(err)})
    })
    //Rota GET que puxa todas as reservas
    app.get('/colaboradores', (req, res) => {
        DadosDAO.listarColaboradores()
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota GET que puxa por id
    app.get('/colaboradores/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarColaboradores(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota PUT
    app.put('/colaboradores/:id', (req, res) => {
        const body = req.body
        const id = req.params.id;
        const reservaAlt = DadosDAO.listarColabores(id);
        const dadosNovos = new Colaboradores(
            body.id_colaborador || reservaAlt.id_colaborador, 
            body.nome || reservaAlt.nome, 
            body.cnpj || reservaAlt.cnpj, 
            body.funcao || reservaAlt.funcao, 
            body.telefone || reservaAlt.telefone,
            body.email || reservaAlt.email,
            body.endereco || reservaAlt.endereco
        )
        const param = [dadosNovos.nome, dadosNovos.cnpj, dadosNovos.funcao, dadosNovos.telefone, dadosNovos.email, dadosNovos.endereco, parseInt(id)];
        DadosDAO.alterarColaborador(param)
        .then((result) => {
            res.send(result)
        }).catch((err) => {res.send(err);})
    })
    //Rota DELETE
    app.delete('/colaboradores/:id', (req, res) => {
        DadosDAO.deletarColaborador(req.params.id)
        .then((result) => {
            res.send("Colaborador deletado com sucesso")
        }).catch((err) => {res.send(err)});
    })
}

export {colaboradores}

