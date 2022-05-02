"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UI_Server {
    mostrarErro(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[31m Erro " + mensagem + " no port: " + porta);
    }
    mostrarStatus(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[32m " + mensagem + " no port: " + porta);
    }
    mostrarNovaConexao(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[33m Nova conexão " + mensagem + " no port: " + porta);
    }
}
exports.default = UI_Server;
