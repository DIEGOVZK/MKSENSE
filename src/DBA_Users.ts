// Dependências - DBA, UI_DataBase
import UI_DataBase from './UI_DataBase';
import DB from './DataBase_Connection';


// Definição da classe DBA_User
export default class DBA_User {

    // Importa a classe UI_DataBase
    private ui: UI_DataBase = new UI_DataBase();

    // Membros da classe
    private connection: DB | any;
    private localhost: string;
    private database: string;
    private password: string;
    private user: string;

    // Construtor da classe DBA_User
    constructor(localhost: string, user: string, password: string, database: string) {

        // Cria o objeto de conexão
        this.connection = DB.getInstance();

        // Inicializa a tabela
        this.database = database;
        this.localhost = localhost;
        this.password = password;
        this.user = user;

    }

    // Método para executar uma query no banco de dados
    // Possiveis comandos: SELECT, INSERT, UPDATE, DELETE
    executarQuery(query: string) {

        // Verifica se a query não segue o padrão de comandos
        if (query.toUpperCase().includes('INSERT')) {

            // Executa a query
            this.connection.conectar(this.localhost, this.user, this.password, this.database);
            this.connection.executarQuery(query);
            this.connection.desconectar();
        }

        // Caso contrário, mostra mensagem de erro
        else { this.ui.mostrarErro('Query inválida!', this.database); }
    }
}
