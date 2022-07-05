let id = 0;

class Colaboradores {
    constructor(nome, cnpj, funcao, telefone, email, endereco){
        this.id_colaborador = id++;
        this.nome = nome;
        this.cnpj = cnpj;
        this.funcao = funcao;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}

export {Colaboradores}