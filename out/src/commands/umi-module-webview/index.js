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
const vscode = require("vscode");
const webview_1 = require("../../utils/webview");
function statusBar1() {
    var statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBar.text = "这是我创建的第一个 StatusBar";
    statusBar.show();
}
exports.default = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand("extension:umi.module.webview", (e) => __awaiter(void 0, void 0, void 0, function* () {
        // 创建webview
        const panel = vscode.window.createWebviewPanel("testWebview", // viewType
        "WebView演示", // 视图标题
        vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        {
            enableScripts: true,
            retainContextWhenHidden: false,
        });
        // statusBar1();
        // new Message(panel, context);
        const html = webview_1.getWebViewContent(context, "./web/index.html");
        panel.webview.html = html;
    })));
};
//# sourceMappingURL=index.js.map