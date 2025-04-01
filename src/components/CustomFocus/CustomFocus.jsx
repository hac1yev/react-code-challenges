import { useEffect, useRef, useState } from "react";
import './CustomFocus.css';

const CustomFocus = () => {
    const inputRefs = useRef([]);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        inputRefs.current[index].focus();                
    }, [index]);

    const handlePrev = () => {
        if(index === 0) {
            inputRefs.current[index].focus();  
            return
        }else{
            setIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if(index === 4) {
            inputRefs.current[index].focus();  
            return;
        }else{
            setIndex((prev) => prev + 1);
        }
    };    

    return (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            {[...Array(5)].map((_,i) => (
                <div key={i} style={{ display: 'flex', gap: '5px' }}>
                    <input 
                        type="text" 
                        ref={(el) => inputRefs.current[i] = el}
                        onFocus={() => setIndex(i)} 
                        className={
                            index === i ? `custom-focus-input${i} focus-custom-input` : `custom-focus-input${i}`
                        }
                    />
                </div>
            ))}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={handlePrev}>Focus Prev</button>
                <button onClick={handleNext}>Focus Next</button>
            </div>
        </div>
    );
};

export default CustomFocus;