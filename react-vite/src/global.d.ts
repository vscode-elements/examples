import { DOMAttributes, MutableRefObject, ReactNode } from "react";
import { VscodeButton, VscodeTree } from "@vscode-elements/elements";

type CustomElement<T> = Partial<
  T & DOMAttributes<T> & MutableRefObject
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vscode-dev-toolbar": {
        hidden?: boolean;
      };
      "vscode-button": CustomElement<VscodeButton>;
      "vscode-tree": CustomElement<VscodeTree>;
    }
  }
}
