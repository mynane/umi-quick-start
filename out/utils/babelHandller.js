"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.newFile = exports.getJSXAST = exports.parse = void 0;
const types = require("@babel/types");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const prettier = require("prettier");
function parse(code) {
    return require("@babel/parser").parse(code, {
        // parse in strict mode and allow module declarations
        sourceType: "module",
        plugins: ["jsx", "flow"],
    });
}
exports.parse = parse;
function handle(path, insertAST) {
    insertAST.program.body.forEach((item) => {
        path.insertBefore(item);
    });
    path.stop();
}
function getJSXAST(jsx = "") {
    const jsxAST = parse(jsx);
    const ignore = [
        "className",
        "style",
        "console",
        "styles",
        "style",
        "Styles",
        "Style",
    ];
    const identifier = new Set();
    const visitor = {
        JSXExpressionContainer(path) {
            var current = path.node;
            var parent = path.parent;
            const isAttr = types.isJSXAttribute(parent);
            if (isAttr) {
                if (ignore.includes(parent.name.name)) {
                    return;
                }
            }
            if (types.isIdentifier(current.expression) && current.expression.name) {
                identifier.add(current.expression.name);
            }
            if (types.isMemberExpression(current.expression) &&
                current.expression.object.name) {
                identifier.add(current.expression.object.name);
            }
        },
        CallExpression(path) {
            var current = path.node;
            if (types.isMemberExpression(current.callee)) {
                if (!ignore.includes(current.callee.object.name) &&
                    current.callee.object.name) {
                    identifier.add(current.callee.object.name);
                }
            }
            if (types.isIdentifier(current.callee) && current.callee.name) {
                identifier.add(current.callee.name);
            }
            current.arguments.forEach((item) => {
                if (types.isIdentifier(item) && item.name) {
                    identifier.add(item.name);
                }
                if (types.isMemberExpression(item) && item.object.name) {
                    identifier.add(item.object.name);
                }
            });
        },
        MemberExpression(path) {
            if (path.node.object.name && !ignore.includes(path.node.object.name)) {
                identifier.add(path.node.object.name);
            }
        },
    };
    traverse(jsxAST, visitor);
    return {
        ast: jsxAST,
        identifier: Array.from(identifier),
    };
}
exports.getJSXAST = getJSXAST;
function newFile(insert = "") {
    // const AST = parse(content);
    const insertAST = parse(insert);
    // const visitor = {
    //   Program(path: any) {
    //     path.node.body.push(...insertAST.program.body);
    //   },
    // ExportNamedDeclaration(path: any) {
    //   handle(path, insertAST);
    // },
    // ExportDefaultDeclaration(path: any) {
    //   handle(path, insertAST);
    // },
    // ArrowFunctionExpression(path: any) {
    //   handle(path, insertAST);
    // },
    // FunctionDeclaration(path: any) {
    //   handle(path, insertAST);
    // },
    // ClassDeclaration(path: any) {
    //   handle(path, insertAST);
    // },
    // };
    // traverse(AST, visitor);
    const { code } = generate(insertAST);
    return exports.format(code, "typescript");
}
exports.newFile = newFile;
exports.format = (code, parser) => {
    const par = parser ? { parser } : {};
    try {
        return prettier.format(code, Object.assign({ semi: true, useTabs: false, tabWidth: 2, endOfLine: "lf", singleQuote: true, trailingComma: "all", printWidth: 100, proseWrap: "never" }, par));
    }
    catch (_a) {
        return code;
    }
};
//# sourceMappingURL=babelHandller.js.map