"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
class LocalServer {
    constructor(porta) {
        this._jsonBuffer = "";
        this.porta = 0;
        if (!arguments.length) {
            LocalServer.identificador++;
            this.porta = LocalServer.identificador;
        }
        else
            this.porta = porta;
    }
    iniciarServidor() {
        var _body = [];
        const app = http_1.default.createServer();
        app.on('connection', (socket) => {
            this.ip = socket.remoteAddress;
            console.log(this.ip);
        });
        app.on('request', (req, res) => {
            try {
                req.on('data', (chunk) => {
                    _body.push(chunk);
                });
                req.on('end', () => {
                    var _bodyString = Buffer.concat(_body).toString();
                    if (_bodyString.length > 0)
                        this._jsonBuffer = JSON.parse(_bodyString);
                });
            }
            catch (error) {
                if (error instanceof SyntaxError)
                    console.log("Erro de sintaxe");
                else
                    console.log("Erro desconhecido");
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
