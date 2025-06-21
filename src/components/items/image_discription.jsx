import { useState } from 'react';

function Image({ src, desc, setShowImage }) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [transformOrigin, setTransformOrigin] = useState('center center');

    const handleImageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        setTransformOrigin(`${xPercent}% ${yPercent}%`);
        setIsZoomed(!isZoomed);
    };

    return (
        <div
            className="fixed pixel inset-0 z-10 bg-white/30 flex h-full w-full flex-col pl-10 items-center-safe justify-center cursor-pointer"
            onClick={() => {
                if (isZoomed) {
                    setIsZoomed(false);
                } else {
                    setShowImage(false);
                }
            }}
        >
            <div
                className="border-3 mt-15 border-black shadow-[12px_12px_0px_#000000] overflow-hidden transition-all ease-in-out duration-300 transform -translate-x-6 -translate-y-6 bg-blue-900 w-fit h-fit p-2 rounded-2xl text-right"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="content w-full h-full flex-col">
                    <img
                        src={src}
                        alt="Zoomable"
                        onClick={handleImageClick}
                        className="max-w-md h-auto w-full rounded-2xl cursor-zoom-in transition-transform duration-300 ease-in-out"
                        style={{
                            transform: isZoomed ? 'scale(3)' : 'scale(1)',
                            transformOrigin: transformOrigin,
                            cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                        }}
                    />
                    <div className="text-wrap text-white text-center p-2 mt-1">
                        Medium Used:{desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Image;
