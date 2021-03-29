import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from 'next/head'
export default function Avatar() {
  return (
    <>
      <Head>
        <title>Avatar</title>
      </Head>
    <div className="container">
      <h1>Avatar</h1>
      <p>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </p>
      <div className="d-flex border">
        <span className="avatar">
          <img className="sm" src="https://i.pravatar.cc/150?img=6" />
        </span>
        <span className="avatar">
          <img className="md" src="https://i.pravatar.cc/150?img=13" />
        </span>
        <span className="avatar">
          <img className="lg" src="https://i.pravatar.cc/300?img=37" />
        </span>
      </div>
      <p>
      Add the avatar class to <strong>img</strong> element. There are 3 additional sizes available, including avatar lg(200px), avatar md(100px), and avatar sm(50px).
      </p>
      <SyntaxHighlighter language="html" style={materialLight}>
        {`
      <span class="avatar">
      <img class="sm" src="https://i.pravatar.cc/150?img=6" />
      </span>
      <span class="avatar">
      <img class="md" src="https://i.pravatar.cc/150?img=13" />
      </span>
      <span class="avatar">
      <img class="lg" src="https://i.pravatar.cc/300?img=37" />
      </span>
      `}
        </SyntaxHighlighter>
    </div>
    </>
  );
}
