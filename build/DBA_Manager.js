"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UI_DataBase_1 = __importDefault(require("./UI_DataBase"));
const DataBase_Connection_1 = __importDefault(require("./DataBase_Connection"));
class DBA_Manager {
    constructor(localhost, user, password, database) {
        this.ui = new UI_DataBase_1.default();
        this.connection = DataBase_Connection_1.default.getInstance();
        this.database = database;
        this.localhost = localhost;
        this.password = password;
        this.user = user;
    }
    executarQuery(query) {
        if (query.toUpperCase().includes('SELECT') ||
            query.toUpperCase().includes('INSERT') ||
            query.toUpperCase().includes('UPDATE') ||
            query.toUpperCase().includes('DELETE')) {
            this.connection.conectar(this.localhost, this.user, this.password, this.database);
            this.connection.executarQuery(query);
            this.connection.desconectar();
        }
        else {
            this.ui.mostrarErro('Query inválida!', this.database);
        }
    }
}
exports.default = DBA_Manager;
