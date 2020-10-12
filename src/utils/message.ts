import * as vscode from "vscode";
import { openDefaultByURI } from "./browser";
class Base {
  panel: vscode.WebviewPanel;
  context: vscode.ExtensionContext;
  constructor(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
    this.panel = panel;
    this.context = context;
  }

  public error(msg: string) {
    vscode.window.showErrorMessage(msg);
  }
}

class Message extends Base {
  constructor(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
    super(panel, context);

    this._initMessage();
  }
  private _initMessage() {
    this.panel.webview.onDidReceiveMessage(
      (message: any) => {
        if (this._messageHandler(message.cmd)) {
          // cmd表示要执行的方法名称
          this._messageHandler(message.cmd)(this, message);
        } else {
          this.error(`未找到名为 ${message.cmd} 的方法!`);
        }
      },
      undefined,
      this.context.subscriptions
    );
  }

  private _handlers = {
    ext_open_default_by_uri(that: Message, message: any) {
      const { uri } = message.data;
      if (!uri) {
        that.error("地址不存在");
        return;
      }

      openDefaultByURI(uri);
    },
  };

  private _messageHandler(cmd: string) {
    const handler = (this._handlers as any)[cmd];
    return handler;
  }

  private _invokeCallback(message: any, resp: any) {
    console.log("回调消息：", resp);
    // 错误码在400-600之间的，默认弹出错误提示
    if (
      typeof resp == "object" &&
      resp.code &&
      resp.code >= 400 &&
      resp.code < 600
    ) {
      this.error(resp.message || "发生未知错误！");
    }
    this.send({
      cmd: "vscodeCallback",
      cbid: message.cbid,
      data: resp,
    });
  }

  public send(message: any) {
    this.panel.webview.postMessage(message);
  }
}

export default Message;
