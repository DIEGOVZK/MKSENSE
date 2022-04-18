// Cria uma classe interface para coletar os dados usando LocalServer.js 
// e enviar os dados ao servidor usando DataBase.js
export default class Client {
    
    
    // Inicializa o identificador de classes
    static _identifier = 0;
    port;

    // Construtor da classe Client
    constructor(port) {

        // Cria objeto passando PORT
        if (!arguments.length) {
            LocalServer._identifier++;
            this.port = LocalServer._identifier;
        }

        // Cria objeto usando identificador como PORT
        else
            this.port = port;

        /* Foi feito assim pois javascript é chato e
        não permite sobrecarga de construtories e métodos */
    }
    
}