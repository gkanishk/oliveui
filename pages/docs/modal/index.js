import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Modal() {
    const [showModal, settShowModal] = useState(false);
    return (
        <div className="container">
        <h1>
          Modal
        </h1>
        <p>
        A modal is a dialog box/popup window that is displayed on top of the current page.
        </p>
        <div className="border d-flex">
            <div className="modal-container" style={{position:"relative",left:"8%"}}>
                <div className="justify-between modal-header d-flex">
                    <h2>
                        Title
                    </h2>
                    <span className="float-btn">
                    &#10005;
                    </span>
                </div>
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
                <div className="justify-end d-flex">
                    <button className="btn btn-primary" varient="danger">Close</button>
                </div>
            </div>
            {showModal&&<div className="modal-container">
                <div className="justify-between modal-header d-flex">
                    <h2>
                        Title
                    </h2>
                    <span onClick={()=>settShowModal(false)} className="float-btn">
                    &#10005;
                    </span>
                </div>
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
                <div className="justify-end d-flex">
                    <button className="btn btn-outline" varient="blue" onClick={()=>settShowModal(false)}>Cancel</button>
                    <button className="btn btn-primary" varient="blue" onClick={()=>settShowModal(false)}>Done</button>
                </div>
            </div>}
        </div>
        <div className="justify-center border d-flex" style={{marginTop: "1rem"}}>
            <button className="btn btn-primary" onClick={()=>settShowModal(true)}>Show Modal</button>
        </div>
        <SyntaxHighlighter language="html" style={materialLight}>
            {`
<div class="modal-container" id="olive-modal">
    <div class="justify-between modal-header d-flex">
        <h2>
            Title
        </h2>
        <span onclick="closeModal()" class="float-btn">
        &#10005;
        </span>
    </div>
    <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    </div>
    <div class="justify-end d-flex">
        <button class="btn btn-outline" varient="blue" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" varient="blue" onclick="actionDone()">Done</button>
    </div>
</div>`}
        </SyntaxHighlighter>
        <h3>
            States:
        </h3>
        <SyntaxHighlighter language="javascript" style={materialLight}>
            {`
const showModal = () => {
    document.getElementById("olive-modal").style.display = "block";
}

const closeModal = () => {
    document.getElementById("olive-modal").style.display = "none";
}
            `}
        </SyntaxHighlighter>
        </div>
    )
}