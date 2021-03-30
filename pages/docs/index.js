import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Docs() {
    return (
      <div className="container">
        <h1>Getting Started:</h1>
        <p>To get started with Olive ui we need to link it's css inside head of your html file.</p>
        <h3>CSS:</h3>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
      <link href="https://cdn.jsdelivr.net/gh/gkanishk/oliveui@dev/styles/main.css" rel="stylesheet">
        `}</SyntaxHighlighter>
      </div>
    )
  }