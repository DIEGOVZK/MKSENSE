"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem_1 = __importDefault(require("./FileSystem"));
const UI_Server_1 = __importDefault(require("./UI_Server"));
const DBA_Users_1 = __importDefault(require("./DBA_Users"));
const http_1 = __importDefault(require("http"));
class LocalServer {
    constructor(porta) {
        this.ui = new UI_Server_1.default();
        this.porta = 0;
        this._jsonBuffer = "";
        if (!arguments.length) {
            LocalServer.identificador++;
            this.porta = LocalServer.identificador;
        }
        else
            this.porta = porta;
        this._dba = new DBA_Users_1.default("localhost", "root", "gr9qd*@¨FED*", "prova4");
    }
    iniciarServidor() {
        var _body = [];
        const app = http_1.default.createServer();
        app.on('connection', (socket) => {
            this.ip = socket.remoteAddress;
            this.ui.mostrarNovaConexao(this.ip, this.porta);
        });
        app.on('request', (req, res) => {
            try {
                req.on('data', (chunk) => {
                    _body.push(chunk);
                });
                req.on('end', () => {
                    var _bodyString = Buffer.concat(_body).toString();
                    if (_bodyString.length > 0) {
                        try {
                            this._jsonBuffer = JSON.parse(_bodyString);
                        }
                        catch (error) {
                            this.ui.mostrarErro("JSON parse ", this.porta);
                        }
                        const fsInstance = FileSystem_1.default.getInstance();
                        fsInstance.escreverArquivo(_bodyString, this.porta);
                        this._dba.executarQuery("select preco_com_desconto(10, 22, 6) from Cinema");
                        this.ui.mostrarStatus("recebeu um pacote {" + _bodyString.length + "}", this.porta);
                    }
                });
                _body = [];
            }
            catch (error) {
                if (error instanceof SyntaxError)
                    this.ui.mostrarErro(" sintaxe", this.porta);
                else
                    this.ui.mostrarErro(" pacote", this.porta);
            }
            res.end('200');
        });
        app.listen(this.porta);
        process.stdout.write(`Server started on port: ${this.porta} \n`);
    }
    getIP() {
        return this.ip;
    }
}
exports.default = LocalServer;
LocalServer.identificador = 0;
