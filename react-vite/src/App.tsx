import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-checkbox";
import "@vscode-elements/elements/dist/vscode-form-group";
import "@vscode-elements/elements/dist/vscode-label";
import "@vscode-elements/elements/dist/vscode-single-select";
import "@vscode-elements/elements/dist/vscode-multi-select";
import "@vscode-elements/elements/dist/vscode-option";
import "@vscode-elements/elements/dist/vscode-radio";
import "@vscode-elements/elements/dist/vscode-radio-group";
import "@vscode-elements/elements/dist/vscode-textfield";
import "@vscode-elements/elements/dist/vscode-tree";

if (import.meta.env.DEV) {
  await import("@vscode-elements/webview-playground");
}

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {import.meta.env.DEV ? <vscode-dev-toolbar></vscode-dev-toolbar> : null}
      <vscode-button>Hello</vscode-button>
      <vscode-tree
        data={[
          { icons: true, label: "Foo" },
          { icons: true, label: "Baz" },
        ]}
        indent={8}
        indentGuides
        onvsc-tree-select={(ev) => {
          console.log(ev);
        }}
      ></vscode-tree>
      <vscode-checkbox
        onChange={() => {
          console.log("change");
        }}
      >
        Checkbox example
      </vscode-checkbox>
      <vscode-split-layout
        initialHandlePosition=""
        onvsc-split-layout-change={(e) => {
          console.log(e);
        }}
      ></vscode-split-layout>
      <vscode-badge></vscode-badge>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
