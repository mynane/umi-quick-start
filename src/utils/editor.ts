import { TextEditor, Position, window, TextEditorEdit, Range } from "vscode";
import { ucfirst } from ".";

export const getActivePageText = () => {
  const activeTextEditor: TextEditor | undefined = window.activeTextEditor;

  if (!activeTextEditor) return;
  const end = new Position(activeTextEditor.document.lineCount + 1, 0);
  const start = new Position(0, 0);

  return activeTextEditor.document.getText(new Range(start, end));
};

export const replaceAll = (text: any) => {
  console.log("text: ", text);
  const activeTextEditor: TextEditor | undefined = window.activeTextEditor;

  if (!activeTextEditor) return;
  const end = new Position(activeTextEditor.document.lineCount + 1, 0);

  activeTextEditor.edit((editor: TextEditorEdit) => {
    editor.insert(end, `\n${text}`);
  });
};

export const insertTextToLast = (
  text: string = "",
  name: string = "",
  identifier: any[] = [],
  insert: string = ""
): any => {
  return new Promise(async (resolve: any) => {
    const activeTextEditor: TextEditor | undefined = window.activeTextEditor;

    if (!activeTextEditor) return;
    activeTextEditor.edit((editor: TextEditorEdit) => {
      activeTextEditor.selections.forEach(async (selection) => {
        editor.delete(selection);

        const location: Position = selection.start;
        const end = new Position(activeTextEditor.document.lineCount + 1, 0);

        editor.insert(
          location,
          `<${ucfirst(name)} ${identifier
            .map((item) => `${item}={${item}}`)
            .join(" ")} />`
        );
        editor.insert(end, `\n${insert}`);
        resolve();
      });
    });
  });
};
