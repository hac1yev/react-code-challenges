import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    const increase = () => setCount((prev) => prev + 1);  

    const decrease = () => setCount((prev) => prev - 1);
    
    const switchSigns = () => setCount((prev) => prev * -1);

    const reset = () => setCount(0);

    return (
        <div>
            <h1 data-testid={"count"}>{count}</h1>
            <div>
                <button onClick={increase}>Increment</button>
                <button onClick={decrease}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>
        </div>
    );
};

export default Counter;