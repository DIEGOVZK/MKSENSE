// Inclui as dependências > http
import FileSystem from './FileSystem';
import http from 'http';

// Definição da classe LocalServer
export default class LocalServer {

    // Membros da classe e identificador
    protected ip: string | undefined;
    public static identificador = 0;
    protected _jsonBuffer = "";
    protected porta = 0;

    // Construtor da classe LocalServer
    constructor(porta: number) {

        // Cria objeto usando identificador como porta
        if (!arguments.length) {
            LocalServer.identificador++;
            this.porta = LocalServer.identificador;
        }

        // Cria objeto usando argumento passado como porta
        else
            this.porta = porta;

        /* Foi feito assim pois javascript é chato e
        não permite sobrecarga de construtories e métodos */
    }

    // Método para iniciar o servidor
    iniciarServidor() {

        // Variável para armazenar o pacote HTTP recebido
        var _body: any[] | Uint8Array[] = [];

        // Cria o objeto servidor usando bib http
        const app = http.createServer();

        // No evento de conexão, verifica o endereço IP do cliente
        app.on('connection', (socket) => {

            // Armazena o endereço IP do cliente
            this.ip = socket.remoteAddress;

            // TODO: UTILIZAR UI PARA MOSTRAR NOVA CONEXÃO

        });

        // No evento de requisição HTTP
        app.on('request', (req, res) => {

            // Tenta traduzir o conteúdo recebido em JSON
            try {

                // Armazena o conteúdo recebido em um buffer
                req.on('data', (chunk) => {
                    _body.push(chunk);
                });

                // Quando o conteúdo for recebido
                req.on('end', () => {

                    // Converte o buffer em JSON
                    var _bodyString = Buffer.concat(_body).toString();

                    // Converte o JSON em objeto
                    if (_bodyString.length > 0) {

                        // Transcreve a string para objeto JSON
                        this._jsonBuffer = JSON.parse(_bodyString);

                        // Salva os dados via sistema de arquivos
                        const fsInstance = FileSystem.getInstance();
                        fsInstance.escreverArquivo(_bodyString, this.porta);
                    
                        // TODO: USAR UI PARA MOSTRAR QUE UM NOVO PACOTE FOI RECEBIDO
                    }
                });
            }

            // Caso ocorra erro, verifica o tipo do erro e mostra mensagem
            catch (error) {

                if (error instanceof SyntaxError)
                    // TODO: USAR A CLASSE UI PARA MOSTRAR A MENSAGEM DE ERRO
                    console.log("Erro de sintaxe");
                else
                    // TODO: USAR A CLASSE UI PARA MOSTRAR A MENSAGEM DE ERRO
                    console.log("Erro desconhecido");

            }

            // Servidor responde com 200 OK
            res.end('200');

        });

        // Inicia o servidor
        app.listen(this.porta);
        process.stdout.write(`Server started on port: ${this.porta} \n`);

    }

    // Getter para o IP
    getIP(): string | undefined {
        return this.ip;
    }

}
