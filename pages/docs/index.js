import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from "next/head";
export default function Docs() {
    return (
      <>
      <Head>
        <title>Olive Ui | Getting Started</title>
      </Head>
      <div className="container">
        <h1>Getting Started:</h1>
        <p>To get started with Olive ui we need to link it's css inside head of your html file.</p>
        <h3>CSS:</h3>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
  inside html file
  <link href="https://cdn.jsdelivr.net/gh/gkanishk/oliveui@dev/public/main.css" rel="stylesheet">
        `}</SyntaxHighlighter>

<SyntaxHighlighter language="css" style={materialLight}>
        {`
  inside css file
  @import url("https://cdn.jsdelivr.net/gh/gkanishk/oliveui@dev/public/main.css");
        `}</SyntaxHighlighter>
      </div>
      </>
    )
  }