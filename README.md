<h4 align="center"> 
    :construction: - - Projeto em Construção - -  :construction:
</h4>
<h1 align="center" style='font-family: Righteous'> Estúdio Seven - Estúdio de Tatuagem ✒️</h1>
<img src="./src/assets/img/bannerStudioSeven.png">

 <h2>🎯 Objetivo</h2>
 Esse projeto tem como objetivo criar uma API REST (Estudio de tatuagem)  para cinco entidades, onde deve ser possível aplicar as operações de CRUD entre outros.

<h3>💻 Instalação Da Aplicação</h3>

<h5>Passo 1:</h5> Abra o Terminal->Powershell e rode os comandos abaixo:⬇

<h5>Passo 1:</h5>
Clonando o repositório:

Git-Clone: `https://github.com/XandiNeckel/EstudioTatto_M4.git`
<h5>Passo 2:</h5>
Entrando na pasta:

 `cd Projeto_M4`
<h5>Passo 3:</h5>
Instalando os pacotes necessários:

`npm install`
<h5>Passo 4:</h5>
Criando e populando banco de dados:

`npm run database`
Iniciando o servidor:
`npm start`

##📌 Rotas Implementadas
####GET /Agenda
Retorna todos os agendamentos já executados/realizados;

Schema da resposta:

{
	"Agenda": [
        {
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": "AAAA-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
####GET /Agenda/Cliente/{Cliente_ID}
Retorna todos os agendamentos de um determinado cliente.

Schema da resposta:

{
	"Agenda": [
		{
			"ID": <number>,
			"Cliente_ID": {Cliente_ID},
			"Funcionario_ID": <number>,
			"Data": "AAAA-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
####GET /Agenda/Funcionario/{Funcionario_ID}
Retorna todos os agendamentos de um determinado funcionario.

Schema da resposta:

{
	"Agenda": [
		{
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": {Funcionario_ID},
			"Data": "AAAA-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
####GET /Agenda/Data/{Data}
Retorna todos os agendamentos em uma determinada data (O formato para a data deve ser: "AAAA-MM-DD").

Schema da resposta:

{
	"Agenda": [
		{
			"ID": <number>,
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": {Data},
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		}
	],
	"error": <boolean>
}
####POST /Agenda
Insere/Acrescenta um novo agendamento no banco de dados.

Schema da requisição:

{
  "Cliente_ID": <number>,
  "Funcionario_ID": <number>,
  "Data": "AAAA-MM-DD",
  "Hora": "HH:MM:SS",
  "Servico": <string>,
  "Duracao": <number>
}
Schema da resposta:

{
	"message": "Parabéns! Novo agendamento criado com sucesso. Data:{Data}, Hora:{Hora}",
  "Agenda": {
			"Cliente_ID": <number>,
			"Funcionario_ID": <number>,
			"Data": "AAAA-MM-DD",
			"Hora": "HH:MM:SS",
			"Servico": <string>,
			"Duracao": <number>
		},
	"error": <boolean>
}
####PUT /Agenda/id/{ID}
Atualiza/Altera um determinado agendamento no banco de dados.

Schema da requisição:

{
  "Cliente_ID": <number>,
  "Funcionario_ID": <number>,
  "Data": "AAAA-MM-DD",
  "Hora": "HH:MM:SS",
  "Servico": <string>,
  "Duracao": <number>
}
Schema da resposta:

{
  "Message": "Parabéns! Agendamento de ID {ID} atualizado com sucesso",
  "Agendamento": {
    "Cliente_ID": <number>,
    "Funcionario_ID": <number>,
    "Data": "AAAA-MM-DD",
    "Hora": "HH:MM:SS",
    "Servico": <string>,
    "Duracao": <number>
  },
  "error": <boolean>
}
####DELETE /Agenda/id/{ID}
Deleta um determinado agendamento do banco de dados.

Schema da resposta:

{
    "Agenda": "Parabéns! Agendamento de ID {ID} deletado com sucesso",
    "error": <boolean>
}

## :hammer: Funcionalidades do Projeto:


- `Funcionário`: Tem como finalidade alocação dos funcionários que atuam no estudio.
- `Cliente`: Tem como finalidade pegar dados do cliente para contato/pagamento.
-  `Agenda`: Tem como finalidade agendar horários com os clientes.
- `Parcerias`:Tem como finalidade, ter/fazer sociedade/parceria com clientes/amigos futuros.
- `Fornecedores`: Tem como finalidade, prestador de materiais entre outros nos quais forem requistados.
  
  <h4>✔️ Técnicas e Tecnologias Utilizadas:</h4>
- `SQL`
- `NODEJS`
- `VSCODE`
- `EXPRESS`
- `MVC`
- `NODEMON`
- `JSON`
##     👨🏻‍💻 Autores  ##

| [<img src="./src/assets/img/perfil_aleneckel.jpg" width=115><br><sub> Alexandre Neckel</sub>](https://github.com/XandiNeckel) |  [<img src=".//src/assets/img/perfil_dani.jpg" width=115><br><sub>Danielys Davila</sub>](https://github.com/Danielysdavils) |  [<img src="./src/assets/img/perfil_thay.jpg" width=115><br><sub>Thaynara</sub>](https://github.com/Thaynara108310) |
| :---: | :---: | :---:

| [<img src=".//src/assets/img/perfil_alecezar.png" width=115><br><sub>Alexandre Cezar Fh</sub>](https://github.com/alexandre.cezar) |  [<img src=".//src/assets/img/perfil_isa.jpg" width=115><br><sub>Isadora Xavier</sub>](https://github.com/IsadoraXavierR) | 
| :---: | :---: 
