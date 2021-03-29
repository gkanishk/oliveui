import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Buttons() {
    return (
      <div className="container">
        <h1>Button</h1>
        <p>
        The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
        </p>
        <h3>
          Basic Buttons
        </h3>
        <p>
          There are primarily two basic types of buttons, <strong>primary</strong> and <strong>outline</strong> as follows:
        </p>
        <div className="d-flex border">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-outline">Outline</button>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-outline">Outline</button>
        `}</SyntaxHighlighter>
        <h3>
          Colored Buttons:
        </h3>
        <p>We have brought two more varients apart from primary one, for that you need to add <strong>varient</strong> attribute to your buttom tag specifing <strong>"danger"</strong> or <strong>"blue"</strong> as varient string. This can be combined with outline property also.</p>
        <div className="d-flex border">
        <button className="btn btn-primary" varient="danger">Danger</button>
        <button className="btn btn-primary" varient="blue">Blue</button>
        <button className="btn btn-outline" varient="danger">Danger</button>
        <button className="btn btn-outline" varient="blue">Blue</button>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
    <button class="btn btn-primary" varient="danger">Danger</button>
    <button class="btn btn-primary" varient="blue">Blue</button>
    <button class="btn btn-outline" varient="danger">Danger</button>
    <button class="btn btn-outline" varient="blue">Blue</button>
        `}</SyntaxHighlighter>
      </div>
    )
  }