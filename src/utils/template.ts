import { ucfirst } from ".";

export default class Templates {
  static fc(fcName?: string, jsx?: string, identifier: any[] = []) {
    if (!jsx || !fcName) return "";
    const upname = ucfirst(fcName);
    return `\nexport interface I${upname} {\n\t[key: string]: any;\n}\n\nexport const ${upname}: React.FC<I${upname}> = (props) => {\nconst { ${identifier.join(
      ", "
    )} } = props;\n\treturn ${jsx}\n}`;
  }
}
