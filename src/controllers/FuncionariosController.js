import {
    funcionariosM
} from "../models/FuncionariosModel";
import {
    funcionarioDao
} from "../DAO/FuncionarioDAO";


export const funcionario = (app, db) => {

    const funcionarioDao = new FornecedorDao(db);
    app.get('/funcionarios', (req, res) => {
        const data = async () => {
            try {
                const funcionario = await funcionarioDao.listarFuncionarios()
                res.status(200).json(funcionario)

            } catch (error) {
                res.status(404).json(error)
            }
        }
        data()
    });

    app.post('/funcionarios', (req, res) => {

        const body = req.body;
        const novoFuncionario = new Funcionario(body.nome, body.cpf, body.senha, body.email, body.telefone);
        const data = async () => {
            try {
                const funcionario = await funcionariosDao.inserirFuncionario(novoFornecedor);
                res.status(200).json(funcionario);
            } catch (err) {
                res.status(404).json(err);
            }
        }
        data()
    });

    app.get('/funcionarios/:id', (req, res) => {
        const data = async () => {
            try {
                const id = req.params.id
                const funcionario = await funcionarioDao.listadeFuncionariopeloId(id)

                res.status(200).json(funcionario)
            } catch (err) {
                res.status(404).json(err)
                console.log(err)
            }
        }
        data()
    })

    app.delete('/funcionarios/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const newFunc = await funcionarioDao.deletarFuncionarioByID(id)
                res.status(200).json(newFunc)
            } catch (error) {
                res.status(404).json(error);
            }
        }
        data();
    });

    app.put('/funcionarios/:id', (req, res) => {
        const body = req.body
        const id = req.params.id

        const data = async () => {

            try {
                const funcionaria = await funcionarioDao.listadefuncionariospeloId(id);
                console.log(funcionaria)

                const funcionariaI = new Funcionario(
                    body.nome || funcionaria[0].NOME,
                    body.cpf || funcionaria[0].CPF,
                    body.senha || funcionaria[0].SENHA,
                    body.email || funcionaria[0].EMAIL,
                    body.telefone || funcionaria[0].TELEFONE
                )

                console.log(funcionariaI)

                const parametros = [funcionariaI.nome, funcionariaI.cpf, funcionariaI.senha, funcionariaI.email, funcionariaI.telefone, id]

                console.log(parametros)

                const Funcionario = await fornecedorDao.atualizarFornecedor(parametros);

                res.status(200).json(Funcionario);

            } catch (error) {
                res.status(404).json(error);
                console.log(error)
            }
        }
        data();
    });

}