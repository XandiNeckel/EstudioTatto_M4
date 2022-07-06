//cliente -CRUD
import {ClienteDao} from "../DAO/ClienteDAO.js"
import {Cliente} from "../models/ClienteModel.js"



export const cliente = (app,bd)=> {
    const DaoCliente = new ClienteDao(bd)
    //CREAT DO CRUD- INSERIR REGISTROS

    
    app.post('/cliente', (req, res) => {
        //pegar dados e armazenar no banco
        const body = req.body
        const ClienteDado = new Cliente(body.nome, body.email, body.senha)
        const data = async() => {
            try {
                const clientes = await DaoCliente.insereClientes(ClienteDado)
                res.send(clientes)
            }catch(err){
                res.send(err)
            }
        }
         data()
    });

    app.get('/cliente', (req,res)=>{
        console.log('estou aqui')
        const data = async() => {
            try {
                const clientes = await DaoCliente.listarClientes()
                console.log(clientes)
                res.send(clientes)
            }catch(err){
                res.send(err.message)
            }
        }
         data()
    })


    //READ DO CRUD E EXIBIR REGISTROS
    app.get('/cliente/:id', (req, res) => {
        const data = async() => {
            try {
                const clientes = await DaoCliente.listarClientesID(req.params.id)
                res.send(clientes)
            }catch(err){
                res.send(err)
            }
        }
         data()
        
    })
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/cliente/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
    
        const data = async() => {
            try {
                const dadosantigos = await DaoCliente.listarClientesID(id)
                console.log(body)
                const ClienteAtual = new Cliente(
                    body.nome || dadosantigos[0].NOME,
                     body.email || dadosantigos[0].EMAIL, 
                     body.senha || dadosantigos[0].SENHA)
                     const parametros = [ClienteAtual.nome, ClienteAtual.email, ClienteAtual.senha, id ]
                     console.log(parametros)
                const clientes = await DaoCliente.altereClientes(parametros)
                res.send(clientes)
            }catch(err){
                res.send(err)
            }
        }
         data()
    })
    //DELETE DO CRUD - ATUALIZAR REGISTROS
    app.delete('/cliente/:id', (req, res) => {
        const data = async() => {
            try {
                const clientes = await DaoCliente.deleteClientes(req.params.id)
                res.send(clientes)
            }catch(err){
                res.send(err.message)
            }
        }
         data()
    })
}
