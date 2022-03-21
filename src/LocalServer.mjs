/**
 * @class LocalServer
 * @abstract Cria um objeto servidor responsável por se comunicar com um cliente
 *           via requisições HTTP. Cada objeto será reconhecido pelo seu PORT único de comunicação
 */
 export default class LocalServer {

    // Membros da classe
    _jsonBuffer;
    _bodyBuffer;
    port;

    // Cria objeto passando PORT
    constructor(port) {
        this.port = port;
    }

    /**
     * @function open()
     * @abstract Inicia servidor HTTP na porta escolhida na classe LocalServer,
     *           recebe os pacotes HTTP e traduz para formato JSON antes de enviar ao servidor
     * 
     * @access public
     */
    open() {

        // Importa a bib http para req handling
        const http = require("http");

        // Cria objeto Server usando bib http
        const app = http.createServer();

        // No evento de requisição HTTP
        app.on("request", (req, res) => {

            // Cria _bodyBuffer que recebe as chuncks
            var _bodyBuffer = [];
            var _jsonBuffer = "";

            // No recebimento junta as chuncks no _bodyBuffer
            req.on("data", (bodyData) => {
                _bodyBuffer.push(bodyData);
            });

            // Ao fim da transmissão, contatena tudo e converte...
            req.on("end", () => {

                try {

                    // Converte buffer para String e Json object
                    _bodyBuffer = Buffer.concat(_bodyBuffer).toString();
                    _jsonBuffer = JSON.parse(_bodyBuffer);

                    // Mostra os dados recebidos na tela
                    console.log(`Body Contents: ${_bodyBuffer}`);

                } catch (error) { console.log("Erro ao montar JSON: " + error); }

            });

            // Responde 200 OK
            res.end(200);
        });

        // Inicia servidor e 'escuta' nas portas especificadas
        console.log(`Server started on ports: ${port}`);
        app.listen(port);
    }
}

/*

// Configura porta para comunicação
const port = 8080;

// Importa a bib http para req handling
const http = require("http");

// Cria objeto Server usando bib http
const app = http.createServer();

// No evento de requisição HTTP
app.on("request", (req, res) => {

    // Cria _bodyBuffer que recebe as chuncks
    var _bodyBuffer = [];
    var _jsonBuffer = "";

    // No recebimento junta as chuncks no _bodyBuffer
    req.on("data", (bodyData) => {
        _bodyBuffer.push(bodyData);
    });

    // Ao fim da transmissão, contatena tudo e converte...
    req.on("end", () => {

        try {

            // Converte buffer para String e Json object
            _bodyBuffer = Buffer.concat(_bodyBuffer).toString();
            _jsonBuffer = JSON.parse(_bodyBuffer);

            // Mostra os dados recebidos na tela
            console.log(`Body Contents: ${_bodyBuffer}`);

        } catch (error) { console.log("Erro ao montar JSON: " + error); }

    });

    // Responde 200 OK
    res.end(200);
});

// Inicia servidor e 'escuta' na porta especificada
console.log(`Server started on port: ${port}`);
app.listen(port);

*/