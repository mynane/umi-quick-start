import path = require("path");
import * as vscode from "vscode";
import { getSelection } from "../../utils";
import { format } from "../../utils/babelHandller";
import Message from "../../utils/message";

import { getWebViewContent } from "../../utils/webview";
import { getModuleName } from "../umi-module-create";

function statusBar1() {
  var statusBar: vscode.StatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  statusBar.text = "这是我创建的第一个 StatusBar";
  statusBar.tooltip = "nihao1";
  statusBar.command = "extension:code.save";
  statusBar.show();
}

export default (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "extension:umi.module.webview",
      async (e) => {
        // 创建webview
        const panel = vscode.window.createWebviewPanel(
          "testWebview", // viewType
          "工作台", // 视图标题
          // vscode.ViewColumn.One, // 显示在编辑器的哪个部位
          vscode.ViewColumn.Two, // 显示在编辑器的哪个部位
          {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: false, // webview被隐藏时保持状态，避免被重置
          }
        );

        // statusBar1();

        // new Message(panel, context);

        const html = getWebViewContent(context, "./web/index.html");
        panel.webview.html = html;
      }
    ),
    vscode.commands.registerCommand("extension:code.save", async (e) => {
      try {
        const fcName = await getModuleName("方法");
        const selection: string | undefined = getSelection();
        if (!fcName || !selection) {
          return;
        }

        // 创建webview
        const panel = vscode.window.createWebviewPanel(
          "代码保存", // viewType
          "代码保存", // 视图标题
          vscode.ViewColumn.Two, // 显示在编辑器的哪个部位
          {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
          }
        );

        // statusBar1();

        const message = new Message(panel, context);

        const html = getWebViewContent(context, "./web/index.html");
        panel.webview.html = html;
        message.send({
          cmd: "code.save",
          theme: new vscode.ThemeColor("badge.background"),
          data: { selection: format(selection), name: fcName },
        });
      } catch (error) {
        console.log(error);
      }
    })
  );
};
