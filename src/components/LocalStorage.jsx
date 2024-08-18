import { useState, useEffect } from 'react';

// Custom hook to implement
const useLocalStorage = (key, initialValue) => {
    const [name,setName] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key,name)
    }, [key,name]);

    return [
        name,
        setName
    ];
};

const LocalStorage = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <h1>useLocalStorage Hook Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name in localStorage: {name}</p>
    </div>
  );
};

export default LocalStorage;
