
const ClickButton = () => {
    let throttle;

    const handleClick = () => {
        if(!throttle) {
            throttle = true;
            setTimeout(() => {
                console.log("Hello");
                throttle = false;
            }, 1000);
        }
    };    

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
};

export default ClickButton;