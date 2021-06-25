import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Flex() {
    return (
        <div className="container">
        <h1>
          Flex
        </h1>
        <p>
        Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
        </p>
        <h3>
            Flex properties:
        </h3>
        <ul>
            <li>
                dflex: Used fordisplay flex default direction row.
            </li>
            <li>
                d-col: Used for flex direction column
            </li>
            <li>
            justify-center: Used for justifing content center.
            </li>
            <li>
            justify-between: Used for justifing content space-between.
            </li>
            <li>
            justify-end: Used for justifing content end.
            </li>
            <li>
                items-center: Used for aligning items center.
            </li>
            <li>
                items-start: Used for aligning items flex-start.
            </li>
            <li>
                items-end: Used for aligning items flex-end.
            </li>
        </ul>
        </div>)
    }