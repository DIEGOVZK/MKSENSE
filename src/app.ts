// Inclui as dependências > LocalServer
import LocalServer from "./LocalServer";

// Cria objeto localServer
const localServer = new LocalServer(343);
const localServer2 = new LocalServer(402);

// Inicia o servidor
localServer.iniciarServidor();
localServer2.iniciarServidor();