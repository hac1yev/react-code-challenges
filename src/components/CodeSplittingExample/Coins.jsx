import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Coins = () => {
    const [coins,setCoins] = useState([]);

    useEffect(() => {
        (async function() {
            try {
                const response = await axios.get(
                    `https://coinranking1.p.rapidapi.com/coins`, 
                {
                    headers: {
                        'x-rapidapi-key': 'b1b91afd29msh6e573e591a5c790p1baf61jsn47d60d4b1557',
                        'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
                    }
                });
                setCoins(response.data.data.coins)
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);        

    return (
        <>
            <h2 style={{ margin: '10px 0 30px 0' }}>Cryptocurrency Lists</h2>
            <div className="flex-center" style={{ flexWrap: 'wrap', gap: '15px' }}>
                {coins.map((coin) => (
                    <div 
                        key={coin.uuid} 
                        className="flex-between" 
                        style={{ background: '#fff', width: '250px', height: '80px', padding: '0 10px', gap: '10px' }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            flexShrink: 0,
                        }}>
                            <img src={coin.iconUrl} style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                        <span style={{ color: '#000' }}>{coin.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Coins;