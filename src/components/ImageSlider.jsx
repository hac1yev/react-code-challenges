import { useEffect, useState } from 'react';

const Images = [
    "https://picsum.photos/id/10/300/100",
    "https://picsum.photos/id/20/300/100",
    "https://picsum.photos/id/30/300/100",
    "https://picsum.photos/id/40/300/100",
    "https://picsum.photos/id/50/300/100",
    "https://picsum.photos/id/60/300/100",
    "https://picsum.photos/id/70/300/100",
    "https://picsum.photos/id/80/300/100",
    "https://picsum.photos/id/90/300/100",
    "https://picsum.photos/id/100/300/100",
];

const ImageSlider = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handlePrev = () => {
        setImgIndex(prev => (prev > 0 ? prev - 1 : Images.length - 1));
    };

    const handleNext = () => {
        setImgIndex(prev => (prev < Images.length - 1 ? prev + 1 : 0));
    };

    const handleSlide = (action) => {
        if (action === "play" && !intervalId) {
            const id = setInterval(() => {
                setImgIndex(prev => (prev < Images.length - 1 ? prev + 1 : 0));
            }, 1000);
            setIntervalId(id);
        } else if (action === "stop" && intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <>
            <img className='my-4' src={Images[imgIndex]} alt="slide" />
            <div className='d-flex gap-1'>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={() => handleSlide("play")}>Play</button>
                <button onClick={() => handleSlide("stop")}>Stop</button>
            </div>
        </>
    );
};

export default ImageSlider;
