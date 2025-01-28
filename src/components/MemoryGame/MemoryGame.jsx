import { useEffect, useState } from "react";
import Cards from "./Cards";

const MemoryGame = () => {
    const [data,setData] = useState([
        {
            cardId: 'card1', 
            name: "Ilkin",
            isOpen: false
        },
        {
            cardId: 'card2', 
            name: "Muxtar",
            isOpen: false
        },
        {
            cardId: 'card3', 
            name: "Muxtar",
            isOpen: false
        },
        {
            cardId: 'card4', 
            name: "Kenan",
            isOpen: false
        },
        {
            cardId: 'card5', 
            name: "Kenan",
            isOpen: false
        },
        {
            cardId: 'card6', 
            name: "Murad",
            isOpen: false
        },
        {
            cardId: 'card7', 
            name: "Murad",
            isOpen: false
        },
        {
            cardId: 'card8', 
            name: "Elvin",
            isOpen: false
        },
        {
            cardId: 'card9', 
            name: "Elvin",
            isOpen: false
        },
        {
            cardId: 'card10', 
            name: "Fariz",
            isOpen: false
        },
        {
            cardId: 'card11', 
            name: "Fariz",
            isOpen: false
        },
        {
            cardId: 'card12', 
            name: "Ilkin",
            isOpen: false
        },
        {
            cardId: 'card13', 
            name: "Zabil",
            isOpen: false
        },
        {
            cardId: 'card14', 
            name: "Zabil",
            isOpen: false
        },
        {
            cardId: 'card15', 
            name: "Mehemmed",
            isOpen: false
        },
        {
            cardId: 'card16', 
            name: "Mehemmed",
            isOpen: false
        },
    ]);
    const [currentOpenedCards,setCurrentOpenedCards] = useState([]);

    useEffect(() => {
        const mixedData = data.reduce((arr, item) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            arr.splice(randomIndex, 0 ,item);        
            return arr;
        }, []);
    
        setData(mixedData);
    }, []); 

    const handleFlip = (id) => {        
        if(currentOpenedCards.length === 0) {
            const index = data.findIndex((item) => item.cardId === id);
            
            setCurrentOpenedCards([{
                name: data[index].name,
                id: data[index].cardId
            }]);
        }else if(currentOpenedCards.length === 1){
            const index = data.findIndex((item) => item.cardId === id);
            const selectedName = data[index].name;
            setCurrentOpenedCards((prev) => {
                return [
                    ...prev,
                    {
                        name: selectedName,
                        id: data[index].cardId
                    }
                ]
            });

            if((selectedName === currentOpenedCards[0].name) && (data[index].cardId !== currentOpenedCards[0].id)) {
                const updatedData = data.map((card) => {
                    if(card.name === selectedName) {
                        return {
                            ...card,
                            isOpen: true
                        }
                    }

                    return card;
                });

                setTimeout(() => {
                    setData(updatedData);
                }, 1000);
            }

            setTimeout(() => {
                setCurrentOpenedCards([]);
            }, 1000);
        }else{
            return;
        } 
    };                   

    return (
        <>
            <h1>Memory Game</h1>
            <div className="memory-wrapper" style={{ width: '70%' }}>
                {data.filter((item) => item.isOpen === false).map((item) => (
                    <Cards key={item.cardId} handleFlip={handleFlip} currentOpenedCards={currentOpenedCards} name={item.name} cardId={item.cardId} />
                ))}
            </div>
        </>
    );
};

export default MemoryGame;