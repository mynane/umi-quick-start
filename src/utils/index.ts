import * as vscode from "vscode";

export function getSelection() {
  var editor = vscode.window.activeTextEditor;
  if (!editor) {
    return; // No open text editor
  }

  var selection = editor.selection;
  var text = editor.document.getText(selection);

  return text;
}

export function ucfirst(target: string = "") {
  let str: string = target.toLowerCase();
  str = str.replace(/\b\w+\b/g, function (word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  });
  return str;
}
