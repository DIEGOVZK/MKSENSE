// Dependências - mysql
import mysql from 'mysql';

// Cria uma classe para manipular dados do banco de dados
export default class DataBase {

    // Objeto para coneção com o banco de dados
    connection;

    // Conecta ao servidor MySQL e verifica a conexão
    conectaAoBanco(host, user, password, database) {

        // Conecta com o servidor MySQL na rede local
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        // Verifica a conexão com o servidor MySQL
        this.connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + this.connection.threadId);
            
        });
    }

    // Executa um comando SQL no banco de dados
    executaComando(comando) {

        // Executa o comando SQL
        this.connection.query(comando, function (err, result) {

            // Se houver erro, imprime o erro
            if (err) {
                console.log(err);
                return;
            }

            // Imprime o resultado do comando SQL
            console.log(result);
    
        });
    }

    // Fecha a conexão com o servidor MySQL
    fechaConexao() {
        this.connection.end();
    }
}
