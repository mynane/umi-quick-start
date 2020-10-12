"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Templates {
    static fc(fcName, jsx, identifier = []) {
        if (!jsx || !fcName)
            return "";
        const upname = _1.ucfirst(fcName);
        return `\nexport interface I${upname} {\n\t[key: string]: any;\n}\n\nexport const ${upname}: React.FC<I${upname}> = (props) => {\nconst { ${identifier.join(", ")} } = props;\n\treturn ${jsx}\n}`;
    }
}
exports.default = Templates;
//# sourceMappingURL=template.js.map