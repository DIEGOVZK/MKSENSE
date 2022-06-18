"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client_User = void 0;
class Client_User {
    constructor(dbInfo, localServerList) {
        this._dbInfo = [];
        this._localServerList = [];
        this._dbInfo = dbInfo;
        this._localServerList = localServerList;
    }
}
exports.Client_User = Client_User;
