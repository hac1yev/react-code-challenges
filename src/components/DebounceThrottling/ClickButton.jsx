import { useRef } from "react";

const ClickButton = () => {
    const throttleRef = useRef(false);

    const handleClick = () => {
        if (!throttleRef.current) {
            throttleRef.current = true;
            console.log("Hello");
            
            setTimeout(() => {
                throttleRef.current = false;
            }, 1000);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
};

export default ClickButton;