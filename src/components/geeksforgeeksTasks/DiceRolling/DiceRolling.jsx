import { useState } from "react";

const DiceRolling = () => {
    const [state,setState] = useState([1,1])

    const handleButton = () => {
        const newDiceValues = [
            Math.floor(Math.random() * 6) + 1, 
            Math.floor(Math.random() * 6) + 1  
        ];
        setState(newDiceValues);
    };    

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                {state.map((item,index) => (
                    <span key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'red', width: '50px', height: '50px' }}>
                        {item}
                    </span>
                ))}
            </div>
            <button type="button" onClick={handleButton}>Submit</button>
        </div>
    );
};

export default DiceRolling;