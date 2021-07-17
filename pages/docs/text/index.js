import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from "next/head";
export default function Text() {
    return (
        <>
      <Head>
        <title>Olive Ui | Typography</title>
      </Head>
        <div className="container">
        <h1>
          Typography:
        </h1>
        <h3>Sizes:</h3>
        <p>
            Text can be of different sizes, we have four general sizes available <strong>text-sm</strong>, <strong>text-md</strong>, <strong>text-lg</strong> and <strong>text-xl</strong>
        </p>
        <div className="d-flex border d-col">
            <p className="text-sm">Small size text</p>
            <p className="text-md">Medium size text</p>
            <p className="text-lg">Large size text</p>
            <p className="text-xl">Xtra-Large size text</p>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
            {`
            <p class="text-sm">Small size text</p>
            <p class="text-md">Medium size text</p>
            <p class="text-lg">Large size text</p>
            <p class="text-xl">Xtra-Large size text</p>
            `}
        </SyntaxHighlighter>
        <h3>Font weight:</h3>
        <p>
            Text can be of different weights, we have four general weights available <strong>text-thin</strong>, <strong>text-normal</strong>, <strong>text-bold</strong> and <strong>text-xbold</strong>
        </p>
        <div className="d-flex border d-col">
            <p className="text-thin">Thin weight text</p>
            <p className="text-normal">Normal weight text</p>
            <p className="text-bold">Bold weight text</p>
            <p className="text-xbold">Exra-Bold text</p>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
            {`
            <p class="text-thin">Thin weight text</p>
            <p class="text-normal">Normal weight text</p>
            <p class="text-bold">Bold weight text</p>
            <p class="text-xbold">Exra-Bold text</p>
            `}
        </SyntaxHighlighter>
        </div>
        </>
        )}