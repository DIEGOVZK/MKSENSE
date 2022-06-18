// Inclui as dependências > LocalServer, FileSystem, DBA_Manager
import LocalServer from "./LocalServer";
import FileSystem from "./FileSystem";
import DBA_Manager from "./DBA_Manager";


// ======================== Importação dos dados via FS ======================== //

// Cria uma lista de objetos localServer
let localServerList: LocalServer[] = [];

// Cria objeto fileSystem
const fs = FileSystem.getInstance();

// Cria objeto DBA_Manager
const dba = new DBA_Manager("localhost", "root", "gr9qd*@¨FED*", "DiegoAC");

// ======================== Abertura das portas < Cliente > ======================== //

// Lê o arquivo de configuração e separa os comandos por vírgulas
var lines = String(fs.lerArquivo()).split(",")

// Para cada elemento de configuração
lines[0].split(" ").forEach(element => {

    // Cria um novo servidor com a porta especificada
    if (element.split(":")[1] == "C")
        localServerList.push(new LocalServer(
            parseInt(element.split(":")[0])
        ));
});

// Inicia os servidores
localServerList.forEach(element => {

    // Inicia o servidor
    element.iniciarServidor();

});

// ======================== Abertura das portas < Master > ======================== //

import bodyParser from 'body-parser';
import express from "express";
import path from "path";

// Cria o app express
const app = express();

// Configura o app para usar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Carrega a página inicial para interação com o usuário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));

});

// Ao receber um comando do usuário, executa query no banco de dados
app.post('/', (req, res) => {

    // Obtém o texto do campo de entrada
    let data = req.body.Data;

    // Envia para o banco de dados
    dba.executarQuery(data);

    // Retorna um 200OK
    res.status(200);
    res.redirect('/');

});

// Para cada elemento de configuração
lines[0].split(" ").forEach(element => {

    // Cria um novo servidor com a porta especificada
    if (element.split(":")[1] == "M")
        app.listen(parseInt(
            element.split(":")[0]));
});

// ======================== < Testes de conexão com o B.D. > ======================== //



