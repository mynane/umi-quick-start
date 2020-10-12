"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelection = void 0;
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
//# sourceMappingURL=index.js.map