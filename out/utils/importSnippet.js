"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function importSnippet() {
    const base = path.resolve(__dirname, "../snippets");
    const files = fs.readdirSync(base);
    files.forEach(function (item, index) {
        let fPath = path.join(base, item);
        let stat = fs.statSync(fPath);
        if (stat.isFile()) {
            Promise.resolve().then(() => require(fPath));
        }
    });
}
exports.default = importSnippet;
//# sourceMappingURL=importSnippet.js.map