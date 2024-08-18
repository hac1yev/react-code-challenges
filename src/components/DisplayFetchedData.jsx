import { useEffect, useState } from 'react';

// Custom hook to implement
const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    useEffect(() => {
        (async function() {
            setLoading(true);
            try {
                const response = await fetch(url);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        })()
    }, [url]);
  
  return {
    data,
    error,
    loading
  }
};

const DisplayFetchedData = () => {
  const { data, error, loading } = useFetch('https://my.api.mockaroo.com/players.json?key=281cec00');

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default DisplayFetchedData;
