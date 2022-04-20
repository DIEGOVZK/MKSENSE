import UI from "./UI";

export default class UI_DataBase implements UI {

    // Implementa o método mostrarErro da interface UI
    mostrarErro(mensagem: string, porta: any): void {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[31m Erro " + mensagem + " no port: " + porta);

    }

    // Implementa o método mostrarStatus da interface UI
    mostrarStatus(mensagem: string, porta: any): void {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[32m " + mensagem + " no port: " + porta);

    }

    // Implementa o método mostrarNovaConexao da interface UI
    mostrarNovaConexao(mensagem: string | undefined, porta: any): void {

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("\x1B[33m Nova conexão " + mensagem + " no port: " + porta);

    }

}

