import { useEffect, useState } from "react";

const RockPaperScissors = () => {
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        const choices = ["Rock", "Paper", "Scissors"];
        setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);        
    }, [result]);

    const handleChoice = (choice) => {
        switch(choice) {
            case "Rock":
                switch(computerChoice) {
                    case "Rock":
                        setResult("DRAW");
                        return;
                    case "Paper":
                        setResult("LOSE");
                        return;
                    case "Scissors":
                        setResult("WIN");
                        return;
                    default:
                        return;
                }
            case "Paper": 
                switch(computerChoice) {
                    case "Rock":
                        setResult("WIN");
                        return;
                    case "Paper":
                        setResult("DRAW");
                        return;
                    case "Scissors":
                        setResult("LOSE");
                        return;
                    default:
                        return;
                }
            case "Scissors": 
                switch(computerChoice) {
                    case "Rock":
                        setResult("LOSE");
                        return;
                    case "Paper":
                        setResult("WIN");
                        return;
                    case "Scissors":
                        setResult("DRAW");
                        return;
                    default:
                        return;
                }
            default:
                return;
        }        
    };

    const resetGame = () => {
        setResult("");
        setComputerChoice("");
    };

    return (
        <div className="d-flex flex-column align-items-center gap-2 mt-4">
            <h2>Rock Paper Scissors Game</h2>
            <div className="d-flex gap-1">
                <button onClick={() => handleChoice("Rock")} disabled={result}>Rock</button>
                <button onClick={() => handleChoice("Paper")} disabled={result}>Paper</button>
                <button onClick={() => handleChoice("Scissors")} disabled={result}>Scissors</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={resetGame} disabled={!result}>Play again</button>
            </div>
            <h4>Computer Choice: {computerChoice}. <br/> {result && `Result: ${result}`}</h4>
        </div>
    );
};

export default RockPaperScissors;
