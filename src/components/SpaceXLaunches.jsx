import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SpaceXLaunches = () => {
    const [launches,setLaunchhes] = useState([]);
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        (async function() {
            try {
                const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=10&offset=${page * 10 - 10}`);
                const data = await response.json();
                setLaunchhes(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [page,pathname]);

    useEffect(() => {
        navigate(`${pathname}?page=${page}`)
    }, [navigate,page,pathname]);

    const handleReduce = () => {
        if(page === 1) {
            return;
        }else{
            setPage((prev) => prev - 1);
        }
    };

    if(launches.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }}>
                Loading...
            </div>
        )
    }

    return (
        <ul>
            {launches.map((launche) => (
                <li key={launche.flight_number}>{launche.mission_name}</li>
            ))}
            <button onClick={handleReduce}>Prev</button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </ul>
    );
};

export default SpaceXLaunches;