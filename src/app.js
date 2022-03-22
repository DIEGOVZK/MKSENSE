import LocalServer from "./LocalServer.js";

// Cria objetos que instanciam servidores locais
var server_1 = new LocalServer(8080); 
var server_2 = new LocalServer(); 
var server_3 = new LocalServer(); 

// Inicialisa os servidores criados
server_1.open();
server_2.open();
server_3.open();