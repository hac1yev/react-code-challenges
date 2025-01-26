import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetAllCoins = (WrappedComponent) => {
    const HOC = (props) => {
        const [coins,setCoins] = useState([]);
        const [page,setPage] = useState(1);
        const navigate = useNavigate();

        useEffect(() => {
            (async function() {
                try {
                    const response = await axios.get(
                        `https://coinranking1.p.rapidapi.com/coins?limit=${10}&offset=${(page - 1) * 10}`, 
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
            })()
        }, [page]);

        useEffect(() => {        
            navigate(`?page=${page}`);
        }, [page,navigate]);

    
        const handlePrev = () => {
            if(page === 1) return;

            setPage((prev) => prev - 1);   
        };  

        const handleNext = () => {
            setPage((prev) => prev + 1);  
        };

        return <WrappedComponent {...props} handleNext={handleNext} handlePrev={handlePrev} coins={coins} />
    }

    return HOC;
};

export default GetAllCoins;