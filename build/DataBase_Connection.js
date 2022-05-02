"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const UI_DataBase_1 = __importDefault(require("./UI_DataBase"));
class DataBase_Connection {
    constructor() {
        this.ui = new UI_DataBase_1.default();
    }
    static getInstance() {
        if (!DataBase_Connection.instance) {
            DataBase_Connection.instance = new DataBase_Connection();
        }
        return DataBase_Connection.instance;
    }
    conectar(host, user, password, database) {
        this.connection = mysql_1.default.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
        this.connection.connect((err) => {
            if (err) {
                this.ui.mostrarErro(err, host);
            }
            else
                this.ui.mostrarStatus(host, database);
        });
    }
    desconectar() {
        this.connection.end();
    }
}
exports.default = DataBase_Connection;
