const types = require("@babel/types");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const prettier = require("prettier");

export function parse(code: string) {
  return require("@babel/parser").parse(code, {
    // parse in strict mode and allow module declarations
    sourceType: "module",

    plugins: ["jsx", "flow"],
  });
}

function handle(path: any, insertAST: any) {
  insertAST.program.body.forEach((item: Object) => {
    path.insertBefore(item);
  });
  path.stop();
}

export function getJSXAST(jsx: string = "") {
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
    JSXExpressionContainer(path: any) {
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
      if (
        types.isMemberExpression(current.expression) &&
        current.expression.object.name
      ) {
        identifier.add(current.expression.object.name);
      }
    },
    CallExpression(path: any) {
      var current = path.node;

      if (types.isMemberExpression(current.callee)) {
        if (
          !ignore.includes(current.callee.object.name) &&
          current.callee.object.name
        ) {
          identifier.add(current.callee.object.name);
        }
      }
      if (types.isIdentifier(current.callee) && current.callee.name) {
        identifier.add(current.callee.name);
      }

      current.arguments.forEach((item: any) => {
        if (types.isIdentifier(item) && item.name) {
          identifier.add(item.name);
        }
        if (types.isMemberExpression(item) && item.object.name) {
          identifier.add(item.object.name);
        }
      });
    },
    MemberExpression(path: any) {
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

export function newFile(insert: string = "") {
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

  return format(code, "typescript");
}

export const format = (code: string, parser?: string) => {
  const par: any = parser ? { parser } : {};

  try {
    return prettier.format(code, {
      semi: true,
      useTabs: false,
      tabWidth: 2,
      endOfLine: "lf",
      singleQuote: true,
      trailingComma: "all",
      printWidth: 100,
      proseWrap: "never",
      ...par,
    });
  } catch {
    return code;
  }
};
