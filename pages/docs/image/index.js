import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Head from "next/head";
export default function Image() {
    return (
      <>
      <Head>
        <title>Olive Ui | Image</title>
      </Head>
      <div className="container">
        <h1>
          Images
        </h1>
        <p>
        The Image component is used to display images.
        </p>
        <h3>Responsive Image</h3>
        <p>
          For responsive image specify the <strong>width</strong> and give that a class <strong>img</strong>.
        </p>
        <div className="d-flex border">
          <img className="img" width="150" src="https://i.pravatar.cc/150?img=2" alt="human"/>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        <img class="img" width="150" 
        src="https://i.pravatar.cc/150?img=2" alt="human"/>
        `}</SyntaxHighlighter>
        <h3>
          Sizes:
        </h3>
        <p>
          You can use three different predefinned sizes for images just specify <strong>"image-size"</strong> as:
        </p>
        <ul className="padding-sm">
            <li>sm</li>
            <li>lg</li>
            <li>xlg</li>
        </ul>
        <div className="d-flex border justify-center">
        <img className="img margin-sm" image-size="sm" src="https://i.pravatar.cc/150?img=2" alt="human"/>
        <img className="img margin-sm" image-size="lg" src="https://i.pravatar.cc/300?img=4" alt="human"/>
        <img className="img margin-sm" image-size="xlg" src="https://i.pravatar.cc/500?img=5" alt="human"/>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        //Small image
        <img class="img" image-size="sm" 
        src="https://i.pravatar.cc/150?img=2" alt="human"/>
        //Large Image
        <img class="img" image-size="lg" 
        src="https://i.pravatar.cc/300?img=4" alt="human"/>
        //Extra large Image
        <img class="img" image-size="xlg" 
        src="https://i.pravatar.cc/500?img=5" alt="human"/>
        `}</SyntaxHighlighter>
        <h3>
          Round Images
        </h3>
        <div className="d-flex border justify-center">
        <img className="img-round" image-size="sm" src="https://i.pravatar.cc/150?img=2" alt="human"/>
        <img className="img-round" image-size="lg" src="https://i.pravatar.cc/300?img=4" alt="human"/>
        <img className="img-round" image-size="xlg" src="https://i.pravatar.cc/500?img=5" alt="human"/>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        //Small round image
        <img class="img-round" image-size="sm" 
        src="https://i.pravatar.cc/150?img=2" alt="human"/>
        //Large round image
        <img class="img-round" image-size="lg" 
        src="https://i.pravatar.cc/300?img=4" alt="human"/>
        //Extra large round image
        <img class="img-round" image-size="xlg" 
        src="https://i.pravatar.cc/500?img=5" alt="human"/>
        `}</SyntaxHighlighter>
        <h3>
          Custom Round image:
        </h3>
        <p>
          Providing our own custom size to image, but <strong>Note:</strong> width and height should be equal.
        </p>
        <div className="d-flex border justify-center">
        <img className="img-round" width="50" height="50" src="https://i.pravatar.cc/150?img=2" alt="human"/>
        <img className="img-round" width="100" height="100" src="https://i.pravatar.cc/150?img=2" alt="human"/>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
        {`
        // Example
        <img class="img-round" width="50" height="50" 
        src="https://i.pravatar.cc/150?img=2" alt="human"/>
        <img class="img-round" width="100" height="100" 
        src="https://i.pravatar.cc/150?img=2" alt="human"/>
        `}</SyntaxHighlighter>
      </div>
      </>
    )
  }