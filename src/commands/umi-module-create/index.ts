import * as vscode from "vscode";
import { getSelection, ucfirst } from "../../utils";
import { getJSXAST, newFile } from "../../utils/babelHandller";
import {
  getActivePageText,
  insertTextToLast,
  replaceAll,
} from "../../utils/editor";
import { createFile } from "../../utils/source";
import Templates from "../../utils/template";

export function getModuleName(name: string) {
  return vscode.window.showInputBox({
    // 这个对象中所有参数都是可选参数
    password: false, // 输入内容是否是密码
    ignoreFocusOut: true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
    placeHolder: `请输入${name}名`, // 在输入框内的提示信息
  });
}

export default (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "extension:umi.module.create",
      async (e) => {
        try {
          const moduleName = await getModuleName("模块");
          console.log(moduleName);
          if (!moduleName) {
            return;
          }
          createFile(e.fsPath, moduleName);
        } catch (error) {
          console.log(error);
        }
      }
    ),
    vscode.commands.registerCommand(
      "extension:umi.component.create",
      async (e) => {
        try {
          const moduleName = await getModuleName("组件");
          if (!moduleName) {
            return;
          }
          createFile(e.fsPath, moduleName, true);
        } catch (error) {
          console.log(error);
        }
      }
    ),
    vscode.commands.registerCommand(
      "extension:umi.function.create",
      async (e) => {
        try {
          const fcName = await getModuleName("方法");
          if (!fcName) {
            return;
          }

          const selection: string | undefined = getSelection();
          const sel = getJSXAST(selection);
          const insert = newFile(
            Templates.fc(fcName, selection, sel.identifier)
          );

          await insertTextToLast(
            Templates.fc(fcName, selection),
            fcName,
            sel.identifier,
            insert
          );
        } catch (error) {
          console.log(error);
        }
      }
    )
  );
};
