"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FileSystem {
    constructor() { }
    static getInstance() {
        if (!FileSystem.instance) {
            FileSystem.instance = new FileSystem();
        }
        return FileSystem.instance;
    }
    escreverArquivo(dados, porta) {
        fs_1.default.appendFile("./sensorData/SensorialData_PORT_" + porta + '.csv', (dados) + '\n', function (err) {
            if (err) {
                process.stdout.write("\x1B[31m Erro ao salvar dados do port: " +
                    porta + " Erro: " + err + "\n");
            }
        });
    }
    lerArquivo() {
        return fs_1.default.readFileSync("./serverConfig.txt", 'utf-8');
    }
}
exports.default = FileSystem;
