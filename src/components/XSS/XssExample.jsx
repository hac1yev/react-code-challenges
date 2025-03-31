import { useRef, useState } from "react";
import DOMPurify from "dompurify"; 

const XssExample = () => {
    const [text,setText] = useState("");
    const textRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(DOMPurify.sanitize(textRef.current.value));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textRef} />
                <button>Submit</button>
            </form>
            <h2 dangerouslySetInnerHTML={{ __html: text }}></h2>
            <h2>{text}</h2>
        </>
    );
};

export default XssExample;