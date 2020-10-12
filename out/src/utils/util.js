"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = exports.defaultBrowser = exports.standardizedBrowserName = void 0;
const config_1 = require("./config");
const vscode = require("vscode");
const opn = require("open");
/**
 * get standardized browser name
 * @param name String
 */
exports.standardizedBrowserName = (name = "") => {
    let _name = name.toLowerCase();
    const browser = config_1.default.browsers.find((item) => {
        return item.acceptName.indexOf(_name) !== -1;
    });
    return browser ? browser.standardName : "";
};
/**
 * get default browser name
 */
exports.defaultBrowser = () => {
    const config = vscode.workspace.getConfiguration(config_1.default.app);
    return config ? config.default : "";
};
exports.open = (path, browser = "") => {
    // const name = browser ? browser : standardizedBrowserName(defaultBrowser());
    // const name = standardizedBrowserName(browser);
    console.log("path: ", path, " name: ", browser);
    opn(path, { app: browser }).catch((error) => {
        vscode.window.showErrorMessage(`Open browser failed!! Please check if you have installed the browser ${browser} correctly!`);
    });
};
//# sourceMappingURL=util.js.map