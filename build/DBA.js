"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_Connection_1 = __importDefault(require("./DataBase_Connection"));
class DBA {
    constructor(localhost, user, password, database) {
        this.connection = DataBase_Connection_1.default.getInstance().conectar(localhost, user, password, database);
        this.database = database;
    }
}
exports.default = DBA;
