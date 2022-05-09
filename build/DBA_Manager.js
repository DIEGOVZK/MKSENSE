"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UI_DataBase_1 = __importDefault(require("./UI_DataBase"));
const DBA_1 = __importDefault(require("./DBA"));
class DBA_Manager extends DBA_1.default {
    constructor(localhost, user, password, database) {
        super(localhost, user, password, database);
        this.ui = new UI_DataBase_1.default();
        this.database = database;
    }
    executarQuery(query) {
        if (query.toUpperCase().includes('SELECT') ||
            query.toUpperCase().includes('INSERT') ||
            query.toUpperCase().includes('UPDATE') ||
            query.toUpperCase().includes('DELETE')) { }
        else {
            this.ui.mostrarErro('Query inválida!', this.database);
        }
        this.connection.query(query, (err, result) => {
            if (err) {
                this.ui.mostrarErro(err, this.database);
            }
            this.ui.mostrarStatus('Comando executado', this.database);
            return result;
        });
    }
}
exports.default = DBA_Manager;
