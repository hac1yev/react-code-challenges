import { useEffect, useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0); // Store time in seconds
    const [running, setRunning] = useState(false); // Track if stopwatch is running
    const [currentInterval, setCurrentInterval] = useState(null);

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

            setCurrentInterval(interval);

            return () => {
                clearInterval(interval);
            };
        }
    }, [running]);

    const handleStart = () => {
        setRunning(true);
    };

    const handleStop = () => {
        clearInterval(currentInterval);
        setRunning(false);
    };

    const handleReset = () => {
        clearInterval(currentInterval);
        setRunning(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    return (
        <div>
            <button onClick={handleStart} disabled={running}>Start</button>
            <button onClick={handleStop} disabled={!running}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <h2>{formatTime(time)}</h2>
        </div>
    );
};

export default StopWatch;
