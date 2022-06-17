"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalServer_1 = __importDefault(require("./LocalServer"));
const FileSystem_1 = __importDefault(require("./FileSystem"));
const DBA_Manager_1 = __importDefault(require("./DBA_Manager"));
let localServerList = [];
const fs = FileSystem_1.default.getInstance();
const dba = new DBA_Manager_1.default("localhost", "root", "gr9qd*@¨FED*", "prova4");
var lines = String(fs.lerArquivo()).split(",");
lines[0].split(" ").forEach(element => {
    if (element.split(":")[1] == "C")
        localServerList.push(new LocalServer_1.default(parseInt(element.split(":")[0])));
});
localServerList.forEach(element => {
    element.iniciarServidor();
});
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
app.post('/', (req, res) => {
    let data = req.body.Data;
    let status = dba.executarQuery(data);
    res.status(200);
    res.send(String(status) + "\n\n\n" + data);
});
lines[0].split(" ").forEach(element => {
    if (element.split(":")[1] == "M")
        app.listen(parseInt(element.split(":")[0]));
});
