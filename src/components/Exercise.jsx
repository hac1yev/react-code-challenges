import { useState } from "react";

const Exercies = () => {
    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log("re-render");

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Enter first date:" />
                <button>Calculate</button>
            </form>
            <h5>{value}</h5>
        </>
    );
};

export default Exercies;