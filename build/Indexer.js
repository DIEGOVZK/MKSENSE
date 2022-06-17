"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Parse_1 = __importDefault(require("./Parse"));
class Indexer {
    constructor(app, porta) {
        app.get('/', (req, res) => {
            res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
        });
        app.post('/', (req, res) => { (0, Parse_1.default)(req, res); });
    }
}
exports.default = Indexer;
