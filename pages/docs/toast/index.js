import { useState } from "react";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Toast() {
    const [toastClass, setToastClass] = useState("toast");
    return (
        <>
        <Head>
            <title>Olive Ui | Toast</title>
        </Head>
        <div className="container">
            <h1>
                Toast
            </h1>
            <p>Toasts are used to show alert or information to users.</p>
            <p>
            We have brought four varients for toast, for that you need to add class as <strong>toast</strong> along with varient attribute to your toast tag specifing <strong>"success"</strong>, <strong>"danger"</strong> or <strong>"warn"</strong> as varient string. By default if you don't mention any <strong>varient</strong> that picks up the primary version of toast.
            </p>
            <div className="d-flex border d-col">

                <div className="toast visible">
                    Toast message!!
                    <span className="float-btn">
                    &#10005;
                    </span>
                </div>

                <div className="toast visible" varient="success">
                    Success!!
                    <span className="float-btn">
                    &#10005;
                    </span>
                </div>

                <div className="toast visible" varient="warn" >
                    Warning!!
                    <span className="float-btn">
                    &#10005;
                    </span>
                </div>

                <div className="toast visible" varient="danger" >
                    Failed!!
                    <span className="float-btn">
                    &#10005;
                    </span>
                </div>
            </div>
            <div className="justify-center border d-flex" style={{marginTop: "1rem"}}>
            <button className="btn btn-primary" onClick={()=>{
                setToastClass("toast toast-show");
                setTimeout(()=>{
                    setToastClass("toast");
                },3000)
            }}>Show Toast</button>
            </div>
            <p>Define an <strong>"id"</strong> to your toast and configure it's functionality using functions, refer below States section for more details.</p>
            <SyntaxHighlighter language="html" style={materialLight}>
                {`
            <div class="toast" id="toast-unique-id">
                Toast message!!
                <span class="float-btn" onclick="closeToast()">
                &#10005;
                </span>
            </div>

            <div class="toast" varient="success" id="toast-unique-id">
                Success!!
                <span class="float-btn" onclick="closeToast()">
                &#10005;
                </span>
            </div>

            <div class="toast" varient="warn" id="toast-unique-id" >
                Warning!!
                <span class="float-btn" onclick="closeToast()">
                &#10005;
                </span>
            </div>

            <div class="toast" varient="danger" id="toast-unique-id" >
                Failed!!
                <span class="float-btn" onclick="closeToast()">
                &#10005;
                </span>
            </div>
                `}
            </SyntaxHighlighter>
            <h3>
            States:
        </h3>
        <SyntaxHighlighter language="javascript" style={materialLight}>
            {`
const showToast = () => {
    const toastElement=document.getElementById("olive-toast");
    toastElement.className = "toast toast-show";
    setTimeout(function(){ toastElement.className = toastElement.className.replace("toast-show", ""); }, 3000);
}

const closeToast = () => {
    const toastElement = document.getElementById("olive-toast");
    toastElement.className = toastElement.className.replace("toast-show", "");
}
            `}
        </SyntaxHighlighter>
            <div className={toastClass}>
                Toast message!!
                    <span className="float-btn" onClick={()=>setToastClass("toast")}>
                    &#10005;
                    </span>
                </div>
        </div>
        </>
        )
    }
