"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTextToLast = exports.replaceAll = exports.getActivePageText = void 0;
const vscode_1 = require("vscode");
const _1 = require(".");
exports.getActivePageText = () => {
    const activeTextEditor = vscode_1.window.activeTextEditor;
    if (!activeTextEditor)
        return;
    const end = new vscode_1.Position(activeTextEditor.document.lineCount + 1, 0);
    const start = new vscode_1.Position(0, 0);
    return activeTextEditor.document.getText(new vscode_1.Range(start, end));
};
exports.replaceAll = (text) => {
    console.log("text: ", text);
    const activeTextEditor = vscode_1.window.activeTextEditor;
    if (!activeTextEditor)
        return;
    const end = new vscode_1.Position(activeTextEditor.document.lineCount + 1, 0);
    activeTextEditor.edit((editor) => {
        editor.insert(end, `\n${text}`);
    });
};
exports.insertTextToLast = (text = "", name = "", identifier = [], insert = "") => {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        const activeTextEditor = vscode_1.window.activeTextEditor;
        if (!activeTextEditor)
            return;
        activeTextEditor.edit((editor) => {
            activeTextEditor.selections.forEach((selection) => __awaiter(void 0, void 0, void 0, function* () {
                editor.delete(selection);
                const location = selection.start;
                const end = new vscode_1.Position(activeTextEditor.document.lineCount + 1, 0);
                editor.insert(location, `<${_1.ucfirst(name)} ${identifier
                    .map((item) => `${item}={${item}}`)
                    .join(" ")} />`);
                editor.insert(end, `\n${insert}`);
                resolve();
            }));
        });
    }));
};
//# sourceMappingURL=editor.js.map