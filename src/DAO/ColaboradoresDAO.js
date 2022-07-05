export class ColaboradoresDAO {
    constructor(bd) {
        this.bd = bd;
    }

    inserirColaborador(novoColaborador){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO RESERVAS (NOME, CNPJ, FUNCAO, TELEFONE, EMAIL, ENDEREÇO) VALUES (?,?,?,?,?,?)`, 
            [colaborador.id, novoColaborador.nome, novoColaborador.cnpj, novoColaborador.funcao, novoColaborador.telefone, novoColaborador.email, novoColaborador.endereco],
            (erro) => {
                if (erro) {
                    console.log('reject');
                    reject('Colaborador não pôde ser cadastrado', erro)
                } else {
                    console.log('resolve');
                    resolve('Colaborador cadastrado com sucesso')
                }
            })
        })
    }

    listarColaborador(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM COLABORADOR`, (erro, resultado) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Colaboradores selecionados": resultado});
                }
            })
        })
    }

    listarColaboradorid(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM COLABORADORES WHERE ID_COLABORADOR = ?`, [id], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Colaborador selecionado": rows})
                }
            })
        })
    }

    alterarColaborador(novoColaborador){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE COLABORADORES SET NOME = ?, CNPJ = ?, FUNCAO = ?, TELEFONE = ?, EMAIL = ?, ENDEREÇO = ? WHERE ID_COLABORADOR = ?`, novoColaborador, (erro) => {
                if (erro) {
                    reject("Erro ao atualizar o cadastro", erro)
                } else {
                    resolve("Cadastro atualizado")
                }
            })
        })
    }
    deletarColaborador(id){
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM COLABORADOR WHERE ID_COLABORADOR = ${id}`, (erro) => {
                if (erro) {
                    reject("Erro ao deletar o cadastro", erro)
                } else {
                    resolve("Cadastro deletado com sucesso")
                }
            })
        })
    }
}
