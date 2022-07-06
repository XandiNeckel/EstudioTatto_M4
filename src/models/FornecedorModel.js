export class Fornecedor{
    constructor(nome, cnpj, endereco, email, telefone){
        this.nome = nome;
        this.cnpj = this.validaCpnj(cnpj);
        this.endereco = this.validaEndereco(endereco);
        this.email =  this.validaEmail(email);
        this.telefone = this.validaTelefone(telefone);
    }

    validaCpnj(cnpj){
        if(cnpj.length >= 18){
            return cnpj
        }else{
            throw new Error("O CNPJ precisa estar no formato 00.000.000/0000-00")
        }             
    }

    validaEndereco(endereco){
        if(endereco.length > 5){
            return endereco
        }else{
            throw new Error("Digite um endereço valido!")
        }
    }

    validaEmail(email){
        if(email.length >= 10 && email.indexOf('@') > 2){
            return email
        }else{
            throw new Error("Digite um endereco valido! --> exemplo@dominio.com")
        }
    }

    validaTelefone(telefone){
        if(telefone.length > 13){
            return telefone
        }else{
           throw new Error("Digite um n° de telefone valido!") 
        } 
    }

}