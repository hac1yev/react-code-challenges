import { useState } from "react";
import throttle from "lodash.throttle";

const DownloadProgress = () => {
    const [progress,setProgress] = useState(0);

    const updateProgress = throttle((value) => {
        setProgress(value);
    }, 500, { leading: true, trailing: true }); 

    const handleProgress = async () => {
        const response = await fetch(
            "https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-souvenirpixels-3774243.jpg&fm=jpg",
            {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            }
        );
        
        if(!response.body) return;        

        const contentLength = response.headers.get("Content-Length");
        let totalLength = contentLength ? parseInt(contentLength, 10) : 0;

        const reader = response.body.getReader();
        
        const chunks = [];
        let recievedLength = 0;
        let isDone = false;

        while(!isDone) {
            const { done,value } = await reader.read();
            isDone = done;
            if(done) break;
            recievedLength += value.length;
            chunks.push(value);
            let step = recievedLength / totalLength * 100;
            updateProgress(Math.trunc(step));
        }
        const blob = new Blob(chunks);
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.download = 'example.jpeg';
        a.href = url;
        a.click();

        function handleOnDownload() {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                a.removeEventListener('click', handleOnDownload);
            }, 150);
        }

        a.addEventListener('click', handleOnDownload, false);
    };    

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div style={{ background: '#c0c0c0', width: '200px',height: '150px' }}>
                <img style={{ width: '100%', height: '100%' }} src="https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-souvenirpixels-3774243.jpg&fm=jpg" alt="elephants" />
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
                <button className="btn btn-secondary" onClick={handleProgress}>Download</button>
                <div 
                    style={{ 
                        position: 'relative',
                        width: '200px', 
                        height: '35px', 
                        background: '#f0f0f0', 
                        color: '#000',
                        textAlign: 'center',
                        borderRadius: '3px'
                    }}
                >
                    <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap' }}>{progress}% Complete</span>
                    <span
                        style={{
                            width: `${progress}%`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            background: 'rgba(0,255,0,0.8)', 
                            transition: 'all 0.2s ease'
                        }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default DownloadProgress;