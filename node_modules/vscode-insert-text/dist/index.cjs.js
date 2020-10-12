'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vscode = require('vscode');

var insertText = function (text, appendText, newLine) {
    if (appendText === void 0) { appendText = false; }
    if (newLine === void 0) { newLine = false; }
    var activeTextEditor = vscode.window.activeTextEditor;
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

exports.insertText = insertText;
