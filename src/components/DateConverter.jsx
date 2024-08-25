import { useRef, useState } from "react";

const DateCoverter = () => {
    const [daysDifference,setDaysDifference] = useState(0);
    const date1Ref = useRef();
    const date2Ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const date1 = new Date(date1Ref.current.value);
        const date2 = new Date(date2Ref.current.value);
        const millisecond = Math.abs(date2.getTime() - date1.getTime());
        setDaysDifference(millisecond / 1000 / 60 / 60 / 24);
    }; 

    return (
        <>
            <h2>Days Between Two Dates</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" ref={date1Ref} placeholder="Enter first date:" />
                <input type="date" ref={date2Ref} placeholder="Enter second date:" />
                <button>Calculate</button>
            </form>
            <h5>{daysDifference} days</h5>
        </>
    );
};

export default DateCoverter;