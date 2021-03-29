import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Badge() {
    return (
      <div className="container">
        <h1>Badge</h1>
        <p>
        Badges are used to highlight an item's status or count for quick recognition.
        </p>
        <p>
          Add <strong>badge</strong> class name to your text element or <strong>avatar</strong> component specifing <strong>data-badge. </strong>
        </p>
        <p>
        If <strong>data-badge</strong> is empty "", the badge will appear as a dot.
        </p>
        <h4>
          Notification Badge:
        </h4>
      <div className="d-flex border">
        <span className="badge" data-badge="">
          Notification
        </span>
        <span className="badge" data-badge="2">
          Notification
        </span>
        <span className="badge" data-badge="222">
          Notification
        </span>
      </div>
      <SyntaxHighlighter language="html" style={materialLight}>
        {`
      //Notification without count
      <span class="badge" data-badge="">
          Notification
      </span>

      //Notification with count
      <span class="badge" data-badge="2">
          Notification
      </span>
      <span class="badge" data-badge="222">
          Notification
      </span>
      `}
        </SyntaxHighlighter>
        <h3>
          Avatar with Badge:
        </h3>
        <div className="d-flex border">
        <span className="avatar badge" data-badge="">
          <img className="sm" src="https://i.pravatar.cc/150?img=6" />
        </span>
        <span className="avatar badge" data-badge="2">
          <img className="sm" src="https://i.pravatar.cc/150?img=6" />
        </span>
        <span className="avatar badge" data-badge="2">
          <img className="md" src="https://i.pravatar.cc/150?img=13" />
        </span>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
      <span className="avatar badge" data-badge="">
      <img className="sm" src="https://i.pravatar.cc/150?img=6" />
      </span>
      <span className="avatar badge" data-badge="2">
        <img className="sm" src="https://i.pravatar.cc/150?img=6" />
      </span>
      <span className="avatar badge" data-badge="2">
        <img className="md" src="https://i.pravatar.cc/150?img=13" />
      </span>
      `}
      </SyntaxHighlighter>
      </div>
    )
  }