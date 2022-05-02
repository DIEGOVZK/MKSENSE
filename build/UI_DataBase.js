"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UI_DataBase {
    mostrarErro(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[31m Erro " + mensagem + " ao se conectar no database: " + porta);
    }
    mostrarStatus(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[32m " + mensagem + " usando database: " + porta);
    }
    mostrarNovaConexao(mensagem, porta) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[33m Nova conexão " + mensagem + " no database: " + porta);
    }
}
exports.default = UI_DataBase;
