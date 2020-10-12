"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucfirst = exports.getSelection = void 0;
const vscode = require("vscode");
function getSelection() {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    var selection = editor.selection;
    var text = editor.document.getText(selection);
    return text;
}
exports.getSelection = getSelection;
function ucfirst(target = "") {
    let str = target.toLowerCase();
    str = str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    });
    return str;
}
exports.ucfirst = ucfirst;
//# sourceMappingURL=index.js.map