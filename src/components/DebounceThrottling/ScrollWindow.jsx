import { useEffect } from "react";

const ScrollWindow = () => {
    
    useEffect(() => {    
        let throttle;    
        window.addEventListener('scroll', () => {
            if(!throttle) {
                throttle = true;
                setTimeout(() => {
                    console.log(window.scrollY);
                    throttle = false;
                }, 1000);
            }
        });
    }, []);

    return (
        <div style={{ height: '10000vh' }}>ScrollWindow</div>
   );
};

export default ScrollWindow;