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
const utils_1 = require("../../utils");
const babelHandller_1 = require("../../utils/babelHandller");
const message_1 = require("../../utils/message");
const webview_1 = require("../../utils/webview");
const umi_module_create_1 = require("../umi-module-create");
function statusBar1() {
    var statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    statusBar.text = "这是我创建的第一个 StatusBar";
    statusBar.tooltip = "nihao1";
    statusBar.command = "extension:code.save";
    statusBar.show();
}
exports.default = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand("extension:umi.module.webview", (e) => __awaiter(void 0, void 0, void 0, function* () {
        // 创建webview
        const panel = vscode.window.createWebviewPanel("testWebview", // viewType
        "工作台", // 视图标题
        // vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        vscode.ViewColumn.Two, // 显示在编辑器的哪个部位
        {
            enableScripts: true,
            retainContextWhenHidden: false,
        });
        // statusBar1();
        // new Message(panel, context);
        const html = webview_1.getWebViewContent(context, "./web/index.html");
        panel.webview.html = html;
    })), vscode.commands.registerCommand("extension:code.save", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fcName = yield umi_module_create_1.getModuleName("方法");
            const selection = utils_1.getSelection();
            if (!fcName || !selection) {
                return;
            }
            // 创建webview
            const panel = vscode.window.createWebviewPanel("代码保存", // viewType
            "代码保存", // 视图标题
            vscode.ViewColumn.Two, // 显示在编辑器的哪个部位
            {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
            // statusBar1();
            const message = new message_1.default(panel, context);
            const html = webview_1.getWebViewContent(context, "./web/index.html");
            panel.webview.html = html;
            message.send({
                cmd: "code.save",
                theme: new vscode.ThemeColor("badge.background"),
                data: { selection: babelHandller_1.format(selection), name: fcName },
            });
        }
        catch (error) {
            console.log(error);
        }
    })));
};
//# sourceMappingURL=index.js.map