import { useRef } from "react";

const ClickButtonDebounce = () => {
    const debounceRef = useRef(null);

    const handleClick = () => {      
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            console.log("Clicked!!!");
        }, 1000);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
};

export default ClickButtonDebounce;