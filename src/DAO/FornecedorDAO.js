export class FornecedorDao{
    constructor(db){
        this.db = db;
    }

    listarFornecedor(){
        return new Promise((res,req) => {
            this.db.all(`SELECT * FROM FORNECEDOR`, (err, resultado) => {
                if(err){
                    req("[ERROR] Problema ao selecionar o banco")
                    console.log(err)
                }else{
                    res({"Tabela dos fornecedores:" : resultado})
                }
            })
        })
    }

    listarFornecedorId(id){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM FORNECEDOR WHERE ID = ${id}`, (err, res) => {
                if(err) reject(err);
                else resolve(res)
            })
        })
    }

    inserirFornecedor(fornecedor){

        return new Promise((res,req) => {
            this.db.run(`INSERT INTO FORNECEDOR (NOME, CNPJ, ENDERECO, EMAIL, TELEFONE) VALUES (?,?,?,?,?)`, [fornecedor.nome, fornecedor.cnpj, fornecedor.endereco, fornecedor.email, fornecedor.telefone],
            
            (err) => {
                if(err) req(err);
                else res("Fornecedor adicionado com sucesso!")
            })
        })
    }

    deletarFornecedor(id){
        return new Promise((res,req) => {
            this.db.run(`DELETE FROM FORNECEDOR WHERE ID = ${id}`, (err) => {
                if(err) req(err)
                else res("Fornecedor deletado com sucesso!")
                
            })
        })
    }

    atualizarFornecedor(parametros){
        return new Promise((resolve,reject) => {
            this.db.run(`UPDATE FORNECEDOR SET NOME = ?, CNPJ = ? , ENDERECO = ?, EMAIL = ?, TELEFONE = ? WHERE id = ?`, parametros, (err) => {
                if(err) reject(err);
                else resolve("Fornecedor alterado com sucesso");
            })
        })
    }
}