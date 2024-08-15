import { useCallback, useMemo, useState } from "react";
import PlayerList from './PlayerList.jsx';
import AddPlayer from "./AddPlayer.jsx";
import Header from "./Header.jsx";
import SearchPlayer from "./SearchPlayer.jsx";

const FilterSortSearch = () => {
    const [players,setPlayers] = useState([]);
    const [count,setCount] = useState(0);
    const [addText,setAddText] = useState("");
    const [searchText,setSearchText] = useState("");

    console.log("FILTER SORT");

    const handleAdd = useCallback((e) => {
        e.preventDefault();        

        setPlayers((prev) => {
            return [
                ...prev,
                addText
            ]
        });
        setAddText("");  
    }, [addText]);    

    const handleChange = useCallback((e) => {
        setAddText(e.target.value);
    }, []);    

    const handleSearch = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const filteredPlayers = useMemo(() => {
        return players.filter((player) => player.toLowerCase().includes(searchText.toLowerCase()));
    }, [players,searchText]);

    return (
        <div>
            <Header />
            <button onClick={() => setCount(prev => prev + 1)}>Increase count</button>
            <h3>{count}</h3>
            <hr />
            <SearchPlayer handleSearch={handleSearch} />
            <AddPlayer handleAdd={handleAdd} handleChange={handleChange} addText={addText} />
            <PlayerList players={filteredPlayers} />
        </div>
    );
};

export default FilterSortSearch;