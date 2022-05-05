// Dependências - DBA, UI_DataBase
import UI_DataBase from './UI_DataBase';
import DBA from './DBA';


// Definição da classe DBA_Users que herda da classe DBA
export default class DBA_Users extends DBA {

    // Importa a classe UI_DataBase
    private ui: UI_DataBase = new UI_DataBase();

    // Construtor da classe DBA_Manager
    constructor(localhost: string, user: string, password: string, database: string) {

        // Chama o construtor da classe DBA
        super(localhost, user, password, database);

        // Inicializa a tabela
        this.database = database;

    }

    // Método para executar uma query no banco de dados
    // Possiveis comandos: INSERT
    executarQuery(query: string) {

        // Verifica se a query não segue o padrão de comandos
        if (query.toUpperCase().includes('INSERT')) { this.ui.mostrarStatus('INSERT', this.database); }

        // Caso contrário, mostra mensagem de erro
        else { this.ui.mostrarErro('Query inválida!', this.database); }

        // Executa a query
        this.connection.query(query, (err: any, result: any) => {

            // Verifica se ocorreu erro
            if (err) { this.ui.mostrarErro(err, this.database); }

            // Mostra mensagem de sucesso
            this.ui.mostrarStatus('Dado enviado', this.database);

            // Retorna o resultado da query
            return result;

        });
    }
}
