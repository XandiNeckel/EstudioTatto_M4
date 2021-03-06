export class ClienteDao {
    constructor(bd){
        this.bd = bd;
    }

    listarClientes(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM CLIENTES`,(err,results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    listarClientesID(id){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM CLIENTES WHERE ID=${id}`,(err, results) => {
                if(err){
                    reject(err)
                }else {
                    resolve(results)
                }
            })
        })
    }
    insereClientes(NovoCliente){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO CLIENTES (NOME, EMAIL, SENHA) VALUES (?,?,?)`,
            [NovoCliente.nome, NovoCliente.email, NovoCliente.senha],(error)=>{
                if(error){
                    reject(error);
                }else{
                    resolve("INSERIDO COM SUCESSO")
                }
            })
        })
    }
    altereClientes(Parametros){
        return new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE CLIENTES SET NOME = ?, EMAIL = ? , SENHA = ?  WHERE id = ?`, Parametros ,(error)=>{
                if(error){
                    console.log(error)
                    reject(error);
                }else{
                    resolve("ALTERADO COM SUCESSO")
                }
            })
        })

    }
    deleteClientes(id){
        return new Promise((resolve, reject)=>{
            this. bd.run(`DELETE FROM CLIENTES WHERE ID = ${id}`,(error)=>{
                if(error){
                    reject(error);
                }else{
                    resolve("DELETADO COM SUCESSO")
                }
            })
        })
    }
}
