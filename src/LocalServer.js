// Dependências - http, 
import http from 'http';
import fs from 'fs';

/**
 * @class       LocalServer
 * @public 
 * @exports     class
 * @constructor Recebe opcionalmente 'PORT:n' a ser anexado com o servidor 
 * @abstract    Cria um objeto servidor responsável por se comunicar com um cliente
 *              via requisições HTTP. Cada objeto será reconhecido pelo seu PORT único de comunicação
 */
export default class LocalServer {

    // Membros da classe
    _jsonBuffer = "";
    port;

    // Inicializa o identificador de classes
    static _identifier = 0;

    // Construtor da classe LocalServer
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


    /**
     * @function open()
     * @abstract Inicia servidor HTTP na porta escolhida na classe LocalServer,
     *           recebe os pacotes HTTP e traduz para formato JSON antes de enviar ao servidor
     * 
     * @public
     */
    open() {

        // Variável para armazenar pacote recebido
        var _bodyBuffer = [];

        // Cria objeto Server usando bib http
        const app = http.createServer();

        // No evento de requisição HTTP
        app.on("request", (req, res) => {

            // No recebimento junta as chuncks no _bodyBuffer
            req.on("data", (bodyData) => {
                _bodyBuffer.push(bodyData);
            });

            // Ao fim da transmissão, contatena tudo e converte...
            req.on("end", () => {

                try { // Tenta traduzir JSON file

                    // Converte buffer para String e Json object
                    _bodyBuffer = Buffer.concat(_bodyBuffer).toString();
                    this._jsonBuffer = JSON.parse(_bodyBuffer);

                    // TODO: Alterar para interação com o banco de dados
                    fs.appendFile('SensorialData.csv', (this.port + ", " + _bodyBuffer) + '\n',
                        function (err) {
                            if (err) {
                                process.stdout.write("\x1B[31m Erro ao salvar dados do port: " +
                                    this.port + " Erro: " + err + "\n");
                            }
                        });

                        // Mostra os dados recebidos na tela
                        process.stdout.clearLine(0);
                        process.stdout.cursorTo(0);
                        process.stdout.write(`\x1B[32m Recebeu ${_bodyBuffer.length}` +
                        " chars no port " + this.port);
                        
                        // Reseta o  buffer para a próxima execução
                        _bodyBuffer = [];
                        
                    // Captura erro em caso do JSON não esteja formatado
                } catch (error) {
                    process.stdout.clearLine(0);
                    process.stdout.cursorTo(0);
                    process.stdout.write("\x1B[31m Erro ao montar JSON no port: " +
                        this.port);
                }
            });

            // Responde 200 OK
            res.end('200');
        });

        // Inicia servidor e 'escuta' nas portas especificadas
        process.stdout.write(`Server started on port: ${this.port} \n`);
        app.listen(this.port);
    }
}