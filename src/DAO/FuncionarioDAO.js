export class funcionarioDao{
    constructor(db)
    {
        this.db=db;
    }
 inserirFuncionario(NovoFuncionario){
    return new Promise((resolve, reject) => {
        this.bd.run('INSERT INTO FUNCIONARIOS(ID,NOME,EMAIL,SENHA,CPF,TELEFONE,FUNCAO) VALUES(?,?,?,?,?,?,?)',
       [NovoFuncionario.ID,NovoFuncionario.nome,NovoFuncionario.email,NovoFuncionario.senha,NovoFuncionario.cpf,NovoFuncionario.telefone,NovoFuncionario.funcao],
        (erro)=>{
            if (erro) {
                reject(erro);
            } else {
                resolve('novo funcionário registrado')
            }
        })
    })
 }
 listarFuncionarios(){
    return new Promise((resolve, reject)=>{
        this.bd.all(`SELECT * FROM FUNCIONARIOS`,(err,results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
 }
 listadefuncionariospeloId(ID){
    return new Promise((resolve, reject)=>{
        this.bd.all(`SELECT * FROM FUNCIONARIOS WHERE ID=${ID}`,(err, results) => {
            if(err){
                reject(err)
            }else {
                resolve(results)
            }
        })
    })
 }
 alterarFuncionarios(NovoFuncionario){
    return new Promise((resolve, reject)=>{
        this.bd.run(`UPDATE FUNCIONARIOS SET NOME=?,EMAIL=?,SENHA =?,CPF=?,TELEFONE=?,FUNCAO=?,WHERE id = ?`, Parametros ,(error)=>{
            if(error){
               console.log('ERRO AO ALTERAR DADOS TENTE NOVAMENTE');
                reject(error);
            }else{
                resolve("ALTERADO COM SUCESSO")
            }
        })
    })
 }
 deletarFuncionarioByID(id){
    return new Promise ((resolve, reject) => {
        this.bd.run(`DELETE FROM FUNCIONARIOS WHERE ID_FUNCIONARIOS = ${id}`, (erro) => {
            if (erro) {
                reject("Erro ao deletar o cadastro", erro)
            } else {
                resolve("Cadastro deletado com sucesso")
            }
        })
    })
 }
}

export default funcionarioDao;