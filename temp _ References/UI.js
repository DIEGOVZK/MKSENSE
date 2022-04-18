// Classe UI responsável pela interfáce básica de usuário no console do servidor

export default class UI {

    // Método que imprime uma mensagem de erro na tela
    static Error(message, port) {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[31m Erro " + message + " no port: " + port);

    }

    // Método que imprime uma mensagem de status na tela
    static Status(message, port) {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[32m " + message + " no port: " + port);

    }

    // Método que imprime uma mensagem de nova conexão na tela
    static NewConnection(port) {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[33m Nova conexão no port: " + port);

    }

}
