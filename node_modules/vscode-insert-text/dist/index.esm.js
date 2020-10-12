import { window } from 'vscode';

var insertText = function (text, appendText, newLine) {
    if (appendText === void 0) { appendText = false; }
    if (newLine === void 0) { newLine = false; }
    var activeTextEditor = window.activeTextEditor;
    if (!activeTextEditor)
        return;
    activeTextEditor.edit(function (edit) { return activeTextEditor.selections.map(function (selection) {
        if (!appendText)
            edit["delete"](selection);
        var location = appendText
            ? selection.end
            : selection.start;
        var value = appendText && newLine
            ? "\n" + text
            : text;
        edit.insert(location, value);
    }); });
};

export { insertText };
