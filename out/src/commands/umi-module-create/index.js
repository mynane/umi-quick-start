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
exports.getModuleName = void 0;
const vscode = require("vscode");
const utils_1 = require("../../utils");
const source_1 = require("../../utils/source");
function getModuleName(name) {
    return vscode.window.showInputBox({
        // 这个对象中所有参数都是可选参数
        password: false,
        ignoreFocusOut: true,
        placeHolder: `请输入${name}名`,
    });
}
exports.getModuleName = getModuleName;
exports.default = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand("extension:umi.module.create", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const moduleName = yield getModuleName("模块");
            console.log(moduleName);
            if (!moduleName) {
                return;
            }
            source_1.createFile(e.fsPath, moduleName);
        }
        catch (error) {
            console.log(error);
        }
    })), vscode.commands.registerCommand("extension:umi.module.create", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const moduleName = yield getModuleName("组件");
            if (!moduleName) {
                return;
            }
            source_1.createFile(e.fsPath, moduleName, true);
        }
        catch (error) { }
    })), vscode.commands.registerCommand("extension:umi.string.module", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(utils_1.getSelection());
            // const moduleName = await getModuleName("组件");
            // if (!moduleName) {
            //   return;
            // }
            // createFile(e.fsPath, moduleName, true);
        }
        catch (error) { }
    })));
};
//# sourceMappingURL=index.js.map