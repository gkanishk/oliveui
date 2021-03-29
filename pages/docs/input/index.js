import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Input() {
    return (
      <div className="container">
        <h1>
          Input
        </h1>
        <p>
        The Input component are used to get user input in a text field.
        </p>
        <div className="d-flex border">
          <div className="input-container">
          <label for="name" className="label">Name:</label>
          <input type="text" className="input-area" name="name" placeholder="Enter Name"/>
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        <div className="input-container">
        <label for="name" className="label">Name:</label>
        <input type="text" className="input-area" name="name" 
        placeholder="Enter Name"/>
        </div>
        // We can use individual input as:
        <input type="text" className="input-area" name="name" 
        placeholder="Enter Name"/>
        `}</SyntaxHighlighter>
        <h3 id="form-validation">
          Form validation styles
        </h3>
        <p>

        </p>
        <div className="d-flex border">
          <div className="input-container">
            <span>
              Error:
            </span>
          <input type="password" className="input-area has-error" name="password" placeholder="Password"/>
            <span>
              Success:
            </span>
          <input type="text" className="input-area is-success" name="name" placeholder="username"/>
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
      // Error
      <input type="password" class="input-area has-error" 
      name="password" placeholder="Password"/>
      // Success
      <input type="text" class="input-area is-success" 
      name="name" placeholder="username"/>
        `}</SyntaxHighlighter>
      </div>
    )
  }