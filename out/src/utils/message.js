"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const browser_1 = require("./browser");
class Base {
    constructor(panel, context) {
        this.panel = panel;
        this.context = context;
    }
    error(msg) {
        vscode.window.showErrorMessage(msg);
    }
}
class Message extends Base {
    constructor(panel, context) {
        super(panel, context);
        this._handlers = {
            ext_open_default_by_uri(that, message) {
                const { uri } = message.data;
                if (!uri) {
                    that.error("地址不存在");
                    return;
                }
                browser_1.openDefaultByURI(uri);
            },
        };
        this._initMessage();
    }
    _initMessage() {
        this.panel.webview.onDidReceiveMessage((message) => {
            if (this._messageHandler(message.cmd)) {
                // cmd表示要执行的方法名称
                this._messageHandler(message.cmd)(this, message);
            }
            else {
                this.error(`未找到名为 ${message.cmd} 的方法!`);
            }
        }, undefined, this.context.subscriptions);
    }
    _messageHandler(cmd) {
        const handler = this._handlers[cmd];
        return handler;
    }
    _invokeCallback(message, resp) {
        console.log("回调消息：", resp);
        // 错误码在400-600之间的，默认弹出错误提示
        if (typeof resp == "object" &&
            resp.code &&
            resp.code >= 400 &&
            resp.code < 600) {
            this.error(resp.message || "发生未知错误！");
        }
        this.panel.webview.postMessage({
            cmd: "vscodeCallback",
            cbid: message.cbid,
            data: resp,
        });
    }
}
exports.default = Message;
//# sourceMappingURL=message.js.map