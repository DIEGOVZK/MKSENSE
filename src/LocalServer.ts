// Inclui as dependências > http
import UI_DataBase from './UI_DataBase';
import FileSystem from './FileSystem';
import http from 'http';

// Definição da classe LocalServer
export default class LocalServer {

    // Membros da classe e identificador
    private ui: UI_DataBase = new UI_DataBase();
    public static identificador = 0;
    private ip: string | undefined;
    protected _jsonBuffer = "";
    private porta = 0;

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

            // Mostra a mensagem de nova conexão
            this.ui.mostrarNovaConexao(this.ip + " conectado na porta: ", this.porta);

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
                    
                        // Mostra a mensagem de status que recebeu um pacote
                        this.ui.mostrarStatus("recebeu um pacote {" + _bodyString.length + "} na porta: ", this.porta);
                        
                    }
                });
            }

            // Caso ocorra erro, verifica o tipo do erro e mostra mensagem
            catch (error) {

                if (error instanceof SyntaxError)
                    
                    // Mostra a mensagem de erro de sintaxe
                    this.ui.mostrarErro("erro de sintaxe", this.porta);

                else 
                    // Mostra mensagem de erro de recebimento de pacote
                    this.ui.mostrarErro("erro de recebimento de pacote", this.porta);
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
