"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Parse(req, res) {
    let data = req.body.Data;
    res.status(200);
    res.redirect('/');
}
exports.default = Parse;
