// Inclui as dependências > fs
import { throws } from 'assert';
import fs from 'fs';

// Definição da classe FileSystem
export default class FileSystem {

    // Cria uma instância estática da classe FileSystem	
    private static instance: FileSystem;

    // Contrutor privado para evitar instanciação (single-ton)
    private constructor() { }

    // Método para retornar a instância da classe FileSystem
    public static getInstance(): FileSystem {
        if (!FileSystem.instance) {

            // Retorna nova instância da classe FileSystem
            FileSystem.instance = new FileSystem();
        }

        // Retorna a instância existente da classe FileSystem
        return FileSystem.instance;
    }

    // Método para escrita de dados em arquivo
    escreverArquivo(dados: any, porta: number) {

        // Importa os novos dados para o arquivo, cria novo arquivo se não existe
        fs.appendFile("./sensorData/SensorialData_PORT_" + porta + '.csv', (dados) + '\n',
            function (err) {
                if (err) {
                    process.stdout.write("\x1B[31m Erro ao salvar dados do port: " +
                        porta + " Erro: " + err + "\n");
                }
            });
    }

    // Método para leitura de dados de um arquivo "serverConfig.txt"
    lerArquivo() : string | any {

        // Lê os dados do arquivo "serverConfig.txt" de maneira síncrona
        return fs.readFileSync("./serverConfig.txt", 'utf-8')

    }
}
