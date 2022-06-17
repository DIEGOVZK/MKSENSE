// Dependências - mysql
import mysql from 'mysql2';
import UI_DataBase from './UI_DataBase';

// Definição da classe DataBase_Connection para conexão com D.B.
export default class DataBase_Connection {

    // Objeto para conexão com D.B.
    private connection: any;

    // Objeto para interação com o usuário
    private ui: UI_DataBase = new UI_DataBase();

    // Cria uma instância publica estática da classe DataBase_Connection
    private static instance: DataBase_Connection;

    // Construtor privado para evitar instanciação (single-ton)
    private constructor() { }

    // Método para retornar a instância da classe DataBase_Connection
    public static getInstance(): DataBase_Connection {

        if (!DataBase_Connection.instance) {

            // Retorna nova instância da classe DataBase_Connection
            DataBase_Connection.instance = new DataBase_Connection();

        }

        // Retorna a instância existente da classe DataBase_Connection
        return DataBase_Connection.instance;

    }

    // Método para conectar ao servidor MySQL e verifica a conexão
    async conectar(host: string, user: string, password: string, database: string) {

        // Conecta com o servidor MySQL na rede local
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        // Verifica se a conexão foi estabelecida
        await this.connection.connect((err: any) => {
            if (err) {

                // Mostra mensagem de erro via UI_DataBase
                this.ui.mostrarErro(err, host);
            }
            else
                // Mostra mensagem de Status via UI_DataBase
                this.ui.mostrarStatus(host, database);
        });

    }

    // Método para executar uma query no banco de dados
    executarQuery(query: string) : any {

        // Executa a query e retorna promessa do resultado
        return new Promise((resolve, reject) => {
                
                // Executa a query
                this.connection.query(query, async (err: any, results: any) => {
    
                    // Verifica se ocorreu erro
                    if (err) {

                        // Rejeita a promessa
                        reject(err);
                    }
                    else {
    
                        console.log(results);
                        
                        // Resolve a promessa
                        resolve(results);
                        
                    }
                });
            });
    }

    // Método para desconectar do servidor MySQL
    desconectar() {

        // Fecha conexão com o servidor MySQL
        this.connection.end();

    }
}
