const bd = {
    'Agenda':[],
    
};

const Agenda = (app) => { //SELECIONANDO O BANCO NO SQLite
    app.get('/Agenda', (req, res) => {
        bdSQLite.all(`SELECT * FROM USUARIOS`, (error, resultado) => {
            if (error) {
                res.send('Erro ao selecionar Agenda')
            } else {
                res.send(resultado);
            }
        })
    })
}