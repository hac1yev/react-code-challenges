import { useEffect, useState } from 'react';

const NumberGuesser = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const randomNumber = localStorage.getItem("randomNumber");
    
    if(parseInt(guess) > parseInt(randomNumber)) {
        setMessage("Too high!");
    }else if(parseInt(guess) < parseInt(randomNumber)) {
        setMessage("Too low!");
    }else if(parseInt(guess) === parseInt(randomNumber)){
        setMessage("Correct!");
    }
  };  

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    localStorage.setItem("randomNumber", randomNumber);
  }, []);

  return (
    <div>
      <h1>Number Guesser Game</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default NumberGuesser;