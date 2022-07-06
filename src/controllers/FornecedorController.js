import {Fornecedor} from "../models/FornecedorModel.js";
import {FornecedorDao} from "../DAO/FornecedorDAO.js";

export const fornecedor = (app, db) => {

    const fornecedorDao = new FornecedorDao(db)
    
    app.get('/fornecedor', (req,res) => {
        const data = async() => {
            try {
                const fornecedor = await fornecedorDao.listarFornecedor()
                res.status(200).json(fornecedor)

            } catch (error) {
                res.status(404).json(error)
            }
        }
        data()
    });

    app.post('/fornecedor', (req,res) => {

        const body = req.body;
        const novoFornecedor = new Fornecedor(body.nome, body.cnpj, body.endereco, body.email, body.telefone);
        const data = async() => {
            try{ 
                const fornecedor = await fornecedorDao.inserirFornecedor(novoFornecedor);
                res.status(200).json(fornecedor);
            }catch(err){
                res.status(404).json(err);
            }
        }
        data()
    });
 
    app.get('/fornecedor/:id' , (req,res) => {
        const data = async() => {
            try{
                const id = req.params.id
                const fornecedor = await fornecedorDao.listarFornecedorId(id)

                res.status(200).json(fornecedor)
            }catch(err){
                res.status(404).json(err)
                console.log(err)
            }
        }
        data()
    })

    app.delete('/fornecedor/:id', (req,res) => {
        const id = req.params.id
        const data = async() => {
            try {
                const newForn = await fornecedorDao.deletarFornecedor(id)
                res.status(200).json(newForn)
            } catch (error) {
                res.status(404).json(error);
            }
        }
        data();
    });

    app.put('/fornecedor/:id', (req,res) => {
        const body = req.body
        const id = req.params.id

        const data = async() => {

            try {
                const fornecedorA = await fornecedorDao.listarFornecedorId(id);
                console.log(fornecedorA)

                const fornecedorN = new Fornecedor
                (
                    body.nome || fornecedorA[0].NOME, 
                    body.cnpj || fornecedorA[0].CNPJ, 
                    body.endereco || fornecedorA[0].ENDERECO, 
                    body.email || fornecedorA[0].EMAIL, 
                    body.telefone || fornecedorA[0].TELEFONE
                )

                console.log(fornecedorN)
                
                const parametros = [fornecedorN.nome, fornecedorN.cnpj, fornecedorN.endereco, fornecedorN.email, fornecedorN.telefone, id]
                
                console.log(parametros)

                const fornecedor = await fornecedorDao.atualizarFornecedor(parametros);

                res.status(200).json(fornecedor);

            } catch (error) {
                res.status(404).json(error);
                console.log(error)
            }
        }
        data();
    });

};