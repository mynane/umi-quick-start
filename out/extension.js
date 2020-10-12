"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const umi_module_create_1 = require("./commands/umi-module-create");
const umi_module_webview_1 = require("./commands/umi-module-webview");
const hover_1 = require("./utils/hover");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "umi-quick-create" is now active!');
    // module create
    umi_module_create_1.default(context);
    // module webview
    umi_module_webview_1.default(context);
    //
    hover_1.default(context);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map