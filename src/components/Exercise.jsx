import { useState } from "react";

const Exercies = () => {
    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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