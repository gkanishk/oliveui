import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from "next/head";
export default function Card() {
    return (
      <>
      <Head>
        <title>Olive Ui | Card</title>
      </Head>
      <div className="container">
        <h1>Cards</h1>
        <p>
        The <strong>card</strong> component comprises several elements that you can mix and match:
        </p>
        <ul className="padding-sm">
            <li><strong>card-container</strong>: the main container.</li>
            <li><strong>card-head</strong>: head for responsive image.</li>
            <li><strong>card-title</strong>: title for adding description to card.</li>
            <li><strong>card-body</strong>: a multi-purpose container for any other element</li>
        </ul>
        <div className="d-flex border">
          <div className="card-container">
            <div className="card-head">
              <img className="img" width="100%" src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="laptop"/>
            </div>
            <div className="card-title">
              <h4>Title</h4>
              <span className="f-sm col-grey">
                Software
              </span>
            </div>
            <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
          <div className="card-container">
          <div className="card-title">
              <h4>Title</h4>
              <span className="f-sm col-grey">
                Software
              </span>
            </div>
            <div className="card-head">
              <img className="img" width="100%" src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="laptop"/>
            </div>
            <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        <div class="card-container">
        <div class="card-head">
          <img class="img" width="100%" src=".." alt=".."/>
        </div>
        <div class="card-title">
          <h4>Title</h4>
          <span class="f-sm col-grey">
            Software
          </span>
        </div>
        <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </div>
      </div>
      
      <div class="card-container">
      <div class="card-title">
          <h4>Title</h4>
          <span class="f-sm col-grey">
            Software
          </span>
        </div>
        <div class="card-head">
          <img class="img" width="100%" src=".." alt=".."/>
        </div>
        <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </div>
      </div>
        `}</SyntaxHighlighter>
        <h3>
          Card with button:
        </h3>
        <div className="d-flex border">
          <div className="card-container">
            <div className="card-head">
              <img className="img" width="100%" src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="laptop"/>
            </div>
            <div className="card-title">
              <h4>Title</h4>
              <span className="f-sm col-grey">
                Software
              </span>
            </div>
            <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
            <div className="d-flex justify-end">
            <button className="btn btn-primary" varient="danger">Dismiss</button>
            </div>
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        <div class="card-container">
        <div class="card-head">
          <img class="img" width="100%" src=".." alt=".."/>
        </div>
        <div class="card-title">
          <h4>Title</h4>
          <span class="f-sm col-grey">
            Software
          </span>
        </div>
        <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </div>
        <div class="d-flex justify-end">
        <button class="btn btn-primary" varient="danger">Dismiss</button>
        </div>
      </div>
        `}</SyntaxHighlighter>
        <h3>Text only card:</h3>
        <div className="d-flex border">
          <div className="card-container">
            <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        // Text only card
        <div class="card-container">
        <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </div>
        </div>
        `}</SyntaxHighlighter>
      </div>
      </>
    )
  }