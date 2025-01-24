import { useState, useEffect } from 'react';

// Custom hook to implement
const useDebounce = (value, delay) => {
    const [debouncedValue,setDebuncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
        setDebuncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value,delay])

  return debouncedValue;
};

const Debounce = () => {
const [names,setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    (async function() {
        try {
            const response = await fetch("https://my.api.mockaroo.com/players.json?key=281cec00");
            const data = await response.json();
            const filteredData = data.filter((item) => item.name.includes(""))            
            setNames(filteredData);
        } catch (error) {
            console.log(error);
        }
    })()
  }, [debouncedSearchTerm]);  

  return (
    <div>
      <h1>Debounce Hook Example</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Debounced Term: {debouncedSearchTerm}</p>
      <ul>
        {names.map((name) => (
            <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debounce;