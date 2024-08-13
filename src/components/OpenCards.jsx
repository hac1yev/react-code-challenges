import { useState } from "react";

const OpenCards = () => {
    const [num,setNum] = useState(0);
    const [counts,setCounts] = useState([]);
    const [check,setCheck] = useState([]);

    const handleChange = (e) => {
        setNum(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(num%2 !== 0) {
            alert("You have to input plural nums!");
            return;
        }else{
            if(num < 0 || num > 20) {
                alert("Number have to be between 0 and 6!");
            }else{
                const doubleArr1 = Array.from({ length: num / 2 }, (v,i) => i + 1);
                const arr = doubleArr1.concat(doubleArr1);
                const resultArr = [];

                arr.forEach((item) => {
                    const randomIndex = Math.floor(Math.random() * arr.length);
                    
                    resultArr.splice(randomIndex, 0, item);
                });
                
                setCounts(resultArr);
            }
        }
    }; 

    const handleClick = (count, index) => {
        if(check.length === 0) {
            document.getElementById(`${index}`).style.color = "#000";
            setCheck([{ id: index, count }]);

        }else if(check.length === 1) {
            document.getElementById(`${index}`).style.color = "#000";

            if(count === check[0].count) {
                setCheck(prev => [...prev, { id: index, count }]);
                setTimeout(() => {
                    setCounts(prev => {
                        return prev.filter(item => item !== count)
                    });
                    
                    const openingCards = document.getElementsByClassName("opening-cards");
                    for (let i = 0; i < openingCards.length; i++) {
                        openingCards[i].style.color = "#fff";
                    }
                    
                    setCheck([]);
                }, 2000);
            }else{
                setCheck(prev => [...prev, { id: index, count }]);
                setTimeout(() => {
                    document.getElementById(`${check[0].id}`).style.color = "#fff";
                    document.getElementById(`${index}`).style.color = "#fff";
                    setCheck([]);
                }, 2000);
            }
        }else if(check.length === 2){
            return;
        }
    };    

    return (
        <>
            {counts.length === 0 && <form className="mt-3" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="number" placeholder="Enter number of cards: " />
                <button>Create</button>
            </form>}
            <div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
                {counts.map((count, index) => (
                    <div key={index} id={index} onClick={() => handleClick(count, index)} className="opening-cards">
                        {count}
                    </div>
                ))}
            </div>
        </>
    );
};

export default OpenCards;