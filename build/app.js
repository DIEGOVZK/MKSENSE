"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalServer_1 = __importDefault(require("./LocalServer"));
const FileSystem_1 = __importDefault(require("./FileSystem"));
let localServerList = [];
const fs = FileSystem_1.default.getInstance();
var lines = String(fs.lerArquivo()).split(",");
lines[0].split(" ").forEach(element => {
    localServerList.push(new LocalServer_1.default(parseInt(element)));
});
localServerList.forEach(element => {
    element.iniciarServidor();
});
