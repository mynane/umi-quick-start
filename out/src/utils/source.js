"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const vscode = require("vscode");
const _files = ["index.tsx", "index.less"];
const _modules = ["widgets/index.ts", "helpers/index.ts"];
function createFile(wsPath, moduleName, isWidget = false) {
    const wsedit = new vscode.WorkspaceEdit();
    let temp = [..._files];
    if (!isWidget) {
        temp = [..._files, ..._modules];
    }
    for (var i = 0; i < temp.length; i++) {
        try {
            const filePath = vscode.Uri.file(`${wsPath}/${moduleName}/${temp[i]}`);
            wsedit.createFile(filePath, { ignoreIfExists: false });
            vscode.workspace.applyEdit(wsedit);
        }
        catch (err) { }
    }
}
exports.createFile = createFile;
//# sourceMappingURL=source.js.map