"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBySpecifyByURI = exports.openBySpecify = exports.openDefaultByURI = exports.openDefault = void 0;
const util_1 = require("./util");
const config_1 = require("./config");
const vscode = require("vscode");
function currentPageUri() {
    return (vscode.window.activeTextEditor &&
        vscode.window.activeTextEditor.document &&
        vscode.window.activeTextEditor.document.uri);
}
/**
 * open default browser
 * if you have specified browser in configuration file,
 * the browser you specified will work.
 * else the system default browser will work.
 */
exports.openDefault = (path) => {
    let uri;
    if (path) {
        uri = path.fsPath;
    }
    else {
        const _path = currentPageUri();
        uri = _path && _path.fsPath;
    }
    const browser = util_1.standardizedBrowserName(util_1.defaultBrowser());
    util_1.open(uri, browser);
};
/**
 * open default browser use uri
 * if you have specified browser in configuration file,
 * the browser you specified will work.
 * else the system default browser will work.
 */
exports.openDefaultByURI = (uri) => {
    if (!uri) {
        return;
    }
    const browser = util_1.standardizedBrowserName(util_1.defaultBrowser());
    util_1.open(uri, browser);
};
/**
 * open specify browser
 */
exports.openBySpecify = (path) => {
    vscode.window.showQuickPick(config_1.default.browsers).then((item) => {
        if (!item) {
            return;
        }
        let uri;
        if (path) {
            uri = path.fsPath;
        }
        else {
            const _path = currentPageUri();
            uri = _path && _path.fsPath;
        }
        util_1.open(uri, item.standardName);
    });
};
/**
 * open specify browser use uri
 */
exports.openBySpecifyByURI = (uri) => {
    if (!uri) {
        return;
    }
    vscode.window.showQuickPick(config_1.default.browsers).then((item) => {
        if (!item) {
            return;
        }
        util_1.open(uri, item.standardName);
    });
};
//# sourceMappingURL=browser.js.map