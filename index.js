import express, { json } from 'express';                  // atribuindo as var/const para utilização dos pacote/framework
import morgan from 'morgan';
import cors from 'cors';
import { urlencoded } from 'body-parser';
import {agenda} from  './src/AgendaController.js';
const app = express();

      //bibliotecas
app.use(morgan('dev'));                              //toda a log de execução
app.use(urlencoded({extend: false}));     //url enconded = propriety que é = false
app.use(json()) ;                            // utilizado para determinar o tipo de dado que irá receber
app.use(cors());                                     // cors recebe uma propriedade vazia

app.listen(3000, ()=> {                             //arrow function -  ligando o servidor
    const newLocal = `Express started at http://localhost:3000`;
    console.log(newLocal);
});

