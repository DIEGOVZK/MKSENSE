"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
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
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = mysql2_1.default.createConnection({
                host: host,
                user: user,
                password: password,
                database: database
            });
            yield this.connection.connect((err) => {
                if (err) {
                    this.ui.mostrarErro(err, host);
                }
                else
                    this.ui.mostrarStatus(host, database);
            });
        });
    }
    executarQuery(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, results) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    reject(err);
                }
                else {
                    this.ui.mostrarStatus(results, this.connection.config.database);
                    console.log(results);
                    resolve(results);
                }
            }));
        });
    }
    desconectar() {
        this.connection.end();
    }
}
exports.default = DataBase_Connection;
