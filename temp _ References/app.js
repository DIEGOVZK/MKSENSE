// Importa as classes dos pacotes desenvolvidos
import LocalServer from "./LocalServer.js";

// Limpa console
process.stdout.write("\n");

// Cria objetos que instanciam servidores locais
var serNum = [10, 20, 30, 140, 50, 160, 70, 80, 90, 100];

// Instancia os servidores indicados
var server = [];
serNum.forEach(element => {
    server.push(new LocalServer(element).open());
});

// Limpa console
process.stdout.write("\n");