import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

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
            className="fixed inset-0 z-10 bg-white/30 flex h-full w-full flex-col pl-10 items-center-safe justify-center"
            onClick={() => {
                if (isZoomed) {
                    setIsZoomed(false);
                } else {
                    setShowImage(false);
                }
            }}
        >
            <div
                className="border-3 mt-25 border-black shadow-[12px_12px_0px_#000000] overflow-hidden transition-all ease-in-out duration-300 transform -translate-x-6 -translate-y-6 bg-blue-900 w-fit h-fit p-2 rounded-2xl text-right"
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-lg text-white border-3 bg-gray-400 cursor-pointer p-2 mb-2 rounded-md border-black shadow-[3px_3px_0px_#000000] font-extrabold transition-all ease-in-out duration-300 hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000000] hover:bg-gray-800 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                        onClick={() => setShowImage(false)}
                    />
                </div>
                <div className="content w-full h-full">
                    <img
                        src={src}
                        alt="Zoomable"
                        onClick={handleImageClick}
                        className="h-110 w-90 rounded-2xl cursor-zoom-in transition-transform duration-300 ease-in-out"
                        style={{
                            transform: isZoomed ? 'scale(3)' : 'scale(1)',
                            transformOrigin: transformOrigin,
                            cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                        }}
                    />
                    <div className="text-lg text-white text-center p-1 mt-1">
                        Medium Used: {desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Image;
