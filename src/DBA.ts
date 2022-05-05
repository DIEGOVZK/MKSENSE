// Dependências - DataBase_Connection
import DataBase_Connection from "./DataBase_Connection";

// Definição da classe DBA para manipulação de banco de dados
export default abstract class DBA {

    // Membros da classe
    protected database: string;

    // Membros da classe
    protected connection: DataBase_Connection | any;

    // Construtor da classe DBA
    constructor(localhost: string, user: string, password: string, database: string) {
            
        // Inicia a conexão com o banco de dados
        this.connection = DataBase_Connection.getInstance().conectar(localhost, user, password, database);
        
        // Inicializa a tabela
        this.database = database;
    }

    // Método asbtrato para executar uma query no banco de dados
    protected abstract executarQuery(query: string): void;

}

