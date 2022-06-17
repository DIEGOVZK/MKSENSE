// Inclui as dependências > LocalServer, FileSystem
import DataBase_Connection from "./DataBase_Connection";
import LocalServer from "./LocalServer";
import FileSystem from "./FileSystem";
import { callbackify } from "util";
import { resolve } from "path";

// ======================== Importação dos dados via FS ======================== //

// Cria uma lista de objetos localServer
let localServerList: LocalServer[] = [];

// Cria objeto fileSystem
const fs = FileSystem.getInstance();

// ======================== Abertura das portas < Cliente > ======================== //

// Lê o arquivo de configuração e separa os comandos por vírgulas
var lines = String(fs.lerArquivo()).split(",")

// Cria uma lista de servidores com as portas especificadas
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

// ======================== < Testes de conexão com o B.D. > ======================== //



