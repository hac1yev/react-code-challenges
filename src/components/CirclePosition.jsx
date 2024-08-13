import { useState } from "react";
import uniqid from 'uniqid';

const CirclePosition = () => {
    const [circles,setCircles] = useState([]); 
    const [deletedCircles,setDeletedCircles] = useState([]);

    const handleAddCircle = (e) => {
        const X = e.clientX;
        const Y = e.clientY;
        setCircles((prev) => [...prev, { id: uniqid(), x: X, y: Y }]);
    };    

    const handleBack = (e) => {
        e.stopPropagation();
        if(circles.length > 0) {
            const lastCircle = circles.at(-1);
            setDeletedCircles((prev) => [...prev, lastCircle]);
            const removedCircles = circles.toSpliced(circles.length - 1, 1);
            setCircles(removedCircles); 
        }
    };            

    const handleForward = (e) => {
        e.stopPropagation();
        if(deletedCircles.length > 0) {
            const lastCircle = deletedCircles.at(-1);
            setCircles(prev => [...prev, lastCircle]);
            const removedCircles = deletedCircles.toSpliced(deletedCircles.length - 1, 1);
            setDeletedCircles(removedCircles);
        }
    }

    return (
        <div 
            style={{ width: '100%', height: '100vh', position: 'relative' }}
            onClick={handleAddCircle}
        >
            <button onClick={handleBack}>BACK</button>
            <button onClick={handleForward}>FORWARD</button>
            {circles.map((circle) => (
                <span key={circle.id} style={{ position: 'absolute', top: circle.y - 15, left: circle.x - 15 }} className="circle"></span>
            ))}
        </div>
    );
};

export default CirclePosition;