import { useState } from "react";
import throttle from "lodash.throttle";
import axios from "axios";

const DownloadProgress = () => {
    const [progress, setProgress] = useState(0);
    
    const updateProgress = throttle((value) => {
        setProgress(value);
    }, 500, { trailing: true, leading: true });

    const handleDownloadCleanup = (url, a) => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener('click', handleDownloadCleanup);
        }, 150);
    };

    const handleDownload = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-souvenirpixels-3774243.jpg&fm=jpg',
                responseType: 'blob',
                onDownloadProgress: (event) => {
                    const percentCompleted = Math.trunc((event.loaded / event.total) * 100);
                    updateProgress(percentCompleted);
                },
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            const url = URL.createObjectURL(response.data);
            const a = document.createElement('a');
            a.download = 'example.jpeg';
            a.href = url;
            a.click();

            a.addEventListener('click', () => handleDownloadCleanup(url, a), false);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div style={{ background: '#c0c0c0', width: '200px', height: '150px' }}>
                <img style={{ width: '100%', height: '100%' }} src="https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-souvenirpixels-3774243.jpg&fm=jpg" alt="elephants" />
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
                <button className="btn btn-secondary" onClick={handleDownload}>Download</button>
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
