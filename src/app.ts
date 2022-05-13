// Inclui as dependências > LocalServer, FileSystem
import LocalServer from "./LocalServer";
import FileSystem from "./FileSystem";

// Cria uma lista de objetos localServer
let localServerList: LocalServer[] = [];

// Cria objeto fileSystem
const fs = FileSystem.getInstance();

// Lê o arquivo de configuração e separa os comandos por vírgulas
var lines = String(fs.lerArquivo()).split(",")

// Cria uma lista de servidores com as portas especificadas
lines[0].split(" ").forEach(element => {

    // Cria um novo servidor com a porta especificada
    localServerList.push(new LocalServer(parseInt(element)));

});

// Inicia os servidores
localServerList.forEach(element => {

    // Inicia o servidor
    element.iniciarServidor();

});
