import * as vscode from "vscode";

const _files = ["index.tsx", "index.less"];

const _modules = ["widgets/index.ts", "helpers/index.ts"];

export function createFile(
  wsPath: string,
  moduleName: string,
  isWidget = false
) {
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
    } catch (err) {}
  }
}
