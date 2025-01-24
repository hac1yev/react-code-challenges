import axios from "axios";
import { useEffect, useState } from "react";

const SearchItem = () => {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    let searchTimeout;

    useEffect(() => {
        (async function() {
            try {
                const response = await axios.get("https://my.api.mockaroo.com/players.json?key=281cec00");
                setPlayers(response.data);
                setFilteredPlayers(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    const handleSearch = (e) => {
        clearTimeout(searchTimeout);

        const searchTerm = e.target.value.toLowerCase();

        searchTimeout = setTimeout(() => {
            const searchResult = players.filter((player) => 
                player.name.toLowerCase().includes(searchTerm)
            );
            setFilteredPlayers(searchResult);
        }, 1000);
    };

    return (
        <div className="column-center" style={{ gap: '10px', margin: '10px 0' }}>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <ol>
                {filteredPlayers.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default SearchItem;