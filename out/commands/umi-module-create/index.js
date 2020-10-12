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
const babelHandller_1 = require("../../utils/babelHandller");
const editor_1 = require("../../utils/editor");
const source_1 = require("../../utils/source");
const template_1 = require("../../utils/template");
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
    })), vscode.commands.registerCommand("extension:umi.component.create", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const moduleName = yield getModuleName("组件");
            if (!moduleName) {
                return;
            }
            source_1.createFile(e.fsPath, moduleName, true);
        }
        catch (error) {
            console.log(error);
        }
    })), vscode.commands.registerCommand("extension:umi.function.create", (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fcName = yield getModuleName("方法");
            if (!fcName) {
                return;
            }
            const selection = utils_1.getSelection();
            const sel = babelHandller_1.getJSXAST(selection);
            const insert = babelHandller_1.newFile(template_1.default.fc(fcName, selection, sel.identifier));
            yield editor_1.insertTextToLast(template_1.default.fc(fcName, selection), fcName, sel.identifier, insert);
        }
        catch (error) {
            console.log(error);
        }
    })));
};
//# sourceMappingURL=index.js.map