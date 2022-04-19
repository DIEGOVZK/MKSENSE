"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalServer_1 = __importDefault(require("./LocalServer"));
const localServer = new LocalServer_1.default(343);
localServer.iniciarServidor();
